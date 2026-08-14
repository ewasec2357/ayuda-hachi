# BRIEF DE CONSTRUCCIÓN — Web de campaña "Ayuda a HACHI"

> **Para:** Claude Code
> **De:** Edward Soto — Recursos Tecnológicos S.A.C.
> **Objetivo del sitio:** una landing de una sola página que convierta visitas de TikTok/WhatsApp en donaciones verificables para el tratamiento médico de HACHI, un perro rescatado en Villa María del Triunfo, Lima, Perú.

---

## 0. ANTES DE EMPEZAR — Datos que faltan

Los siguientes campos están marcados en todo el documento como `{{PENDIENTE_*}}`. **No inventes valores.** Si al construir no están definidos, deja el placeholder visible en el código con un comentario `<!-- TODO -->` y repórtalos al final.

### Datos CONFIRMADOS (usar tal cual)

| Campo | Valor |
|---|---|
| Titular (todas las cuentas) | **Valexa Rodríguez Romaldo** |
| Banco | **Interbank** — cuenta de ahorros |
| N° de cuenta | `8983342595695` |
| CCI (interbancario) | `00389801334259569549` |
| Plin | `922837643` — titular: **valexa** — Perú (PE) |
| Yape | Mismo número `922837643`. En Yape se paga eligiendo **"Otros bancos / PLIN"** |
| PayPal (correo) | `valexarromaldo@gmail.com` — **verificado por el cliente, doble `r` es correcta** |
| PayPal (QR) | `/public/qr/paypal.png` — archivo provisto, ya recortado y listo |
| TikTok | `@valexaromaldo` |
| Canal de WhatsApp | **UNIDOS POR HACHI** — `https://whatsapp.com/channel/0029VbDiu078KMqcXB4Z103a` |

> El correo de PayPal lleva doble `r` (`valexarromaldo`) aunque el usuario de TikTok lleva una sola (`valexaromaldo`). **No es un error de tipeo, está confirmado.** No lo "corrijas" al escribir el código.

> ⚠️ **Los números bancarios se transcriben dígito por dígito, tal cual figuran arriba.** No los reformatees, no les agregues ni quites ceros, no los "normalices". Al terminar, imprímelos en consola para que el cliente los compare contra el original antes del deploy.

### Datos PENDIENTES

| Campo | Descripción |
|---|---|
| `{{PENDIENTE_WHATSAPP}}` | Número de contacto directo para coordinar, formato `51XXXXXXXXX`. Si no se quiere exponer un número personal, se omite el contacto directo y todo se deriva al canal |
| `{{PENDIENTE_META_TOTAL}}` | Monto meta en soles, si existe una cifra definida |
| `{{PENDIENTE_RECAUDADO}}` | Monto recaudado a la fecha |
| `{{PENDIENTE_VETERINARIA}}` | Nombre y dirección de la clínica que atiende a HACHI |

**Fotos:** las imágenes de HACHI y las capturas de los informes médicos las provee el cliente. Guárdalas en `/public/img/`. Si aún no existen, usa placeholders grises con la proporción correcta y no bloquees el build.

---

## 1. Contexto del caso (contenido oficial — no inventar nada más)

Este es el texto oficial del caso, provisto por la responsable. Úsalo como fuente única de verdad.

### Historia

HACHI es un perro **macho de aproximadamente 8 años**, encontrado en **Villa María del Triunfo, a las afueras del mercado Virgen de Lourdes**, Lima, Perú.

Durante mucho tiempo tuvo una familia que, en lugar de brindarle atención y cuidados, permitió que su estado de salud se deteriorara hasta abandonarlo en la calle. HACHI sobrevivía comiendo basura y enfrentando completamente solo una situación que necesitaba atención veterinaria urgente.

Hoy está a salvo y recibe atención, pero su estado es delicado y necesita tratamiento para tener una segunda oportunidad.

### Diagnóstico

