import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { themes, ThemeType } from '../types/theme';
import { Palette } from 'lucide-react';
import { useState } from 'react';

export const ThemeSelector = () => {
  const { setTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
      >
        <Palette className="w-6 h-6" />
      </button>

      <div className={`${
        isOpen ? 'block' : 'hidden'
      } md:block bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 mt-2 md:mt-0`}>
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4" />
          <span className="text-sm font-medium">Theme</span>
        </div>
        <div className="flex flex-col gap-2">
          {(Object.keys(themes) as ThemeType[]).map((themeKey) => (
            <button
              key={themeKey}
              onClick={() => {
                setTheme(themeKey);
                setIsOpen(false);
              }}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                currentTheme === themeKey
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {themes[themeKey].name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};