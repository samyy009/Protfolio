const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full border border-slate-800 hover:border-teal-500/30">
      <div className="relative h-56 w-full overflow-hidden bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400/0f172a/94a3b8?text=${project.title}`;
          }}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {project.tech.slice(0, 2).map((t, i) => (
            <span key={i} className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-teal-400 text-[10px] uppercase tracking-widest font-bold rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <h4 className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">{project.tagline}</h4>
          <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{project.title}</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        <ul className="space-y-2 mb-8">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start text-xs text-slate-500">
              <span className="text-teal-500 mr-2">+</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <div className="flex gap-2">
            {project.tech.map((t, i) => (
              <div key={i} title={t} className="w-2 h-2 rounded-full bg-slate-700"></div>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={project.demo} className="text-slate-400 hover:text-teal-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
