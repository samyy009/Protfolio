import { stats } from '../data/projects';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-teal-500 blur-2xl opacity-20 rounded-full"></div>
            <img 
              src="/assets/profile.png" 
              alt="Kuppili Nikhilesh Raju" 
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-teal-500/50 object-cover shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Nikhilesh+Raju&background=0D8ABC&color=fff&size=256';
              }}
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Kuppili <span className="text-teal-400">Nikhilesh Raju</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto font-medium">
            AI/ML Engineer & Enthusiast
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about building impactful, real-world solutions using Artificial Intelligence and emerging technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://nikhileshraju.me/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20">
              Download CV
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-lg transition-all transform hover:scale-105">
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-12 border-t border-slate-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
