# Plan de Pruebas: UI y Frontend (Landing Page DentCool)

Antes de considerar terminada la Landing Page, se deben ejecutar y aprobar los siguientes casos de prueba (Test Cases) para garantizar calidad profesional y alto nivel de conversión.

## 1. Pruebas de Responsividad (Mobile-First)
- [ ] **TC-01:** La página se visualiza correctamente en pantallas de 320px de ancho (móviles antiguos).
- [ ] **TC-02:** El menú de navegación (Header) se adapta o condensa apropiadamente en pantallas móviles.
- [ ] **TC-03:** Las tarjetas de tratamientos pasan de una disposición en cuadrícula (grid) a una sola columna en pantallas móviles para facilitar la lectura.
- [ ] **TC-04:** Las fuentes son legibles en todos los dispositivos sin necesidad de hacer zoom.

## 2. Pruebas de Diseño y Estética (Stitch UI Check)
- [ ] **TC-05:** Los colores de fondo y texto cumplen con los estándares mínimos de contraste (WCAG AA).
- [ ] **TC-06:** El efecto de "glassmorphism" en las tarjetas se renderiza correctamente sin ocultar el texto.
- [ ] **TC-07:** Las micro-animaciones (hover effects) funcionan suavemente sin causar lentitud en el navegador (60fps).

## 3. Pruebas de Contenido y Precios
- [ ] **TC-08:** Verificar que el precio de "Limpieza" indique exactamente $35.000.
- [ ] **TC-09:** Verificar que el precio de "Limpieza VIP" indique exactamente $45.000.
- [ ] **TC-10:** Verificar que el precio de "Blanqueamiento" indique exactamente $120.000.
- [ ] **TC-11:** Verificar que el precio de "Sellantes" indique exactamente $35.000.
- [ ] **TC-12:** Verificar que el precio de "Restauraciones simples" indique exactamente $35.000.
- [ ] **TC-13:** Verificar que el precio de "Evaluación" indique exactamente $15.000.
- [ ] **TC-14:** Verificar que el "Pack" esté destacado visualmente (upsell).

## 4. Pruebas Funcionales e Integración
- [ ] **TC-15:** El botón principal "CTA" funciona y redirige al formulario o enlace de contacto (ej. WhatsApp).
- [ ] **TC-16:** El código de Pixel (Meta/Google) está correctamente insertado dentro de la etiqueta `<head>` (verificable inspeccionando el código fuente).
