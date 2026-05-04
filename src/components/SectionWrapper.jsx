import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98], // Custom premium easing
        delay: 0.1 
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
