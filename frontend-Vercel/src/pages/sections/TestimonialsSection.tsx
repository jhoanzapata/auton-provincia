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

      {/* Kit de Reseñas Google / Conversión Local VIAMOS */}
      <div className="review-kit-card" style={{
        marginTop: "2.5rem",
        padding: "1.75rem 2rem",
        borderRadius: "16px",
        background: "rgba(43, 48, 56, 0.6)",
        border: "1px solid rgba(228, 87, 27, 0.25)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "1.25rem", color: "#FF9633" }}>★★★★★</span>
            <span style={{ fontWeight: 700, color: "#fff", fontFamily: "'Oswald', sans-serif", fontSize: "1.1rem" }}>
              {t("testimonials.googleBadge", "VALORACIONES EN GOOGLE")}
            </span>
          </div>
          <p style={{ color: "var(--color-text-dim)", margin: 0, fontSize: "0.95rem" }}>
            {t("testimonials.googleDesc", "¿Hemos instalado o automatizado tu puerta? Tu opinión nos ayuda a seguir siendo el referente en Alicante y provincia.")}
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJc192_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.9rem", padding: "0.6rem 1.25rem" }}
          >
            {t("testimonials.googleBtn", "⭐ Dejar reseña en Google")}
          </a>
          <a
            href="https://wa.me/?text=%C2%A1Hola!%20Muchas%20gracias%20por%20confiar%20en%20Automatismos%20La%20Provincia.%20%C2%BFNos%20ayudar%C3%ADas%20dejando%20tu%20opini%C3%B3n%20en%20Google%3F%20Nos%20ayuda%20much%C3%ADsimo%20a%20seguir%20creciendo:%20https://auton-provincia.vercel.app/%23testimonios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: "0.9rem", padding: "0.6rem 1.25rem" }}
          >
            {t("testimonials.waBtn", "📲 Pedir reseña por WhatsApp")}
          </a>
        </div>
      </div>
    </section>
  );
}
