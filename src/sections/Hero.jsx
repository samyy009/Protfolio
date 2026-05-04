import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/projects';
import TextReveal from '../components/TextReveal';
import useTypewriter from '../hooks/useTypewriter';

const ROLES = [
  'Full Stack Developer',
  'Data Annotation Specialist',
  'ML Team Coordinator',
  'Flask & React Engineer',
  'MCA Student',
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
          <div className="absolute inset-0 rounded-full bg-orange-500/25 blur-2xl animate-pulse pointer-events-none" />
          <img
            src="/assets/profile.png"
            alt="Sameer Sangam"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-orange-500/60 object-cover shadow-2xl shadow-orange-500/20"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Sameer+Sangam&background=1a0800&color=f97316&size=256&bold=true&length=2';
            }}
          />
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-orange-400 border-2 border-black animate-pulse" />
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
          <span className="text-xl md:text-2xl text-orange-400 font-bold font-mono">
            {typedRole}
            <span className="inline-block ml-0.5 w-0.5 h-5 bg-orange-400 align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-base md:text-lg text-white/35 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Data Annotation Specialist & Full Stack Developer — delivering high-quality ML pipelines and production web applications from Karnataka, India.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-24"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-black text-sm font-black rounded-full transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 tracking-wide">
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/sameersangam/" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/8 text-white text-sm font-bold rounded-full transition-all tracking-wide flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:sameersangam66@gmail.com"
            className="px-8 py-3.5 border border-white/10 hover:border-orange-500/40 text-white/60 hover:text-orange-400 text-sm font-bold rounded-full transition-all tracking-wide">
            sameersangam66@gmail.com
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
              <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
