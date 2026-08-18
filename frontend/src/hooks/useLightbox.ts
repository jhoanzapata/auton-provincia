import { useState, useCallback } from 'react';

export function useLightbox<T>(plItems: T[]) {
  const [vIndex, setVIndex] = useState<number | null>(null);
  const vLen = plItems.length;

  const cOpen = useCallback((i: number) => setVIndex(i), []);
  const cClose = useCallback(() => setVIndex(null), []);
  const cNext = useCallback(() => setVIndex(i => (i + 1) % vLen), [vLen]);
  const cPrev = useCallback(() => setVIndex(i => (i - 1 + vLen) % vLen), [vLen]);

  return { index: vIndex, cOpen, cClose, cNext, cPrev };
}