import { useState } from 'react';
import Modal from './Modal';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full border border-slate-800 hover:border-teal-500/30 cursor-pointer"
      >
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
          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
          <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-auto">
            <span className="text-xs font-bold text-teal-500 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              View Project →
            </span>
            <div className="flex gap-2">
              {project.tech.map((t, i) => (
                <div key={i} title={t} className="w-2 h-2 rounded-full bg-slate-700"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://placehold.co/800x800/0f172a/94a3b8?text=${project.title}`;
              }}
            />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-12">
            <h4 className="text-teal-400 text-sm font-bold uppercase tracking-widest mb-2">{project.tagline}</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{project.title}</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-bold mb-3 uppercase text-xs tracking-widest opacity-50">Key Features</h5>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <span className="text-teal-500 mr-3">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-3 uppercase text-xs tracking-widest opacity-50">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-teal-400 text-xs font-medium rounded-lg border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-8">
                <a href={project.github} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl text-center transition-colors">
                  View Source
                </a>
                <a href={project.demo} className="flex-1 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-4 rounded-2xl text-center transition-colors shadow-lg shadow-teal-500/20">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
