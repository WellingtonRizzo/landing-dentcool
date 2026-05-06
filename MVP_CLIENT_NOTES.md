# MVP_CLIENT_NOTES.md

## Objetivo del MVP

Esta landing busca convertir tráfico desde Instagram Ads en:

1. Reservas o solicitudes de reserva.
2. Clics a WhatsApp.
3. Leads medibles con tracking básico.

## Qué ve el paciente

El paciente debe ver una página simple, clara y comercial:

- Tratamientos y packs destacados.
- Ubicación en Ñuñoa.
- Horarios disponibles.
- Botones para agenda y WhatsApp.

La página pública no debe mostrar lenguaje interno como:

- foco comercial
- funnel
- ticket promedio
- lead
- tracking
- MVP
- canal real
- solicitud referencial

## Cómo está pensado el flujo actual

1. El paciente entra desde anuncio o enlace directo.
2. Revisa tratamientos o packs.
3. Pasa a la agenda.
4. Elige tratamiento, fecha y horario de referencia.
5. Deja sus datos en la interfaz de DentCool.
6. Confirma la reserva real en Google Calendar.
7. Recibe confirmación por correo y la cita queda guardada en el calendario del negocio.

## Estado actual

- La landing ya prioriza tratamientos y packs.
- La agenda tiene mejor UI y flujo más claro.
- WhatsApp sigue como canal de apoyo.
- El tracking en JavaScript es defensivo y no rompe si Pixel no existe.
- Ya existe integración real con Google Calendar Appointment Schedule.
- En desktop la reserva abre mediante popup oficial de Google Calendar.
- En móvil la reserva usa fallback al link normal de Google Calendar.
- El tratamiento o pack de interés se está guardando en los detalles del evento.
- La home ya tiene fondo visual suave aprobado.
- La sección de ubicación ya incorpora una referencia visual de Metro Chile España.
- La agenda ya tiene fondo suave aprobado sin afectar la reserva real.

## Pendientes para siguiente etapa

- Validar `Contact` y `Lead` del Pixel real ya instalado.
- Validar mobile en navegador real.
- Revisar si conviene simplificar la preselección local antes del popup.
- Ajustar disponibilidad futura cuando el negocio opere desde la tarde entre semana.

## Seguimiento Pixel 2026-05-06

- La URL correcta publicada es `https://dentcool.vercel.app`
- `PageView` ya se vio en Meta
- `Contact` y `Lead` siguen pendientes de reconfirmación después de reforzar el tracking de salida
- El ajuste actual intenta evitar pérdida de eventos al abrir WhatsApp o Google Calendar

## Criterio de copy

La página del paciente debe sonar:

- profesional
- clara
- cercana
- confiable

Debe evitar:

- explicaciones internas del negocio
- tono técnico
- promesas clínicas absolutas
- lenguaje de marketing demasiado evidente

## Nota sobre agenda real

La agenda actual ya usa Google Calendar como motor de reserva real.

Puntos importantes:

- El popup final de Google no muestra todos los campos personalizados en su resumen.
- El dato `Tratamiento o pack de interés` sí queda guardado en los detalles del evento dentro del calendario de DentCool.
- El recordatorio visible de `30 minutos antes` no parece configurable a `15 minutos` con la cuenta/plan actual.

## Checklist de continuidad

### Hecho

- [x] Landing online en Vercel.
- [x] Agenda real conectada a Google Calendar.
- [x] Popup desktop funcionando.
- [x] Fallback móvil definido.
- [x] WhatsApp comercial configurado con número real.
- [x] Tratamiento de interés guardándose en el evento.
- [x] Home con fondo suave aprobado.
- [x] Ubicación reforzada con referencia visual de Metro Chile España.
- [x] Agenda con fondo suave aprobado.
- [x] Pixel real instalado con ID `2154763995097855`.
- [x] `PageView` activo en home y agenda.
- [x] `Contact` activo en clics de WhatsApp.
- [x] `Lead` activo al pasar a Google Calendar.

### Falta

- [ ] Confirmar `Contact` en Meta Events Manager.
- [ ] Confirmar `Lead` en Meta Events Manager.
- [ ] Prueba completa en celular.
- [ ] Afinar futuros horarios operativos.
