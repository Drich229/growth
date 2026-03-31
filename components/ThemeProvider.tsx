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

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1 bg-[#e8e8e8] dark:bg-[#2a2a2a] rounded-[12px] px- py-2 transition-colors hover:opacity-80"
      aria-label="Toggle theme"
    >
      <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all ${
        isDark ? 'bg-transparent' : 'bg-white'
      }`}>
        <Moon size={16} className={`${isDark ? 'text-[#666666]' : 'text-black'}`} />
      </div>
      <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all ${
        isDark ? 'bg-[#1a1a1a]' : 'bg-transparent'
      }`}>
        <Sun size={16} className={`${isDark ? 'text-[#ff9d00]' : 'text-[#ff9d00]'}`} />
      </div>
    </button>
  );
}
