import { useTranslation } from "react-i18next";

export function FAQSection() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <h2>{t("faq.title")}</h2>
        <p>{t("faq.subtitle")}</p>
      </div>
      <div className="faq-list">
        <details className="faq-item">
          <summary className="faq-question">{t("faq.q1")}</summary>
          <p className="faq-answer">{t("faq.a1")}</p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">{t("faq.q2")}</summary>
          <p className="faq-answer">{t("faq.a2")}</p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">{t("faq.q3")}</summary>
          <p className="faq-answer">{t("faq.a3")}</p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">{t("faq.q4")}</summary>
          <p className="faq-answer">{t("faq.a4")}</p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">{t("faq.q5")}</summary>
          <p className="faq-answer">{t("faq.a5")}</p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">{t("faq.q6")}</summary>
          <p className="faq-answer">{t("faq.a6")}</p>
        </details>
      </div>
    </section>
  );
}
