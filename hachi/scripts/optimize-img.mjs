import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = path.resolve('assets-src/original');
const OUT_DIR = path.resolve('public/img');
const MAX_WIDTH = 1600;
const HERO_SOURCE = 'hachi-07-clinica-descanso';
const OG_OUT = path.resolve('public/og-image.jpg');

async function optimizeAll() {
  if (!existsSync(SRC_DIR)) {
    console.error(`No existe ${SRC_DIR}. Coloca las fotos originales ahí antes de correr este script.`);
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const name = path.parse(file).name;
    const srcPath = path.join(SRC_DIR, file);
    const image = sharp(srcPath).rotate();
    const metadata = await image.metadata();
    const resize = metadata.width && metadata.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};

    await image.clone().resize(resize).jpeg({ quality: 82 }).toFile(path.join(OUT_DIR, `${name}.jpg`));
    await image.clone().resize(resize).webp({ quality: 80 }).toFile(path.join(OUT_DIR, `${name}.webp`));

    const outMeta = await sharp(path.join(OUT_DIR, `${name}.jpg`)).metadata();
    console.log(`${name}: ${outMeta.width}x${outMeta.height}`);
  }

  await generateOgImage(files);
}

async function generateOgImage(files) {
  const heroFile = files.find((f) => f.startsWith(HERO_SOURCE));
  if (!heroFile) {
    console.warn(`No se encontró ${HERO_SOURCE} para generar og-image.jpg. Se omite.`);
    return;
  }
  const heroPath = path.join(SRC_DIR, heroFile);

  const cropped = await sharp(heroPath).rotate().resize(1200, 630, { fit: 'cover' }).toBuffer();

  const overlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#1C1A17" stop-opacity="0.92"/>
          <stop offset="45%" stop-color="#1C1A17" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <text x="60" y="520" font-family="Georgia, serif" font-size="64" fill="#F2EDE4">HACHI todavía puede vivir</text>
      <text x="60" y="570" font-family="Arial, sans-serif" font-size="26" fill="#F2EDE4" opacity="0.85">Ayuda a un perro rescatado en Villa María del Triunfo</text>
    </svg>
  `);

  await sharp(cropped).composite([{ input: overlay }]).jpeg({ quality: 85 }).toFile(OG_OUT);
  console.log('og-image.jpg generado en public/og-image.jpg');
}

optimizeAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
