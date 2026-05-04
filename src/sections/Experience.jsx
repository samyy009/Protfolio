import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Career</p>
          <TextReveal
            text="Professional Experience"
            className="text-4xl md:text-6xl font-black text-white"
          />
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          {/* Vertical gradient line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-orange-500/30 to-transparent" />

          <div className="space-y-14">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative group"
              >
                {/* Timeline dot */}
                <motion.div
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                  className="absolute -left-[33px] md:-left-[45px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-orange-400 bg-black group-hover:bg-orange-400 transition-colors duration-300"
                />

                {/* Card */}
                <div className="border border-white/6 rounded-2xl p-7 md:p-9 hover:border-orange-500/25 hover:bg-orange-500/2 transition-all duration-500 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-white/35 font-medium">
                        {exp.company}
                        <span className="mx-2 text-white/15">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <span className="flex-shrink-0 px-4 py-1.5 text-[10px] font-black text-orange-400 border border-orange-500/30 rounded-full uppercase tracking-widest">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm text-white/35 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
