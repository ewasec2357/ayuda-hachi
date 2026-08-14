import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';

const pasos = [
  'Estabilización y manejo de la anemia, incluyendo transfusión sanguínea según su hematocrito y evaluación veterinaria.',
  'Cirugía abdominal exploratoria (laparotomía) para localizar y retirar las masas / testículos retenidos.',
  'Drenaje y tratamiento del absceso prostático.',
  'Posible omentalización de la próstata, para favorecer el control de la infección y el drenaje.',
  'Análisis histopatológico de las masas retiradas, para determinar exactamente qué tipo de tumor presenta.',
  'Según los resultados, tratamiento oncológico posterior, incluyendo la posibilidad de quimioterapia.',
  'Tratamiento y seguimiento de sus infecciones, anemia y estado nutricional.',
];

export function Tratamiento() {
  const fade = useFadeUpOnScroll<HTMLElement>();

  return (
    <section id="tratamiento" ref={fade.ref} className={`bg-papel px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-tinta/60">Plan de tratamiento</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">El camino que tiene por delante</h2>

        <ol className="mt-10 space-y-6">
          {pasos.map((paso, i) => (
            <li key={paso} className="flex gap-4 border-t border-tinta/10 pt-6 first:border-t-0 first:pt-0">
              <span className="shrink-0 font-mono text-lg text-ambar-texto">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-body leading-relaxed text-tinta">{paso}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 font-body text-sm leading-relaxed text-tinta/70">
          A esto se suman los gastos corrientes que ya se están cubriendo: alimentación especializada, medicamentos,
          tratamiento de la sarna y movilidad hacia la clínica.
        </p>
      </div>
    </section>
  );
}
