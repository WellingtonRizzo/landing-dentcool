# PROJECT_STATE.md — Estado actual DentCool

## Última etapa trabajada

Fase 1 del MVP comercial usando la landing existente como base, ya desplegada en Vercel y conectada a Google Calendar Appointment Schedule.

## Versión estable protegida

- Nombre de referencia: `version-faq-estable`
- Commit base protegido: `af0934b`
- Objetivo de esta referencia: conservar la versión donde:
  - la agenda móvil dejó de mostrar código roto en la cabecera
  - el botón nativo de Google Calendar volvió a cargarse en desktop
  - la agenda mantiene FAQ compacta y barra de apoyo por WhatsApp
  - la home mantiene su sección de preguntas frecuentes
- Si una versión futura se daña, esta es la referencia a la que se debe volver antes de seguir iterando.
- Restauración recomendada:
  - revisar primero la tag `version-faq-estable`
  - comparar cambios nuevos contra ese punto antes de mezclar o rehacer Calendar
- Regla operativa:
  - no tocar el flujo de Google Calendar en desktop sin validar primero contra esta versión protegida
  - no volver a poner comentarios dentro de etiquetas HTML como `<body ...>`

## Versión visual publicada hoy

- Commit visual aprobado y publicado: `3697621`
- Estado de esta versión:
  - home con fondo clínico suave aprobado
  - bloque de ubicación mejorado con referencia visual de Metro Chile España
  - agenda con fondo suave aprobado usando `pexels-fondo-31786502.jpg`
  - versión móvil de ubicación ajustada para mostrar la foto debajo del texto de cercanía
  - flujo de Google Calendar mantenido sin cambios funcionales
- Regla de seguridad para esta versión:
  - no reemplazar las imágenes aprobadas sin revisar primero home y agenda en desktop y móvil
  - no mezclar assets de prueba o descartados con la versión publicada

## Archivos principales

- `index.html`: landing principal.
- `agenda.html`: flujo de agenda preparado para integración real.
- `css/styles.css`: estilos base y responsive.
- `js/script.js`: interacciones y tracking seguro.

## Regla de continuidad

- Al cerrar cada jornada de trabajo se debe actualizar este archivo y dejar registro del avance del día.
- Además, se debe registrar en la bitácora personal los desafíos, dudas, problemas detectados, soluciones aplicadas y aprendizajes.

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

1. Validar en Meta que `Contact` y `Lead` ya están entrando desde la versión publicada.
2. Validar la experiencia en móvil con navegador real.
3. Revisar si conviene mantener o refinar el evento custom `schedule_click`.
4. Ajustar disponibilidad futura en Google Calendar cuando cambie el horario operativo.

## Riesgos

- Si Meta clasifica distinto algunos clics o demora en mostrarlos, conviene validar cada evento por separado en pruebas cortas.
- El recordatorio visible de `30 minutos antes` en Google Calendar no parece editable con el plan actual desde la UI disponible.
- El popup final de confirmación de Google no muestra el tratamiento elegido, aunque sí queda guardado en los detalles del evento.

## Actualización 2026-05-06

### Cambios realizados

- Se instaló el Meta Pixel real con ID `2154763995097855`.
- El snippet base del Pixel quedó activo en `index.html` y `agenda.html`.
- Se validó `PageView` en Meta Events Manager.
- Se reactivaron `Contact` y `Lead` en `js/script.js`.
- Se mantuvo `Lead` solo en el paso fuerte hacia Google Calendar.
- El evento custom `schedule_click` se mantuvo separado del `Lead`.
- Se creó documentación dedicada del Pixel en `docs/meta-pixel.md`.
- Se actualizó la documentación operativa para reflejar el estado vigente del Pixel.

### Estado revisado hoy

- Commits publicados hoy:
  - `5e7f288` instalación base del Pixel
  - `224cfcd` documentación y bitácora del Pixel
- Rama publicada: `main`
- Assets sueltos sin trackear siguen fuera del commit y no afectan el deploy

### Pixel documentado

- Pixel ID: `2154763995097855`
- Home: `PageView` activo
- Agenda: `PageView` activo
- `Contact`: activo en clics de WhatsApp
- `Lead`: activo al avanzar a Google Calendar
- `schedule_click`: activo como evento custom de interés inicial
- Documento de referencia: `docs/meta-pixel.md`

### Checklist para retomar

