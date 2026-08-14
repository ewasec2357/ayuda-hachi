import { useEffect, useState } from 'react';
import { Dog, Loader2 } from 'lucide-react';

const SHOW_MS = 2400;
const FADE_MS = 400;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => setFading(true), SHOW_MS);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, SHOW_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Cargando"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-hueso transition-opacity duration-300 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rosa-claro shadow-soft">
        <Dog size={40} className="text-rosa-oscuro" strokeWidth={1.75} />
      </div>
      <p className="font-display text-2xl text-tinta">Ayudemos a HACHI</p>
      <Loader2 size={28} className="animate-spin text-rosa-oscuro motion-reduce:animate-none" />
    </div>
  );
}
