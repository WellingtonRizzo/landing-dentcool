# Arquitectura de la Landing Page: DentCool

## 1. Visión General
DentCool es una Landing Page moderna y premium para una consulta dental. El objetivo principal es la conversión: captar pacientes interesados en tratamientos específicos y aumentar el ticket promedio ofreciendo "Packs".

## 2. Pila Tecnológica (Tech Stack)
- **Estructura:** HTML5 Semántico.
- **Estilos:** CSS3 Puro (Vanilla CSS). Sin frameworks pesados para garantizar máxima velocidad y personalización.
- **Interactividad:** JavaScript Puro (ES6+) para animaciones de scroll y validación de formularios.
- **Integraciones:** Etiqueta preparada para Pixel (Google Analytics / Meta Pixel).

## 3. Guía de Diseño (Ideación estilo Stitch AI)
- **Paleta de Colores:**
  - Primario: Degradados Cyan (#00d2ff) a Morado (#3a7bd5) basados en el logo.
  - Fondo: Blanco o gris muy claro (#f8f9fa) para dar aspecto limpio y médico.
  - Acentos: Morado brillante para botones de "Call to Action".
- **Tipografía:** `Inter` o `Outfit` (Google Fonts) para un estilo limpio, moderno y legible.
- **Estilo de Componentes (Glassmorphism):** Las tarjetas de tratamientos utilizarán un fondo blanco semitransparente con desenfoque (backdrop-filter: blur) y bordes muy finos para dar un aspecto premium.
- **Micro-animaciones:** Efectos de "hover" (levantamiento de la tarjeta) y transiciones suaves al cargar elementos al hacer scroll.

## 4. Estructura de la Interfaz (UI)
1. **Header:** Logo a la izquierda, botón CTA ("Reservar Cita") a la derecha. Flotante (sticky) al hacer scroll.
2. **Hero Section:** Gran titular persuasivo, subtítulo enfocado en la confianza, y botones de acción principal y secundaria.
3. **Tratamientos (Cards):**
   - Limpieza ($35.000)
   - Limpieza VIP ($45.000)
   - Blanqueamiento ($120.000)
   - Sellantes ($35.000)
   - Restauraciones simples ($35.000)
   - Evaluación ($15.000)
4. **Sección "Pack Premium":** Promoción especial destacada para subir el ticket. Ej: Evaluación + Limpieza VIP + Blanqueamiento.
5. **Formulario de Contacto / Reserva:** Nombre, Teléfono, Tratamiento de Interés.
6. **Footer:** Datos de contacto, logo, redes sociales.

## 5. SEO y Rendimiento
- Uso de etiquetas `<meta>` adecuadas.
- Jerarquía de encabezados (`<h1>`, `<h2>`, `<h3>`).
- Imágenes comprimidas y optimizadas.
- Carga asíncrona de scripts de terceros (Pixel).

## 6. Puntos de integración reales y futuros

### Google Calendar
- La reserva real actual vive en `agenda.html`.
- `data-booking-url`: link real de Google Calendar usado como fallback en móvil.
- `data-booking-popup-url`: URL del popup oficial de Google usada en desktop.
- `js/script.js` decide qué flujo usar según dispositivo.

### Agenda propia futura
- La antigua capa local de fecha, jornada y horario no fue borrada.
- Quedó oculta en `agenda.html` con `data-local-scheduling="disabled"`.
- Para reactivarla, el punto de entrada está en `agenda.html` y la lógica ya existe en `js/script.js`.

### Meta Pixel
- El placeholder del Pixel está en `index.html`.
- El tracking defensivo ya existe en `js/script.js` y usa `fbq` solo si está disponible.
- Falta instalar el ID real y decidir la definición final de `Lead`.

### WhatsApp
- Los links de WhatsApp están en `index.html` y `agenda.html`.
- Hoy usan un número placeholder y deben actualizarse todos juntos cuando exista el número real.

### Clerk
- Hoy no está integrado.
- Si se suma autenticación más adelante, no debería entrar directo en la landing pública.
- El lugar lógico sería un flujo aparte para backoffice, panel o gestión interna de reservas/pacientes.

### Neon
- Hoy no está integrado.
- Si más adelante DentCool guarda reservas, leads o pacientes propios, Neon sería la capa de base de datos.
- En ese escenario convendría agregar backend o funciones serverless; no corresponde meter credenciales o consultas directas en esta landing estática.
