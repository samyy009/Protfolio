import { useEffect, useState } from 'react';

const SpotlightBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950 overflow-hidden"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.08), transparent 80%)`
      }}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150"></div>
    </div>
  );
};

export default SpotlightBackground;
