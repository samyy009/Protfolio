import { useEffect, useState, useRef } from 'react';

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      // Find the most prominent intersecting section
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        // Higher threshold for the "primary" section
        const primary = visibleSections[0];
        if (primary.intersectionRatio > 0.15) {
          setActive(primary.target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      // Use multiple thresholds for precise tracking
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: '-10% 0px -40% 0px', // Focus on the upper-mid area
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
