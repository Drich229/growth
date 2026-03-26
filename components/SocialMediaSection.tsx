'use client';

import Image from 'next/image';

const socialMedias = [
  {
    id: 1,
    name: 'MESSENGER',
    icon: '/messen.png',
    description: 'Réponses instantanées & relances intelligentes',
    content: 'Hundreds of finely crafted components for shadcn/ui available in Sigma.',
    bg: 'var(--social-messenger-bg)',
    iconBg: 'var(--social-messenger-icon-bg)'
  },
  {
    id: 2,
    name: 'INSTAGRAM',
    icon: '/insta.png',
    description: 'Boostez engagement & DM automatisés',
    content: 'Finely crafted components built with React, Tailwind and Shadcn UI.',
    bg: 'var(--social-instagram-bg)',
    iconBg: 'var(--social-instagram-icon-bg)'
  },
  {
    id: 3,
    name: 'WHATSAPP',
    icon: '/whatsap.png',
    description: 'Automatisation 24/7 sur le canal n°1',
    content: 'Hundreds of finely crafted components for shadcn/ui available in Figma.',
    bg: 'var(--social-whatsapp-bg)',
    iconBg: 'var(--social-whatsapp-icon-bg)'
  },
  {
    id: 4,
    name: 'FACEBOOK',
    icon: '/meta.png',
    description: 'Leads & support sans effort manuel',
    content: 'Cupidatat ut dolore adipisicing labore voluptate.',
    bg: 'var(--social-facebook-bg)',
    iconBg: 'var(--social-facebook-icon-bg)'
  }
];

export function SocialMediaSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] text-center mb-12">
          Présent là où vos clients sont
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialMedias.map((social) => (
            <div
              key={social.id}
              className="flex flex-col p-8 rounded-2xl bg-[var(--color-card-bg)] shadow-md hover:shadow-xl transition-all duration-300"
            >
              
              {/* Top */}
              <div className="flex items-stretch gap-8 mb-8 border-b border-[var(--color-border)]">
                
                {/* Left */}
                <div className="flex-1 flex flex-col justify-center py-8">
                  <p className="text-sm font-semibold text-[var(--color-text-light)] tracking-widest uppercase mb-3">
                    {social.name}
                  </p>
                  <p className="text-2xl font-bold text-[var(--color-text)] leading-tight">
                    {social.description}
                  </p>
                </div>

                {/* Right */}
                <div
                  className="flex items-center justify-center w-56 h-full flex-shrink-0"
                  style={{
                    backgroundColor: social.bg,
                    borderRadius: '0 2rem 0 0'
                  }}
                >
                  
                  <div
                    className="flex items-center justify-center p-4 rounded-full"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <p className="text-base text-[var(--color-text-light)] leading-relaxed">
                {social.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}