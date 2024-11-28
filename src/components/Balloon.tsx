import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface BalloonProps {
  color: string;
  delay: number;
  x: number;
}

export const Balloon = ({ color, delay, x }: BalloonProps) => {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{ left: `${x}%` }}
      initial={{ y: '100vh' }}
      animate={{
        y: '-120vh',
        x: [0, 20, -20, 0],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Heart className={`w-8 h-8 ${color}`} />
      <div className="w-[1px] h-12 bg-gray-400 -mt-1 ml-4" />
    </motion.div>
  );
};