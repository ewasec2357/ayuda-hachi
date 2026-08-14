import { useState } from 'react';
import { Share2, PawPrint, Radio } from 'lucide-react';
import { campana } from '../data/campana';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';

type CompartirStatus = 'idle' | 'copiado';

export function OtrasFormasDeAyudar() {
  const fade = useFadeUpOnScroll<HTMLElement>();
  const [compartirStatus, setCompartirStatus] = useState<CompartirStatus>('idle');

  async function compartir() {
    const shareData = {
      title: 'Ayuda a HACHI',
      text: 'HACHI es un perro rescatado que necesita cirugía. Conoce su caso y cómo ayudar.',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // usuario canceló o el share falló; seguimos al fallback de copiar
      }
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCompartirStatus('copiado');
      setTimeout(() => setCompartirStatus('idle'), 2000);
    } catch {
      // clipboard no disponible; sin backend no hay más fallback posible aquí
    }
  }

  return (
    <section ref={fade.ref} className={`bg-papel px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-tinta/60">Otras formas de ayudar</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">No todo es dinero</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border border-tinta/15 p-6">
            <Share2 className="text-ambar-texto" size={22} />
            <h3 className="mt-3 font-body font-medium text-tinta">Comparte su caso</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
              Cada persona que ve esta página es una donación posible.
            </p>
            <button
              type="button"
              onClick={compartir}
              className="mt-4 font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-ambar-texto"
            >
              {compartirStatus === 'copiado' ? 'Enlace copiado' : 'Compartir'}
            </button>
          </div>

          <div className="border border-tinta/15 p-6">
            <PawPrint className="text-ambar-texto" size={22} />
            <h3 className="mt-3 font-body font-medium text-tinta">Dona en especie</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
              Alimento, medicamentos, pañales o mantas. Coordina la entrega por el canal de WhatsApp.
            </p>
            <a
              href={campana.contacto.canalWhatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-ambar-texto"
            >
              Coordinar
            </a>
          </div>

          <div className="border border-tinta/15 p-6">
            <Radio className="text-ambar-texto" size={22} />
            <h3 className="mt-3 font-body font-medium text-tinta">Sigue el caso</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
              Actualizaciones y comprobantes en tiempo real.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={campana.contacto.canalWhatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-ambar-texto"
              >
                {campana.contacto.canalWhatsapp.nombre}
              </a>
              <a
                href={campana.contacto.tiktok}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-ambar-texto"
              >
                TikTok @valexaromaldo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
