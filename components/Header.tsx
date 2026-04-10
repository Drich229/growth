'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeProvider';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-[100vw] overflow-x-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)] fixed top-0 left-0 right-0 z-50">
      <nav className="relative h-[68px] w-full px-4 lg:px-6 py-4 flex items-center justify-between">
        <div className="text-[20px] leading-[20px] font-bold lg:absolute lg:left-[100px] text-[var(--color-text)]">GROWTH</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:absolute lg:top-[21px] lg:left-[280px] lg:w-[383px] lg:h-[26px] items-center text-[14px] leading-[22px] font-normal opacity-100">
          <Link href="#" className="flex items-center justify-center whitespace-nowrap bg-transparent rounded-none py-[2px] px-[15px] text-[16px] leading-[26px] font-normal text-[var(--color-neutral-text)] dark:text-[var(--color-text)] hover:text-[var(--color-primary)] hover:font-bold transition-all">
            Accueil
          </Link>
          <Link href="#" className="flex items-center justify-center whitespace-nowrap bg-transparent rounded-none py-[2px] px-[15px] text-[16px] leading-[26px] font-normal text-[var(--color-neutral-text)] dark:text-[var(--color-text)] hover:text-[var(--color-primary)] hover:font-bold transition-all">
            Affiliation
          </Link>
          <Link href="#" className="flex items-center justify-center whitespace-nowrap bg-transparent rounded-none py-[2px] px-[15px] text-[16px] leading-[26px] font-normal text-[var(--color-neutral-text)] dark:text-[var(--color-text)] hover:text-[var(--color-primary)] hover:font-bold transition-all">
            A propos
          </Link>
          <Link href="#" className="flex items-center justify-center whitespace-nowrap bg-transparent rounded-none py-[2px] px-[15px] text-[16px] leading-[26px] font-normal text-[var(--color-neutral-text)] dark:text-[var(--color-text)] hover:text-[var(--color-primary)] hover:font-bold transition-all">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:absolute lg:right-[70px] items-center gap-2">
          <div><LanguageSelector /></div>
          <button className="flex font-semibold items-center justify-center gap-[6px] w-[247px] h-[40px] px-[12px] text-[14px] leading-[22px] text-white bg-[var(--color-primary)] border-none rounded-[12px] shadow-[0px_0px_1px_#171a1f12,_0px_0px_2px_#171a1f1F] hover:bg-[#E47A00] hover:text-white active:bg-[#C96B00] active:text-white disabled:opacity-40 transition-colors">
            Découvrir nos offres →
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="text-[var(--color-text)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] px-6 py-4 space-y-4 w-full overflow-x-hidden">
          <Link href="#" className="block text-[var(--color-text)] hover:text-[var(--color-primary)]">
            Accueil
          </Link>
          <Link href="#" className="block text-[var(--color-text)] hover:text-[var(--color-primary)]">
            Affiliation
          </Link>
          <Link href="#" className="block text-[var(--color-text)] hover:text-[var(--color-primary)]">
            A propos
          </Link>
          <Link href="#" className="block text-[var(--color-text)] hover:text-[var(--color-primary)]">
            Contact
          </Link>
          <div className="pt-4 border-t border-[var(--color-border)]">
            <LanguageSelector />
          </div>
          <button className="flex items-center justify-center gap-[6px] w-full h-[40px] px-[12px] text-[14px] leading-[22px] font-normal text-white bg-[var(--color-primary)] border-none rounded-[12px] shadow-[0px_0px_1px_#171a1f12,_0px_0px_2px_#171a1f1F] hover:bg-[#E47A00] hover:text-white active:bg-[#C96B00] active:text-white disabled:opacity-40 transition-colors">
            Découvrir nos offres →
          </button>
        </div>
      )}
    </header>
  );
}