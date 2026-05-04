import { useState } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const achievementsList = [
  {
    title: "Full Stack Developer",
    subtitle: "Laces and Soles Boutique",
    description: "Lead developer of a production e-commerce platform with Flask, React, and MySQL. Implemented Facebook OAuth, real-time delivery tracking, and a mobile-optimized experience.",
  },
  {
    title: "Web App Architecture",
    subtitle: "Portfolio Application",
    description: "Designed and built a high-performance portfolio with React, Tailwind CSS v4, Framer Motion, Lenis smooth scroll, and a canvas-based Matrix loader and particle system.",
  },
  {
    title: "Open Source Contributor",
    subtitle: "GitHub",
    description: "Active contributor to web development projects on GitHub. Maintaining clean codebases following SOLID principles and modern React patterns.",
  },
  {
    title: "Full Stack Certification",
    subtitle: "Certified Developer",
    description: "Comprehensive certification covering React, Node.js, database design, REST APIs, and deployment workflows.",
  },
  {
    title: "Database Design",
    subtitle: "SQL Specialist",
    description: "Advanced certification in relational database design and optimization techniques using MySQL and PostgreSQL.",
  },
];

const Achievements = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + achievementsList.length) % achievementsList.length);
  const next = () => setActive((p) => (p + 1) % achievementsList.length);

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with nav arrows — matching reference */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-2">Achievements</p>
            <TextReveal
              text="Milestones in My Journey"
              className="text-4xl md:text-6xl font-black text-white"
            />
          </div>

          {/* Arrow navigation — exact match */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Achievement cards — horizontal carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.slice(active, active + 3).concat(
            achievementsList.slice(0, Math.max(0, (active + 3) - achievementsList.length))
          ).map((item, i) => (
            <motion.div
              key={active + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/8 rounded-2xl p-8 hover:border-green-500/30 hover:bg-green-500/3 transition-all group"
            >
              <div className="mb-4">
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest">{item.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {achievementsList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? 'bg-green-400 w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
