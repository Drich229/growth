'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  /*useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);*/

  const toggleLight = () => {
    const newTheme = false;
    setIsDark(newTheme);

    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  };

  const toggleDark = () => {
    const newTheme = true;
    setIsDark(newTheme);

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  return (
    <div className='w-[64px] h-[40px] border-[1px] mx-1 border-[var(--color-border)] bg-[var(--color-bg-secondary)] rounded-[12px] flex items-center justify-center' >
      <button
        onClick={toggleDark}
        className="bg-[var(--color-bg-secondary)] rounded-[12px] transition-colors hover:opacity-80"
        aria-label="Toggle theme"
      >
        <div className={`flex items-center w-[26px] h-[26px] justify-center p-1 rounded-[6px] ${isDark ? 'bg-[#27272AFF]' : 'bg-white'
          }`}>
          <Moon size={16} style={{ fill: '#A1A1A1FF' }} className={`${isDark ? 'text-[#666666]' : 'text-[#A1A1A1FF]'}`} />
        </div>
      </button>
      <button
        onClick={toggleLight}
        className="bg-[var(--color-bg-secondary)] rounded-[12px] transition-colors hover:opacity-80"
        aria-label="Toggle theme"
      >
        <div className={`flex items-center justify-center w-[26px] h-[26px] p-1 rounded-[6px] transition-all ${isDark ? 'bg-black' : 'bg-[#E5E5E5FF]'
          }`}>
          <Sun size={16} style={{ fill: `${isDark ? '#F4F4F5FF' : '#171A1FFF'}` }} />
        </div>
      </button>
    </div>

  );
}
