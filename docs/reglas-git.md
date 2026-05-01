# Reglas de Git y Control de Versiones

Para mantener un historial limpio y estructurado en el repositorio de la Landing Page DentCool, seguimos el estándar de **Conventional Commits**.

## Formato del Commit
```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[pie(s) opcional(es)]
```

## Tipos Permitidos
- **feat**: Una nueva característica o sección (ej. nueva sección de tratamientos).
- **fix**: Corrección de un error (ej. arreglar margen en móvil).
- **docs**: Cambios en la documentación (este archivo, README, arquitectura).
- **style**: Cambios que no afectan el significado del código (espacios en blanco, formato, CSS visual).
- **refactor**: Un cambio de código que no corrige un error ni añade una característica.
- **test**: Añadir pruebas faltantes o corregir pruebas existentes.
- **chore**: Actualizar tareas de construcción, configuraciones, etc.

## Ejemplos de Commits
- `feat(ui): añadir sección de pack premium`
- `style(css): actualizar gradiente del botón de reserva`
- `docs(arquitectura): documentar paleta de colores`

## Flujo de Trabajo
1. Trabajar siempre en ramas (`branches`) descriptivas. Ej: `feature/hero-section`, `fix/mobile-menu`.
2. Hacer commits pequeños y frecuentes.
3. El mensaje del commit debe estar en imperativo ("añadir sección" en lugar de "añadí sección").