- Dos masas abdominales, altamente compatibles con **testículos retenidos (criptorquidia) y tumores testiculares**.
- **Anemia no regenerativa severa**, asociada a una posible producción hormonal de uno de los tumores.
- **Trombocitopenia y linfopenia.**
- **Absceso / infección prostática** y alteraciones prostáticas.
- **Infección urinaria.**
- Inflamación y sedimento en la **vesícula biliar**.
- Cambios degenerativos leves en los riñones, aunque su función renal se mantiene estable según sus últimos análisis.
- Llegó además con **desnutrición y problemas de piel (sarna)**.

### Valores de laboratorio (del informe de la veterinaria)

- **Hematocrito: bajó de 20% a 15%.** Por debajo de 20% la transfusión es obligatoria.
- Plaquetas reducidas → riesgo de microhemorragias.
- Leucocitos elevados → inflamación o infección.
- Albúmina baja → riesgo de edema y acumulación de líquido en cavidades; por debajo de cierto valor se indica albúmina sintética.
- **No se observan signos de metástasis** ni en ecografía abdominal ni en radiografía de tórax. Menos del 15% de los tumores testiculares producen metástasis.
- Pronóstico **reservado a malo**, pero el tratamiento es viable y la eutanasia no es la primera opción.

### Situación actual

HACHI está alojado temporalmente gracias a **Gabi, de HUSI PET PERÚ**, que lo recibió en su albergue y coordina con sus veterinarios. Parte de lo recaudado ya se usó en alimentación, consultas y movilidad. **Lo que viene ahora es lo más costoso**: la cirugía, el procedimiento y los medicamentos.

**Rescatista y vocera del caso:** Valexa Romaldo — TikTok `@valexaromaldo`.
**Canal oficial de información:** UNIDOS POR HACHI en WhatsApp.

### Frase de cierre del caso (usar textualmente en la página)

> HACHI ya sobrevivió al abandono. Ahora necesita que entre todos podamos darle la oportunidad de recuperarse y conocer, por fin, una vida con amor y cuidados.

> **Nota de tono para la redacción:** el caso es duro pero la campaña es de esperanza, no de morbo. No uses lenguaje sensacionalista ni signos de exclamación múltiples. El dato clínico bien presentado genera más confianza que el dramatismo. La frase que ancla toda la página es que **HACHI tiene una posibilidad real y el tratamiento ya empezó**.

---

## 2. Stack técnico

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** (config propia, no plantillas de terceros)
- Sin backend. Es una landing estática pura.
- Sin dependencias pesadas. Íconos con `lucide-react`. Nada más salvo justificación.
- Deploy en **Netlify** (incluye `netlify.toml` con redirect SPA y headers de seguridad básicos).
- Node 20. `npm` como gestor.

**Estructura de carpetas:**

```
hachi/
├── public/
│   ├── img/            (fotos de HACHI, informes médicos)
│   ├── qr/             (paypal.png, plin.png, yape.png)
│   ├── og-image.jpg    (1200x630, foto de HACHI + texto)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── EstadoClinico.tsx
│   │   ├── Tratamiento.tsx
│   │   ├── ComoDonar.tsx
│   │   ├── Transparencia.tsx
│   │   ├── Galeria.tsx
│   │   ├── OtrasFormasDeAyudar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── campana.ts   ← TODOS los datos editables viven aquí
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── netlify.toml
├── tailwind.config.js
└── README.md
```

**Regla crítica:** todos los montos, números de cuenta, textos de estado y fechas van en `src/data/campana.ts` como un objeto tipado exportado. La persona que actualice la campaña debe poder editar un solo archivo sin tocar JSX.

---

## 3. Dirección de diseño

No quiero una landing de ONG genérica: nada de fondo crema con serif y acento terracota, nada de degradados azul-a-morado, nada de tarjetas blancas con sombra suave flotando sobre gris claro.

**Concepto:** *historia clínica que respira*. La página toma prestada la estructura visual de un expediente veterinario —etiquetas, campos, valores de laboratorio, sellos— pero con calidez. El contraste entre la frialdad del dato médico y la fotografía del perro es la tensión que sostiene el diseño.

**Paleta (define estos tokens en `tailwind.config.js`):**

