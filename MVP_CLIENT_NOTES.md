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
4. Elige fecha, jornada y horario.
5. Deja sus datos.
6. El negocio confirma la reserva por el canal definido.

## Estado actual

- La landing ya prioriza tratamientos y packs.
- La agenda tiene mejor UI y flujo más claro.
- WhatsApp sigue como canal de apoyo.
- El tracking en JavaScript es defensivo y no rompe si Pixel no existe.
- No hay integración real de reserva automática todavía.

## Pendientes para siguiente etapa

- Reemplazar el número de WhatsApp placeholder.
- Instalar Pixel real.
- Integrar agenda real con Calendly o Google Appointment Schedule.
- Validar mobile en navegador real.
- Definir si el cierre será por embed o por redirección.

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

La agenda actual sirve para presentar horarios y recoger intención.
Cuando integremos una agenda real, la recomendación inicial es evaluar una redirección simple o un embed según la experiencia que quieras priorizar.
