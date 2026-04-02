'use client';

import { useState } from 'react';
import { ArrowUp, Zap, Lightbulb, Target, Cpu } from 'lucide-react';
import Image from 'next/image';

const categories = [
  { id: 1, icon: Zap, label: "Outils d'automatisations", color: '#E91E8C' },
  { id: 2, icon: Lightbulb, label: 'Conseils', color: '#F59E0B' },
  { id: 3, icon: Target, label: 'Marketing', color: '#10B981' },
  { id: 4, icon: Cpu, label: 'Intégration IA', color: '#FF9D00' },
];

export function InputSection() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([1]);
  const [text, setText] = useState('');

  const toggleCategory = (id: number) => {
    setSelectedCategories(prev =>
      prev.includes(id)
        ? prev.filter(cat => cat !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto bg-[var(--color-bg-secondary)]">
      {/* Main Container */}
      <div className="bg-[var(--color-card-bg)] p-5 border-neutral-300 rounded-[16px] w-[340px] md:w-[800px] lg:w-[1093px] mx-auto rounded-[16px] h-[350px] lg:h-[206px] shadow-sm">
        
        {/* Textarea Container */}
        <div className="lg:h-[164px] w-[300px] md:w-[760px] h-[300px] lg:w-[1051px] bg-[var(--color-inp-bg)] rounded-[16px] flex flex-col p-4 relative">
          
          {/* Arrow */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-[var(--color-arrow-bg)] hover:opacity-80 transition">
            <Image src="/arrow.png" alt="Envoyer" width={20} height={20} />
          </button>

          {/* Textarea */}
          <div className="flex flex-col h-full">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 2000))}
              placeholder="Commencez à taper ici..."
              className="w-full bg-transparent text-[var(--color-text)] placeholder-[#9CA3AF] resize-none focus:outline-none text-sm pr-10 flex-1/2 overflow-y-auto max-h-[90px] lg:max-h-[80px]"
            />

            <div className="flex absolute bottom-1 left-5 pt-1">
              <span className="text-xs text-[#9CA3AF]">
                {text.length}/2000
              </span>
            </div>
          </div>

          {/* 🔥 CATEGORIES (INSIDE FIELD) */}
          <div
            className="
              absolute lg:top-[100px] lg:left-[19px] lg:right-2 lg:w-[614px] lg:h-[47px] lg:rounded[14px]
              w-[250px]
              h-[140px]
              top-[127px] left-4 right-2
              bg-[var(--color-card-bg)]
              rounded-[12px]
              grid grid-cols-1 gap-1 p-1
    
              lg:flex items-center

            "
          >
            {categories.map(cat => {
              const IconComponent = cat.icon;
              const isSelected = selectedCategories.includes(cat.id);

              return (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-[8px]
                    text-[12px] whitespace-nowrap flex-shrink-0
                    transition-all
                    ${isSelected
                      ? 'bg-[var(--color-bg-selector)] text-[var(--color-text-selected)]'
                      : 'bg-transparent text-[var(--color-text-no-selected)] hover:opacity-80'}
                  `}
                >
                  <IconComponent
                    size={16}
                    style={{
                      color: cat.color,
                      opacity: isSelected ? 1 : 0.6
                    }}
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}