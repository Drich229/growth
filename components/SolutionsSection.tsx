'use client';

import { Zap, MessageSquare, Lightbulb, Bot } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    id: 1,
    name: 'Kloo',
    description: 'Un outil pour créer et partager vos contenus et vos contacts',
    bgColor: '#EEF1F9',
    icon: '/kloo.png'
  },
  {
    id: 2,
    name: 'Wachap',
    description: 'Une application web et CRM qui permet d\'automatiser le marketing selon les besoins de whatsapp.',
    bgColor: '#E6F7E6',
    icon: '/wachap.png'
  },
  {
    id: 3,
    name: 'Aginap',
    description: 'L\'app tout-en-un pour centraliser et automatiser ton marketing digital.',
    bgColor: '#F9EACB',
    icon: '/aginap.png'
  },
  {
    id: 4,
    name: 'Typebot',
    description: 'Typebot est une plateforme qui permet de créer des agents conversationnels (chatbots) visuellement',
    bgColor: '#E0E0E0',
    icon: '/typebot.png'
  }
];

export function SolutionsSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mx-auto w-[500px] text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] text-center mb-12">
          Des solutions prêtes à l'emploi
        </h2>
        
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(solution => (
            <div
              key={solution.id}
              className="flex shadow-md flex-col items-center text-center p-2 rounded-[16px] bg-[var(--color-card-bg)]"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-full py-15 rounded-[16px] mb-6"
                style={{ backgroundColor: solution.bgColor }}
              >
                <Image src={solution.icon} alt={solution.name} width={100} height={99}  />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                {solution.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
