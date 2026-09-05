import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import { useActiveSection } from "../../hooks/useActiveSection";
import { lLanguageOptions, type TLanguageCode, STORAGE_KEY } from "../../i18n/config";

const lSectionIds = ['', 'presupuesto', 'proyectos', 'servicios', 'videos'];

export function Navbar() {
  const [vMenuOpen, setVMenuOpen] = useState(false);
  const vActiveSection = useActiveSection(lSectionIds);
  const { t, i18n } = useTranslation();
  const vCurrentLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "es").split("-")[0] as TLanguageCode;

  const handleNavClick = () => setVMenuOpen(false);
  const cHandleLanguageChange = async (vLanguage: TLanguageCode) => {
    try {
      localStorage.setItem(STORAGE_KEY, vLanguage);
    } catch (error) {
      console.error("No se pudo guardar la preferencia manual de idioma:", error);
    }
    await i18n.changeLanguage(vLanguage);
    setVMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav-brand">
        <img src={logo} alt="Automatismos La Provincia" className="logo" />
      </a>
      <button
        type="button"
        className={`hamburger ${vMenuOpen ? "open" : ""}`}
        onClick={() => setVMenuOpen(!vMenuOpen)}
        aria-label={vMenuOpen ? t("navbar.closeMenu") : t("navbar.menu")}
        aria-expanded={vMenuOpen}
        aria-controls="primary-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div id="primary-navigation" className={`nav-links ${vMenuOpen ? "open" : ""}`}>
        <a
          href="/"
          className={`nav-link ${vActiveSection === "" ? "active" : ""}`}
          onClick={handleNavClick}
        >
          🏠 {t("navbar.home")}
        </a>
        <a
          href="#presupuesto"
          className={`nav-link ${vActiveSection === "presupuesto" ? "active" : ""}`}
          onClick={handleNavClick}
        >
          💰 {t("navbar.quote")}
        </a>
        <a
          href="#proyectos"
          className={`nav-link ${vActiveSection === "proyectos" ? "active" : ""}`}
          onClick={handleNavClick}
        >
          🖼️ {t("navbar.gallery")}
        </a>
        <a
          href="#servicios"
          className={`nav-link ${vActiveSection === "servicios" ? "active" : ""}`}
          onClick={handleNavClick}
        >
          🔧 {t("navbar.services")}
        </a>
        <a
          href="#videos"
          className={`nav-link ${vActiveSection === "videos" ? "active" : ""}`}
          onClick={handleNavClick}
        >
          🎥 {t("navbar.videos")}
        </a>
        <div className="lang-select-wrapper flex items-center">
          <select
            value={vCurrentLanguage}
            onChange={(e) => { void cHandleLanguageChange(e.target.value as TLanguageCode); }}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#14161A] text-[#FF9633] border border-[#E4571B]/40 hover:border-[#E4571B] outline-none transition-all cursor-pointer shadow-sm"
            aria-label="Seleccionar idioma"
          >
            {lLanguageOptions.map((vOption) => (
              <option key={vOption.code} value={vOption.code} className="bg-[#14161A] text-white">
                {vOption.flag} {vOption.name} ({vOption.label})
              </option>
            ))}
          </select>
        </div>
        <a
          href="tel:+34694917083"
          className="nav-phone"
          onClick={handleNavClick}
          aria-label={t("navbar.call")}
        >
          📞 694 91 70 83
        </a>
        <a
          href={`https://wa.me/34694917083?text=${encodeURIComponent("¡Hola! 👋 Vengo de su web y quiero solicitar presupuesto para una puerta / automatismo. ¿Tienen disponibilidad?")}`}
          className="nav-wa btn-secondary"
          style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
          aria-label={t("navbar.whatsapp")}
        >
          💬 {t("navbar.whatsapp")}
        </a>
      </div>
    </nav>
  );
}
