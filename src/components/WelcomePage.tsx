import { motion } from 'framer-motion';
import { Balloon } from './Balloon';
import { useCallback } from 'react';

interface WelcomePageProps {
  onOpen: () => void;
}

const balloons = [
  { color: 'text-red-500', x: 20 },
  { color: 'text-blue-500', x: 40 },
  { color: 'text-yellow-500', x: 60 },
  { color: 'text-green-500', x: 80 },
];

export const WelcomePage = ({ onOpen }: WelcomePageProps) => {
  const handleClick = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {balloons.map((balloon, i) => (
        <Balloon
          key={i}
          color={balloon.color}
          delay={i * 0.5}
          x={balloon.x}
        />
      ))}
      
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white text-center mb-12"
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            "0 0 8px rgba(255,255,255,0.5)",
            "0 0 16px rgba(255,255,255,0.8)",
            "0 0 8px rgba(255,255,255,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Happy Birthday!
      </motion.h1>

      <motion.button
        onClick={handleClick}
        className="px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(255,255,255,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Open Your Card
      </motion.button>
    </motion.div>
  );
};