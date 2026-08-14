# Ayuda a HACHI

Landing de una sola página para la campaña de donación de HACHI. Sin backend — es un sitio estático.

## Correr en local

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (normalmente `http://localhost:5173`).

## Actualizar montos y datos de pago

Todo lo editable vive en **`src/data/campana.ts`**. No hace falta tocar ningún componente para:

- Cambiar la meta o el monto recaudado: `meta.objetivo` / `meta.recaudado` (si están en `null`, la barra de progreso no se muestra).
- Cambiar cualquier número de Plin/Yape, cuenta bancaria, CCI o correo de PayPal.
- Agregar el WhatsApp directo (`contacto.whatsappDirecto`) — al ponerle un valor, agrega también el botón "enviar comprobante" en `ComoDonar.tsx` (`https://wa.me/{numero}?text=...`).
- Editar hallazgos clínicos: agrega/edita objetos en `estado.hallazgos` (`tendencia: 'critico' | 'alerta' | 'bueno'` controla el color).

Después de editar `campana.ts`, corre `npm run check:datos` y compara la salida dígito por dígito contra los datos originales del cliente antes de cualquier deploy.

## Reemplazar fotos

1. Coloca las fotos nuevas en `assets-src/original/` (cualquier `.jpg`/`.jpeg`/`.png`).
2. Corre `npm run optimize:img` — genera versiones `.jpg` + `.webp` redimensionadas (máx. 1600px de ancho) en `public/img/`, y regenera `public/og-image.jpg` a partir de `hachi-07-clinica-descanso.*`.
3. Si agregas/quitas fotos de la galería, actualiza el arreglo `fotos` en `src/components/Galeria.tsx` (cada una necesita su propio `alt` real, no genérico).

## Reemplazar el QR de PayPal

Reemplaza `public/qr/paypal.png` por el archivo nuevo (mismo nombre) y confirma que el correo en `campana.ts` sigue siendo el correcto.

## Build y deploy a Netlify

```bash
npm run build
```

Esto genera `dist/`. Para el primer deploy manual: arrastra la carpeta `dist/` a Netlify (drag & drop). Si más adelante se conecta un repo Git, Netlify usará `netlify.toml` (`npm run build`, publish `dist`) automáticamente.

Después del primer deploy, actualiza `og:url` en `index.html` con la URL real de Netlify (está marcado con un comentario `<!-- TODO -->`).
