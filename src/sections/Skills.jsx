import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical <span className="text-teal-400">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Working with modern technologies and tools to build scalable, performant AI and web applications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl hover:border-teal-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <svg className="w-6 h-6 text-teal-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide uppercase text-xs opacity-50">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-800/50 hover:bg-teal-500/10 hover:text-teal-400 text-slate-300 text-sm font-medium rounded-xl border border-slate-700/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
