import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { campana } from '../data/campana';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';

function CopyField({ label, value, note }: { label: string; value: string; note?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  return (
    <div className="flex items-center justify-between gap-4 border-b border-tinta/10 py-3 last:border-b-0">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-tinta/60">{label}</p>
        <p ref={ref} className="select-all font-mono text-lg text-tinta">
          {value}
        </p>
        {note && <p className="mt-1 font-body text-xs text-tinta/60">{note}</p>}
      </div>
      <CopyButton value={value} targetRef={ref} />
    </div>
  );
}

export function ComoDonar() {
  const fade = useFadeUpOnScroll<HTMLElement>();
  const plinRef = useRef<HTMLParagraphElement>(null);
  const { pagos, contacto } = campana;

  return (
    <section id="donar" ref={fade.ref} className={`bg-hueso px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-tinta/60">Cómo donar</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">Ayuda directa a su tratamiento</h2>

        <div className="mt-10 space-y-8">
          <div className="border border-tinta/15 bg-papel p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-ambar-texto">Plin y Yape · Perú</p>
            <p ref={plinRef} className="mt-2 select-all font-mono text-3xl text-tinta">
              {pagos.plin.numeroFormateado}
            </p>
            <p className="mt-1 font-body text-sm text-tinta/70">Titular: {pagos.titular}</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-tinta">
              ¿Usas Yape? También puedes enviar a este número: elige <strong>Otros bancos / PLIN</strong> dentro de
              la app.
            </p>
            <CopyButton value={pagos.plin.numero} targetRef={plinRef} className="mt-4" />
          </div>

          <div className="border border-tinta/15 bg-papel p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-ambar-texto">Transferencia bancaria</p>
            <div className="mt-2">
              <CopyField label="Banco" value={pagos.banco.entidad} />
              <CopyField label="Cuenta" value={pagos.banco.cuenta} />
              <CopyField label="CCI" value={pagos.banco.cci} note="Usa el CCI si transfieres desde otro banco." />
              <CopyField label="Titular" value={pagos.titular} />
            </div>
            <p className="mt-4 font-body text-xs text-tinta/60">
              Recomendada para montos altos: no tiene los topes diarios de Yape y Plin.
            </p>
          </div>

          <div className="border border-tinta/15 bg-papel p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-ambar-texto">PayPal · desde el extranjero</p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
              <img
                src={pagos.paypal.qr}
                alt="Código QR para donar a HACHI por PayPal"
                width={240}
                height={240}
                loading="lazy"
                className="border border-tinta/15 bg-white"
              />
              <div className="flex-1">
                <CopyField label="Correo" value={pagos.paypal.correo} />
                <a
                  href={pagos.paypal.qr}
                  download
                  className="mt-3 inline-block font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-ambar-texto"
                >
                  Descargar QR
                </a>
                <p className="mt-2 font-body text-xs text-tinta/60">Recomendado si donas desde fuera de Perú.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 border-t border-tinta/10 pt-8">
          <p className="font-body text-sm text-tinta/70">
            Todas las actualizaciones y comprobantes del caso se publican en el canal oficial de WhatsApp.
          </p>
          <a
            href={contacto.canalWhatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-tinta/15 px-5 py-3 font-mono text-sm uppercase tracking-wide text-tinta hover:border-ambar focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
          >
            <MessageCircle size={16} />
            {contacto.canalWhatsapp.nombre}
          </a>
        </div>
      </div>
    </section>
  );
}
