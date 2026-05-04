import { motion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../data/projects';
import { useRef } from 'react';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-teal-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
          <img 
            src="/assets/profile.png" 
            alt="Sameer Sangam" 
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-teal-500/50 object-cover shadow-2xl"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Sameer+Sangam&background=0D8ABC&color=fff&size=256';
            }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight text-white leading-tight"
        >
          Sameer <span className="text-teal-400">Sangam</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-slate-400 mb-6 max-w-3xl mx-auto font-medium"
        >
          Full Stack Web Developer
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting high-performance web applications and boutique e-commerce experiences with React, Flask, and modern tech stacks.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          <a href="#projects" className="px-10 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-teal-500/30">
            View My Work
          </a>
          <a href="#contact" className="px-10 py-4 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-white font-bold rounded-2xl transition-all transform hover:scale-105 backdrop-blur-sm">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto py-16 border-t border-white/5"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-teal-400 mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Parallax Background Elements */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-teal-500/10 blur-[120px] rounded-full z-0"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full z-0"
      />
    </section>
  );
};

export default Hero;
