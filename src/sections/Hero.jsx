import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/projects';
import TextReveal from '../components/TextReveal';
import useTypewriter from '../hooks/useTypewriter';

const ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'Flask Backend Dev',
  'UI/UX Enthusiast',
  'Open Source Contributor',
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  const typedRole = useTypewriter(ROLES, 80, 50, 2200);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <motion.div style={{ opacity, y }} className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'backOut' }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-green-500/25 blur-2xl animate-pulse pointer-events-none" />
          <img
            src="/assets/profile.png"
            alt="Sameer Sangam"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-green-500/60 object-cover shadow-2xl shadow-green-500/20"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Sameer+Sangam&background=001a00&color=00ff41&size=256&bold=true&length=2';
            }}
          />
          {/* Online indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-black animate-pulse" />
        </motion.div>

        {/* Name */}
        <TextReveal
          text="Sameer Sangam"
          className="text-6xl md:text-9xl font-black text-white leading-none mb-6 justify-center tracking-tight"
        />

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="h-10 flex items-center justify-center mb-5"
        >
          <span className="text-xl md:text-2xl text-green-400 font-bold font-mono">
            {typedRole}
            <span className="animate-ping inline-block ml-0.5 h-5 w-0.5 bg-green-400 align-middle" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-base md:text-lg text-white/35 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Building high-performance web applications and boutique e-commerce experiences — where performance meets beautiful design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-24"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-green-500 hover:bg-green-400 text-black text-sm font-black rounded-full transition-all transform hover:scale-105 shadow-xl shadow-green-500/30 tracking-wide"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/15 hover:border-green-500/60 hover:bg-green-500/8 text-white text-sm font-bold rounded-full transition-all tracking-wide"
          >
            Let's Talk
          </a>
          <a
            href="https://github.com/samyy009"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-white/10 hover:border-green-500/40 text-white/60 hover:text-green-400 text-sm font-bold rounded-full transition-all tracking-wide flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
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
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-green-500/4 blur-[180px] rounded-full pointer-events-none" />

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
          className="w-px h-8 bg-gradient-to-b from-green-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
