import { campana } from '../data/campana';
import { ClinicalTicker } from './ClinicalTicker';

export function Hero() {
  return (
    <header className="relative">
      <div className="relative h-[60vh] w-full overflow-hidden md:h-[75vh]">
        <picture>
          <source srcSet="/img/hachi-07-clinica-descanso.webp" type="image/webp" />
          <img
            src="/img/hachi-07-clinica-descanso.jpg"
            alt="HACHI dormido sobre una manta blanca en la clínica, ya con atención veterinaria y un vendaje en una de sus patas."
            width={1600}
            height={1200}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-hueso md:p-12">
          <h1 className="max-w-2xl font-display text-4xl leading-tight md:text-6xl">HACHI todavía puede vivir</h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed md:text-lg">
            Lo encontraron a las afueras del mercado Virgen de Lourdes, en {campana.perro.lugarRescate}. Hoy está a
            salvo y en tratamiento, pero su estado es delicado y necesita cirugía.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#donar"
              className="rounded bg-ambar px-6 py-3 font-mono text-sm uppercase tracking-wide text-tinta hover:bg-ambar/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hueso focus-visible:ring-offset-2 focus-visible:ring-offset-tinta"
            >
              Donar ahora
            </a>
            <a
              href="#estado"
              className="font-body text-sm text-hueso/90 underline underline-offset-4 hover:text-hueso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hueso"
            >
              Ver su historia clínica
            </a>
          </div>
          {campana.meta.objetivo !== null && campana.meta.recaudado !== null && (
            <div className="mt-6 max-w-xl">
              <p className="font-mono text-xs text-hueso/90">
                S/ {campana.meta.recaudado.toLocaleString('es-PE')} recaudado · meta S/{' '}
                {campana.meta.objetivo.toLocaleString('es-PE')}
              </p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-hueso/30 bg-hueso/10">
                <div
                  className="h-full rounded-full bg-ambar"
                  style={{
                    width: `${Math.min(100, (campana.meta.recaudado / campana.meta.objetivo) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <ClinicalTicker />
    </header>
  );
}
