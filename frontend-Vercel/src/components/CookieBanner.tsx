import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '../hooks/useCookieConsent';

export function CookieBanner() {
  const { t } = useTranslation();
  const { vShowBanner, acceptAll, rejectAll, saveCustom } = useCookieConsent();
  const [vShowSettings, setVShowSettings] = useState(false);
  const [vAnalytics, setVAnalytics] = useState(false);
  const [vMarketing, setVMarketing] = useState(false);

  if (!vShowBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="cookie-banner-wrapper"
    >
      <div className="cookie-banner-content">
        {!vShowSettings ? (
          <>
            <h3 id="cookie-title" className="cookie-banner-title">
              {t("cookies.title", "🍪 Usamos cookies")}
            </h3>
            <p id="cookie-desc" className="cookie-banner-desc">
              {t("cookies.desc", "Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenido. Puedes aceptar todas, rechazarlas o configurar tus preferencias.")}
              <br />
              <a href="/politica-cookies" style={{ color: 'var(--color-accent)', textDecoration: 'underline', fontWeight: 500 }}>
                {t("cookies.moreInfo", "Más información en nuestra Política de Cookies")}
              </a>
            </p>
            <div className="cookie-banner-actions">
              <button
                onClick={() => { acceptAll(); }}
                className="btn-cookie-accept"
              >
                {t("cookies.btnAcceptAll", "Aceptar todo")}
              </button>
              <button
                onClick={() => { rejectAll(); }}
                className="btn-cookie-secondary"
              >
                {t("cookies.btnRejectAll", "Rechazar no esenciales")}
              </button>
              <button
                onClick={() => setVShowSettings(true)}
                className="btn-cookie-secondary"
              >
                {t("cookies.btnConfigure", "Configurar")}
              </button>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              {t("cookies.footerNotice", "Puedes cambiar tus preferencias en cualquier momento desde el enlace «Configurar cookies» en el footer.")}
            </p>
          </>
        ) : (
          <>
            <h3 id="cookie-title" style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>
              {t("cookies.settingsTitle", "Configurar cookies")}
            </h3>
            <p style={{ margin: '0 0 1.5rem', color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
              {t("cookies.settingsDesc", "Elige qué categorías de cookies permitir. Las cookies necesarias son obligatorias para el funcionamiento del sitio.")}
            </p>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div>
                  <strong style={{ color: 'var(--color-text)' }}>{t("cookies.necessaryTitle", "Cookies necesarias")}</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                    {t("cookies.necessaryDesc", "Imprescindibles para la navegación y funcionamiento básico. No se pueden desactivar.")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Cookies necesarias (siempre activas)"
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div>
                  <strong style={{ color: 'var(--color-text)' }}>{t("cookies.analyticsTitle", "Cookies analíticas")}</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                    {t("cookies.analyticsDesc", "Nos ayudan a entender cómo interactúas con la web (páginas visitadas, tiempo, errores). Anónimas.")}
                  </p>
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={vAnalytics}
                    onChange={(e) => setVAnalytics(e.target.checked)}
                  />
                  <span style={{ width: 44, height: 24, background: vAnalytics ? 'var(--grad-brand)' : 'rgba(255,255,255,0.2)', borderRadius: 12, position: 'relative', transition: 'background 0.2s' }}>
                    <span style={{ position: 'absolute', top: 2, left: vAnalytics ? 22 : 2, width: 20, height: 20, background: '#fff', borderRadius: '50%', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                  </span>
                </label>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div>
                  <strong style={{ color: 'var(--color-text)' }}>{t("cookies.marketingTitle", "Cookies de marketing")}</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                    {t("cookies.marketingDesc", "Permiten mostrar anuncios personalizados y medir campañas (Facebook Pixel, etc.).")}
                  </p>
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={vMarketing}
                    onChange={(e) => setVMarketing(e.target.checked)}
                  />
                  <span style={{ width: 44, height: 24, background: vMarketing ? 'var(--grad-brand)' : 'rgba(255,255,255,0.2)', borderRadius: 12, position: 'relative', transition: 'background 0.2s' }}>
                    <span style={{ position: 'absolute', top: 2, left: vMarketing ? 22 : 2, width: 20, height: 20, background: '#fff', borderRadius: '50%', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                  </span>
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setVShowSettings(false)}
                style={{
                  background: 'transparent',
                  color: 'var(--color-text)',
                  border: '1px solid rgba(228, 87, 27, 0.5)',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t("cookies.btnBack", "Volver")}
              </button>
              <button
                onClick={() => { saveCustom(vAnalytics, vMarketing); }}
                style={{
                  background: 'var(--grad-brand)',
                  color: '#14161A', /* WCAG 2.1: texto negro sobre naranja */
                  border: 'none',
                  padding: '0.6rem 1.5rem',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t("cookies.btnSave", "Guardar preferencias")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
