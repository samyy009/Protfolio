import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const techData = [
  { name: 'Python', color: '#3776AB', letter: 'Py' },
  { name: 'JavaScript', color: '#F7DF1E', letter: 'JS', dark: true },
  { name: 'React.js', color: '#61DAFB', letter: '⚛', dark: true },
  { name: 'Flask', color: '#fff', letter: '🌶', dark: true },
  { name: 'MySQL', color: '#00618A', letter: 'SQL' },
  { name: 'TypeScript', color: '#3178C6', letter: 'TS' },
  { name: 'Git', color: '#F05032', letter: 'Git' },
  { name: 'Docker', color: '#2496ED', letter: '🐋' },
  { name: 'Tailwind', color: '#38BDF8', letter: 'TW', dark: true },
  { name: 'Node.js', color: '#339933', letter: 'NJ' },
];

const marqueeRow1 = [
  'React.js', 'JavaScript', 'Python', 'Flask', 'Node.js', 'MySQL', 'PostgreSQL',
  'MongoDB', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Docker',
  'REST APIs', 'Vite', 'Framer Motion', 'Express', 'Redis', 'Vercel',
];
const marqueeRow2 = [
  'Netlify', 'OAuth 2.0', 'TypeScript', 'PostCSS', 'CI/CD Pipelines',
  'SQLAlchemy', 'Axios', 'JWT Auth', 'Supabase', 'Linux', 'Bash',
  'Figma', 'Postman', 'VS Code', 'Next.js', 'ShadCN UI', 'Zustand',
  'React Query', 'Socket.io', 'FFmpeg',
];

const Marquee = ({ items, reverse = false, speed = 45 }) => (
  <div
    className="overflow-hidden w-full"
    style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
  >
    <div
      className="flex gap-3 w-max"
      style={{ animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${speed}s linear infinite` }}
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="px-5 py-2.5 border border-white/8 text-white/40 text-xs font-semibold rounded-full whitespace-nowrap hover:border-green-500/50 hover:text-green-400 transition-all duration-300 cursor-default select-none"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-xs font-black uppercase tracking-[0.2em] mb-3">My Skills</p>
          <TextReveal
            text="Technologies & Tools"
            className="text-4xl md:text-6xl font-black text-white justify-center mb-4"
          />
          <p className="text-white/30 max-w-xl mx-auto text-sm leading-relaxed">
            I work with modern technologies to build scalable, performant applications.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-16">
          {techData.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/5 hover:border-green-500/30 hover:bg-green-500/4 transition-all duration-300 group cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-base font-black group-hover:scale-110 transition-transform duration-300 select-none"
                style={{ background: tech.color, color: tech.dark ? '#000' : '#fff' }}
              >
                {tech.letter}
              </div>
              <span className="text-[11px] font-bold text-white/40 group-hover:text-green-400 transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Infinite marquee rows */}
        <div className="space-y-3">
          <Marquee items={marqueeRow1} speed={50} />
          <Marquee items={marqueeRow2} reverse speed={40} />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
