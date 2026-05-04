import { useEffect } from 'react';

const SpotlightBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(0,255,65,0.04), transparent 80%)'
        }}
      />
      <style>{`
        :root { --x: 50%; --y: 50%; }
      `}</style>
    </>
  );
};

export default SpotlightBackground;
