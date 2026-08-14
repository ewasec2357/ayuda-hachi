export type Tendencia = 'critico' | 'alerta' | 'bueno';

export interface Hallazgo {
  label: string;
  valor: string;
  tendencia: Tendencia;
  explicacion: string;
}

export const campana = {
  perro: {
    nombre: 'HACHI',
    sexo: 'macho',
    edadAprox: 8,
    lugarRescate: 'Villa María del Triunfo, Lima, Perú',
    referencia: 'afueras del mercado Virgen de Lourdes',
    fechaRescate: null as string | null, // PENDIENTE_FECHA
  },
  estado: {
    actualizadoAl: null as string | null, // PENDIENTE_FECHA
    hallazgos: [
      {
        label: 'MASAS ABDOMINALES',
        valor: '2 masas',
        tendencia: 'critico',
        explicacion:
          'Dos masas abdominales, altamente compatibles con testículos retenidos (criptorquidia) y tumores testiculares.',
      },
      {
        label: 'ANEMIA NO REGENERATIVA',
        valor: 'Hematocrito 15%',
        tendencia: 'critico',
        explicacion:
          'Su médula ósea no alcanza a producir glóbulos rojos. El hematocrito bajó de 20% a 15%: por debajo de 20% la transfusión deja de ser opcional.',
      },
      {
        label: 'PLAQUETAS',
        valor: 'Trombocitopenia',
        tendencia: 'alerta',
        explicacion: 'Plaquetas reducidas, con riesgo de microhemorragias.',
      },
      {
        label: 'LINFOCITOS',
        valor: 'Linfopenia',
        tendencia: 'alerta',
        explicacion: 'Defensas bajas, asociadas al cuadro general de infección e inflamación.',
      },
      {
        label: 'PRÓSTATA',
        valor: 'Absceso / infección',
        tendencia: 'critico',
        explicacion: 'Absceso e infección prostática, con alteraciones que requieren drenaje.',
      },
      {
        label: 'VÍAS URINARIAS',
        valor: 'Infección urinaria',
        tendencia: 'alerta',
        explicacion: 'Infección activa que se atiende junto al resto del cuadro clínico.',
      },
      {
        label: 'VESÍCULA BILIAR',
        valor: 'Inflamación y sedimento',
        tendencia: 'alerta',
        explicacion: 'Cambios inflamatorios y sedimento visibles en la ecografía abdominal.',
      },
      {
        label: 'RIÑONES',
        valor: 'Cambios degenerativos leves',
        tendencia: 'bueno',
        explicacion: 'Cambios leves, pero la función renal se mantiene estable según sus últimos análisis.',
      },
      {
        label: 'ALBÚMINA',
        valor: 'Baja',
        tendencia: 'alerta',
        explicacion:
          'Riesgo de edema y acumulación de líquido en cavidades; si sigue bajando se indica albúmina sintética.',
      },
      {
        label: 'LEUCOCITOS',
        valor: 'Elevados',
        tendencia: 'alerta',
        explicacion: 'Señal de inflamación o infección activa en el organismo.',
      },
      {
        label: 'PIEL Y NUTRICIÓN',
        valor: 'Sarna y desnutrición',
        tendencia: 'alerta',
        explicacion: 'Llegó con desnutrición marcada y sarna; ambas están en tratamiento.',
      },
    ] as Hallazgo[],
    sinMetastasis: true,
  },
  meta: {
    objetivo: null as number | null, // PENDIENTE_META_TOTAL (monto en soles) — aún no confirmado
    recaudado: null as number | null, // PENDIENTE_RECAUDADO (monto en soles) — aún no confirmado
    porcentaje: 10 as number | null, // % de la meta alcanzado, confirmado por la responsable — si es null, no se renderiza la barra
  },
  pagos: {
    titular: 'Valexa Rodríguez Romaldo',
    plin: {
      numero: '922837643',
      numeroFormateado: '922 837 643',
      aceptaYape: true,
      notaYape: "En Yape elige 'Otros bancos / PLIN'",
      qr: null as string | null, // no se proveyó QR de Plin
    },
    banco: {
      entidad: 'Interbank',
      cuenta: '8983342595695',
      cci: '00389801334259569549',
    },
    paypal: {
      correo: 'valexarromaldo@gmail.com', // doble "r" confirmada, NO corregir
      url: null as string | null, // no hay paypal.me confirmado
      qr: '/qr/paypal.png',
    },
  },
  contacto: {
    whatsappDirecto: '922837643' as string | null, // confirmado por Valexa vía WhatsApp: es su wsp directo, se usa para "Dona en especie"
    canalWhatsapp: {
      nombre: 'UNIDOS POR HACHI',
      url: 'https://whatsapp.com/channel/0029VbDiu078KMqcXB4Z103a',
    },
    tiktok: 'https://www.tiktok.com/@valexaromaldo',
  },
  aliados: [{ nombre: 'HUSI PET PERÚ', rol: 'Hogar temporal', enlace: '' }],
} as const;
