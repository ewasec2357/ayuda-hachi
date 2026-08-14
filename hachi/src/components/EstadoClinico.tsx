import { campana } from '../data/campana';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';
import type { Tendencia } from '../data/campana';

const toneStyles: Record<Tendencia, string> = {
  critico: 'border-sangre/40 text-sangre',
  alerta: 'border-ambar/40 text-ambar-texto',
  bueno: 'border-salvia/40 text-salvia',
};

export function EstadoClinico() {
  const fade = useFadeUpOnScroll<HTMLElement>();

  return (
    <section id="estado" ref={fade.ref} className={`bg-hueso px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-tinta/60">Estado clínico</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">Lo que le está pasando a HACHI</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {campana.estado.hallazgos.map((h) => (
            <div key={h.label} className={`border-l-2 bg-papel p-5 ${toneStyles[h.tendencia]}`}>
              <p className="font-mono text-xs uppercase tracking-wide">
                {h.label} · {h.valor}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-tinta">{h.explicacion}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-salvia bg-salvia/10 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-salvia">Metástasis · negativo</p>
          <p className="mt-2 font-body leading-relaxed text-tinta">
            No se observan signos de metástasis, ni en la ecografía abdominal ni en la radiografía de tórax. Menos
            del 15% de los tumores testiculares llegan a producir metástasis.
          </p>
          <p className="mt-3 font-body font-medium leading-relaxed text-tinta">
            El pronóstico es reservado a malo, pero el tratamiento es viable y la eutanasia no es la primera opción.
          </p>
        </div>
      </div>
    </section>
  );
}
