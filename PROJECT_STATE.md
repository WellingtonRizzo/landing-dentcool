# PROJECT_STATE.md — Estado actual DentCool

## Última etapa trabajada

Fase 1 del MVP comercial usando la landing existente como base, ya desplegada en Vercel y conectada a Google Calendar Appointment Schedule.

## Archivos principales

- `index.html`: landing principal.
- `agenda.html`: flujo de agenda preparado para integración real.
- `css/styles.css`: estilos base y responsive.
- `js/script.js`: interacciones y tracking seguro.

## Decisiones tomadas

- La agenda falsa con horarios mock fue eliminada.
- `agenda.html` ya quedó conectada a Google Calendar con popup oficial en desktop y fallback a link en móvil.
- WhatsApp sigue como respaldo comercial y operativo.
- El tracking se implementó de forma defensiva: no falla si `fbq` no existe.
- El copy ahora prioriza evaluación dental y ubicación en Ñuñoa.
- La evaluación real quedó configurada en Google Calendar con duración de `60 minutos`.
- La reserva final ocurre en Google Calendar, no en el formulario local.
- El tratamiento o pack de interés se guarda en los detalles del evento de Google Calendar mediante campo personalizado.

## Pendiente próximo

1. Reemplazar el número de WhatsApp placeholder por el número real.
2. Instalar Meta Pixel real con ID definitivo.
3. Validar la experiencia en móvil con navegador real.
4. Decidir si la preselección local de tratamiento debe simplificarse más.
5. Ajustar disponibilidad futura en Google Calendar cuando cambie el horario operativo.

## Riesgos

- El número de WhatsApp actual es placeholder.
- `Lead` en Pixel hoy está ligado al flujo local; debe revisarse cuando exista Pixel real.
- El recordatorio visible de `30 minutos antes` en Google Calendar no parece editable con el plan actual desde la UI disponible.
- El popup final de confirmación de Google no muestra el tratamiento elegido, aunque sí queda guardado en los detalles del evento.

## Actualización 2026-04-30

### Cambios realizados

- Se mejoró `index.html` sin rehacer la estructura completa.
- Se corrigió el foco comercial de la landing hacia tratamientos y packs; la evaluación quedó como paso de entrada y no como oferta principal.
- Se reconstruyó `agenda.html` sobre la base existente con flujo visual de solicitud de reserva.
- Se agregaron CTA con tracking para agenda y WhatsApp.
- Se reforzó el funnel con copy más claro, ubicación y pasos de conversión.
- Se dejó tracking defensivo en `js/script.js`.
- Se recuperó en `agenda.html` la capa visual de calendario, horarios y datos del paciente como solicitud de reserva.
- Se eliminó el contenido lateral/instrucciones internas que ensuciaban el diseño de la agenda.
- Se agregó guía UX por etapas en agenda: tratamiento, jornada, horario, datos y envío.
- Los horarios ahora se renderizan dinámicamente según la jornada elegida.

### Archivos modificados

- `index.html`
- `agenda.html`
- `css/styles.css`
- `js/script.js`
- `vercel.json`
- `AGENTS.md`
- `PROJECT_STATE.md`
- `ROADMAP.md`

### Pendientes

- Configurar agenda real si se quiere confirmación automática.
- Completar datos operativos reales.
- Probar eventos en Meta Pixel real.

### Próximo paso recomendado

- Integrar Calendly o Google Appointment Schedule y validar el flujo completo de reserva.

## Actualización 2026-05-01

### Estado general

- La landing quedó publicada en Vercel.
- La agenda real ya funciona con Google Calendar Appointment Schedule.
- El flujo duplicado quedó corregido: en desktop se usa popup oficial de Google y en móvil se mantiene fallback al link.
- Ya se validó una reserva real de prueba.

### URLs activas

- Landing: `https://landing-dentcool.vercel.app`
- Agenda: `https://landing-dentcool.vercel.app/agenda.html`

### Configuración real confirmada

- Cuenta usada para agenda: `dentcoolnunoa@gmail.com`
- Tipo de cita: `Evaluación DentCool`
- Duración: `60 minutos`
- Dirección: `Av. Irarrázaval 2821, Ñuñoa, Santiago de Chile`
- Disponibilidad actual en Google: `lunes a sábado`
- Canal de cierre real: `Google Calendar`

### Qué quedó funcionando

- Vercel conectado al repo `WellingtonRizzo/landing-dentcool`.
- `agenda.html` con popup oficial de Google Calendar en desktop.
- Fallback móvil al link de Google Calendar.
- Campo local `Comentario o necesidad` con corrector ortográfico del navegador.
- Campo personalizado en Google para guardar `Tratamiento o pack de interés`.
- El tratamiento elegido sí aparece en los detalles del evento dentro del calendario de DentCool.

### Qué se comprobó hoy

- El popup de Google abre correctamente en web.
- La reserva se confirma dentro del popup.
- El flujo duplicado `popup + redirección posterior` quedó corregido.
- El resumen final del popup no muestra el tratamiento, pero el evento guardado sí lo conserva.

### Limitaciones actuales confirmadas

