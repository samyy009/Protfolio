import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, Cpu, ShieldCheck } from 'lucide-react';

const icons = [
  { Icon: Code, color: '#f97316', top: '15%', left: '10%' },
  { Icon: Database, color: '#3b82f6', top: '25%', left: '85%' },
  { Icon: Globe, color: '#8b5cf6', top: '65%', left: '8%' },
  { Icon: Layers, color: '#f97316', top: '75%', left: '80%' },
  { Icon: Cpu, color: '#3b82f6', top: '40%', left: '92%' },
  { Icon: ShieldCheck, color: '#8b5cf6', top: '55%', left: '88%' },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{ top: item.top, left: item.left }}
        >
          <item.Icon size={40} color={item.color} style={{ filter: `drop-shadow(0 0 10px ${item.color}40)` }} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
