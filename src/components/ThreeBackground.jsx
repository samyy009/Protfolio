import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 3D Grid State
    let rotation = 0;
    const gridSize = 45;
    const spacing = 100;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;

      // Perspective Projection
      const project = (x, y, z) => {
        const factor = 800 / (z + 1000);
        return {
          x: centerX + x * factor,
          y: centerY + y * factor
        };
      };

      // Draw Grid
      rotation += 0.002;
      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);

      for (let x = -gridSize; x <= gridSize; x++) {
        ctx.beginPath();
        for (let z = -gridSize; z <= gridSize; z++) {
          const rx = x * spacing * cosR - z * spacing * sinR;
          const rz = x * spacing * sinR + z * spacing * cosR;
          const p = project(rx, 400, rz);
          if (z === -gridSize) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw floating nodes (3D Particles)
      const time = Date.now() * 0.0005;
      for (let i = 0; i < 40; i++) {
        const nx = Math.sin(time + i) * 1000;
        const ny = Math.cos(time * 0.8 + i) * 600;
        const nz = Math.sin(time * 0.5 + i) * 1000;
        
        const p = project(nx, ny, nz);
        const size = (1000 / (nz + 1000)) * 3;
        
        if (nz > -1000) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? 'rgba(249, 115, 22, 0.3)' : 'rgba(59, 130, 246, 0.3)';
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />;
};

export default ThreeBackground;