- [x] Instalar Pixel real
- [x] Confirmar `PageView` en Meta Events Manager
- [x] Publicar cambio en GitHub
- [x] Enviar actualización a Vercel mediante push
- [x] Documentar el Pixel y su estado actual
- [x] Reactivar `Contact`
- [x] Reactivar `Lead`
- [ ] Confirmar que Vercel ya sirvió la versión nueva con eventos reactivados
- [ ] Validar `Contact` en Meta Events Manager
- [ ] Validar `Lead` en Meta Events Manager
- [ ] Probar home y agenda en celular real

## Actualización 2026-05-03

### Cambios realizados

- Se reemplazaron todos los links de WhatsApp placeholder por el número real `+56 9 8363 3077`.
- Se actualizó la documentación operativa para reflejar que WhatsApp ya quedó configurado.
- Se eliminó el archivo `.zip` descartado del workspace para mantener limpio el proyecto.
- Se actualizó el nombre visible de marca a `DentCool Consulta Dental` en home y agenda.
- Se agregó un bloque de contacto en el footer con Instagram, Facebook y correo.
- Se dejaron Facebook y correo como links directos, e Instagram como link público confirmado.

### Estado revisado hoy

- `index.html` y `agenda.html` siguen alineados con la versión visual aprobada y recibieron ajustes de branding, WhatsApp y enlaces de contacto.
- `css/styles.css` sí se modificó hoy para ordenar el footer y escalar correctamente los íconos de redes/correo.
- `js/script.js` no se modificó hoy; el tracking defensivo y la lógica de agenda permanecen como estaban en la última base estable.
- `Clerk` y `Neon` siguen sin integración real; solo existen como notas de arquitectura y continuidad.

### Pendiente siguiente

- [ ] Instalar Meta Pixel real en `index.html`.
- [ ] Probar home y agenda en celular real después del deploy final.
- [ ] Decidir si la agenda debe simplificar aún más los datos locales previos a Google Calendar.

## Actualización 2026-05-04

### Cambios realizados

- Se ajustaron los mensajes precargados de WhatsApp para priorizar evaluación dental e información general, sin abrir con packs.
- Se simplificó el bloque superior de `agenda.html` para reducir texto repetido y alinear el copy con el flujo real.
- Se agregó un CTA rápido `Ir directo a Google Calendar` en la agenda.
- Se simplificó visualmente el formulario público de la agenda.
- Se eliminaron del HTML público los campos futuros que no debían verse: fecha preferida, horario preferido y comentario.
- Se compactó la tarjeta derecha de la agenda para evitar espacios vacíos innecesarios.
- Se actualizó en `index.html` el bloque de pasos de reserva para alinearlo con el flujo actual: atención, datos y confirmación en Google Calendar.
- Se ajustó el texto visible de Instagram en el footer a `Instagram: dentcool.ñuñoa`.

### Estado revisado hoy

- `agenda.html` quedó más corta, más clara y más consistente con una reserva que se confirma fuera de la landing.
- `index.html` quedó alineado con el flujo real y ya no promete selección local de horario como si fuera el cierre final.
- `css/styles.css` recibió ajustes de layout para compactar el formulario de la agenda y acompañar el nuevo CTA rápido.
- `js/script.js` no cambió hoy.

### Checklist para retomar mañana

- [ ] Validar en Vercel que la agenda se vea compacta y sin espacios vacíos.
- [ ] Probar desde celular real el CTA `Ir directo a Google Calendar`.
- [ ] Decidir si el formulario debe quedarse con `Nombre`, `Teléfono`, `Correo` o si `Correo` pasa a opcional.
- [ ] Definir arquitectura de eventos para Pixel antes de instalar el ID real.
- [ ] Revisar si conviene mantener el CTA rápido a Google Calendar también en más zonas de la agenda o solo arriba.

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
- La agenda móvil quedó simplificada para mostrar un solo CTA hacia Google Calendar.
- Se agregó una sección FAQ visual al final de `agenda.html`.
- La preselección local de fecha, jornada y horario quedó oculta al público, pero conservada en código para una futura agenda propia.
- Se dejó una versión protegida en git para poder volver a esta base si cambios futuros rompen la agenda o el responsive móvil.

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
- El doble botón hacia Google Calendar en móvil quedó eliminado.
- La agenda pública ya no muestra la preselección local de fecha y horario.
- Campo local `Comentario o necesidad` con corrector ortográfico del navegador.
- Campo personalizado en Google para guardar `Tratamiento o pack de interés`.
- El tratamiento elegido sí aparece en los detalles del evento dentro del calendario de DentCool.
- FAQ visual agregada para aclarar reserva, duración, WhatsApp y evaluación.
- FAQ en home y FAQ compacta en agenda ya forman parte de la versión base protegida.
- Home con fondo clínico suave aprobado y publicado.
- Sección de ubicación reforzada con referencia visual de Metro Chile España.
- Agenda con fondo visual suave aprobado sin alterar el flujo de reserva.

