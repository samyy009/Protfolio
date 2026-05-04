const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <img 
            src="/assets/profile.png" 
            alt="Profile" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-teal-500/30 object-cover shadow-2xl"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Nikhilesh+Raju&background=0D8ABC&color=fff&size=128';
            }}
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Nikhilesh Raju</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            A passionate Full Stack Developer building modern, scalable, and dynamic web applications.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-full transition-colors shadow-lg shadow-teal-500/30">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-full transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
