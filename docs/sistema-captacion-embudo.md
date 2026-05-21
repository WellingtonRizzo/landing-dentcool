# Sistema de captacion DentCool - Estado de trabajo

Fecha: 2026-05-21

## Objetivo

Construir un sistema de captacion que lleve personas desde Instagram/Facebook Ads hasta pacientes agendados y tratamientos aceptados.

El chatbot es una pieza del sistema, no el sistema completo.

## Piezas del sistema

- Landing DentCool: comunica oferta, tratamientos, confianza, ubicacion y CTA.
- WhatsApp: canal principal de conversacion y apoyo comercial.
- WAHA: puente inicial para conectar WhatsApp con automatizaciones.
- n8n: cerebro de automatizacion, scoring, derivaciones y seguimiento.
- Chatwoot: bandeja visual para que una persona tome conversaciones cuando corresponda.
- Postgres: base principal de leads, estados, origen, score y conversiones.
- Redis: colas, sesiones temporales y escalabilidad cuando haga falta.
- Agenda: paso operativo para convertir lead calificado en cita.

## Customer journey

1. No nos conoce.
   - Ve contenido o anuncio en Instagram/Facebook.
   - Metrica principal: alcance.

2. Presta atencion.
   - Reconoce una necesidad: limpieza, estetica, dolor, restauracion o mejorar sonrisa.
   - Metrica principal: CTR.

3. Se interesa.
   - Entra a la landing, revisa precios, ubicacion, packs y confianza.
   - Metrica principal: visita relevante.

4. Se convierte en lead.
   - Escribe por WhatsApp, agenda o deja datos.
   - Metrica principal: lead.

5. Agenda y asiste.
   - El sistema confirma hora, recuerda y reduce no-show.
   - Metrica principal: asistencia.

6. Compra servicio o acepta tratamiento.
   - Acepta presupuesto o inicia tratamiento segun evaluacion profesional.
   - Metrica principal: tratamiento aceptado.

## Prioridad comercial

El sistema no debe optimizar solo por volumen de leads baratos. Debe identificar leads con mayor valor potencial:

- Implantes o rehabilitacion.
- Diseno de sonrisa.
- Carillas o estetica avanzada.
- Multiples restauraciones.
- Blanqueamiento y packs.
- Limpieza VIP como entrada a un plan mayor.

La evaluacion sigue siendo importante, pero no debe ser el unico objetivo comercial.

## Eventos sugeridos

- `Lead`: persona deja datos o escribe con intencion.
- `lead_qualified`: cumple criterios minimos de interes, ubicacion, disponibilidad y tratamiento.
- `appointment_scheduled`: agenda una hora.
- `appointment_attended`: asiste a evaluacion o atencion inicial.
- `treatment_accepted`: acepta presupuesto o inicia tratamiento.

El evento principal para optimizar a futuro debe ser `treatment_accepted`, con `appointment_attended` como paso intermedio importante.

## Paginas creadas

- `sistema-captacion.html`: vista general del sistema de captacion.
- `embudo-captacion.html`: pagina separada para ver y planificar el embudo/customer journey.

Desde `sistema-captacion.html` existe un boton:

`Ver y planificar embudo`

Ese boton lleva a `embudo-captacion.html`.

## Pendientes

- Refinar mensajes por etapa del journey.
- Definir campos exactos del lead en Postgres.
- Definir estados y etiquetas en Chatwoot.
- Disenar el flujo n8n:
  - WAHA recibe mensaje.
  - n8n clasifica intencion.
  - n8n calcula score.
  - lead se guarda en Postgres.
  - Chatwoot recibe conversacion con etiqueta.
  - agenda confirma hora.
  - seguimiento automatico mide asistencia y tratamiento aceptado.
- Decidir si el MVP queda con WAHA o si se compara con Evolution API antes de implementar.
