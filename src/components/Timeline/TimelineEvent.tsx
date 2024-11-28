import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { clsx } from 'clsx';

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineEventProps {
  memory: Memory;
  index: number;
}

export const TimelineEvent = ({ memory, index }: TimelineEventProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="relative pl-16"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 + 2.5 }}
    >
      <div className={clsx(
        'absolute left-6 w-4 h-4 rounded-full border-2',
        theme.accentColor,
        'bg-white'
      )} />
      
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-md">
        <span className={clsx('text-sm font-semibold', theme.accentColor)}>
          {memory.date}
        </span>
        <h4 className={clsx('text-lg font-semibold mt-1', theme.textColor)}>
          {memory.title}
        </h4>
        <p className={clsx('text-sm mt-2', theme.textColor)}>
          {memory.description}
        </p>
        <img
          src={memory.image}
          alt={memory.title}
          className="w-full h-48 object-cover rounded-lg mt-4"
        />
      </div>
    </motion.div>
  );
};