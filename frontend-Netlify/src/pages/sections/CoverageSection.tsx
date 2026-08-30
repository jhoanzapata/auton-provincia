import { useTranslation } from "react-i18next";
import { companyInfo } from "../../config/companyData";

const CITIES = [
  "Alicante",
  "Elche / Elx",
  "Torrevieja",
  "Benidorm",
  "Orihuela",
  "Santa Pola",
  "Guardamar del Segura",
  "San Vicente del Raspeig",
  "Villena",
  "Petrer",
  "Novelda",
  "Crevillent",
  "Mutxamel",
  "El Campello",
  "Altea",
  "Calpe / Calp",
];

export function CoverageSection() {
  const { t } = useTranslation();

  return (
    <section
      className="coverage-section"
      id="cobertura"
      style={{
        background: "linear-gradient(180deg, #222222 0%, #1a1a1a 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "4.5rem 1.5rem 5rem 1.5rem",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 800,
              color: "#d28a4a",
              background: "rgba(184, 115, 51, 0.15)",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              border: "1px solid rgba(210, 138, 74, 0.3)",
              marginBottom: "0.75rem",
            }}
          >
            📍 {t("coverage.badge", "Área de Servicio")}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0.5rem 0",
            }}
          >
            {t("coverage.title", "Zona de Cobertura y Servicio Técnico en Alicante")}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#a0a0a0",
              maxWidth: "680px",
              margin: "0.5rem auto 0 auto",
              lineHeight: 1.6,
            }}
          >
            {t(
              "coverage.subtitle",
              "Instalación, automatización, reparación urgente y mantenimiento de puertas metálicas en toda la provincia de Alicante y Costa Blanca."
            )}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "0.75rem",
            maxWidth: "920px",
            margin: "0 auto 2.5rem auto",
          }}
        >
          {CITIES.map((city) => (
            <div
              key={city}
              style={{
                background: "#2a2a2a",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "10px",
                padding: "0.75rem 1rem",
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#e6e6e6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span style={{ color: "#d28a4a", fontSize: "0.9rem" }}>📍</span>
              <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {city}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
          <a
            href={companyInfo.waHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 2rem",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #b87333 0%, #d28a4a 100%)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(184, 115, 51, 0.35)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <span>💬</span> {t("coverage.cta", "Consultar desplazamiento a mi municipio")}
          </a>
        </div>
      </div>
    </section>
  );
}
