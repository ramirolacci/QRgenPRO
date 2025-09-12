import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../hooks/useLanguage';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      title={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
          {language}
        </span>
      </div>
    </button>
  );
};