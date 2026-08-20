import { useTranslation } from "react-i18next";

export function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section id="por-que-elegirnos" className="why-us">
      <div className="section-header">
        <h2>{t("whyUs.title")}</h2>
        <p>{t("whyUs.subtitle")}</p>
      </div>
      <div className="why-us-grid">
        <div className="why-us-item">
          <span className="why-us-icon">⚡</span>
          <h3>{t("whyUs.b1Title")}</h3>
          <p>{t("whyUs.b1Desc")}</p>
        </div>
        <div className="why-us-item">
          <span className="why-us-icon">🛡️</span>
          <h3>{t("whyUs.b2Title")}</h3>
          <p>{t("whyUs.b2Desc")}</p>
        </div>
        <div className="why-us-item">
          <span className="why-us-icon">📋</span>
          <h3>{t("whyUs.b3Title")}</h3>
          <p>{t("whyUs.b3Desc")}</p>
        </div>
        <div className="why-us-item">
          <span className="why-us-icon">💰</span>
          <h3>{t("whyUs.b4Title")}</h3>
          <p>{t("whyUs.b4Desc")}</p>
        </div>
      </div>
    </section>
  );
}
