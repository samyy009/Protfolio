import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const MILESTONES = [
  {
    year: '2024',
    title: 'Best AI Application of the Year',
    org: 'iMerit Technology / Ango Hub',
    desc: 'The team's data annotation and automation platform — Ango Hub — won the Best AI Application of the Year award. Contributed as a key team coordinator delivering 50+ global production projects.',
  },
  {
    year: '2024',
    title: 'AIML & Full Stack Development Certification',
    org: 'Metvy',
    desc: 'Completed comprehensive certification in Artificial Intelligence, Machine Learning, and Full Stack Web Development conducted by Metvy — covering modern AI tooling and production-ready web development.',
  },
  {
    year: '2024',
    title: 'Cyber Security Certification',
    org: 'IBM Skilling',
    desc: 'Completed IBM Skilling\'s certification in cyber security, covering network security fundamentals, threat analysis, and security best practices.',
  },
  {
    year: '2023',
    title: 'BCA — Bachelor of Computer Applications',
    org: 'KUD University, KLE Society',
    desc: 'Graduated with a Bachelor\'s degree in Computer Applications from KUD University KLE Society in April 2023. Covered core computer science, programming, databases, and software engineering.',
  },
  {
    year: '2023',
    title: 'Physical & Hardware Networking',
    org: 'Deshpande Education Trust (DET)',
    desc: 'Completed comprehensive courses in physical and hardware networking at the Deshpande Education Trust — covering network infrastructure, hardware configuration, and practical networking skills.',
  },
  {
    year: '2023 – 2024',
    title: 'Production Excellence at iMerit',
    org: 'iMerit Technology Service Pvt. Ltd.',
    desc: 'Efficiently implemented production, integrity & maintenance excellence standards within AI annotation assets, incorporating commissioning across 50+ projects worldwide for the UVeye platform.',
  },
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((p) => (p - 1 + MILESTONES.length) % MILESTONES.length);
  const next = () => setActiveIndex((p) => (p + 1) % MILESTONES.length);

  const visible = [0, 1, 2].map((offset) => ({
    ...MILESTONES[(activeIndex + offset) % MILESTONES.length],
    _key: (activeIndex + offset) % MILESTONES.length,
  }));

  return (
    <section id="achievements" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3"
            >
              Achievements & Certifications
            </motion.p>
            <TextReveal
              text="Milestones in My Journey"
              className="text-4xl md:text-6xl font-black text-white"
            />
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/5 transition-all group">
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/5 transition-all group">
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="wait">
            {visible.map((item, i) => (
              <motion.div
                key={`${activeIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="border border-white/6 rounded-2xl p-8 hover:border-orange-500/25 hover:bg-orange-500/2 transition-all duration-400 group cursor-default"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest leading-tight max-w-[60%]">{item.org}</span>
                  <span className="text-[10px] font-bold text-white/20 border border-white/8 px-2.5 py-1 rounded-full flex-shrink-0">{item.year}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2">
          {MILESTONES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-orange-400 w-6 h-2' : 'bg-white/15 w-2 h-2 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
