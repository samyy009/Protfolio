import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/projects';
import TextReveal from '../components/TextReveal';
import useTypewriter from '../hooks/useTypewriter';
import Magnetic from '../components/Magnetic';
import FloatingIcons from '../components/FloatingIcons';

const ROLES = [
  'Full Stack Developer',
  'Data Annotation Specialist',
  'ML Team Coordinator',
  'Game Developer (C + Raylib)',
  'Hackathon Builder',
  'MCA Student @ Chetan BS',
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const typedRole = useTypewriter(ROLES, 80, 50, 2200);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <FloatingIcons />
      <motion.div style={{ opacity, y }} className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'backOut' }}
          className="relative inline-block mb-4"
        >
          <div className="absolute inset-0 rounded-full bg-orange-500/25 blur-2xl animate-pulse pointer-events-none" />
          <img
            src="https://github.com/samyy009.png"
            alt="Sameer Sangam"
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-orange-500/60 object-cover shadow-2xl shadow-orange-500/20"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=SS&background=1a0800&color=f97316&size=256&bold=true';
            }}
          />
          {/* Online dot */}
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-orange-400 border-2 border-black animate-pulse" />
        </motion.div>

        {/* Name */}
        <TextReveal
          text="Sameer Sangam"
          className="text-5xl md:text-8xl font-black sunset-gradient leading-none mb-4 justify-center tracking-tighter"
        />

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="h-8 flex items-center justify-center mb-4"
        >
          <span className="text-xl md:text-2xl text-blue-400/90 font-bold tracking-tight">
            {typedRole}
            <span className="inline-block ml-1 w-0.5 h-5 bg-orange-500/80 align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-sm md:text-base text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          ML Data Specialist · Full Stack Developer · Game Programmer — building production-grade software from Hubli, Karnataka.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Magnetic>
            <a href="mailto:sameersangam66@gmail.com"
              className="px-8 py-3.5 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 hover:scale-105 text-white text-xs font-bold rounded-full transition-all shadow-2xl shadow-purple-500/20 tracking-wide uppercase">
              Get In Touch
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#projects"
              className="px-8 py-3.5 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-full transition-all tracking-wide uppercase">
              View Work
            </a>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black sunset-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-orange-500/4 blur-[180px] rounded-full pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-orange-400/50 to-transparent"
        />
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default Hero;
