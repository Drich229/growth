'use client';

import Image from 'next/image';

const solutions = [
  {
    id: 1,
    name: 'Kloo',
    description: 'Un outil pour créer et partager vos contenus et vos contacts',
    bg: 'var(--icon-kloo-bg)',
    icon: '/kloo.png'
  },
  {
    id: 2,
    name: 'Wachap',
    description: "Une application web et CRM qui permet d'automatiser le marketing selon les besoins de whatsapp.",
    bg: 'var(--icon-wachap-bg)',
    icon: '/wachap.png'
  },
  {
    id: 3,
    name: 'Aginap',
    description: "L'app tout-en-un pour centraliser et automatiser ton marketing digital.",
    bg: 'var(--icon-aginap-bg)',
    icon: '/aginap.png'
  },
  {
    id: 4,
    name: 'Typebot',
    description: 'Typebot est une plateforme qui permet de créer des agents conversationnels (chatbots) visuellement',
    bg: 'var(--icon-typebot-bg)',
    icon: '/typebot.png'
  }
];

export function SolutionsSection() {
  return (
    <section className="w-full py-[100px] mt-10 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mx-auto max-w-[500px] text-center lg:mr-115">
          <h2 className="text-[48px] lg:w-[672px] font-bold text-[var(--color-text)] mb-12">
            Des solutions prêtes à l'emploi
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col items-center border border-[var(--color-border-sol)] text-center p-1 rounded-[16px] bg-[var(--color-card-bg)] transition-all duration-300"
            >

              {/* Icon */}
              <div
                className="flex items-center justify-center w-full py-14 rounded-[16px] mb-6"
                style={{ backgroundColor: solution.bg }}
              >
                <Image
                  src={solution.icon}
                  alt={solution.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold mx-auto text-[var(--color-text)] mb-3" style={{
                height: '40px',
                textAlign: 'center',
                fontSize: '28px',
                lineHeight: '40px',
              }}>
                {solution.name}
              </h3>

              {/* Description */}
              <p className="pb-4 text-[var(--color-text-light)] leading-relaxed" style={{
                width: '272px',
                fontSize: '16px',
                lineHeight: '24px',
              }}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}