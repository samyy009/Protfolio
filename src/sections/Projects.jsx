import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — exact match to reference */}
        <div className="mb-8">
          <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-black text-white">Latest Projects</h2>
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
