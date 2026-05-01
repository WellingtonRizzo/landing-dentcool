# PROJECT_STATE.md — Estado actual DentCool

## Última etapa trabajada

Fase 1 del MVP comercial usando la landing existente como base.

## Archivos principales

- `index.html`: landing principal.
- `agenda.html`: flujo de agenda preparado para integración real.
- `css/styles.css`: estilos base y responsive.
- `js/script.js`: interacciones y tracking seguro.

## Decisiones tomadas

- La agenda falsa con horarios mock fue eliminada.
- `agenda.html` quedó preparada para integrar un embed real mediante `data-booking-url`.
- WhatsApp sigue como respaldo comercial y operativo.
- El tracking se implementó de forma defensiva: no falla si `fbq` no existe.
- El copy ahora prioriza evaluación dental y ubicación en Ñuñoa.

## Pendiente próximo

1. Pegar la URL real del embed en `agenda.html`.
2. Reemplazar el número de WhatsApp placeholder por el número real.
3. Instalar Meta Pixel real con ID definitivo.
4. Validar la experiencia en móvil con navegador real.
5. Preparar despliegue final en Vercel.

## Riesgos

- Mientras `data-booking-url` esté vacío, no existe reserva online real.
- El número de WhatsApp actual es placeholder.
- `Lead` en Pixel hoy está ligado a clics de agenda; debe revisarse cuando exista confirmación real.

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
- [ ] URL real de agenda externa configurada.
- [ ] Deploy final en Vercel validado.
- [ ] Google Calendar Appointment Schedule configurado.
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
