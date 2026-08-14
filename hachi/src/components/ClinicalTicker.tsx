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
  critico: 'bg-sangre/10 text-sangre',
  alerta: 'bg-ambar/15 text-ambar-texto',
  bueno: 'bg-salvia/10 text-salvia',
};

function TickerRow() {
  return (
    <>
      {items.map((item) => (
        <span
          key={item.label}
          className={`mx-1.5 inline-block whitespace-nowrap rounded-full px-4 py-1.5 font-mono text-xs sm:text-sm tracking-wide ${toneClass[item.tono]}`}
        >
          {item.label}
        </span>
      ))}
    </>
  );
}

export function ClinicalTicker() {
  return (
    <div className="w-full overflow-hidden border-y-2 border-lima-claro bg-papel py-3">
      <div className="ticker-track hidden w-max md:flex">
        <TickerRow />
        <TickerRow />
      </div>
      <div className="flex flex-wrap justify-center gap-y-2 md:hidden">
        <TickerRow />
      </div>
    </div>
  );
}
