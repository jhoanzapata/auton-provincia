import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mLegalNoticeTexts } from "../i18n/legalTexts";
import { companyInfo } from "../config/companyData";

export function LegalNotice() {
  const { t, i18n } = useTranslation();
  const vCurrentLng = (i18n.resolvedLanguage ?? i18n.language ?? "es").split("-")[0];
  const vTexts = mLegalNoticeTexts[vCurrentLng] ?? mLegalNoticeTexts["es"];

  return (
    <section id="aviso-legal" className="legal-page">
      <div className="legal-container">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              background: "rgba(228, 87, 27, 0.15)",
              color: "#fff",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              border: "1px solid rgba(228, 87, 27, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            {t("legal.backHome")}
          </Link>
        </div>
        <nav aria-label="Navegación">
          <Link to="/">{t("navbar.home")}</Link>
          <span style={{ color: "var(--color-text-muted)" }}>›</span>
          <span style={{ color: "var(--color-text)", fontWeight: 500 }}>{vTexts.title}</span>
        </nav>

        <header style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-text)" }}>
            {vTexts.title}
          </h1>
          <p style={{ color: "var(--color-text-dim)", fontSize: "1.1rem", maxWidth: 600 }}>
            {vTexts.subtitle}
          </p>
        </header>

        <article style={{ lineHeight: 1.8, color: "var(--color-text)" }}>
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s1Title}
            </h2>
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0.5rem 1.5rem",
                fontSize: "1rem",
              }}
            >
              <dt style={{ fontWeight: 600, color: "var(--color-text-dim)" }}>
                {vCurrentLng === 'de' ? 'Unternehmensbezeichnung:' : vCurrentLng === 'en' ? 'Company Name:' : 'Nombre / Razón social:'}
              </dt>
              <dd style={{ margin: 0, color: "var(--color-text)" }}>{companyInfo.name}</dd>

              <dt style={{ fontWeight: 600, color: "var(--color-text-dim)" }}>
                {vCurrentLng === 'de' ? 'Inhaber / Vertreter:' : vCurrentLng === 'en' ? 'Owner / Representative:' : 'Titular (persona física o sociedad):'}
              </dt>
              <dd style={{ margin: 0, color: "var(--color-text)" }}>{companyInfo.legalName}</dd>

              <dt style={{ fontWeight: 600, color: "var(--color-text-dim)" }}>{vCurrentLng === 'de' ? 'Steuernummer / NIF:' : vCurrentLng === 'en' ? 'Tax ID (NIF/CIF):' : 'NIF / CIF:'}</dt>
              <dd style={{ margin: 0, color: "var(--color-text)" }}>{companyInfo.nif}</dd>

              <dt style={{ fontWeight: 600, color: "var(--color-text-dim)" }}>{vCurrentLng === 'de' ? 'Sitz der Gesellschaft:' : vCurrentLng === 'en' ? 'Address:' : 'Domicilio social:'}</dt>
              <dd style={{ margin: 0, color: "var(--color-text)" }}>{companyInfo.address}</dd>

              <dt style={{ fontWeight: 600, color: "var(--color-text-dim)" }}>
                {vCurrentLng === 'de' ? 'E-Mail:' : vCurrentLng === 'en' ? 'Email:' : 'Correo electrónico:'}
              </dt>
              <dd style={{ margin: 0 }}>
                <a
                  href={`mailto:${companyInfo.email}`}
                  style={{ color: "var(--color-accent)", textDecoration: "none" }}
                >
                  {companyInfo.email}
                </a>
              </dd>

              <dt style={{ fontWeight: 600, color: "var(--color-text-dim)" }}>{vCurrentLng === 'de' ? 'Telefon:' : vCurrentLng === 'en' ? 'Phone:' : 'Teléfono:'}</dt>
              <dd style={{ margin: 0 }}>
                <a
                  href={companyInfo.phoneHref}
                  style={{ color: "var(--color-accent)", textDecoration: "none" }}
                >
                  {companyInfo.phone}
                </a>
              </dd>
            </dl>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s2Title}
            </h2>
            <p style={{ whiteSpace: "pre-line" }}>{vTexts.s2Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s3Title}
            </h2>
            <p>{vTexts.s3Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s4Title}
            </h2>
            <p>{vTexts.s4Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s5Title}
            </h2>
            <p>{vTexts.s5Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s6Title}
            </h2>
            <p>{vTexts.s6Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s7Title}
            </h2>
            <p>{vTexts.s7Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s8Title}
            </h2>
            <p>{vTexts.s8Text}</p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
              {vTexts.s9Title}
            </h2>
            <p style={{ whiteSpace: "pre-line" }}>{vTexts.s9Text}</p>
          </section>
        </article>
      </div>
    </section>
  );
}
