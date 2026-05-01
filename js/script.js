document.addEventListener("DOMContentLoaded", () => {
    const bookingUrl = document.body.dataset.bookingUrl || "";
    const bookingPopupUrl = document.body.dataset.bookingPopupUrl || "";

    const header = document.querySelector(".header");

    if (header) {
        const syncHeaderState = () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
                header.style.padding = "10px 0";
            } else {
                header.style.boxShadow = "none";
                header.style.padding = "12px 0";
            }
        };

        syncHeaderState();
        window.addEventListener("scroll", syncHeaderState);
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function handleAnchorClick(event) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                return;
            }

            event.preventDefault();
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

    const safeTrack = (eventName, payload = {}) => {
        if (typeof window.fbq === "function") {
            window.fbq("trackCustom", eventName, payload);
        }

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
                event: eventName,
                ...payload
            });
        }
    };

    const trackPageContext = () => {
        const pageName = document.body.dataset.page || "unknown";
        safeTrack("DentCoolPageView", { page_name: pageName });
    };

    const trackClicks = () => {
        document.querySelectorAll("[data-track]").forEach((element) => {
            element.addEventListener("click", () => {
                const trackName = element.dataset.track;
                const label = element.dataset.trackLabel || "";
                const href = element.getAttribute("href") || "";

                safeTrack(trackName, {
                    label,
                    href,
                    page_name: document.body.dataset.page || "unknown"
                });

                if (trackName === "whatsapp_click" && typeof window.fbq === "function") {
                    window.fbq("track", "Contact", {
                        content_name: label || "whatsapp"
                    });
                }

                if (trackName === "schedule_click" && typeof window.fbq === "function") {
                    window.fbq("track", "Lead", {
                        content_name: label || "agenda"
                    });
                }
            });
        });
    };

    const applyServiceFromQuery = () => {
        const params = new URLSearchParams(window.location.search);
        const service = params.get("servicio");
        const intro = document.querySelector(".booking-intro");
        const serviceSelect = document.getElementById("service-select");

        if (!service) {
            return;
        }

        const readable = service.replace(/-/g, " ");
        if (intro) {
            intro.textContent = `Servicio consultado: ${readable}. Selecciona fecha, horario y completa tus datos para continuar a la reserva.`;
        }

        if (serviceSelect) {
            serviceSelect.value = service;
        }
    };

    const initializeGoogleCalendarPopup = () => {
        const popupHost = document.getElementById("google-calendar-popup-host");
        if (!popupHost || !bookingPopupUrl) {
            return null;
        }

        const loadPopupButton = () => {
            if (!window.calendar || !window.calendar.schedulingButton || popupHost.dataset.loaded === "true") {
                return;
            }

            window.calendar.schedulingButton.load({
                url: bookingPopupUrl,
                color: "#3F51B5",
                label: "Reservar una cita",
                target: popupHost
            });

            popupHost.dataset.loaded = "true";
        };

        loadPopupButton();

        if (popupHost.dataset.loaded === "true") {
            return popupHost;
        }

        let attempts = 0;
        const poll = window.setInterval(() => {
            attempts += 1;
            loadPopupButton();

            if (popupHost.dataset.loaded === "true" || attempts > 30) {
                window.clearInterval(poll);
            }
        }, 300);

        return popupHost;
    };

    const initializeBookingRequest = () => {
        const form = document.getElementById("booking-request-form");
        if (!form) {
            return;
        }

        const popupHost = initializeGoogleCalendarPopup();
        const serviceSelect = document.getElementById("service-select");
        const shiftSelect = document.getElementById("shift-select");
        const selectedDateField = document.getElementById("selected-date");
        const selectedSlotField = document.getElementById("selected-slot");
        const message = document.getElementById("booking-request-message");
        const emailField = document.getElementById("patient-email");
        const nameField = document.getElementById("patient-name");
        const phoneField = document.getElementById("patient-phone");
        const submitButton = document.getElementById("submit-request-btn");
        const slotsContainer = document.getElementById("time-slots-container");
        const stageService = document.getElementById("stage-service");
        const stageCalendar = document.getElementById("stage-calendar");
        const stageSlots = document.getElementById("stage-slots");
        const stageForm = document.getElementById("booking-request-form");
        const slotMap = {
            manana: ["09:30", "10:30", "11:30", "12:30"],
            tarde: ["13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"]
        };

        const setStageVisual = (element, { active = false, complete = false } = {}) => {
            if (!element) {
                return;
            }

            element.classList.toggle("booking-stage-active", active);
            element.classList.toggle("booking-stage-complete", complete);
        };

        const syncProgressiveStages = () => {
            const serviceComplete = Boolean(serviceSelect && serviceSelect.value);
            const scheduleComplete = Boolean(shiftSelect && shiftSelect.value && selectedDateField && selectedDateField.value && selectedSlotField && selectedSlotField.value);
            const contactComplete = Boolean(nameField && nameField.value.trim() && phoneField && phoneField.value.trim() && emailField && emailField.value.trim());

            setStageVisual(stageService, {
                active: !serviceComplete,
                complete: serviceComplete
            });

            setStageVisual(stageCalendar, {
                active: serviceComplete && !scheduleComplete,
                complete: scheduleComplete
            });

            setStageVisual(stageSlots, {
                active: serviceComplete && !scheduleComplete,
                complete: scheduleComplete
            });

            setStageVisual(stageForm, {
                active: serviceComplete && scheduleComplete,
                complete: contactComplete
            });

            if (submitButton) {
                submitButton.classList.toggle("booking-submit-ready", serviceComplete && scheduleComplete && contactComplete);
            }
        };

        document.querySelectorAll(".cal-date[data-date]").forEach((button) => {
            button.addEventListener("click", () => {
                document.querySelectorAll(".cal-date.active").forEach((activeButton) => {
                    activeButton.classList.remove("active");
                });
                button.classList.add("active");
                if (selectedDateField) {
                    selectedDateField.value = button.dataset.date || "";
                }
                syncProgressiveStages();
            });
        });

        const activateSlot = (button) => {
            const allSlots = Array.from(document.querySelectorAll(".time-slot[data-slot]"));
            allSlots.forEach((activeButton) => {
                activeButton.classList.remove("active");
                const status = activeButton.querySelector(".slot-status");
                if (status) {
                    status.textContent = "Disponible";
                }
            });

            button.classList.add("active");
            const status = button.querySelector(".slot-status");
            if (status) {
                status.textContent = "Preferido";
            }

            if (selectedSlotField) {
                selectedSlotField.value = button.dataset.slot || "";
            }

            syncProgressiveStages();
        };

        const renderSlots = (shiftName) => {
            if (!slotsContainer) {
                return [];
            }

            const slots = slotMap[shiftName] || [];
            slotsContainer.innerHTML = slots.map((slot, index) => `
                <button type="button" class="time-slot${index === 0 ? " active" : ""}" data-slot="${slot}">
                    <div>
                        <span class="slot-time">${slot}</span>
                        <span class="slot-duration">60 minutos</span>
                    </div>
                    <span class="slot-status">${index === 0 ? "Preferido" : "Disponible"}</span>
                </button>
            `).join("");

            return Array.from(slotsContainer.querySelectorAll(".time-slot[data-slot]"));
        };

        const bindSlotClicks = (slotButtons) => {
            slotButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    activateSlot(button);
                });
            });
        };

        const syncShiftSlots = () => {
            const selectedShift = shiftSelect ? shiftSelect.value : "manana";
            const visibleSlots = renderSlots(selectedShift);
            bindSlotClicks(visibleSlots);

            if (visibleSlots.length > 0) {
                activateSlot(visibleSlots[0]);
            } else if (selectedSlotField) {
                selectedSlotField.value = "";
            }
        };

        if (shiftSelect) {
            shiftSelect.addEventListener("change", syncShiftSlots);
            syncShiftSlots();
        }

        [serviceSelect, shiftSelect, nameField, phoneField, emailField].forEach((field) => {
            if (!field) {
                return;
            }

            field.addEventListener("change", syncProgressiveStages);
            field.addEventListener("focus", () => {
                if (field === serviceSelect) {
                    setStageVisual(stageService, { active: true, complete: Boolean(serviceSelect.value) });
                } else if (field === shiftSelect) {
                    setStageVisual(stageCalendar, { active: true, complete: false });
                    setStageVisual(stageSlots, { active: true, complete: false });
                } else {
                    setStageVisual(stageForm, { active: true, complete: false });
                }
            });

            if (field.tagName === "INPUT") {
                field.addEventListener("input", syncProgressiveStages);
            }
        });

        [stageService, stageCalendar, stageSlots, stageForm].forEach((stageElement) => {
            if (!stageElement) {
                return;
            }

            stageElement.addEventListener("click", () => {
                if (stageElement === stageService) {
                    setStageVisual(stageService, { active: true, complete: Boolean(serviceSelect && serviceSelect.value) });
                }
                if (stageElement === stageCalendar || stageElement === stageSlots) {
                    setStageVisual(stageCalendar, { active: true, complete: false });
                    setStageVisual(stageSlots, { active: true, complete: false });
                }
                if (stageElement === stageForm) {
                    setStageVisual(stageForm, { active: true, complete: false });
                }
            });
        });

        syncProgressiveStages();

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const selectedOption = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
            const serviceValue = selectedOption && serviceSelect && serviceSelect.value ? selectedOption.text.trim() : "";
            if (!serviceValue) {
                if (message) {
                    message.textContent = "Selecciona un tratamiento o pack antes de enviar la solicitud.";
                    message.className = "form-message";
                }
                return;
            }

            const name = document.getElementById("patient-name");
            const date = selectedDateField ? selectedDateField.value : "";
            const slot = selectedSlotField ? selectedSlotField.value : "";

            if (message) {
                message.textContent = `Todo listo. Te llevaremos a Google Calendar para confirmar ${serviceValue} el ${date} a las ${slot}.`;
                message.className = "form-message success";
            }

            safeTrack("booking_request_submitted", {
                service_name: serviceValue,
                shift_name: shiftSelect ? shiftSelect.value : "",
                preferred_date: date,
                preferred_time: slot,
                patient_name: name ? name.value.trim() : "",
                page_name: document.body.dataset.page || "agenda"
            });

            if (typeof window.fbq === "function") {
                window.fbq("track", "Lead", {
                    content_name: serviceValue
                });
            }

            const useMobileFallback = window.matchMedia("(max-width: 768px)").matches;
            const popupButton = popupHost ? popupHost.querySelector("button") : null;

            if (!useMobileFallback && popupButton) {
                popupButton.click();
                return;
            }

            window.setTimeout(() => {
                if (bookingUrl) {
                    window.location.href = bookingUrl;
                }
            }, 500);
        });
    };

    trackPageContext();
    trackClicks();
    applyServiceFromQuery();
    initializeBookingRequest();
});
