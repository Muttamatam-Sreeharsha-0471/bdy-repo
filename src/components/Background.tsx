import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { clsx } from 'clsx';

export const Background = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div className={clsx('absolute inset-0 bg-gradient-to-br', theme.background)}>
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              delay: star.delay,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};