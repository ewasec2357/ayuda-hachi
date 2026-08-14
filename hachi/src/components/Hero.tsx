import { campana } from '../data/campana';
import { ClinicalTicker } from './ClinicalTicker';

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-lima-claro pb-0 pt-8 md:pt-12">
      <div className="pointer-events-none absolute -left-16 -top-10 h-48 w-48 bg-rosa-claro blob-1 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute -right-12 top-1/4 h-36 w-36 bg-amarillo/70 blob-3 md:h-52 md:w-52" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative h-[55vh] w-full overflow-hidden rounded-lg shadow-soft md:h-[70vh]">
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
                className="rounded-full bg-rosa-oscuro px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-hueso shadow-soft hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hueso focus-visible:ring-offset-2 focus-visible:ring-offset-tinta"
              >
                Donar ahora
              </a>
              <a
                href="#estado"
                className="font-body text-sm font-semibold text-hueso/90 underline underline-offset-4 hover:text-hueso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hueso"
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
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full border border-hueso/30 bg-hueso/10">
                  <div
                    className="h-full rounded-full bg-lima"
                    style={{
                      width: `${Math.min(100, (campana.meta.recaudado / campana.meta.objetivo) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <ClinicalTicker />
      </div>
    </header>
  );
}
