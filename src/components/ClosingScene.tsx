import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Candle = ({ onClick, isBlown }) => {
  return (
    <motion.div
      className={`w-8 h-20 bg-yellow-300 rounded-t-full relative cursor-pointer ${isBlown ? 'opacity-50' : ''}`}
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className={`absolute bottom-0 w-full h-4 bg-red-500 rounded-full ${isBlown ? 'hidden' : ''}`} />
    </motion.div>
  );
};

const ConfettiExplosion = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500"
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 0, scale: 2 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full flex flex-wrap justify-around">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-red-500"
              initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear'
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const GratitudeMessage = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center text-6xl font-bold text-white"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      Thank You for Celebrating With Me!
    </motion.div>
  );
};

export const ClosingScene = () => {
  const [blownCandles, setBlownCandles] = useState([]);

  const handleCandleClick = (index) => {
    setBlownCandles((prevBlown) => [...prevBlown, index]);
  };

  useEffect(() => {
    if (blownCandles.length === 5) {
      // Trigger confetti explosion
    }
  }, [blownCandles]);

  return (
    <div className="fixed inset-0 flex justify-center items-end pb-16 bg-gray-900">
      <div className="flex space-x-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Candle
            key={i}
            onClick={() => handleCandleClick(i)}
            isBlown={blownCandles.includes(i)}
          />
        ))}
      </div>
      <AnimatePresence>
        {blownCandles.length === 5 && (
          <>
            <ConfettiExplosion />
            <GratitudeMessage />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};