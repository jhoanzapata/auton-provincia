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
        rootMargin: '-50% 0px -50% 0px',
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

    // Also handle the home section (empty string)
    // We'll consider the top of page as home
    const vHandleScroll = () => {
      const vScrollY = window.scrollY;
      if (vScrollY < 100) {
        setVActiveSection('');
      }
    };

    window.addEventListener('scroll', vHandleScroll);
    return () => {
      vObserver.disconnect();
      window.removeEventListener('scroll', vHandleScroll);
    };
  }, [vKey, plSectionIds]);

  return vActiveSection;
}