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

## Pendientes para siguiente etapa

- Reemplazar el número de WhatsApp placeholder.
- Instalar Pixel real.
- Validar mobile en navegador real.
- Revisar si conviene simplificar la preselección local antes del popup.
- Ajustar disponibilidad futura cuando el negocio opere desde la tarde entre semana.

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
- [x] Tratamiento de interés guardándose en el evento.

### Falta

- [ ] WhatsApp real.
- [ ] Pixel real.
- [ ] Prueba completa en celular.
- [ ] Afinar futuros horarios operativos.
