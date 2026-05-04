import TextReveal from '../components/TextReveal';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <TextReveal 
              text="Building the Future of Web Experiences" 
              className="text-3xl md:text-5xl font-bold text-white mb-8" 
            />
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a Full Stack Developer specialized in building scalable web applications. My most recent work involves leading the technical development of "Laces and Soles", a premium boutique application.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I thrive on solving complex technical challenges, from optimizing mobile boutique layouts to implementing secure OAuth authentication and real-time delivery tracking systems.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              My goal is to create seamless, high-performance digital products that not only look stunning but also provide a rock-solid user experience.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>React, Flask, MySQL, Python</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="glass-card p-2 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://placehold.co/600x600/1e293b/94a3b8?text=Sameer+Sangam" 
                alt="Sameer Sangam" 
                className="rounded-xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
