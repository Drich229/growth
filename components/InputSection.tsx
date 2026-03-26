'use client';

import { useState } from 'react';
import { ArrowUp, Zap, Lightbulb, Target, Cpu } from 'lucide-react';

const categories = [
  { id: 1, icon: Zap, label: 'Outils d\'automatisations', color: '#E91E8C' },
  { id: 2, icon: Lightbulb, label: 'Conseils', color: '#F59E0B' },
  { id: 3, icon: Target, label: 'Marketing', color: '#10B981' },
  { id: 4, icon: Cpu, label: 'Intégration IA', color: '#FF9D00' },
];

export function InputSection() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [text, setText] = useState('');

  const toggleCategory = (id: number) => {
    setSelectedCategories(prev => 
      prev.includes(id) ? prev.filter(cat => cat !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
      {/* Main Container */}
      <div className="relative bg-[var(--color-card-bg)] border border-[#DEE1E6] dark:border-[#333333] rounded-[16px] w-full h-[206px] shadow-[0px_0px_1px_rgba(23,26,31,0.07),0px_0px_2px_rgba(23,26,31,0.12)]">
        
        {/* Textarea Container */}
        <div className="absolute top-[21px] left-[17px] w-[calc(100%-34px)] h-[164px] bg-[var(--color-inp-bg)] rounded-[16px] flex flex-col p-4 relative">
          {/* Arrow Button - Top Right */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-[var(--color-inp-bg)] hover:opacity-80 transition-opacity flex items-center justify-center">
            <ArrowUp size={16} className="text-[var(--color-text)]" />
          </button>

          {/* Textarea with Counter */}
          <div className="flex flex-col h-full">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 2000))}
              placeholder="Commencez à taper ici..."
              className="w-full bg-transparent text-[var(--color-text)] placeholder-[#9CA3AF] resize-none focus:outline-none text-sm flex-1 pr-10"
            />
            {/* Counter in bottom right */}
            <div className="flex items-center justify-end pt-2">
              <span className="text-xs text-[#9CA3AF]">
                {text.length}/2000
              </span>
            </div>
          </div>
        </div>

        {/* Categories Container */}
        <div className="absolute top-[121px] left-[19px] w-[614px] h-[47px] ml-2 bg-[var(--color-card-bg)] rounded-[14px] shadow-[0px_0px_1px_rgba(23,26,31,0.07),0px_0px_2px_rgba(23,26,31,0.12)] flex items-center px-4 gap-2 overflow-x-auto">
          {categories.map(cat => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategories.includes(cat.id);
            
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-xs font-bold whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#2D3748] dark:bg-[#4A5568] text-white'
                    : 'bg-transparent text-[var(--color-text)] hover:opacity-80'
                }`}
              >
                <IconComponent 
                  size={16} 
                  style={{ color: cat.color, opacity: isSelected ? 1 : 0.6 }}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
