import { useTranslation } from "react-i18next";

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="testimonios" className="testimonials">
      <div className="section-header">
        <h2>{t("testimonials.title")}</h2>
        <p>{t("testimonials.subtitle")}</p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">"{t("testimonials.t1Text")}"</p>
          <p className="testimonial-author">— {t("testimonials.t1Author")}</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">"{t("testimonials.t2Text")}"</p>
          <p className="testimonial-author">— {t("testimonials.t2Author")}</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">"{t("testimonials.t3Text")}"</p>
          <p className="testimonial-author">— {t("testimonials.t3Author")}</p>
        </div>
      </div>
    </section>
  );
}
