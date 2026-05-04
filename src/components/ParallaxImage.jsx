import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.2 }}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.src = `https://placehold.co/800x600/0a0a0a/3b82f6?text=${alt}`;
        }}
      />
    </div>
  );
};

export default ParallaxImage;