| Token | Hex | Uso |
|---|---|---|
| `hueso` | `#F2EDE4` | Fondo base, cálido pero no crema publicitaria |
| `tinta` | `#1C1A17` | Texto principal, casi negro con carga cálida |
| `ambar` | `#C77A2E` | Acento primario — el color del pelaje de HACHI |
| `sangre` | `#8B2E2E` | Solo para datos críticos (hematocrito, urgencia). Úsalo con avaricia |
| `salvia` | `#5E6E5A` | Acento secundario, para lo que ya se resolvió / esperanza |
| `papel` | `#FFFFFF` | Superficies de "ficha clínica" |

**Tipografía:**

- **Display:** `Instrument Serif` o `Fraunces` (variable, con `opsz`). Se usa solo en el hero y en los tres o cuatro titulares de sección. Nunca en párrafos.
- **Cuerpo:** `Inter Tight` o `Public Sans`. Interlineado generoso (1.65).
- **Utilitaria / datos clínicos:** una monospace — `JetBrains Mono` o `IBM Plex Mono`. Se usa para valores de laboratorio, números de cuenta, montos y etiquetas. Esta es la que le da carácter a la página.

Carga las fuentes con `@fontsource` o desde Google Fonts con `display=swap` y `preconnect`.

**Elemento firma (el que hace memorable la página):**
Una **franja de valores clínicos** que corre horizontalmente bajo el hero, en monospace, mostrando los parámetros reales de HACHI como una tira de monitor:

```
HEMATOCRITO 15%  ↓ crítico   ·   PLAQUETAS ↓   ·   LEUCOCITOS ↑   ·   ALBÚMINA ↓   ·   METÁSTASIS  NEGATIVO ✓
```

El último ítem —`METÁSTASIS NEGATIVO`— es el único en verde salvia mientras todo lo demás está en rojo sangre o ámbar. Ese contraste **es** el argumento de la campaña: está grave, pero se puede salvar. En desktop la franja se anima con un scroll horizontal lento y continuo; en mobile se envuelve en dos líneas estáticas. Respeta `prefers-reduced-motion`.

**Otras reglas:**
- Radio de borde: `2px`. Casi recto, como un formulario impreso.
- Nada de sombras difusas. Si necesitas separar superficies, usa un borde de `1px` en `tinta/15`.
- Numeración (`01`, `02`, …): **úsala solo en el plan de tratamiento**, donde el orden es información clínica real. En ninguna otra sección.
- Las fotos de HACHI van a sangre completa o dentro de un marco con etiqueta al pie en monospace (`VMT · LIMA · RESCATE`), como una foto de archivo.
- Animación: solo un `fade-up` sutil al entrar en viewport, con `IntersectionObserver`, y la franja clínica. Nada más.

---

## 4. Secciones de la página

### 4.1 Hero
- Foto de HACHI a pantalla parcial (60vh en mobile, 75vh en desktop), con overlay de gradiente hacia abajo para legibilidad.
- Titular en display: **"HACHI todavía puede vivir"**
- Bajada en cuerpo: una línea que sitúe el caso — dónde lo encontraron, cuándo, y que ya está en tratamiento.
- **Un solo CTA primario**: `Donar ahora` → scroll suave a `#donar`. Un CTA secundario en texto: `Ver su historia clínica` → `#estado`.
- Debajo, la **franja de valores clínicos** (elemento firma).
- Si `{{PENDIENTE_META_TOTAL}}` está definido: barra de progreso en monospace mostrando `S/ X recaudado · meta S/ Y`. Si no está definido, **omite la barra por completo** en vez de mostrar ceros o inventar una meta.

### 4.2 Estado clínico (`#estado`)
Presenta los hallazgos del apartado 1 como una **ficha clínica**: dos columnas en desktop, una en mobile. Cada hallazgo es una fila con etiqueta en monospace + explicación en lenguaje simple para alguien sin formación veterinaria.

Ejemplo del patrón a seguir:

```
ANEMIA NO REGENERATIVA
Su médula ósea no alcanza a producir glóbulos rojos.
El hematocrito bajó de 20% a 15%: por debajo de 20%
la transfusión deja de ser opcional.
```

