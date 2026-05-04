import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs, i) => {
        const el = document.getElementById(sectionIds[i]);
        if (obs && el) obs.unobserve(el);
      });
    };
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
