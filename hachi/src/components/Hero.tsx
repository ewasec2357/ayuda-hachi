import { campana } from '../data/campana';
import { ClinicalTicker } from './ClinicalTicker';

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-lima-claro px-4 py-10 md:px-8 md:py-16">
      <div className="pointer-events-none absolute -left-16 -top-10 h-48 w-48 bg-rosa-claro blob-1 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute -right-12 top-1/4 h-36 w-36 bg-amarillo/70 blob-3 md:h-52 md:w-52" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-12 md:text-left">
        <div className="shrink-0">
          <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-papel shadow-soft sm:h-64 sm:w-64 md:h-80 md:w-80">
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
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-display text-4xl leading-tight text-tinta md:text-5xl lg:text-6xl">
            HACHI todavía puede vivir
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-tinta/80 md:text-lg">
            Lo encontraron a las afueras del mercado Virgen de Lourdes, en {campana.perro.lugarRescate}. Hoy está a
            salvo y en tratamiento, pero su estado es delicado y necesita cirugía.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#donar"
              className="rounded-full bg-rosa-oscuro px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-hueso shadow-soft hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa focus-visible:ring-offset-2"
            >
              Donar ahora
            </a>
            <a
              href="#estado"
              className="font-body text-sm font-semibold text-tinta underline underline-offset-4 hover:text-rosa-oscuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa"
            >
              Ver su historia clínica
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <ClinicalTicker />
      </div>

      {campana.meta.porcentaje !== null && (
        <div className="relative mx-auto mt-8 max-w-xl px-2 text-center">
          <div className="h-3 w-full overflow-hidden rounded-full border border-tinta/10 bg-papel/60">
            <div
              className="h-full rounded-full bg-rosa"
              style={{ width: `${Math.min(100, campana.meta.porcentaje)}%` }}
            />
          </div>
          <p className="mt-2 font-mono text-sm text-tinta">{campana.meta.porcentaje}% de la meta alcanzada</p>
          <p className="mt-1 font-body text-xs text-tinta/60">
            La información de donaciones se actualiza todos los días a las 12:00 a. m.
          </p>
        </div>
      )}
    </header>
  );
}
