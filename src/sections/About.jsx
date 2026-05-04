import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const About = () => {
  const infoItems = [
    { label: 'Location', value: 'Hyderabad, India' },
    { label: 'Focus', value: 'Full Stack Development' },
    { label: 'Stack', value: 'React · Flask · MySQL' },
    { label: 'Status', value: '🟢 Open to Opportunities' },
  ];

  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image col */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-2 lg:order-1 group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/8 group-hover:border-green-500/25 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 via-transparent to-transparent z-10" />
              <img
                src="https://placehold.co/700x850/030303/1a1a1a?text=%20"
                alt="Sameer Sangam"
                className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-bold">Available for freelance & full-time</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-green-500/4 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Text col */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-green-400 text-xs font-black uppercase tracking-[0.2em] mb-4"
            >
              About Me
            </motion.p>

            <TextReveal
              text="Building the Future of Web Experiences"
              className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight"
            />

            <div className="space-y-4 text-[15px] text-white/40 leading-[1.85] mb-10">
              <p>
                I'm a Full Stack Developer passionate about crafting high-performance web applications. My most recent work involves leading the development of <span className="text-white/70 font-medium">"Laces and Soles"</span> — a production-ready boutique e-commerce platform with Facebook OAuth, real-time delivery tracking, and a polished mobile experience.
              </p>
              <p>
                I specialize in bridging the gap between beautiful UI and solid backend architecture. From database optimization to smooth front-end animations, I care deeply about every layer of the stack.
              </p>
              <p>
                When I'm not coding, I'm learning, contributing to open source, or exploring modern design systems.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-white/6 rounded-xl p-4 hover:border-green-500/25 hover:bg-green-500/3 transition-all duration-300 group"
                >
                  <p className="text-[10px] text-green-400 font-black uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className="text-sm text-white/70 font-medium group-hover:text-white transition-colors">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-green-400 hover:text-green-300 transition-colors group"
              >
                View my projects
                <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
