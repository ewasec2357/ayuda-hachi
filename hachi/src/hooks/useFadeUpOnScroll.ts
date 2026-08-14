import { useEffect, useRef, useState } from 'react';
import { alTerminarPreloader } from '../lib/preloaderStatus';

export function useFadeUpOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | undefined;

    // Espera a que la pantalla de carga termine antes de empezar a
    // observar: si no, el efecto corre escondido detrás del loader y ya
    // terminó cuando este desaparece.
    const cancelarEspera = alTerminarPreloader(() => {
      // No se desconecta tras el primer disparo: la sección debe volver a
      // aparecer (fade-up) cada vez que reingresa al viewport, no solo una vez.
      observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
        threshold: 0.15,
      });
      observer.observe(node);
    });

    return () => {
      cancelarEspera();
      observer?.disconnect();
    };
  }, []);

  return { ref, className: visible ? 'fade-up-visible' : 'fade-up-hidden' };
}
