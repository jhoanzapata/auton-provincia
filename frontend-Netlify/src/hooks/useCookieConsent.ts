import { useState, useEffect, useCallback } from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'auton-cookie-consent';
const EXPIRY_DAYS = 365;

// Evento para reabrir el banner desde cualquier parte de la web (p. ej. footer)
export const OPEN_SETTINGS_EVENT = 'auton:open-cookie-settings';

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function useCookieConsent() {
  const [vConsent, setVConsent] = useState<CookieConsent | null>(null);
  const [vShowBanner, setVShowBanner] = useState(false);

  // Cargar consentimiento al montar
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookieConsent;
        // Verificar expiración
        const age = Date.now() - parsed.timestamp;
        if (age < EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
          setVConsent(parsed);
          setVShowBanner(false);
        } else {
          localStorage.removeItem(STORAGE_KEY);
          setVShowBanner(true);
        }
      } else {
        setVShowBanner(true);
      }
    } catch {
      setVShowBanner(true);
    }
  }, []);

  // Reabrir el banner desde cualquier parte (evento disparado por el footer)
  useEffect(() => {
    const cHandler = () => setVShowBanner(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, cHandler);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, cHandler);
  }, []);

  // Guardar consentimiento
  const saveConsent = useCallback((categories: Partial<Omit<CookieConsent, 'necessary' | 'timestamp'>>) => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: categories.analytics ?? false,
      marketing: categories.marketing ?? false,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    setVConsent(newConsent);
    setVShowBanner(false);
    // Cargar scripts de analítica/marketing si se aceptaron
    loadScripts(newConsent);
  }, []);

  // Aceptar todo
  const acceptAll = useCallback(() => {
    saveConsent({ analytics: true, marketing: true });
  }, [saveConsent]);

  // Rechazar todo (solo necesarias)
  const rejectAll = useCallback(() => {
    saveConsent({ analytics: false, marketing: false });
  }, [saveConsent]);

  // Configuración personalizada
  const saveCustom = useCallback((analytics: boolean, marketing: boolean) => {
    saveConsent({ analytics, marketing });
  }, [saveConsent]);

  // Resetear (para testing / página de configuración)
  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setVConsent(null);
    setVShowBanner(true);
  }, []);

  return {
    consent: vConsent,
    vShowBanner,
    acceptAll,
    rejectAll,
    saveCustom,
    reset,
    hasConsented: vConsent !== null,
  };
}

// Cargar scripts de terceros según consentimiento
function loadScripts() {
  // NOTA: No hay Google Analytics ni Facebook Pixel configurados actualmente.
  // Cuando se añadan, descomentar y configurar con IDs reales.
  //
  // if (consent.analytics && !window.gtag) {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TU_ID_REAL';
  //   document.head.appendChild(script);
  //   window.dataLayer = window.dataLayer || [];
  //   window.gtag = function gtag() { window.dataLayer.push(arguments); };
  //   window.gtag('js', new Date());
  //   window.gtag('config', 'G-TU_ID_REAL');
  // }
  //
  // if (consent.marketing) {
  //   // Facebook Pixel, etc.
  // }
}

// Extender Window para gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}