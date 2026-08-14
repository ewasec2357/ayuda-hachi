import { AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { campana } from '../data/campana';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';
import type { Tendencia } from '../data/campana';

const toneMeta: Record<Tendencia, { bg: string; badge: string; text: string; Icon: typeof AlertTriangle }> = {
  critico: { bg: 'bg-sangre/10', badge: 'bg-sangre', text: 'text-sangre', Icon: AlertTriangle },
  alerta: { bg: 'bg-ambar/15', badge: 'bg-ambar-texto', text: 'text-ambar-texto', Icon: AlertCircle },
  bueno: { bg: 'bg-salvia/10', badge: 'bg-salvia', text: 'text-salvia', Icon: CheckCircle2 },
};

export function EstadoClinico() {
  const fade = useFadeUpOnScroll<HTMLElement>();

  return (
    <section id="estado" ref={fade.ref} className={`relative overflow-hidden bg-papel px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="pointer-events-none absolute -left-10 top-10 h-36 w-36 bg-rosa-claro blob-3 md:h-52 md:w-52" />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-rosa-oscuro">Estado clínico</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">Lo que le está pasando a HACHI</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {campana.estado.hallazgos.map((h) => {
            const { bg, badge, text, Icon } = toneMeta[h.tendencia];
            return (
              <div key={h.label} className={`rounded-lg p-5 shadow-soft ${bg}`}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${badge} text-hueso`}>
                    <Icon size={18} />
                  </span>
                  <p className={`font-mono text-xs uppercase tracking-wide ${text}`}>
                    {h.label} · {h.valor}
                  </p>
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-tinta">{h.explicacion}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg bg-salvia p-6 shadow-soft md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hueso text-salvia">
              <CheckCircle2 size={22} />
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-hueso">Metástasis · negativo</p>
          </div>
          <p className="mt-4 font-body leading-relaxed text-hueso">
            No se observan signos de metástasis, ni en la ecografía abdominal ni en la radiografía de tórax. Menos
            del 15% de los tumores testiculares llegan a producir metástasis.
          </p>
          <p className="mt-3 font-body font-semibold leading-relaxed text-hueso">
            El pronóstico es reservado a malo, pero el tratamiento es viable y la eutanasia no es la primera opción.
          </p>
        </div>
      </div>
    </section>
  );
}
