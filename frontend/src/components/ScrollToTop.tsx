import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [vVisible, setVVisible] = useState(false);

  useEffect(() => {
    const cHandleScroll = () => {
      setVVisible(window.scrollY > 360);
    };

    cHandleScroll();
    window.addEventListener("scroll", cHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", cHandleScroll);
  }, []);

  if (!vVisible) return null;

  const cScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={cScrollTop}
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <ArrowUp size={22} />
    </button>
  );
}