### Qué se comprobó hoy

- El popup de Google abre correctamente en web.
- La reserva se confirma dentro del popup.
- El flujo duplicado `popup + redirección posterior` quedó corregido.
- El resumen final del popup no muestra el tratamiento, pero el evento guardado sí lo conserva.
- La agenda ya no debería mostrar dos CTA iguales a Google Calendar en versión móvil.

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
- [x] Doble CTA de Google Calendar corregido en móvil.
- [x] Preselección local oculta sin borrar el código base para agenda futura.
- [x] Reserva real validada de punta a punta.
- [x] Dirección real puesta en Google Calendar.
- [x] Cita configurada en `60 minutos`.
- [x] Disponibilidad activa de `lunes a sábado`.
- [x] Campo `Tratamiento o pack de interés` guardándose en el evento.
- [x] Corrector ortográfico activado en `Comentario o necesidad`.
- [x] Sección FAQ agregada en la agenda.
- [x] Fondo suave aprobado en la home.
- [x] Fondo suave aprobado en la agenda.
- [x] Referencia visual de Metro Chile España integrada en ubicación.
- [x] Ajuste de ubicación revisado para móvil.
- [x] WhatsApp comercial actualizado a `+56 9 8363 3077`.
- [x] Cambios visuales aprobados publicados en GitHub/Vercel con commit `3697621`.

#### Falta

- [ ] Instalar Meta Pixel real.
- [ ] Validar el flujo completo en móvil real.
- [ ] Decidir cuándo reactivar la preselección local si DentCool agenda directamente desde la página.
- [ ] Ajustar horarios futuros cuando el negocio pase a tardes + sábado.

### Nota operativa para retomar

- Si mañana pruebas desde desktop, el flujo correcto es: completar datos locales y reservar desde el botón oficial de Google dentro del bloque final.
- Si pruebas desde móvil, el cierre esperado es mediante link/fallback a Google Calendar.
- En móvil ya no debería aparecer el botón del popup oficial de Google; solo el CTA fallback.
- La capa local de fecha/horario quedó guardada en código pero no visible al paciente.
- Para cambios de disponibilidad, duración o campos de reserva, editar primero Google Calendar y luego alinear la UI local si hace falta.
- Antes de tocar de nuevo `agenda.html`, `css/styles.css` o `js/script.js` en la zona de reserva, comparar contra `version-faq-estable`.
- Para cambios visuales, comparar también contra el commit publicado `3697621`.

### Checklist de hoy 2026-05-01

#### Hecho hoy

- [x] Se corrigió definitivamente el HTML roto que afectaba móvil en `agenda.html`.
- [x] Se restauró el host limpio del botón oficial de Google Calendar en desktop.
- [x] Se mantuvo fallback móvil a Google Calendar sin romper el flujo estable.
- [x] Se documentó y protegió la referencia `version-faq-estable`.
- [x] Se probaron varias imágenes localmente sin publicarlas hasta aprobación.
- [x] Se aprobó un fondo clínico suave para la home.
- [x] Se aprobó una mejora visual en ubicación usando `metro_chile_espana-520x397.jpg`.
- [x] Se aprobó un fondo suave para la agenda usando `pexels-fondo-31786502.jpg`.
- [x] Se cuidó la versión móvil de ubicación para que la foto quede debajo del texto de cercanía.
- [x] Se hizo push seguro a `main` sin incluir assets descartados.

#### Pendiente siguiente

- [ ] Instalar Meta Pixel real en `index.html`.
- [ ] Probar home y agenda en celular real después del deploy final.
- [ ] Decidir si la agenda debe simplificar aún más los datos locales previos a Google Calendar.
- [ ] Revisar más adelante si conviene otra imagen de fondo, pero sin tocar la versión aprobada mientras esté funcionando.

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

- [x] WhatsApp real configurado.
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
