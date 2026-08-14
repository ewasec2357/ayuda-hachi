import { campana } from '../data/campana';

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.32.16 11.87c0 2.09.55 4.14 1.58 5.94L.06 24l6.34-1.66a11.9 11.9 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.32 11.89-11.87 0-3.17-1.23-6.15-3.43-8.43ZM12.06 21.7h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.37a9.87 9.87 0 0 1-1.52-5.2C2.15 6.4 6.6 1.97 12.06 1.97a9.85 9.85 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.88 9.9Z" />
    </svg>
  );
}

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.9-.83-1.44-1.98-1.53-3.23h-3.02v13.44c0 1.66-1.35 3.01-3.02 3.01a3.01 3.01 0 0 1-3.02-3.01 3.01 3.01 0 0 1 3.02-3.02c.31 0 .61.05.9.13v-3.06a6.1 6.1 0 0 0-.9-.07A6.03 6.03 0 0 0 3 15.97 6.03 6.03 0 0 0 9.03 22a6.03 6.03 0 0 0 6.02-6.03V9.4a9.15 9.15 0 0 0 5.33 1.7V8.08a5.98 5.98 0 0 1-3.78-2.26Z" />
    </svg>
  );
}

export function FloatingActions() {
  const { contacto } = campana;

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={contacto.canalWhatsapp.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir el canal de WhatsApp ${contacto.canalWhatsapp.nombre}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa focus-visible:ring-offset-2"
      >
        <WhatsAppIcon size={28} />
      </a>
      <a
        href={contacto.tiktok}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir el TikTok de Valexa Romaldo"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-tinta text-white shadow-soft transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa focus-visible:ring-offset-2"
      >
        <TikTokIcon size={24} />
      </a>
    </div>
  );
}
