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
    <div className="relative flex flex-col mr-2 min-w-[149px] w-max">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-[8px] w-full h-[40px] px-[16px] rounded-[16px] text-[14px] leading-[22px] font-normal whitespace-nowrap transition-colors ${isOpen ? 'bg-[#FFDCB4] text-[#944F00] font-bold' : 'bg-transparent text-[var(--color-neutral-text)]'
          }`}
      >
        <div className="flex items-center gap-[8px]">
          <Globe size={24} />
          <span className="text-left">{language}</span>
        </div>
        <ChevronDown size={20} className={`transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] right-0 w-full flex flex-col bg-[var(--color-bg-secondary)] shadow-[0px_0px_1px_#171a1f12,_0px_0px_2px_#171a1f1F] rounded-[16px] z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.name)}
              className={`flex items-center justify-start gap-[8px] p-[16px] w-full text-[14px] leading-[22px] whitespace-nowrap transition-colors ${language === lang.name
                ? 'bg-[#FFDCB4] text-[#944F00] font-bold'
                : 'bg-transparent text-[#565D6D] dark:text-[var(--color-text-no-selected)] hover:bg-[#F8F9FA] dark:hover:bg-[#27272A]'
                }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
