import { useEffect, useRef, useState } from 'react';

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
      // Fading black overlay
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });

      frame++;

      // After ~2.5 seconds, transition to name reveal
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
      // Let name show for 1.5s then complete
      const timer = setTimeout(() => {
        setPhase('done');
        setTimeout(onComplete, 600);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#000' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      {phase === 'reveal' && (
        <div className="relative z-10 text-center">
          <h1
            className="text-8xl md:text-[120px] font-black tracking-wider"
            style={{
              color: '#fff',
              WebkitTextStroke: '2px #00ff41',
              textShadow: '0 0 40px rgba(0,255,65,0.5), 0 0 80px rgba(0,255,65,0.3)',
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
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default MatrixLoader;
