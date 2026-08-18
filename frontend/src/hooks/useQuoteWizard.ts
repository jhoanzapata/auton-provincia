import { useState, useEffect, useCallback } from 'react';

const PRICE_PER_M2 = {
  corredera: 180,
  seccional: 220,
  abatible: 150,
} as const;
type DoorTypeKey = keyof typeof PRICE_PER_M2;

const DOOR_TYPE_LABELS: Record<DoorTypeKey, string> = {
  corredera: 'Corredera',
  seccional: 'Seccional',
  abatible: 'Abatible',
};

const STORAGE_KEY = 'auton-quote-state';

interface QuoteState {
  step: number;
  doorType: DoorTypeKey | null;
  width: number | null;
  height: number | null;
  color: string;
}

function loadState(): QuoteState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as QuoteState;
    return {
      ...parsed,
      doorType: normalizeDoorType(parsed.doorType),
    };
  } catch {
    // ignore parse errors
  }
  return null;
}

function saveState(state: QuoteState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore write errors
  }
}

function normalizeDoorType(vDoorType: string | null): DoorTypeKey | null {
  if (!vDoorType) return null;

  const vNormalized = vDoorType.toLowerCase();
  if (vNormalized in PRICE_PER_M2) {
    return vNormalized as DoorTypeKey;
  }

  return null;
}

export function useQuoteWizard() {
  const [vStep, setVStep] = useState(1);
  const [vDoorType, setVDoorType] = useState<DoorTypeKey | null>(null);
  const [vWidth, setVWidth] = useState<number | null>(null);
  const [vHeight, setVHeight] = useState<number | null>(null);
  const [vColor, setVColor] = useState<string>('');

  // Persistencia
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      setVStep(saved.step);
      setVDoorType(saved.doorType);
      setVWidth(saved.width);
      setVHeight(saved.height);
      setVColor(saved.color);
    }
  }, []);

  const cPersist = useCallback(() => {
    saveState({ step: vStep, doorType: vDoorType, width: vWidth, height: vHeight, color: vColor });
  }, [vStep, vDoorType, vWidth, vHeight, vColor]);

  useEffect(() => { cPersist(); }, [cPersist]);

  const cReset = () => {
    setVStep(1);
    setVDoorType(null);
    setVWidth(null);
    setVHeight(null);
    setVColor('');
    localStorage.removeItem(STORAGE_KEY);
  };

  // Validación
  const vIsWidthValid = vWidth !== null && vWidth >= 0.5 && vWidth <= 10;
  const vIsHeightValid = vHeight !== null && vHeight >= 0.5 && vHeight <= 10;
  const vMeasuresValid = vIsWidthValid && vIsHeightValid;

  // Precio estimado
  const vEstimatedPrice = (() => {
    if (!vDoorType || vWidth === null || vHeight === null) return null;
    const vArea = vWidth * vHeight;
    const vBase = PRICE_PER_M2[vDoorType] || 180;
    return Math.round(vArea * vBase);
  })();

  const cSubmit = (): boolean => {
    if (!vDoorType || vWidth === null || vHeight === null) return false;
    const vDoorTypeLabel = DOOR_TYPE_LABELS[vDoorType] ?? vDoorType;

    const parts = [
      `Hola, quiero solicitar un presupuesto para una puerta ${vDoorTypeLabel}.`,
      `Medidas: ${vWidth} metros de ancho x ${vHeight} metros de alto.`,
    ];
    if (vColor) parts.push(`Color: ${vColor}.`);
    if (vEstimatedPrice) parts.push(`Precio estimado: ~${vEstimatedPrice.toLocaleString()} €.`);

    const message = encodeURIComponent(parts.join('\n'));
    return Boolean(window.open(`https://wa.me/34694917083?text=${message}`, '_blank'));
  };

  return { 
    vStep,
    cSetStep: setVStep,
    vDoorType,
    cSetDoorType: setVDoorType,
    vWidth,
    cSetWidth: setVWidth,
    vHeight,
    cSetHeight: setVHeight,
    vColor,
    cSetColor: setVColor,
    vEstimatedPrice,
    vIsWidthValid,
    vIsHeightValid,
    vMeasuresValid,
    cReset,
    cSubmit,
  };
}
