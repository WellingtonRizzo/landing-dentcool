# Meta Pixel — DentCool

## Estado actual

- Pixel ID activo: `2154763995097855`
- Estado actual: `PageView`, `Contact` y `Lead` activos
- `schedule_click` se mantiene como evento custom existente del sitio
- Commit base de instalacion del Pixel: `5e7f288`

## Dónde está instalado

- [index.html](/Users/usuario/Desktop/landing DentCool/index.html:16)
- [agenda.html](/Users/usuario/Desktop/landing DentCool/agenda.html:13)

## Qué está activo hoy

- Evento estándar `PageView`
- Evento estándar `Contact`
- Evento estándar `Lead`
- Se dispara al cargar:
  - `https://landing-dentcool.vercel.app`
  - `https://landing-dentcool.vercel.app/agenda.html`

## Mapa de eventos

- `PageView`: cuando una persona abre la home o la agenda
- `Contact`: cuando una persona hace clic en un botón o enlace de WhatsApp
- `Lead`: cuando una persona avanza al paso de Google Calendar desde la agenda
- `schedule_click`: evento custom existente para medir clic inicial a agenda

## Detalle del evento Lead

- `Lead` quedó solo en el paso fuerte hacia Google Calendar
- ya no se usa `Lead` en el clic inicial hacia agenda
- el servicio elegido viaja en `Lead` como `content_name`

## Estado validado

- `PageView` ya se observó llegando en Meta Events Manager
- ahora corresponde validar `Contact` y `Lead`

## Checklist

- [x] Pixel real instalado en home
- [x] Pixel real instalado en agenda
- [x] `PageView` activo
- [x] `Contact` activo
- [x] `Lead` activo
- [x] Commit hecho
- [x] Push a GitHub hecho
- [x] Deploy enviado a Vercel por push a `main`
- [x] Validar `PageView` en Meta Events Manager
- [ ] Confirmar si el deploy de Vercel ya refleja esta versión
- [ ] Validar `Contact` en Meta Events Manager
- [ ] Validar `Lead` en Meta Events Manager
