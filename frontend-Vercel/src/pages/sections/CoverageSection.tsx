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
    <section className="coverage-section py-16 bg-slate-900/90 text-white border-t border-slate-800" id="cobertura">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            📍 {t("coverage.badge", "Área de Servicio")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-100 tracking-tight">
            {t("coverage.title", "Zona de Cobertura y Servicio Técnico en Alicante")}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-2 leading-relaxed">
            {t(
              "coverage.subtitle",
              "Instalación, automatización, reparación urgente y mantenimiento de puertas metálicas en toda la provincia de Alicante y Costa Blanca."
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {CITIES.map((city) => (
            <div
              key={city}
              className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/40 p-3 rounded-xl text-center text-xs font-semibold text-slate-200 transition-all shadow-sm flex items-center justify-center gap-1.5 group cursor-default"
            >
              <span className="text-amber-400 text-sm group-hover:scale-110 transition-transform">📍</span>
              <span className="truncate">{city}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={companyInfo.waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            💬 {t("coverage.cta", "Consultar desplazamiento a mi municipio")}
          </a>
        </div>
      </div>
    </section>
  );
}
