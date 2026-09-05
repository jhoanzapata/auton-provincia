import { useState, useEffect } from 'react';

export function useActiveSection(plSectionIds: string[]) {
  const [vActiveSection, setVActiveSection] = useState('');
  const vKey = plSectionIds.join(',');

  useEffect(() => {
    const vObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0,
      }
    );

    // Observe each section
    plSectionIds.forEach((id) => {
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          vObserver.observe(element);
        }
      }
    });

    const vHandleScroll = () => {
      const vScrollY = window.scrollY;
      if (vScrollY < 100) {
        setVActiveSection('');
        return;
      }
      const scrollPosition = vScrollY + 250;
      for (let i = plSectionIds.length - 1; i >= 0; i--) {
        const id = plSectionIds[i];
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setVActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', vHandleScroll, { passive: true });
    vHandleScroll();
    return () => {
      vObserver.disconnect();
      window.removeEventListener('scroll', vHandleScroll);
    };
  }, [vKey, plSectionIds]);

  return vActiveSection;
}