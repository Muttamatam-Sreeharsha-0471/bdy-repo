import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { WelcomePage } from './components/WelcomePage';
import { BirthdayCard } from './components/Card/BirthdayCard';
import { ClosingScene } from './components/ClosingScene';
import { ThemeProvider } from './components/ThemeContext';
import { ThemeSelector } from './components/ThemeSelector';

const birthdayMessage = `Dear Friend,

Wishing you a day filled with joy, laughter, and unforgettable moments! 
May this year bring you endless opportunities and beautiful surprises.

Happy Birthday! 🎉✨

With love,
Your Friend`;

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isClosingSceneActive, setIsClosingSceneActive] = useState(false);

  const handleCardOpen = () => {
    setIsCardOpen(true);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (isCardOpen) {
      timeoutId = setTimeout(() => {
        setIsClosingSceneActive(true);
      }, 20000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isCardOpen]);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Background />
        <ThemeSelector />
        {!isCardOpen ? (
          <WelcomePage onOpen={handleCardOpen} />
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <BirthdayCard message={birthdayMessage} />
          </div>
        )}
        {isClosingSceneActive && <ClosingScene />}
      </div>
    </ThemeProvider>
  );
}

export default App;