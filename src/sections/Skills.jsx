import { skills } from '../data/skills';

// All tech items for the infinite marquee
const marqueeItems = [
  "React.js", "JavaScript", "Python", "Flask", "Node.js", "MySQL", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub", "Docker", "REST APIs",
  "Vite", "Framer Motion", "Express", "Redis", "Vercel", "Netlify", "OAuth 2.0",
  "TypeScript", "PostCSS", "CI/CD"
];

// Skill icon cards for the main grid
const skillIcons = [
  { name: "Python", icon: "🐍", bg: "#3d6b8a" },
  { name: "JavaScript", icon: "JS", bg: "#f0db4f", color: "#000" },
  { name: "React", icon: "⚛️", bg: "#20232a" },
  { name: "Flask", icon: "🌶", bg: "#222" },
  { name: "MySQL", icon: "🗄️", bg: "#00618a" },
  { name: "TypeScript", icon: "TS", bg: "#007acc", color: "#fff" },
  { name: "Git", icon: "🔀", bg: "#f05032" },
  { name: "Docker", icon: "🐋", bg: "#0db7ed" },
  { name: "Tailwind", icon: "🌊", bg: "#06b6d4" },
  { name: "Node.js", icon: "⬡", bg: "#339933" },
];

const InfiniteMarquee = ({ items, direction = 'left', speed = 40 }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-4 w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee${direction === 'right' ? 'Reverse' : ''} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-5 py-2.5 border border-white/10 text-white/60 text-sm font-medium rounded-full whitespace-nowrap hover:border-green-500/50 hover:text-green-400 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-2">My Skills</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Technologies & Tools</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            I work with modern technologies and tools to build scalable, performant applications.
          </p>
        </div>

        {/* Icon grid — matches reference site */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-16">
          {skillIcons.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 hover:border-green-500/30 bg-white/2 hover:bg-green-500/5 transition-all group cursor-default"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform"
                style={{ background: skill.bg, color: skill.color || '#fff' }}
              >
                {skill.icon}
              </div>
              <span className="text-xs font-bold text-white/60 group-hover:text-green-400 transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Infinite scrolling marquee rows — exact match to reference */}
        <div className="space-y-2">
          <InfiniteMarquee items={marqueeItems} direction="left" speed={50} />
          <InfiniteMarquee items={[...marqueeItems].reverse()} direction="right" speed={40} />
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
