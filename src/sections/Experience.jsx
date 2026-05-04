import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional <span className="text-teal-400">Experience</span></h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {experience.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center group">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-teal-500 bg-slate-950 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content box */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                <div className="glass-card p-8 rounded-2xl hover:border-teal-500/20 transition-colors">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                    {exp.duration}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{exp.role}</h3>
                  <div className="text-slate-500 font-medium mb-4 flex items-center justify-start md:group-odd:justify-end gap-2">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Spacer for other side on desktop */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
