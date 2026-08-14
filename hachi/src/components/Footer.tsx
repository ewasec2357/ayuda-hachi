import { useEffect, useState } from 'react';
import { campana } from '../data/campana';

export function Footer() {
  const [mostrarBarra, setMostrarBarra] = useState(false);

  useEffect(() => {
    function onScroll() {
      setMostrarBarra(window.scrollY > window.innerHeight * 0.5);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="bg-tinta px-6 py-12 text-hueso">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-2xl">HACHI</p>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-hueso/70">
            Esta página no cobra comisión. Los aportes van directamente a las cuentas de la responsable del caso.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest">
            <a
              href={campana.contacto.canalWhatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-ambar"
            >
              {campana.contacto.canalWhatsapp.nombre}
            </a>
            <a
              href={campana.contacto.tiktok}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-ambar"
            >
              TikTok
            </a>
            <a href="#donar" className="underline underline-offset-4 hover:text-ambar">
              Donar
            </a>
          </div>
        </div>
      </footer>

      {mostrarBarra && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/15 bg-papel p-3 md:hidden">
          <a href="#donar" className="block w-full rounded bg-ambar py-3 text-center font-mono text-sm uppercase tracking-wide text-tinta">
            Donar
          </a>
        </div>
      )}
    </>
  );
}
