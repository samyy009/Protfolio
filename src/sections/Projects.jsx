import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — exact match to reference */}
        <div className="mb-4">
          <p className="text-orange-400 text-xs font-black uppercase tracking-widest mb-1">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Latest Projects</h2>
        </div>

        {/* Projects listed vertically, each separated by a line */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