- Google no muestra el tratamiento personalizado en el resumen corto final del popup.
- El recordatorio visible de `30 minutos antes` no parece editable desde la cuenta/plan actual.
- Google guarda el tratamiento como texto libre, no como selector bonito tipo dropdown.

### Checklist actualizado

#### Hecho

- [x] Landing desplegada en Vercel.
- [x] Repo conectado a GitHub.
- [x] `agenda.html` conectada a Google Calendar.
- [x] Popup oficial de Google funcionando en desktop.
- [x] Fallback móvil al link de reserva.
- [x] Reserva real validada de punta a punta.
- [x] Dirección real puesta en Google Calendar.
- [x] Cita configurada en `60 minutos`.
- [x] Disponibilidad activa de `lunes a sábado`.
- [x] Campo `Tratamiento o pack de interés` guardándose en el evento.
- [x] Corrector ortográfico activado en `Comentario o necesidad`.

#### Falta

- [ ] Reemplazar WhatsApp placeholder por el número real.
- [ ] Instalar Meta Pixel real.
- [ ] Validar el flujo completo en móvil real.
- [ ] Revisar si conviene simplificar más la preselección local antes del popup.
- [ ] Ajustar horarios futuros cuando el negocio pase a tardes + sábado.

### Nota operativa para retomar

- Si mañana pruebas desde desktop, el flujo correcto es: completar datos locales y reservar desde el botón oficial de Google dentro del bloque final.
- Si pruebas desde móvil, el cierre esperado es mediante link/fallback a Google Calendar.
- Para cambios de disponibilidad, duración o campos de reserva, editar primero Google Calendar y luego alinear la UI local si hace falta.

## Nota de continuidad 2026-04-30

### Qué quedó listo

- Landing principal más enfocada en vender tratamientos y packs.
- Agenda visual más útil y más honesta, sin `alert()` ni falsa confirmación.
- Flujo de agenda guiado por pasos.
- Tracking base defensivo para agenda y WhatsApp.
- Base mínima de deploy en `vercel.json`.

### Qué revisar primero al volver

- `PROJECT_STATE.md`: estado y decisiones.
- `AGENTS.md`: reglas del proyecto.
- `ROADMAP.md`: fases pendientes.
- `index.html`: oferta, hero, tratamientos, packs y CTA.
- `agenda.html`: flujo de solicitud de reserva.
- `css/styles.css`: responsive, layout y estilos de agenda.
- `js/script.js`: tracking e interacción de agenda.

### Skills instalados en entorno local

- `frontend-design`
  - Ruta instalada: `/Users/usuario/.agents/skills/frontend-design`
  - Uso esperado: mejorar UI, jerarquía visual, responsive y acabado frontend.
- `stop-slop`
  - Ruta instalada: `/Users/usuario/.codex/skills/stop-slop`
  - Uso esperado: limpiar copy y quitar texto que suene artificial o genérico.

### Checklist de esta sesión

- [x] Se creó `AGENTS.md`.
- [x] Se creó/actualizó `PROJECT_STATE.md`.
- [x] Se creó/actualizó `ROADMAP.md`.
- [x] Se reorganizó `index.html` sin rehacer toda la landing.
- [x] Se cambió el foco comercial a tratamientos y packs.
- [x] Se limpió el copy clínico para evitar promesas fuertes.
- [x] Se rehízo `agenda.html` como solicitud de reserva y no como reserva falsa.
- [x] Se recuperaron calendario, datos del paciente y horarios.
- [x] Se agregó selección por jornada.
- [x] Los horarios ahora muestran mañana o tarde según elección.
- [x] El rango de tarde quedó hasta `19:00`.
- [x] Se mejoró responsive de la agenda.
- [x] Se agregaron eventos base de tracking en `js/script.js`.
- [x] Se dejó `vercel.json`.
- [x] Se instaló el skill `frontend-design`.
- [x] Se instaló el skill `stop-slop`.
- [x] Se agregó el MCP `valyu` en `~/.codex/config.toml` con API key placeholder.

### Checklist de cuentas / servicios externos

- [ ] WhatsApp real configurado.
- [ ] Meta Pixel real configurado.
- [x] URL real de agenda externa configurada.
- [ ] Deploy final en Vercel validado.
- [x] Google Calendar Appointment Schedule configurado.
- [ ] Calendly configurado.
- [ ] Clerk trabajado en esta sesión.
- [ ] Neon trabajado en esta sesión.

Nota:
- `Clerk`, `Neon` y otras cuentas externas no fueron trabajadas en esta sesión. Se dejan marcadas como no registradas para no crear falsa memoria de avance.

### Cómo pedir contexto al volver

Al reabrir Codex, pedir algo como:

`Lee PROJECT_STATE.md, AGENTS.md y ROADMAP.md. Después revisa index.html, agenda.html, css/styles.css y js/script.js para retomar DentCool.`

Si quieres usar los skills instalados, pedir algo como:

`Lee PROJECT_STATE.md y usa stop-slop para pulir el copy de DentCool.`

o

`Lee PROJECT_STATE.md y usa frontend-design para mejorar la UI de la agenda sin rehacerla.`
