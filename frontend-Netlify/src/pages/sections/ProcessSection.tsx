import { useTranslation } from "react-i18next";

export function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section id="proceso" className="process">
      <div className="section-header">
        <h2>{t("process.title")}</h2>
        <p>{t("process.subtitle")}</p>
      </div>
      <div className="process-steps">
        <div className="process-step">
          <span className="process-number">1</span>
          <div className="process-step-content">
            <h3>{t("process.p1Title")}</h3>
            <p>{t("process.p1Desc")}</p>
          </div>
        </div>
        <div className="process-step">
          <span className="process-number">2</span>
          <div className="process-step-content">
            <h3>{t("process.p2Title")}</h3>
            <p>{t("process.p2Desc")}</p>
          </div>
        </div>
        <div className="process-step">
          <span className="process-number">3</span>
          <div className="process-step-content">
            <h3>{t("process.p3Title")}</h3>
            <p>{t("process.p3Desc")}</p>
          </div>
        </div>
        <div className="process-step">
          <span className="process-number">4</span>
          <div className="process-step-content">
            <h3>{t("process.p4Title")}</h3>
            <p>{t("process.p4Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
