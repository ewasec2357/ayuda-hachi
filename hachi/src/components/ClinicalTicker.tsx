type Tono = 'critico' | 'alerta' | 'bueno';

interface TickerItem {
  label: string;
  tono: Tono;
}

const items: TickerItem[] = [
  { label: 'HEMATOCRITO 15% ↓ CRÍTICO', tono: 'critico' },
  { label: 'PLAQUETAS ↓', tono: 'alerta' },
  { label: 'LEUCOCITOS ↑', tono: 'alerta' },
  { label: 'ALBÚMINA ↓', tono: 'alerta' },
  { label: 'METÁSTASIS NEGATIVO ✓', tono: 'bueno' },
];

const toneClass: Record<Tono, string> = {
  critico: 'text-sangre',
  alerta: 'text-ambar-texto',
  bueno: 'text-salvia',
};

function TickerRow() {
  return (
    <>
      {items.map((item) => (
        <span key={item.label} className={`whitespace-nowrap px-4 font-mono text-xs sm:text-sm tracking-wide ${toneClass[item.tono]}`}>
          {item.label}
          <span className="ml-4 text-tinta/20">·</span>
        </span>
      ))}
    </>
  );
}

export function ClinicalTicker() {
  return (
    <div className="w-full overflow-hidden border-y border-tinta/15 bg-papel py-3">
      <div className="ticker-track hidden w-max md:flex">
        <TickerRow />
        <TickerRow />
      </div>
      <div className="flex flex-wrap justify-center gap-y-1 md:hidden">
        <TickerRow />
      </div>
    </div>
  );
}
