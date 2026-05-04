const Achievements = () => {
  const categories = [
    {
      title: "Honors & Awards",
      items: [
        { name: "Boeing BUILD 3.0", role: "Regional Finalist", description: "Competed in prestigious innovation challenge showcasing engineering solutions." },
        { name: "CMR Hackfest 1.0", role: "Winner", description: "Won first place with NexVerse Translation - AI multilingual solution." },
        { name: "Techvaganza Startup Fest", role: "Runner-up", description: "Secured 1st runner up at NIT Srinagar presenting HerVival AI safety platform." }
      ]
    },
    {
      title: "Key Activities",
      items: [
        { name: "Viswam AI", role: "Tech Lead Intern", description: "Contributed to India's first Telugu LLM and built VerseVaani AI application." },
        { name: "IIT Kanpur", role: "AI Research Intern", description: "Worked on Book Summarizer project using Generative AI and NLP." },
        { name: "Adobe Hackathon", role: "Participant", description: "Engaged in high-intensity problem solving and software development." }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Achievements & <span className="text-teal-400">Impact</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A track record of innovation, leadership, and technical excellence across national platforms.</p>
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
