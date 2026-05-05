import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const TESTIMONIALS = [
  {
    name: "John Doe",
    role: "Senior Developer",
    text: "Sameer's attention to detail in data annotation is unparalleled. He's a reliable team coordinator who knows how to deliver production-grade results.",
    avatar: "https://ui-avatars.com/api/?name=JD&background=1a0800&color=f97316&bold=true"
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    text: "Building the Flavora platform with Sameer was a breeze. His full-stack skills and speed are impressive, especially under hackathon pressure.",
    avatar: "https://ui-avatars.com/api/?name=JS&background=1a0800&color=f97316&bold=true"
  },
  {
    name: "Robert Wilson",
    role: "Tech Lead",
    text: "A versatile developer who can bridge the gap between AI data management and modern web frontends. Sameer is a rare talent.",
    avatar: "https://ui-avatars.com/api/?name=RW&background=1a0800&color=f97316&bold=true"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Testimonials</p>
          <TextReveal text="What People Say" className="text-4xl md:text-6xl font-black text-white justify-center mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-morphism p-8 rounded-3xl relative group"
            >
              <div className="absolute top-8 right-8 text-orange-400/20 group-hover:text-orange-400/40 transition-colors">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11.5C14.017 12.0523 13.5693 12.5 13.017 12.5H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V11.5C5.017 12.0523 4.56928 12.5 4.017 12.5H3.017V21H5.017Z" />
                </svg>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8 italic relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-orange-400/60 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
