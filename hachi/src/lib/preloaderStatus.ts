let listo = false;
const escuchas = new Set<() => void>();

export function marcarPreloaderListo() {
  if (listo) return;
  listo = true;
  escuchas.forEach((cb) => cb());
  escuchas.clear();
}

/**
 * Ejecuta `callback` una vez que la pantalla de carga terminó. Si ya
 * terminó, se ejecuta de inmediato — evita que las animaciones de
 * aparición (fade-up, barra de meta) corran escondidas detrás del
 * loader y ya hayan terminado cuando este desaparece.
 */
export function alTerminarPreloader(callback: () => void): () => void {
  if (listo) {
    callback();
    return () => {};
  }
  escuchas.add(callback);
  return () => escuchas.delete(callback);
}
