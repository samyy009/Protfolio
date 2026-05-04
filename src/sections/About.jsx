const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Driving Innovation Through <span className="text-teal-400">AI & Entrepreneurship</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am an AI/ML enthusiast with hands-on experience across hackathons, academic research, and entrepreneurship. I have contributed to India's first Telugu LLM at Viswam AI and conducted AI research at IIT Kanpur.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Beyond technology, I have played a key role in driving entrepreneurial initiatives at GCET and served as a Team Leader at the NEN Club, fostering a startup culture and student innovation.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I have participated in 25+ national-level hackathons and earned multiple wins while representing my institution at national forums.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>Full Stack & AI Development</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="glass-card p-2 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://placehold.co/600x600/1e293b/94a3b8?text=Innovation+In+Action" 
                alt="Innovation" 
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
