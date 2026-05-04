import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const MILESTONES = [
  {
    year: '2024',
    title: 'Lead Developer — Laces and Soles',
    org: 'Full Stack E-Commerce Platform',
    desc: 'Built a production boutique application with Flask, React, MySQL, Facebook OAuth, delivery tracking, invoicing, and a polished mobile experience.',
  },
  {
    year: '2024',
    title: 'Portfolio Application',
    org: 'Personal Project',
    desc: 'Designed and built a high-end developer portfolio featuring Matrix loader, particle system, typewriter effect, smooth scroll, and pixel-perfect animations.',
  },
  {
    year: '2023',
    title: 'Full Stack Web Development',
    org: 'Certification',
    desc: 'Comprehensive certification covering React, Node.js, database design, REST APIs, authentication flows, and modern deployment workflows.',
  },
  {
    year: '2023',
    title: 'Database Design & Optimization',
    org: 'SQL Certification',
    desc: 'Advanced certification in relational database design, normalization, indexing strategies, and query optimization with MySQL and PostgreSQL.',
  },
  {
    year: '2023',
    title: 'Open Source Contributions',
    org: 'GitHub',
    desc: 'Active contributor maintaining clean, SOLID-principled codebases. Participated in multiple open source projects across React and Python ecosystems.',
  },
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((p) => (p - 1 + MILESTONES.length) % MILESTONES.length);
  const next = () => setActiveIndex((p) => (p + 1) % MILESTONES.length);

  // Show 3 cards at a time (circular)
  const visible = [0, 1, 2].map((offset) => MILESTONES[(activeIndex + offset) % MILESTONES.length]);

  return (
    <section id="achievements" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header with arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-green-400 text-xs font-black uppercase tracking-[0.2em] mb-3"
            >
              Achievements
            </motion.p>
            <TextReveal
              text="Milestones in My Journey"
              className="text-4xl md:text-6xl font-black text-white"
            />
          </div>

          {/* Arrow buttons — exact match */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 hover:bg-green-400/5 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 hover:bg-green-400/5 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="wait">
            {visible.map((item, i) => (
              <motion.div
                key={`${activeIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="border border-white/6 rounded-2xl p-8 hover:border-green-500/25 hover:bg-green-500/2 transition-all duration-400 group cursor-default"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">{item.org}</span>
                  <span className="text-[10px] font-bold text-white/20 border border-white/8 px-2.5 py-1 rounded-full">{item.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {MILESTONES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-green-400 w-6 h-2' : 'bg-white/15 w-2 h-2 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
