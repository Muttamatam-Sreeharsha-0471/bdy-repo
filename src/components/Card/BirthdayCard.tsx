import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Envelope } from './Envelope';
import { CardContent } from './CardContent';

interface BirthdayCardProps {
  message: string;
}

export const BirthdayCard = ({ message }: BirthdayCardProps) => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnvelopeClick = useCallback(() => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
    }
  }, [isEnvelopeOpen]);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div 
        className="cursor-pointer perspective-1000"
        onClick={handleEnvelopeClick}
      >
        <Envelope
          isOpen={isEnvelopeOpen}
          onAnimationComplete={() => setShowContent(true)}
        />
      </div>
      
      {showContent && <CardContent message={message} />}
    </motion.div>
  );
};