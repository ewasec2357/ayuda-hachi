import { useEffect, useRef, useState } from 'react';

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

    // No se desconecta tras el primer disparo: la sección debe volver a
    // aparecer (fade-up) cada vez que reingresa al viewport, no solo una vez.
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, className: visible ? 'fade-up-visible' : 'fade-up-hidden' };
}
