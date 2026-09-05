import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mPrivacyTexts } from '../i18n/legalTexts';

export function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const vCurrentLng = (i18n.resolvedLanguage ?? i18n.language ?? "es").split("-")[0];
  const vTexts = mPrivacyTexts[vCurrentLng] ?? mPrivacyTexts["es"];

  return (
    <section id="politica-privacidad" className="legal-page">
      <div className="legal-container">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              background: "rgba(228, 87, 27, 0.15)",
              color: "#fff",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              border: "1px solid rgba(228, 87, 27, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            {t("legal.backHome")}
          </Link>
        </div>
        <nav aria-label="Navegación">
          <Link to="/">{t("navbar.home")}</Link>
          <span style={{ color: 'var(--color-text-muted)' }}>›</span>
          <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{vTexts.title}</span>
        </nav>

        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
            {vTexts.title}
          </h1>
          <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', maxWidth: 600 }}>
            {vTexts.subtitle}
          </p>
        </header>

        <article style={{ lineHeight: 1.8, color: 'var(--color-text)' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
              {vTexts.s1Title}
            </h2>
            <p style={{ whiteSpace: 'pre-line' }}>{vTexts.s1Text}</p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
              {vTexts.s2Title}
            </h2>
            <p>{vTexts.s2Text}</p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
              {vTexts.s3Title}
            </h2>
            <p>{vTexts.s3Text}</p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
              {vTexts.s4Title}
            </h2>
            <p>{vTexts.s4Text}</p>
          </section>
        </article>
      </div>
    </section>
  );
}