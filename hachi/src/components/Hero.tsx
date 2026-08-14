import { useEffect, useRef, useState } from 'react';
import { campana } from '../data/campana';
import { ClinicalTicker } from './ClinicalTicker';

export function Hero() {
  const barraRef = useRef<HTMLDivElement>(null);
  const [barraVisible, setBarraVisible] = useState(false);
  const [contador, setContador] = useState(0);
  const objetivoPorcentaje = campana.meta.porcentaje ?? 0;

  // Se repite cada vez que la barra vuelve a entrar en pantalla (no solo
  // la primera vez): no desconectamos el observer, solo reflejamos si
  // está o no visible en este momento.
  useEffect(() => {
    const node = barraRef.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setBarraVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setBarraVisible(entry.isIntersecting), {
      threshold: 0.3,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // El número dentro de la barra cuenta de 0 al porcentaje real, en
  // sincronía con el ancho de la barra, cada vez que barraVisible cambia.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setContador(objetivoPorcentaje);
      return;
    }

    if (!barraVisible) {
      setContador(0);
      return;
    }

    const DURACION_MS = 1500;
    let inicio: number | null = null;
    let raf: number;

    function paso(tiempo: number) {
      if (inicio === null) inicio = tiempo;
      const progreso = Math.min(1, (tiempo - inicio) / DURACION_MS);
      setContador(Math.round(progreso * objetivoPorcentaje));
      if (progreso < 1) raf = requestAnimationFrame(paso);
    }
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [barraVisible, objetivoPorcentaje]);

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
        <div className="relative mx-auto mt-10 max-w-2xl px-2">
          <div className="rounded-lg bg-papel p-6 shadow-soft sm:p-8">
            <p className="text-center font-mono text-xs uppercase tracking-widest text-rosa-oscuro">
              Meta de donaciones
            </p>
            <p className="mt-1 text-center font-display text-2xl leading-tight text-tinta sm:text-3xl">
              HACHI NECESITA NUESTRA AYUDA
            </p>

            <div
              ref={barraRef}
              className="relative mt-5 h-7 w-full overflow-hidden rounded-full border-2 border-tinta/10 bg-hueso sm:h-8"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-rosa to-rosa-oscuro transition-[width] duration-[1500ms] ease-out"
                style={{ width: `${barraVisible ? Math.min(100, objetivoPorcentaje) : 0}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-tinta sm:text-sm">
                {contador}%
              </span>
            </div>
            <div className="mt-2 flex justify-between font-mono text-[11px] text-tinta/50 sm:text-xs">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>

            <p className="mt-4 text-center font-body text-xs text-tinta/60">
              La información de donaciones se actualiza todos los días a las 12:00 a. m.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
