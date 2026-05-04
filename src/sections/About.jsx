import TextReveal from '../components/TextReveal';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="relative group order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 group-hover:border-green-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent z-10" />
              <img
                src="https://placehold.co/600x700/050505/00ff41?text=Sameer"
                alt="Sameer Sangam"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -inset-3 bg-green-500/5 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Right: Text */}
          <div className="order-1 md:order-2">
            <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">About Me</p>
            <TextReveal
              text="Building the Future of Web Experiences"
              className="text-3xl md:text-5xl font-black text-white mb-8"
            />
            <div className="space-y-5 text-white/50 leading-relaxed">
              <p>
                I am a Full Stack Developer specialized in building scalable web applications. My most recent work involves leading the technical development of "Laces and Soles" — a premium boutique e-commerce platform.
              </p>
              <p>
                I thrive on solving complex technical challenges, from optimizing mobile layouts to implementing secure OAuth authentication, real-time delivery tracking, and seamless checkout flows.
              </p>
              <p>
                My goal is to create digital products that not only look stunning but also provide a rock-solid, responsive user experience across all devices.
              </p>
            </div>

            {/* Info tags */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Hyderabad, India' },
                { label: 'Stack', value: 'React · Flask · MySQL' },
                { label: 'Email', value: 'sameer@example.com' },
                { label: 'Status', value: 'Open to Opportunities' },
              ].map((item, i) => (
                <div key={i} className="border border-white/8 rounded-xl p-4 hover:border-green-500/30 transition-colors">
                  <p className="text-xs text-green-400 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
