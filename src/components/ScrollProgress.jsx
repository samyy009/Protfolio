import { useScroll, motion } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-500 to-blue-500 origin-left z-[9998]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
