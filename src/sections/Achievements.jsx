const Achievements = () => {
  const categories = [
    {
      title: "Certificates",
      items: [
        { name: "Full Stack Web Development", role: "Certified", description: "Comprehensive certification covering React, Node.js, and database management." },
        { name: "Database Design & SQL", role: "Specialist", description: "Advanced certification in relational database design and SQL optimization." },
        { name: "Python for Data Science", role: "Certified", description: "Certification in Python programming with a focus on data manipulation and analysis." }
      ]
    },
    {
      title: "Projects & Impact",
      items: [
        { name: "Laces and Soles Launch", role: "Lead Developer", description: "Successfully developed and optimized a premium shoe boutique application." },
        { name: "Open Source Contributions", role: "Contributor", description: "Active contributor to various web development tools and libraries on GitHub." },
        { name: "Innovation Challenge", role: "Finalist", description: "Recognized for building a high-performance delivery tracking system." }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Achievements & <span className="text-teal-400">Impact</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A showcase of certifications and key technical milestones achieved in my journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-bold text-white border-l-4 border-teal-500 pl-4">{cat.title}</h3>
              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-xl hover:bg-slate-800/40 transition-colors border border-slate-800/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white group-hover:text-teal-400 transition-colors">{item.name}</h4>
                      <span className="text-[10px] bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded font-bold uppercase">{item.role}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
