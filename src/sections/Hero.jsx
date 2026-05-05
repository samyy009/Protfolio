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
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-0 pointer-events-none" />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        
        {/* Real-World Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-orange-500/40 transition-all duration-500 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative inline-block mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-3xl animate-pulse pointer-events-none" />
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-orange-500 to-purple-600 shadow-2xl">
            <img
              src="https://github.com/samyy009.png"
              alt="Sameer Sangam"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black object-cover shadow-inner"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=SS&background=1a0800&color=f97316&size=256&bold=true';
              }}
            />
          </div>
          {/* Online status indicator */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-2 right-4 w-5 h-5 rounded-full bg-orange-500 border-[3px] border-black shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
          />
        </motion.div>

        {/* Name */}
        <div className="mb-6">
          <TextReveal
            text="Sameer Sangam"
            className="text-6xl md:text-[9rem] font-black sunset-gradient leading-[0.9] justify-center tracking-tighter"
          />
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-3xl text-orange-400 font-black tracking-tight flex items-center gap-3">
            <span className="text-white/20 font-light opacity-50">/</span>
            {typedRole}
            <span className="inline-block w-1.5 h-6 bg-orange-500/80 rounded-full" style={{ animation: 'blink 1s step-end infinite' }} />
          </span>
        </motion.div>

        {/* Latest Activity Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mb-12"
        >
          <div className="px-6 py-3 rounded-2xl bg-white/2 border border-white/5 flex items-center gap-4 group hover:bg-white/5 transition-all">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Currently Building</p>
              <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">Laces & Soles Boutique App</p>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-20"
        >
          <Magnetic>
            <a href="mailto:sameersangam66@gmail.com"
              className="relative group px-10 py-5 bg-orange-500 text-black text-xs font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/40 tracking-[0.2em] uppercase overflow-hidden">
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#projects"
              className="px-10 py-5 border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-black rounded-2xl transition-all tracking-[0.2em] uppercase backdrop-blur-md">
              View Showcase
            </a>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default relative">
              <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
              <div className="absolute -inset-4 bg-orange-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
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
