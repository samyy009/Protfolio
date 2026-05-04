import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
const NAME = 'SAMEER';

const MatrixLoader = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('matrix'); // 'matrix' | 'reveal' | 'done'

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);
    let frame = 0;
    let animId;

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        // Alternate between bright orange and dim orange for depth
        ctx.fillStyle = i % 3 === 0 ? '#fb923c' : 'rgba(249,115,22,0.4)';
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      frame++;
      if (frame > 180) {
        setPhase('reveal');
        return;
      }
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (phase === 'reveal') {
      const t = setTimeout(() => {
        setPhase('done');
        setTimeout(onComplete, 500);
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: '#000' }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      {phase === 'reveal' && (
        <div className="relative z-10 text-center select-none">
          <h1
            style={{
              fontSize: 'clamp(80px, 15vw, 150px)',
              fontWeight: 900,
              letterSpacing: '0.05em',
              color: '#fff',
              WebkitTextStroke: '2px #f97316',
              textShadow: '0 0 40px rgba(249,115,22,0.7), 0 0 100px rgba(249,115,22,0.3)',
              animation: 'fadeInScale 0.5s ease-out forwards',
            }}
          >
            {NAME}
          </h1>
        </div>
      )}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default MatrixLoader;
