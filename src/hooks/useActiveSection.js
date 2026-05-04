import { useEffect, useState, useRef } from 'react';

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    // Single observer for all sections
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in the top half of the viewport
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        threshold: [0.1, 0.2, 0.5, 0.8],
        rootMargin: '-80px 0px -50% 0px' // Focus on the upper half
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