Incluye un bloque destacado, visualmente distinto (fondo salvia claro, borde salvia), con el hallazgo positivo: **no hay metástasis** — ni en la ecografía abdominal ni en la radiografía de tórax — y menos del 15% de los tumores testiculares metastatizan. Cierra ese bloque con la conclusión de la veterinaria: el tratamiento es posible y la eutanasia no es la primera opción.

Al pie de la sección, un `<details>` desplegable: **"Ver informes de la veterinaria"**, que muestra las capturas de los informes médicos como imágenes ampliables. Esto es prueba, y la prueba es lo que convierte donantes.

### 4.3 El tratamiento que necesita (`#tratamiento`)

Esta es la única sección donde **sí** corresponde numerar (`01`–`07`), porque el tratamiento es una secuencia clínica real: cada paso depende del anterior. Numera en monospace, alineado a la izquierda, en ámbar.

Texto oficial del plan de tratamiento, a presentar tal cual:

1. **Estabilización y manejo de la anemia**, incluyendo transfusión sanguínea según su hematocrito y evaluación veterinaria.
2. **Cirugía abdominal exploratoria (laparotomía)** para localizar y retirar las masas / testículos retenidos.
3. **Drenaje y tratamiento del absceso prostático.**
4. **Posible omentalización de la próstata**, para favorecer el control de la infección y el drenaje.
5. **Análisis histopatológico** de las masas retiradas, para determinar exactamente qué tipo de tumor presenta.
6. Según los resultados, **tratamiento oncológico posterior**, incluyendo la posibilidad de quimioterapia.
7. **Tratamiento y seguimiento** de sus infecciones, anemia y estado nutricional.

Debajo del listado, una línea en cuerpo explicando que a esto se suman los gastos corrientes que ya se están cubriendo: alimentación especializada, medicamentos, tratamiento de la sarna y movilidad hacia la clínica.

Si hay costos estimados confirmados, muéstralos en monospace alineados a la derecha de cada paso. **Si no hay cifras confirmadas, no pongas montos.** Una cifra inventada en una campaña de donación destruye la credibilidad de todo el caso.

### 4.4 Cómo donar (`#donar`) — LA SECCIÓN MÁS IMPORTANTE
Debe ser la sección más pulida y la más fácil de usar desde un celular, porque casi todo el tráfico viene de TikTok.

Tarjetas de método de pago, una por fila en mobile:

**Plin y Yape — método principal para Perú**
- Número `922837643` en monospace, `text-3xl`, seleccionable, con espaciado que facilite leerlo de un vistazo: `922 837 643`.
- Debajo, en tamaño pequeño: `Titular: Valexa Rodríguez Romaldo`.
- **Línea de ayuda imprescindible**, en cuerpo, justo debajo del número: *"¿Usas Yape? También puedes enviar a este número: elige **Otros bancos / PLIN** dentro de la app."* Sin esta línea, la mitad de los donantes peruanos asume que no puede pagar y abandona.
- Botón **`Copiar número`** que copia `922837643` (sin espacios) al portapapeles con `navigator.clipboard` y cambia su texto a **`Copiado`** durante 2 segundos. Feedback inmediato, sin toasts flotantes.
- Fallback obligatorio: si `navigator.clipboard` no está disponible (pasa en navegadores in-app de TikTok e Instagram, que es justo de donde viene el tráfico), selecciona el texto del número con `Range`/`Selection` para que el usuario pueda copiarlo manualmente. **Prueba esto explícitamente**, no lo des por hecho.

**Transferencia bancaria — Interbank**
- Presentar como ficha, con cada dato en su propia fila y **su propio botón de copiar independiente**:

```
BANCO       Interbank
CUENTA      8983342595695
CCI         00389801334259569549
TITULAR     Valexa Rodríguez Romaldo
```

- Los números en monospace, `text-lg`, con `user-select: all` para que un toque largo en móvil los seleccione completos.
- Etiqueta corta bajo el CCI: *"Usa el CCI si transfieres desde otro banco."*
- Esta es la vía recomendada para montos altos, porque no tiene los topes diarios de Yape y Plin.

