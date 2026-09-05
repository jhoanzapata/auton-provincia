import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { IProject } from "../config/staticData";
import { loadProjects } from "../config/staticData";
import { useLightbox } from "../hooks/useLightbox";

export function ProjectGallery() {
  const { t } = useTranslation();
  const [lProjects, setLProjects] = useState<IProject[]>([]);
  const [vLoading, setVLoading] = useState(true);
  const { index: vIndex, cOpen, cClose, cNext, cPrev } = useLightbox<IProject>(lProjects);
  const vDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let vMounted = true;
    loadProjects()
      .then(data => {
        if (vMounted) {
          // Determinista: primeros 8 proyectos (orden del JSON)
          setLProjects(data.slice(0, 8));
          setVLoading(false);
        }
      })
      .catch(err => {
        console.error('Error loading projects:', err);
        if (vMounted) setVLoading(false);
      });
    return () => { vMounted = false; };
  }, []);

  // Open/close dialog when lightbox index changes
  useEffect(() => {
    if (!vDialogRef.current) return;
    if (vIndex !== null) {
      vDialogRef.current.showModal();
    } else {
      vDialogRef.current.close();
    }
  }, [vIndex]);

  if (vLoading)
    return (
      <section id="proyectos" className="gallery-section">
        <div className="loading-gallery">{t("gallery.subtitle")}</div>
      </section>
    );

  return (
    <section id="proyectos" className="gallery-section">
      <div className="section-header">
        <h2>{t("gallery.title")}</h2>
        <p>{t("gallery.subtitle")}</p>
      </div>

      <div className="projects-grid">
        {lProjects.length > 0 ? (
          lProjects.map((vProj: IProject, i: number) => (
            <div
              key={vProj.id}
              className="project-card"
              onClick={() => cOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") cOpen(i);
              }}
            >
              <div className="card-media">
                <img src={vProj.mediaUrl} alt={t(`projectsData.${vProj.id}.title`, vProj.title)} loading="lazy" />
                <div className="card-overlay">
                  <h3>{t(`projectsData.${vProj.id}.title`, vProj.title)}</h3>
                  <p>{t(`projectsData.${vProj.id}.desc`, vProj.description)}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-projects">
            <p>{t("gallery.empty", "Preparando nuevos reportajes de obras...")}</p>
          </div>
        )}
      </div>

      {/* LIGHTBOX - Native <dialog> */}
      <dialog
        ref={vDialogRef}
        className="lightbox-dialog"
        onClose={cClose}
        aria-label="Visor de imágenes"
      >
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="lightbox-close"
            onClick={cClose}
            aria-label="Cerrar visor"
          >
            &times;
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              cPrev();
            }}
            aria-label="Imagen anterior"
          >
            &lsaquo;
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              cNext();
            }}
            aria-label="Imagen siguiente"
          >
            &rsaquo;
          </button>
          {vIndex !== null && lProjects[vIndex] && (
            <>
              <img
                src={lProjects[vIndex].mediaUrl}
                alt={t(`projectsData.${lProjects[vIndex].id}.title`, lProjects[vIndex].title)}
              />
              <div className="lightbox-info">
                <h3>{t(`projectsData.${lProjects[vIndex].id}.title`, lProjects[vIndex].title)}</h3>
                <p>{t(`projectsData.${lProjects[vIndex].id}.desc`, lProjects[vIndex].description)}</p>
                <span className="lightbox-counter">
                  {vIndex + 1} / {lProjects.length}
                </span>
              </div>
            </>
          )}
        </div>
      </dialog>
    </section>
  );
}
