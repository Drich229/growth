'use client';

import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('Français');

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
  ];

  const handleSelect = (name: string) => {
    setLanguage(name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text-light)] transition-colors"
      >
        <Globe size={20} />
        <span className="text-sm font-medium">{language}</span>
        <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.name)}
              className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                language === lang.name
                  ? 'bg-[var(--color-primary)] text-black font-medium'
                  : 'text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]'
              } first:rounded-t-lg last:rounded-b-lg`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
