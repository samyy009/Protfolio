const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group">
      <div className="relative h-48 w-full overflow-hidden bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            e.target.src = 'https://placehold.co/600x400/1e293b/94a3b8?text=Project+Image';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-slate-700 text-teal-300 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
              GitHub &rarr;
            </a>
          )}
          {project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
