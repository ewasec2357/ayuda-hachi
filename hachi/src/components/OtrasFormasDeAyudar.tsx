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
    <section ref={fade.ref} className={`bg-hueso px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-rosa-oscuro">Otras formas de ayudar</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">No todo es dinero</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-rosa-claro p-6 shadow-soft">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rosa-oscuro text-hueso">
              <Share2 size={20} />
            </span>
            <h3 className="mt-3 font-body font-bold text-tinta">Comparte su caso</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
              Cada persona que ve esta página es una donación posible.
            </p>
            <button
              type="button"
              onClick={compartir}
              className="mt-4 font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-rosa-oscuro"
            >
              {compartirStatus === 'copiado' ? 'Enlace copiado' : 'Compartir'}
            </button>
          </div>

          <div className="rounded-lg bg-lima-claro p-6 shadow-soft">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lima-oscuro text-hueso">
              <PawPrint size={20} />
            </span>
            <h3 className="mt-3 font-body font-bold text-tinta">Dona en especie</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
              Alimento, medicamentos, pañales o mantas. Coordina la entrega por el canal de WhatsApp.
            </p>
            <a
              href={`https://wa.me/${campana.contacto.whatsappDirecto}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-lima-oscuro"
            >
              Coordinar
            </a>
          </div>

          <div className="rounded-lg bg-menta/30 p-6 shadow-soft">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tinta text-hueso">
              <Radio size={20} />
            </span>
            <h3 className="mt-3 font-body font-bold text-tinta">Sigue el caso</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
              Actualizaciones y comprobantes en tiempo real.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={campana.contacto.canalWhatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-rosa-oscuro"
              >
                {campana.contacto.canalWhatsapp.nombre}
              </a>
              <a
                href={campana.contacto.tiktok}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-rosa-oscuro"
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
