import { motion } from 'framer-motion';
import { useState } from 'react';
import { Music, PauseCircle, PlayCircle } from 'lucide-react';
import { useSound } from 'use-sound';
import { useTheme } from '../ThemeContext';
import { clsx } from 'clsx';
import { Timeline } from '../Timeline/Timeline';

interface CardContentProps {
  message: string;
}

export const CardContent = ({ message }: CardContentProps) => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playBgMusic, { stop }] = useSound('/sounds/birthday-music.mp3', {
    volume: 0.3,
    loop: true,
  });

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      playBgMusic();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className={clsx(
        'w-full max-w-lg mx-4 md:mx-auto rounded-lg shadow-xl p-4 md:p-8',
        theme.cardBg
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className={clsx('text-xl md:text-2xl font-bold', theme.textColor)}>
          Special Message
        </h2>
        <button
          onClick={toggleMusic}
          className={clsx(
            'flex items-center space-x-2',
            theme.accentColor,
            'hover:opacity-80'
          )}
        >
          <Music className="w-4 h-4" />
          {isPlaying ? (
            <PauseCircle className="w-6 h-6" />
          ) : (
            <PlayCircle className="w-6 h-6" />
          )}
        </button>
      </div>
      
      <motion.p
        className={clsx('text-base md:text-lg leading-relaxed whitespace-pre-wrap', theme.textColor)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {message}
      </motion.p>
      
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Timeline />
      </motion.div>
    </motion.div>
  );
};