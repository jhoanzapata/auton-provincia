import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  id: number;
  icon: string;
  badgeKey: string;
  titleKey: string;
  descKey: string;
  includesKey: string;
  warrantyKey: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    icon: "🚪",
    badgeKey: "services.s1Badge",
    titleKey: "services.s1Title",
    descKey: "services.s1Desc",
    includesKey: "services.s1Includes",
    warrantyKey: "services.s1Warranty",
  },
  {
    id: 2,
    icon: "🔧",
    badgeKey: "services.s2Badge",
    titleKey: "services.s2Title",
    descKey: "services.s2Desc",
    includesKey: "services.s2Includes",
    warrantyKey: "services.s2Warranty",
  },
  {
    id: 3,
    icon: "⚡",
    badgeKey: "services.s3Badge",
    titleKey: "services.s3Title",
    descKey: "services.s3Desc",
    includesKey: "services.s3Includes",
    warrantyKey: "services.s3Warranty",
  },
  {
    id: 4,
    icon: "🏗️",
    badgeKey: "services.s4Badge",
    titleKey: "services.s4Title",
    descKey: "services.s4Desc",
    includesKey: "services.s4Includes",
    warrantyKey: "services.s4Warranty",
  },
  {
    id: 5,
    icon: "🚨",
    badgeKey: "services.s5Badge",
    titleKey: "services.s5Title",
    descKey: "services.s5Desc",
    includesKey: "services.s5Includes",
    warrantyKey: "services.s5Warranty",
  },
  {
    id: 6,
    icon: "🏢",
    badgeKey: "services.s6Badge",
    titleKey: "services.s6Title",
    descKey: "services.s6Desc",
    includesKey: "services.s6Includes",
    warrantyKey: "services.s6Warranty",
  },
];

const BRANDS = [
  "Somfy",
  "CAME",
  "FAAC",
  "BFT",
  "Erreka",
  "Hörmann",
  "Aprimatic",
  "Nice",
];

export function ServicesSection() {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="servicios" className="features" style={{ padding: "4rem 1.5rem" }}>
      {/* ─── Banda de Marcas Homologadas ─── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 3.5rem auto",
          padding: "1.25rem 1.5rem",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#d28a4a",
            marginBottom: "0.75rem",
          }}
        >
          {t("services.brandsTitle", "MOTORES Y AUTOMATISMOS HOMOLOGADOS")}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem 1.5rem",
          }}
        >
          {BRANDS.map((brand) => (
            <span
              key={brand}
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#e6e6e6",
                background: "rgba(210, 138, 74, 0.1)",
                border: "1px solid rgba(210, 138, 74, 0.25)",
                padding: "0.3rem 0.8rem",
                borderRadius: "8px",
              }}
            >
              ⚙️ {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Cabecera de Servicios ─── */}
      <div className="section-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
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
          {t("services.badge", "Catálogo Especializado")}
        </span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#fff" }}>
          {t("services.title")}
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#a0a0a0", maxWidth: "650px", margin: "0.5rem auto 0 auto" }}>
          {t("services.subtitle")}
        </p>
      </div>

      {/* ─── Grilla de Servicios Interactivos ─── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {SERVICES.map((s) => {
          const isExpanded = expandedService === s.id;
          const includesList = t(s.includesKey, { returnObjects: true }) as string[];

          return (
            <div
              key={s.id}
              style={{
                background: "#242424",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <div>
                {/* Cabecera Tarjeta: Icono + Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "0.4rem 0.75rem",
                    }}
                  >
                    {s.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: "#d28a4a",
                      background: "rgba(210, 138, 74, 0.15)",
                      border: "1px solid rgba(210, 138, 74, 0.3)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "6px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t(s.badgeKey)}
                  </span>
                </div>

                {/* Título y Descripción */}
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "0.6rem",
                  }}
                >
                  {t(s.titleKey)}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#b0b0b0",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {t(s.descKey)}
                </p>

                {/* Botón Desplegable Detalles */}
                <button
                  type="button"
                  onClick={() => toggleService(s.id)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#d28a4a",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    marginBottom: isExpanded ? "1rem" : "0",
                  }}
                >
                  <span>
                    {isExpanded
                      ? t("services.btnDetailsHide", "Ocultar ficha técnica ▴")
                      : t("services.btnDetailsShow", "Ver qué incluye y ficha técnica ▾")}
                  </span>
                </button>

                {/* Ficha Técnica Expandible */}
                {isExpanded && (
                  <div
                    style={{
                      background: "#1c1c1c",
                      border: "1px solid rgba(210, 138, 74, 0.3)",
                      borderRadius: "12px",
                      padding: "1rem",
                      marginTop: "0.75rem",
                      fontSize: "0.8rem",
                      color: "#e0e0e0",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#d28a4a",
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t("services.includesTitle", "Qué incluye este servicio:")}
                    </div>
                    {Array.isArray(includesList) && (
                      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.75rem 0" }}>
                        {includesList.map((inc, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.4rem",
                              marginBottom: "0.35rem",
                              lineHeight: 1.4,
                            }}
                          >
                            <span style={{ color: "#10b981", fontWeight: "bold" }}>✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        paddingTop: "0.5rem",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#38bdf8",
                      }}
                    >
                      🛡️ {t(s.warrantyKey)}
                    </div>
                  </div>
                )}
              </div>

              {/* Botón WhatsApp de Cotización Rápida */}
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href={`https://wa.me/34694917083?text=Hola,%20solicito%20presupuesto%20para:%20${encodeURIComponent(t(s.titleKey))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    width: "100%",
                    padding: "0.65rem 1rem",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #b87333 0%, #d28a4a 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(184, 115, 51, 0.25)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <span>💬</span> {t("services.btnQuote", "Pedir Presupuesto Gratis")}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
