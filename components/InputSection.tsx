'use client';

import { useState } from 'react';
import { ArrowUp, Zap, Lightbulb, Target, Cpu } from 'lucide-react';

const categories = [
  { id: 1, icon: Zap, label: "Outils d'automatisations", color: '#E91E8C' },
  { id: 2, icon: Lightbulb, label: 'Conseils', color: '#F59E0B' },
  { id: 3, icon: Target, label: 'Marketing', color: '#10B981' },
  { id: 4, icon: Cpu, label: 'Intégration IA', color: '#FF9D00' },
];

export function InputSection() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [text, setText] = useState('');

  const toggleCategory = (id: number) => {
    setSelectedCategories(prev =>
      prev.includes(id)
        ? prev.filter(cat => cat !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-8 pb-20 bg-[var(--color-bg-secondary)]">
      {/* Main Container */}
      <div className="bg-[var(--color-card-bg)] p-4 rounded-[16px] w-full h-[206px] shadow-sm">
        
        {/* Textarea Container */}
        <div className="h-full bg-[var(--color-inp-bg)] rounded-[16px] flex flex-col p-4 relative">
          
          {/* Arrow */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-[var(--color-inp-bg)] hover:opacity-80 transition">
            <ArrowUp size={16} className="text-[var(--color-text)]" />
          </button>

          {/* Textarea */}
          <div className="flex flex-col h-full">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 2000))}
              placeholder="Commencez à taper ici..."
              className="w-full bg-transparent text-[var(--color-text)] placeholder-[#9CA3AF] resize-none focus:outline-none text-sm flex-1 pr-10"
            />

            <div className="flex justify-end pt-2 mb-15 sm:mb-0 md:mb-0 lg:mb-0">
              <span className="text-xs text-[#9CA3AF]">
                {text.length}/2000
              </span>
            </div>
          </div>

          {/* 🔥 CATEGORIES (INSIDE FIELD) */}
          <div
            className="
              absolute bottom-2 left-2 right-2
              md:w-[550px]
              xs:w-[200px]
              lg:w-[700px]
              sm:w-[350px]
              bg-[var(--color-card-bg)]
              rounded-[12px]
              px-2 py-2
              flex items-center gap-2
              overflow-x-auto
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
                    flex items-center gap-2 px-3 py-1.5 rounded-full
                    text-xs font-bold whitespace-nowrap flex-shrink-0
                    transition-all
                    ${isSelected
                      ? 'bg-[#2D3748] dark:bg-[#4A5568] text-white'
                      : 'bg-transparent text-[var(--color-text)] hover:opacity-80'}
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