**PayPal — para donantes desde el extranjero**
- QR en `/qr/paypal.png` (archivo provisto), renderizado a 240px, con borde `1px` y fondo blanco. Botón `Descargar QR`.
- Correo de la cuenta: `valexarromaldo@gmail.com`, en monospace, con su propio botón de copiar.
- Nota corta: es la vía recomendada si donas desde fuera de Perú.
- No inventes un link `paypal.me`. Si más adelante se confirma uno, se agrega en `campana.ts`.

**Transferencia bancaria** (si se provee el dato)
- Banco, tipo de cuenta, número, CCI, titular. Cada campo con su botón de copiar individual.

**Al pie de la sección:** una línea invitando a seguir el canal oficial de WhatsApp **UNIDOS POR HACHI**, donde se publican las actualizaciones y los comprobantes del caso. Botón secundario que abre `https://whatsapp.com/channel/0029VbDiu078KMqcXB4Z103a`.

Si además se confirma `{{PENDIENTE_WHATSAPP}}`, agrega un botón para enviar la captura de la donación:
`https://wa.me/{{PENDIENTE_WHATSAPP}}?text=Hola,%20acabo%20de%20donar%20para%20HACHI`
Si no se confirma, omite ese botón por completo — no pongas un número inventado ni un `wa.me` vacío.

### 4.5 Transparencia (`#transparencia`)
Sin esto la página es solo un número de Yape y nadie confía.

- Timeline vertical con las fechas y hechos verificables del caso: rescate en VMT, primeros exámenes, ecografía, resultado del hemograma, ingreso al albergue de HUSI PET PERÚ.
- Bloque de **destino de los fondos**: qué se cubrió ya (alimentación, consultas, movilidad) y qué falta cubrir (veterinaria, procedimiento, medicamentos).
- Crédito explícito y visible a **HUSI PET PERÚ (Gabi)** por el hogar temporal, y a **Valexa Romaldo** como rescatista responsable del caso, con enlace a su TikTok.
- Frase de cierre: los comprobantes y actualizaciones se publican en el TikTok del caso.

### 4.6 Galería (`#galeria`)
Grid de 2 columnas en mobile, 3 en desktop. Fotos de HACHI con pie de foto en monospace. `loading="lazy"` en todas menos la primera. Lightbox simple al hacer clic — implementación propia con un `<dialog>`, sin librerías.

### 4.7 Otras formas de ayudar
Tres tarjetas, sin jerarquía entre ellas:
- **Compartir**: botones nativos de compartir (`navigator.share` con fallback a copiar link) para WhatsApp, Facebook y X.
- **Donar en especie**: alimento, medicamentos, pañales, mantas. Coordinar por el canal de WhatsApp.
- **Seguir el caso**: enlace al canal de WhatsApp **UNIDOS POR HACHI** y al TikTok de `@valexaromaldo`.

### 4.8 Footer
- Barra fija inferior en mobile con un único botón `Donar` (`sticky bottom-0`, aparece después de pasar el hero). En desktop no aparece.
- Créditos, contacto por WhatsApp, y la nota: **"Esta página no cobra comisión. Los aportes van directamente a las cuentas de la responsable del caso."**

---

## 5. Requisitos no negociables

**Rendimiento**
- Lighthouse móvil ≥ 90 en Performance y 100 en Accessibility.
- Todas las imágenes en WebP con fallback JPG, redimensionadas (máx. 1600px de ancho). Incluye un script `npm run optimize:img` con `sharp`.
- La foto del hero con `fetchpriority="high"`, el resto con `loading="lazy"`.
- Sin CLS: `width` y `height` explícitos en cada `<img>`.

**Accesibilidad**
- Contraste AA mínimo en todo texto. Verifica `ambar` sobre `hueso` — si no pasa, oscurece el ámbar para texto y reserva el tono original para elementos gráficos.
- Foco de teclado visible en todos los elementos interactivos (`ring-2 ring-ambar ring-offset-2`).
- `alt` descriptivo y real en cada imagen. Las capturas de informes médicos llevan `alt` con un resumen del contenido, no "informe médico".
- `prefers-reduced-motion: reduce` desactiva la franja animada y los fade-up.

