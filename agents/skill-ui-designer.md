# Skill: UI Designer (Inspirado en Stitch AI)

## Propósito
Este agente/skill es responsable de generar y mantener una interfaz de usuario (UI) moderna, atractiva y de alta conversión para la Landing Page de DentCool. Su objetivo es emular las decisiones de diseño de alta calidad que generaría una IA de diseño (como Stitch).

## Directrices de Diseño (Design System)

### 1. Estética y "Vibe"
- **Modernidad:** Uso de bordes redondeados (border-radius: 12px a 24px).
- **Limpieza:** Amplio uso del espacio en blanco (whitespace) para que la página respire.
- **Efecto Premium:** Implementación de *Glassmorphism* en tarjetas (fondos con rgba(255, 255, 255, 0.8) y `backdrop-filter: blur(10px)`).

### 2. Paleta de Colores
- **Fondo Principal:** `#F8FAFC` (Slate 50 - Gris muy claro azulado) o `#FFFFFF`.
- **Textos Principales:** `#1E293B` (Slate 800 - Gris oscuro casi negro).
- **Textos Secundarios:** `#64748B` (Slate 500).
- **Colores de Marca (Extraídos del Logo):**
  - **Cyan DentCool:** `#00d2ff` (Usado para gradientes).
  - **Morado DentCool:** `#3a7bd5` o `#6366F1` (Usado para botones principales y acentos).
- **Botón CTA (Call to Action):** Gradiente lineal de Cyan a Morado. Texto en blanco. Sombra suave para darle profundidad (`box-shadow: 0 4px 14px 0 rgba(58, 123, 213, 0.39)`).

### 3. Tipografía
- **Fuente Base:** `Inter`, `Outfit` o `Poppins` (Google Fonts).
- **Pesos:** Normal (400) para cuerpo de texto, Semibold (600) para subtítulos, Bold (700) u ExtraBold (800) para encabezados principales.

### 4. Accesibilidad y UX
- Contraste adecuado entre texto y fondo.
- Los botones deben ser lo suficientemente grandes para ser tocados en dispositivos móviles (min 44px de altura).
- Indicadores visuales claros al hacer `:hover` o `:focus` (ej. cambio ligero de opacidad o levantamiento con `transform: translateY(-2px)`).

## Instrucciones para Generación de Código
Al escribir el HTML y CSS, el agente debe:
1. Usar clases semánticas (ej. `.hero-section`, `.treatment-card`).
2. Evitar estilos en línea (`style="..."`).
3. Asegurar que CSS sea modular (agrupar variables en `:root`).
4. Implementar diseño "Mobile First" usando Media Queries.
