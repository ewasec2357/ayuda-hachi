import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { campana } from '../data/campana';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';

function CopyField({
  label,
  value,
  note,
  copiable = true,
}: {
  label: string;
  value: string;
  note?: string;
  copiable?: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-b border-tinta/10 py-2.5 last:border-b-0">
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-tinta/60">{label}</p>
        <p ref={ref} className="select-all break-words font-mono text-sm text-tinta">
          {value}
        </p>
        {note && <p className="mt-1 font-body text-xs text-tinta/60">{note}</p>}
      </div>
      {copiable && <CopyButton value={value} targetRef={ref} className="shrink-0 !px-3 !py-1.5 !text-xs" />}
    </div>
  );
}

export function ComoDonar() {
  const fade = useFadeUpOnScroll<HTMLElement>();
  const plinRef = useRef<HTMLParagraphElement>(null);
  const { pagos, contacto } = campana;

  return (
    <section id="donar" ref={fade.ref} className={`relative overflow-hidden bg-hueso px-4 py-16 sm:px-6 md:py-24 ${fade.className}`}>
      <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 bg-menta/40 blob-2 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-40 w-40 bg-amarillo/30 blob-3 md:h-56 md:w-56" />
      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-widest text-rosa-oscuro">Cómo donar</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">Ayuda directa a su tratamiento</h2>

        <div className="mt-10 overflow-hidden rounded-lg shadow-soft">
          <div className="grid divide-y divide-tinta/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Plin / Yape */}
            <div className="flex flex-col bg-rosa-claro p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-widest text-rosa-oscuro">Plin y Yape · Perú</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <p ref={plinRef} className="select-all break-all font-mono text-2xl text-tinta sm:text-3xl">
                  {pagos.plin.numeroFormateado}
                </p>
                <CopyButton value={pagos.plin.numero} targetRef={plinRef} className="shrink-0 bg-papel !px-3 !py-1.5 !text-xs" />
              </div>
              <p className="mt-2 font-body text-xs text-tinta/70 sm:text-sm">Titular: {pagos.titular}</p>
              <p className="mt-3 font-body text-xs leading-relaxed text-tinta sm:text-sm">
                ¿Usas Yape? Elige <strong>Otros bancos / PLIN</strong> dentro de la app.
              </p>
              <div className="mt-5 flex justify-center">
                <img
                  src="/qr/plin-numero.png"
                  alt="Código QR que contiene el número de Plin y Yape 922 837 643"
                  width={176}
                  height={176}
                  loading="lazy"
                  className="h-36 w-36 rounded-sm bg-papel p-2 shadow-soft sm:h-44 sm:w-44"
                />
              </div>
            </div>

            {/* Transferencia bancaria */}
            <div className="flex flex-col bg-lima-claro p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-widest text-lima-oscuro">Transferencia bancaria</p>
              <div className="mt-2 flex-1 rounded-lg bg-papel/70 px-3">
                <CopyField label="Banco" value={pagos.banco.entidad} copiable={false} />
                <CopyField label="Cuenta" value={pagos.banco.cuenta} />
                <CopyField label="CCI" value={pagos.banco.cci} note="Usa el CCI si transfieres desde otro banco." />
                <CopyField label="Titular" value={pagos.titular} copiable={false} />
              </div>
              <p className="mt-3 font-body text-xs text-tinta/60">Sin topes diarios: recomendada para montos altos.</p>
            </div>

            {/* PayPal */}
            <div className="flex flex-col bg-amarillo/25 p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-widest text-rosa-oscuro">PayPal · extranjero</p>
              <div className="mt-3 rounded-lg bg-papel/70 px-3">
                <CopyField label="Correo" value={pagos.paypal.correo} />
              </div>
              <div className="mt-5 flex flex-col items-center gap-2">
                <img
                  src={pagos.paypal.qr}
                  alt="Código QR para donar a HACHI por PayPal"
                  width={176}
                  height={176}
                  loading="lazy"
                  className="h-36 w-36 rounded-sm border-2 border-papel bg-papel shadow-soft sm:h-44 sm:w-44"
                />
                <a
                  href={pagos.paypal.qr}
                  download
                  className="font-mono text-xs uppercase tracking-wide text-tinta underline underline-offset-4 hover:text-rosa-oscuro"
                >
                  Descargar QR
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 border-t border-tinta/10 pt-8">
          <p className="font-body text-sm text-tinta/70">
            Todas las actualizaciones y comprobantes del caso se publican en el canal oficial de WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contacto.canalWhatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-tinta/15 px-5 py-3 font-mono text-sm uppercase tracking-wide text-tinta hover:border-rosa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa"
            >
              <MessageCircle size={16} />
              {contacto.canalWhatsapp.nombre}
            </a>
            {contacto.whatsappDirecto && (
              <a
                href={`https://wa.me/${contacto.whatsappDirecto}?text=Hola,%20acabo%20de%20donar%20para%20HACHI`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rosa-oscuro px-5 py-3 font-mono text-sm uppercase tracking-wide text-hueso hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa focus-visible:ring-offset-2"
              >
                <MessageCircle size={16} />
                Enviar comprobante
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
