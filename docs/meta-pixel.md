# Meta Pixel — DentCool

## Estado actual

- Pixel ID activo: `2154763995097855`
- Estado de prueba actual: solo `PageView` activo
- `Contact` y `Lead` quedaron comentados temporalmente en `js/script.js`
- Commit publicado para esta prueba: `5e7f288`

## Dónde está instalado

- [index.html](/Users/usuario/Desktop/landing DentCool/index.html:16)
- [agenda.html](/Users/usuario/Desktop/landing DentCool/agenda.html:13)

## Qué está activo hoy

- Evento estándar `PageView`
- Se dispara al cargar:
  - `https://landing-dentcool.vercel.app`
  - `https://landing-dentcool.vercel.app/agenda.html`

## Qué quedó pausado temporalmente

- `Contact` en clics de WhatsApp
- `Lead` en el paso fuerte hacia Google Calendar

Estos eventos no se borraron. Solo quedaron comentados para validar primero la instalación base del Pixel.

## Dónde reactivar después

- `Contact`: [js/script.js](/Users/usuario/Desktop/landing DentCool/js/script.js:96)
- `Lead`: [js/script.js](/Users/usuario/Desktop/landing DentCool/js/script.js:347)

## Razón de esta prueba

Primero se valida que Meta reciba `PageView` correctamente desde la web publicada. Una vez confirmado en Events Manager o Pixel Helper, se pueden reactivar `Contact` y `Lead`.

## Checklist

- [x] Pixel real instalado en home
- [x] Pixel real instalado en agenda
- [x] `PageView` activo
- [x] `Contact` comentado temporalmente
- [x] `Lead` comentado temporalmente
- [x] Commit hecho
- [x] Push a GitHub hecho
- [x] Deploy enviado a Vercel por push a `main`
- [ ] Validar `PageView` en Meta Events Manager
- [ ] Confirmar si el deploy de Vercel ya refleja esta versión
- [ ] Reactivar `Contact`
- [ ] Reactivar `Lead`
