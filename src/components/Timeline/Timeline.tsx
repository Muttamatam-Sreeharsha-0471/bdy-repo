import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { clsx } from 'clsx';
import { TimelineEvent } from './TimelineEvent';

const memories = [
  {
    id: 1,
    date: '1st August 2023',
    title: 'FOD Class: The Beginning',
    description: 'It was just another day in the FOD class, but little did we know, this was the start of something special. That’s when we first met and instantly connected, laying the foundation for a wonderful friendship.',
    image: 'image/friendship.jpg',
  },
  {
    id: 2,
    date: '4th August 2023',
    title: 'First Lunch Outing',
    description: 'Our first adventure outside the classroom—a simple lunch turned into an unforgettable moment of laughter, stories, and delicious food that made our bond even stronger.',
    image: 'image/dabha.jpg',
  },
  {
    id: 3,
    date: '28th September 2023',
    title: 'First Movie Together',
    description: 'The day we stepped into the world of cinema together! From picking the perfect movie to sharing popcorn and endless laughs, this was an experience etched forever in our hearts.',
    image: 'image/movie.png',
  },
];


export const Timeline = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      <h3 className={clsx('text-xl font-semibold', theme.textColor)}>
        Memory Timeline
      </h3>
      
      <div className="relative space-y-8">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {memories.map((memory, index) => (
          <TimelineEvent
            key={memory.id}
            memory={memory}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};