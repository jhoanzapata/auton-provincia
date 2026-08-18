
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useVideoPlayer } from "../hooks/useVideoPlayer";
import { loadVideos, type VideoData } from "../config/staticData";

export function VideoGallery() {
  const { t } = useTranslation();
  const [lVideos, setLVideos] = useState<VideoData[]>([]);
  const [vLoading, setVLoading] = useState(true);

  useEffect(() => {
    let vMounted = true;
    loadVideos()
      .then(data => {
      if (vMounted) {
      setLVideos(data);
      setVLoading(false);
      }
      })
      .catch(err => {
      console.error('Error loading videos:', err);
      if (vMounted) setVLoading(false);
      });
      return () => { vMounted = false; };
  }, []);

  const { vActiveIndex, vVideoRef, cHandleThumbClick, cHandleVideoEnd } = useVideoPlayer(lVideos);
  const vCurrentVideo = lVideos[vActiveIndex] ?? lVideos[0];

  if (vLoading) {
    return (
      <section id="videos" className="video-gallery">
        <div className="section-header">
          <h2>{t("videos.title")}</h2>
          <p>{t("videos.subtitle")}</p>
        </div>
        <div className="loading-gallery">{t("videos.subtitle")}</div>
      </section>
    );
  }

  // Guard: no videos available
  if (lVideos.length === 0 || !vCurrentVideo) {
    return (
      <section id="videos" className="video-gallery">
        <div className="section-header">
          <h2>{t("videos.title")}</h2>
          <p>{t("videos.subtitle")}</p>
        </div>
        <div className="empty-projects">
          <p>{t("videos.subtitle")}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="video-gallery">
      <div className="section-header">
        <h2>{t("videos.title")}</h2>
        <p>{t("videos.subtitle")}</p>
      </div>

      <div className="video-featured">
        <video
          ref={vVideoRef}
          key={vCurrentVideo.src}
          src={vCurrentVideo.src}
          className="video-featured-player"
          controls
          muted
          playsInline
          onEnded={cHandleVideoEnd}
        >
          Tu navegador no soporta video.
        </video>
        <div className="video-featured-info">
          <h3>{vCurrentVideo.title}</h3>
          <p>{vCurrentVideo.description}</p>
        </div>
      </div>

      <div className="video-thumbnails">
        {lVideos.map((vVideo, i) => (
          <div
            key={vVideo.src}
            className={`video-thumb ${i === vActiveIndex ? "active" : ""}`}
            onClick={() => cHandleThumbClick(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") cHandleThumbClick(i);
            }}
          >
            <div className="video-thumb-poster" style={{ backgroundImage: `url(${vVideo.poster || '/images/video-placeholder.svg'})` }} />
            <div className="video-thumb-overlay">
              <h4>{vVideo.title}</h4>
              <span className="play-icon" aria-hidden="true">▶</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
