const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-teal-400">Me</span>
        </h2>
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a dedicated web developer with a strong foundation in modern frontend and backend technologies. I enjoy taking complex problems and turning them into simple, beautiful, and intuitive interface designs.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding or pushing pixels, you'll find me exploring new technologies, contributing to open-source, or working on exciting personal projects like this portfolio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
