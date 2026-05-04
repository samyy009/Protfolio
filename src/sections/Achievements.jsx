import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const MILESTONES = [
  {
    year: '2024',
    title: 'Best AI Application of the Year',
    org: 'iMerit Technology / Ango Hub',
    desc: 'The Ango Hub data annotation and automation platform won the Best AI Application of the Year. Contributed as Team Coordinator delivering 50+ global production projects across Atlas, Artemis & Helios.',
  },
  {
    year: '2024',
    title: 'Microsoft Azure Certification',
    org: 'Microsoft Learn & FICE',
    desc: 'Completed the 25-hour Microsoft Azure certification course through Microsoft Learn and FICE (Foundation for Innovation and Collaboration in Education). Covers Azure cloud fundamentals, services, and deployment.',
  },
  {
    year: '2024',
    title: 'Hacklite 2.0 — Certificate of Participation',
    org: 'Code Crafters Hackathon',
    desc: 'Competed in the Hacklite 2.0 24-hour hackathon by Code Crafters. Built and deployed Flavora — a full-stack recipe-sharing community platform — from scratch within the hackathon window.',
  },
  {
    year: '2024',
    title: 'AIML & Full Stack Development Certification',
    org: 'Metvy',
    desc: 'Completed comprehensive certification in Artificial Intelligence, Machine Learning, and Full Stack Web Development — covering production-ready web development and modern AI tooling.',
  },
  {
    year: '2024',
    title: 'Cyber Security Certification',
    org: 'IBM Skilling',
    desc: 'Completed IBM Skilling\'s cyber security certification covering network security fundamentals, threat analysis, encryption, and security best practices for software systems.',
  },
  {
    year: '2023',
    title: 'BCA — Bachelor of Computer Applications',
    org: 'Karnatak University — KLE Society',
    desc: 'Graduated with a Bachelor\'s degree in Computer Applications from Karnatak University (KLE Society), April 2023. Core modules: C, C++, Java, Python, databases, networking, and software engineering.',
  },
  {
    year: '2023',
    title: 'Physical & Hardware Networking',
    org: 'Deshpande Education Trust (DET)',
    desc: 'Completed comprehensive courses in physical and hardware networking — covering network infrastructure, hardware configuration, and practical networking skills at Deshpande Education Trust.',
  },
  {
    year: '2023 – 2024',
    title: 'Production Excellence at iMerit',
    org: 'iMerit Technology Service Pvt. Ltd.',
    desc: 'Efficiently implemented production, integrity & maintenance excellence standards within AI annotation assets — delivering 50+ commissioning projects worldwide for the UVeye vehicle inspection platform.',
  },
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((p) => (p - 1 + MILESTONES.length) % MILESTONES.length);
  const next = () => setActiveIndex((p) => (p + 1) % MILESTONES.length);

  const visible = [0, 1, 2].map((offset) => ({
    ...MILESTONES[(activeIndex + offset) % MILESTONES.length],
    _slot: offset,
  }));

  return (
    <section id="achievements" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              Achievements & Certifications
            </motion.p>
            <TextReveal text="Milestones in My Journey" className="text-3xl md:text-4xl font-black text-white" />
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
                className="border border-white/6 rounded-2xl p-8 hover:border-orange-500/25 hover:bg-orange-500/2 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start justify-between mb-5 gap-2">
                  <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest leading-tight">{item.org}</span>
                  <span className="text-[10px] font-bold text-white/20 border border-white/8 px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap">{item.year}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {MILESTONES.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
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