**SEO y compartido social**
- `<title>`: `Ayuda a HACHI — Perro rescatado en Villa María del Triunfo necesita cirugía`
- Meta description de ~155 caracteres.
- Open Graph completo (`og:title`, `og:description`, `og:image` 1200x630, `og:url`, `og:type=website`) y `twitter:card=summary_large_image`. Esto es crítico: la mayoría del tráfico llega por link compartido en WhatsApp, y sin OG el link se ve vacío.
- `lang="es-PE"` en el `<html>`.
- JSON-LD tipo `Article` con la información del caso.

**Responsive**
- Mobile-first, real. Prueba a 360px de ancho.
- Los números de Yape/Plin y los QR deben ser cómodos de usar con una sola mano.

---

## 6. `src/data/campana.ts` — estructura esperada

```ts
export const campana = {
  perro: {
    nombre: "HACHI",
    sexo: "macho",
    edadAprox: 8,
    lugarRescate: "Villa María del Triunfo, Lima, Perú",
    referencia: "afueras del mercado Virgen de Lourdes",
    fechaRescate: "{{PENDIENTE_FECHA}}",
  },
  estado: {
    actualizadoAl: "{{PENDIENTE_FECHA}}",
    hallazgos: [ /* label, valor, tendencia: 'critico'|'alerta'|'bueno', explicacion */ ],
    sinMetastasis: true,
  },
  meta: {
    objetivo: null,     // number | null — si es null, no se renderiza la barra
    recaudado: null,
  },
  pagos: {
    titular: "Valexa Rodríguez Romaldo",
    plin: {
      numero: "922837643",
      numeroFormateado: "922 837 643",
      aceptaYape: true,
      notaYape: "En Yape elige 'Otros bancos / PLIN'",
      qr: null,                       // no se proveyó QR de Plin; se muestra solo el número
    },
    banco: {
      entidad: "Interbank",
      cuenta: "8983342595695",
      cci: "00389801334259569549",
    },
    paypal: {
      correo: "valexarromaldo@gmail.com",   // doble "r" confirmada, NO corregir
      url: null,                            // no hay paypal.me confirmado
      qr: "/qr/paypal.png",
    },
  },
  contacto: {
    whatsappDirecto: null,                  // "{{PENDIENTE_WHATSAPP}}" — omitir la UI si es null
    canalWhatsapp: {
      nombre: "UNIDOS POR HACHI",
      url: "https://whatsapp.com/channel/0029VbDiu078KMqcXB4Z103a",
    },
    tiktok: "https://www.tiktok.com/@valexaromaldo",
  },
  aliados: [
    { nombre: "HUSI PET PERÚ", rol: "Hogar temporal", enlace: "" },
  ],
} as const;
```

---

## 7. Entregables

1. Repositorio funcional con `npm install && npm run dev` operativo sin errores ni warnings.
2. `npm run build` genera `/dist` desplegable en Netlify.
3. `README.md` con: cómo correr el proyecto, **cómo actualizar montos y datos de pago editando solo `campana.ts`**, y cómo reemplazar fotos y QR.
4. Al terminar, lista explícita de todos los `{{PENDIENTE_*}}` que quedaron sin resolver.

---

## 8. Qué NO hacer

- No inventes montos, metas, porcentajes de avance, ni cifras de costos veterinarios.
- No inventes números de Yape, Plin, cuentas bancarias ni links de PayPal. Si no están, deja el placeholder visible.
- No agregues testimonios, nombres de donantes ni comentarios que no estén en este brief.
- No agregues formularios que pidan datos personales ni recolecten correos. No hay backend y no hay política de privacidad.
- No integres pasarelas de pago con claves API. Solo enlaces y QR provistos por el cliente.
- No uses stock photos de perros. Solo fotos reales de HACHI.
- No pongas contadores regresivos ni "quedan X horas" salvo que haya una fecha de cirugía real y confirmada.
