import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import QRCode from 'qrcode';

// This QR encodes the same plain-text Plin/Yape phone number already shown
// on the page, so a donor can scan instead of retyping. It is NOT an
// official Yape/Plin merchant payment QR — no such QR was provided by the
// client, and generating a fake one risks producing something the Yape/Plin
// app doesn't recognize, which could send a donor's payment nowhere. Label
// this as "scan to copy the number", never as "scan to pay".
const OUT_DIR = path.resolve('public/qr');

const codes = [{ file: 'plin-numero.png', value: '922837643' }];

async function generate() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const { file, value } of codes) {
    const outPath = path.join(OUT_DIR, file);
    await QRCode.toFile(outPath, value, {
      width: 480,
      margin: 2,
      color: { dark: '#1C1A17', light: '#FFFFFF' },
    });
    console.log(`${file}: generado a partir de "${value}"`);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
