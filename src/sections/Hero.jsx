import { motion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../data/projects';
import { useRef } from 'react';
import TextReveal from '../components/TextReveal';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section ref={targetRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
      >
        {/* Profile picture with glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative inline-block mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-2xl animate-pulse" />
          <img
            src="/assets/profile.png"
            alt="Sameer Sangam"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-green-500/50 object-cover shadow-2xl shadow-green-500/20"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Sameer+Sangam&background=001a00&color=00ff41&size=256&bold=true';
            }}
          />
        </motion.div>

        {/* Name with word-by-word reveal */}
        <TextReveal
          text="Sameer Sangam"
          className="text-5xl md:text-8xl font-black text-white leading-none mb-6 justify-center"
        />

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-white/50 mb-4 font-medium tracking-wide"
        >
          Full Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base text-white/40 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Building high-performance web applications and boutique e-commerce experiences with React, Flask, and modern tech stacks.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-5 mb-24"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 bg-green-500 hover:bg-green-400 text-black font-black rounded-full transition-all transform hover:scale-105 shadow-xl shadow-green-500/30 text-sm tracking-wide">
            Download CV
          </a>
          <a href="#contact"
            className="px-8 py-3.5 border border-white/15 hover:border-green-500/50 hover:bg-green-500/5 text-white font-bold rounded-full transition-all text-sm tracking-wide">
            Contact Me
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 pt-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background orbs */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
