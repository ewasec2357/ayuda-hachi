import { useRef, useState } from 'react';
import { useFadeUpOnScroll } from '../hooks/useFadeUpOnScroll';

interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  {
    src: '/img/hachi-01-rescate-mercado',
    alt: 'HACHI de pie junto a bolsas de basura cerca del mercado Virgen de Lourdes, con la piel visiblemente afectada por sarna y el cuerpo desnutrido.',
  },
  {
    src: '/img/hachi-02-calle-lluvia',
    alt: 'HACHI caminando sobre el pavimento mojado junto a los puestos del mercado, con el pelaje deteriorado por la sarna.',
  },
  {
    src: '/img/hachi-03-calle-lluvia-cerca',
    alt: 'HACHI visto de costado en la calle, mostrando su delgadez y las zonas de piel sin pelo.',
  },
  {
    src: '/img/hachi-04-mirada',
    alt: 'Primer plano del rostro de HACHI mirando a la cámara, con el hocico afectado por la sarna.',
  },
  {
    src: '/img/hachi-05-clinica-consulta',
    alt: 'HACHI recostado sobre la camilla de la clínica veterinaria mientras el personal revisa su historia en una tablet.',
  },
  {
    src: '/img/hachi-06-clinica-piel',
    alt: 'HACHI de espaldas sobre la camilla veterinaria, mostrando las lesiones de piel en su lomo y patas traseras.',
  },
  {
    src: '/img/hachi-07-clinica-descanso',
    alt: 'HACHI dormido sobre una manta blanca en la clínica, ya con atención veterinaria y un vendaje en una de sus patas.',
  },
];

export function Galeria() {
  const fade = useFadeUpOnScroll<HTMLElement>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activa, setActiva] = useState<Foto | null>(null);

  function abrir(foto: Foto) {
    setActiva(foto);
    dialogRef.current?.showModal();
  }

  function cerrar() {
    dialogRef.current?.close();
    setActiva(null);
  }

  return (
    <section id="galeria" ref={fade.ref} className={`bg-hueso px-6 py-16 md:py-24 ${fade.className}`}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-tinta/60">Galería</p>
        <h2 className="mt-2 font-display text-3xl text-tinta md:text-4xl">HACHI, antes y en tratamiento</h2>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => abrir(foto)}
              className="group relative border border-tinta/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
            >
              <picture>
                <source srcSet={`${foto.src}.webp`} type="image/webp" />
                <img
                  src={`${foto.src}.jpg`}
                  alt={foto.alt}
                  width={foto.src.includes('hachi-07') ? 1600 : 1200}
                  height={foto.src.includes('hachi-07') ? 1200 : 1600}
                  loading={i === 0 ? undefined : 'lazy'}
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </picture>
              <span className="absolute inset-x-0 bottom-0 bg-tinta/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-hueso opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                VMT · LIMA · RESCATE
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) cerrar();
        }}
        className="w-[92vw] max-w-3xl bg-transparent p-0 backdrop:bg-tinta/90"
      >
        {activa && (
          <figure className="relative">
            <button
              type="button"
              onClick={cerrar}
              className="absolute -top-10 right-0 font-mono text-xs uppercase tracking-widest text-hueso underline"
            >
              Cerrar
            </button>
            <picture>
              <source srcSet={`${activa.src}.webp`} type="image/webp" />
              <img src={`${activa.src}.jpg`} alt={activa.alt} className="h-auto w-full" />
            </picture>
            <figcaption className="mt-2 font-mono text-xs text-hueso/80">{activa.alt}</figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
