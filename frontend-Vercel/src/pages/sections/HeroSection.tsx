import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-tagline">{t("hero.tagline")}</p>
        <h1 className="hero-title">
          {t("hero.title1")} <br />
          <span className="text-accent">{t("hero.title2")}</span>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0 1.5rem', fontWeight: 600, color: 'var(--color-accent)' }}>
          <span>{t("hero.bullets")}</span>
        </div>

        {/* Chips de beneficios */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {[t("hero.badge1"), t("hero.badge2"), t("hero.badge3")].map((badgeText, idx) => (
            <span
              key={idx}
              style={{
                background: "rgba(184, 115, 51, 0.15)",
                color: "#fff",
                padding: "0.35rem 1rem",
                borderRadius: 50,
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              {badgeText}
            </span>
          ))}
        </div>


        <div className="hero-actions" style={{ gap: "1rem" }}>
          <a href="#presupuesto" className="btn-primary">
            {t("hero.btnQuote")}
          </a>
          <a href="#proyectos" className="btn-secondary">
            {t("hero.btnProjects")}
          </a>
        </div>

        <div className="hero-badge">{t("hero.experience")}</div>
      </div>
    </section>
  );
}
