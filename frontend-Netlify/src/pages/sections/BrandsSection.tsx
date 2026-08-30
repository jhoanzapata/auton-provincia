import { useTranslation } from "react-i18next";

export function BrandsSection() {
  const { t } = useTranslation();

  const brands = [
    { name: "Somfy", icon: "🚪" },
    { name: "FAAC", icon: "⚙️" },
    { name: "BFT", icon: "🔌" },
    { name: "CAME", icon: "⚡" },
    { name: "Erreka", icon: "🛡️" },
    { name: "Clemsa", icon: "📡" },
    { name: "Nice", icon: "✨" },
    { name: "Pujol", icon: "🔑" },
  ];

  return (
    <section
      style={{
        padding: "1.5rem 1rem",
        background: "rgba(15, 23, 42, 0.85)",
        borderTop: "1px solid rgba(184, 115, 51, 0.3)",
        borderBottom: "1px solid rgba(184, 115, 51, 0.3)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.15em",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {t("brands.title", "Trabajamos con las Mejores Marcas Homologadas de Automatismos y Motores")}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {brands.map((b, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: 12,
                background: "rgba(184, 115, 51, 0.1)",
                border: "1px solid rgba(184, 115, 51, 0.25)",
                color: "#f8fafc",
                fontSize: "0.85rem",
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <span>{b.icon}</span>
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
