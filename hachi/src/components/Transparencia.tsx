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
    <section id="transparencia" ref={fade.ref} className={`bg-papel px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-tinta/50">Transparencia</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">De dónde viene y a dónde va</h2>

        <ol className="mt-10 space-y-4 border-l border-tinta/15 pl-6">
          {eventos.map((evento) => (
            <li key={evento} className="relative font-body leading-relaxed text-tinta">
              <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-ambar" />
              {evento}
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border border-salvia/40 bg-salvia/5 p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-salvia">Ya cubierto</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta">
              Alimentación, consultas y movilidad hacia la clínica.
            </p>
          </div>
          <div className="border border-sangre/40 bg-sangre/5 p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-sangre">Falta cubrir</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-tinta">
              Cirugía, procedimiento y medicamentos: lo más costoso de su tratamiento.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-tinta/10 pt-8 font-body text-sm leading-relaxed text-tinta/70">
          <p>
            HACHI está alojado gracias a <strong className="text-tinta">HUSI PET PERÚ (Gabi)</strong>, que le brinda
            hogar temporal y coordina con sus veterinarios.
          </p>
          <p className="mt-2">
            Rescatista y vocera responsable del caso:{' '}
            <a
              href={campana.contacto.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-ambar-texto underline underline-offset-4"
            >
              Valexa Romaldo (@valexaromaldo)
            </a>
            .
          </p>
          <p className="mt-2">Los comprobantes y actualizaciones se publican en su TikTok.</p>
        </div>
      </div>
    </section>
  );
}
