import { motion } from 'framer-motion';

const Marquee = ({ text, speed = 50, direction = 'left', className = '' }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-block ${className}`}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        <div className="flex">
          <span className="inline-block px-4">{text}</span>
          <span className="inline-block px-4">{text}</span>
          <span className="inline-block px-4">{text}</span>
          <span className="inline-block px-4">{text}</span>
          <span className="inline-block px-4">{text}</span>
          <span className="inline-block px-4">{text}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;