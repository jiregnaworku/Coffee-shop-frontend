import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <FaSun
          className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 transform ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-180 scale-0'
          }`}
        />

        {/* Moon Icon */}
        <FaMoon
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 transform ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>

      {/* Subtle glow effect for dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
      )}
    </button>
  );
};

export default ThemeToggle;
