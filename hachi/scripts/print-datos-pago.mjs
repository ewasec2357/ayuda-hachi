import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/data/campana.ts', import.meta.url), 'utf8');

function extract(regex) {
  const m = src.match(regex);
  return m ? m[1] : '(no encontrado)';
}

const datos = {
  'Plin / Yape': extract(/numero:\s*'([^']+)'/),
  'Cuenta Interbank': extract(/cuenta:\s*'([^']+)'/),
  CCI: extract(/cci:\s*'([^']+)'/),
  Titular: extract(/titular:\s*'([^']+)'/),
  PayPal: extract(/correo:\s*'([^']+)'/),
};

console.log('\nDatos de pago tal como quedaron en src/data/campana.ts — compáralos dígito por dígito con el original:\n');
for (const [label, value] of Object.entries(datos)) {
  console.log(`${label.padEnd(18)} ${value}`);
}
console.log('');
