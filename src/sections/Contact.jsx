const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-teal-400 text-sm font-bold uppercase tracking-widest mb-2">Get in touch</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Have a project in mind? <span className="text-teal-400 italic">Let's build</span> it.
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-lg">
              I typically respond within 24 hours. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                  <svg className="w-6 h-6 text-teal-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email Me</div>
                  <a href="mailto:nikhileshuraju@gmail.com" className="text-xl font-bold text-white hover:text-teal-400 transition-colors">nikhileshuraju@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                  <svg className="w-6 h-6 text-teal-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Based in</div>
                  <div className="text-xl font-bold text-white">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-12 rounded-[40px] border border-slate-800/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Nikhilesh Raju" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="hello@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea rows="5" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-5 rounded-2xl transition-all transform active:scale-95 shadow-xl shadow-teal-500/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
