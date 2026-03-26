'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeProvider';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-bg)] fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-[var(--color-text)]">GROWTH</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <Link href="#" className="text-[var(--color-text)] text-sm hover:text-[var(--color-primary)] transition-colors">
            Accueil
          </Link>
          <Link href="#" className="text-[var(--color-text)] text-sm hover:text-[var(--color-primary)] transition-colors">
            Affiliation
          </Link>
          <Link href="#" className="text-[var(--color-text)] text-sm hover:text-[var(--color-primary)] transition-colors">
            A propos
          </Link>
          <Link href="#" className="text-[var(--color-text)] text-sm hover:text-[var(--color-primary)] transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSelector />
          <ThemeToggle />
          <button className="px-6 py-2 bg-[var(--color-primary)] text-white font-semibold rounded-[12px] hover:bg-[var(--color-primary-dark)] transition-colors text-sm">
            Découvrir nos offres →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
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
        <div className="lg:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] px-6 py-4 space-y-4">
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
          <button className="w-full px-6 py-2 bg-[var(--color-primary)] text-white font-semibold rounded-[12px]">
            Découvrir nos offres →
          </button>
        </div>
      )}
    </header>
  );
}