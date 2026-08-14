import { campana } from '../data/campana';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';

const eventos = [
  'Rescate en Villa María del Triunfo, a las afueras del mercado Virgen de Lourdes.',
  'Primeros exámenes veterinarios y evaluación general.',
  'Ecografía abdominal y radiografía de tórax.',
  'Resultado del hemograma: hematocrito, plaquetas y leucocitos.',
  'Ingreso al hogar temporal de HUSI PET PERÚ.',
];

export function Transparencia() {
  const fade = useFadeUpOnScroll<HTMLElement>();

  return (
    <section id="transparencia" ref={fade.ref} className={`bg-lima-claro px-4 py-16 sm:px-6 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-lima-oscuro">Transparencia</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">De dónde viene y a dónde va</h2>

        <div className="mt-10 overflow-hidden rounded-lg bg-papel shadow-soft">
          <div className="grid divide-y divide-tinta/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="p-5 sm:p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-tinta/60">Línea de tiempo</p>
              <ol className="mt-4 space-y-3 border-l-2 border-lima pl-5">
                {eventos.map((evento) => (
                  <li key={evento} className="relative font-body text-sm leading-relaxed text-tinta">
                    <span className="absolute -left-[23px] top-1.5 h-2 w-2 rounded-full bg-rosa" />
                    {evento}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">
              <div className="rounded-lg bg-salvia/15 p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-salvia">Ya cubierto</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-tinta">
                  Alimentación, consultas y movilidad hacia la clínica.
                </p>
              </div>
              <div className="rounded-lg bg-sangre/10 p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-sangre">Falta cubrir</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-tinta">
                  Cirugía, procedimiento y medicamentos: lo más costoso de su tratamiento.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-tinta/10 bg-papel/70 p-5 font-body text-sm leading-relaxed text-tinta/80 sm:p-6">
            <p>
              HACHI está alojado gracias a <strong className="text-tinta">HUSI PET PERÚ (Gabi)</strong>, que le
              brinda hogar temporal y coordina con sus veterinarios. Rescatista y vocera responsable del caso:{' '}
              <a
                href={campana.contacto.tiktok}
                target="_blank"
                rel="noreferrer"
                className="text-rosa-oscuro underline underline-offset-4"
              >
                Valexa Romaldo (@valexaromaldo)
              </a>
              . Los comprobantes y actualizaciones se publican en su TikTok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
