import { motion, Variants } from 'framer-motion';
import { useSound } from 'use-sound';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  isOpen: boolean;
  onAnimationComplete: () => void;
}

export const Envelope = ({ isOpen, onAnimationComplete }: EnvelopeProps) => {
  const [playOpenSound] = useSound('/sounds/paper-flip.mp3', { volume: 0.5 });

  const envelopeVariants: Variants = {
    initial: { 
      scale: 0.5, 
      opacity: 0,
      rotate: -10
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 10
      }
    }
  };

  const flapVariants: Variants = {
    closed: { 
      rotateX: 0,
      transition: { duration: 0.5, ease: 'easeIn' }
    },
    open: { 
      rotateX: -180,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        delay: 0.2
      }
    }
  };

  const contentVariants: Variants = {
    closed: { 
      rotateX: 0,
      y: 0,
      opacity: 1
    },
    open: { 
      rotateX: 0,
      y: -150,
      opacity: 0
    }
  };

  return (
    <motion.div
      className="relative w-64 sm:w-80 md:w-96 aspect-[3/2] bg-pink-100 rounded-lg shadow-xl"
      variants={envelopeVariants}
      initial="initial"
      animate="animate"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Envelope body */}
      <div className="absolute inset-0 bg-pink-100 rounded-lg border-2 border-pink-200" />

      {/* Envelope content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={contentVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        onAnimationStart={() => {
          if (isOpen) {
            playOpenSound();
          }
        }}
        onAnimationComplete={() => {
          if (isOpen) {
            onAnimationComplete();
          }
        }}
      >
        <Mail className="w-12 md:w-16 h-12 md:h-16 text-pink-500" />
      </motion.div>
      
      {/* Envelope flap */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-pink-200 origin-top rounded-t-lg"
        style={{ 
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          transformOrigin: 'top'
        }}
        variants={flapVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      />

      {/* Side flaps with subtle 3D effect */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[20%] h-[80%] bg-pink-200 origin-left" 
        style={{ transform: 'rotateY(45deg)' }}
        initial={{ x: -10, opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[20%] h-[80%] bg-pink-200 origin-right"
        style={{ transform: 'rotateY(-45deg)' }}
        initial={{ x: 10, opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      
      {/* Bottom flap with subtle 3D effect */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[20%] bg-pink-200 origin-bottom"
        style={{ transform: 'rotateX(-45deg)' }}
        initial={{ y: 10, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
    </motion.div>
  );
};