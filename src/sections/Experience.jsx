import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-2">Career</p>
          <TextReveal
            text="Professional Experience"
            className="text-4xl md:text-6xl font-black text-white"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-white/10 to-transparent" />

          <div className="space-y-16 pl-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1 w-3 h-3 rounded-full border-2 border-green-400 bg-black" />

                {/* Duration badge */}
                <span className="inline-block px-3 py-1 text-[11px] font-bold text-green-400 border border-green-500/30 rounded-full mb-3 uppercase tracking-widest">
                  {exp.duration}
                </span>

                <div className="border border-white/8 rounded-2xl p-8 hover:border-green-500/20 transition-colors group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-white/40 font-medium">
                        {exp.company}
                        <span className="mx-2">·</span>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{exp.description}</p>
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
