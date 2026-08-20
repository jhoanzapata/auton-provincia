import { useTranslation } from "react-i18next";

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="features">
      <div className="section-header">
        <h2>{t("services.title")}</h2>
        <p>{t("services.subtitle")}</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🚪</div>
          <h3>{t("services.s1Title")}</h3>
          <p>{t("services.s1Desc")}</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3>{t("services.s2Title")}</h3>
          <p>{t("services.s2Desc")}</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>{t("services.s3Title")}</h3>
          <p>{t("services.s3Desc")}</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏗️</div>
          <h3>{t("services.s4Title")}</h3>
          <p>{t("services.s4Desc")}</p>
        </div>
      </div>
    </section>
  );
}
