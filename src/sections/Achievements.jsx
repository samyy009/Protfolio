const Achievements = () => {
  const achievements = [
    { title: "Hackathon Winner", description: "First place in the university hackathon 2025." },
    { title: "Open Source Contributor", description: "Contributed to popular React open source libraries." },
    { title: "Certified Developer", description: "Completed advanced full-stack development certification." }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-teal-400">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
