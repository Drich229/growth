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
    <section className="border-b border-[var(--color-border)] pb-[90px] w-full bg-[var(--color-bg-secondary)] mt-[110px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-[48px] font-bold text-[var(--color-text)] text-center mb-[80px]">
          Présent là où vos clients sont
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialMedias.map((social) => (
            <div
              key={social.id}
              className="flex flex-col p-0 h-[480px] lg:h-[297px] rounded-[16px] bg-[var(--color-bg-media)] transition-all duration-300"
            >
      
              {/* Top */}
              <div className="lg:flex w-full items-stretch gap-8 mb-3 border-b border-[var(--color-border)]">
                
                {/* Left */}
                <div className="flex-1 flex h-[184px] p-6 flex-col justify-center">
                  <p className="text-[12px] pb-4 font-semibold text-[var(--color-text-light)] tracking-widest uppercase mb-3">
                    {social.name}
                  </p>
                  <p style={{ height: '95px',
                        fontSize: '24px', 
                        lineHeight: '40px',
                     }} className="w-[500px] md:w-[350px] lg:w-[297px] text-[var(--color-text)] font-semibold leading-tight">
                    {social.description}
                  </p>
                </div>

                {/* Right */}
                <div
                  className="flex w-full lg:rounded-tr-[16px] items-center justify-center lg:w-50 h-[184px] flex-shrink-0"
                  style={{
                    backgroundColor: social.bg,
                  }}
                >
                  
                  <div
                    className="flex items-center justify-center p-4 rounded-[16px]"
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
              <p className="p-6 text-base text-[var(--color-text-light)] leading-relaxed">
                {social.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}