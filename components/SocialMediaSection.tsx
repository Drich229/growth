'use client';

import Image from 'next/image';

const socialMedias = [
  {
    id: 1,
    name: 'MESSENGER',
    icon: '/messen.png',
    description: 'Réponses instantanées & relances intelligentes',
    content: 'Hundreds of finely crafted components for shadcn/ui available in Sigma. Easily modify the design system to your brand.',
    bg: 'var(--social-messenger-bg)',
    iconBg: 'var(--social-messenger-icon-bg)'
  },
  {
    id: 2,
    name: 'INSTAGRAM',
    icon: '/insta.png',
    description: 'Boostez engagement & DM automatisés',
    content: 'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
    bg: 'var(--social-instagram-bg)',
    iconBg: 'var(--social-instagram-icon-bg)'
  },
  {
    id: 3,
    name: 'WHATSAPP',
    icon: '/whatsap.png',
    description: 'Automatisation 24/7 sur le canal n°1',
    content: 'Hundreds of finely crafted components for shadcn/ui available in Figma. Easily modify the design system to your brand.',
    bg: 'var(--social-whatsapp-bg)',
    iconBg: 'var(--social-whatsapp-icon-bg)'
  },
  {
    id: 4,
    name: 'FACEBOOK',
    icon: '/meta.png',
    description: 'Leads & support sans effort manuel',
    content: 'Cupidatat ut dolore adipisicing labore voluptate laboris ullamco quis nostrud nulla cupidatat et sint commodo sunt in in. Nisi est voluptate',
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
        <div className="grid lg:w-[1176px] mx-auto grid-cols-1 md:grid-cols-2 gap-8">
          {socialMedias.map((social) => (
            <div
              key={social.id}
              className="flex flex-col p-0 h-[520px] lg:h-[297px] lg:w-[580px] rounded-[16px] bg-[var(--color-bg-media)] transition-all duration-300"
            >

              {/* Top */}
              <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[184px] items-stretch border-b border-[var(--color-border)]">

                {/* Left */}
                <div className="flex-1 flex h-[184px] p-6 lg:p-[32px] flex-col justify-center">
                  <p className="text-[12px] font-bold text-[#6B7280] dark:text-[var(--color-text-light)] tracking-widest uppercase mb-6">
                    {social.name}
                  </p>
                  <p style={{ fontWeight: 400 }} className="w-full lg:w-[297px] lg:h-[95px] text-[24px] leading-[34px] lg:leading-[40px] text-[var(--color-text-media)]">
                    {social.description}
                  </p>
                </div>

                {/* Right */}
                <div
                  className="flex w-full lg:w-[216px] h-[184px] flex-shrink-0 items-center justify-center rounded-t-[16px] lg:rounded-none lg:rounded-tr-[16px]"
                  style={{
                    backgroundColor: social.bg,
                  }}
                >
                  <div className="flex items-center justify-center p-4">
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
              <div className="flex-1 p-6 lg:p-[32px] pt-4 lg:pt-6">
                <p className="text-[16px] text-[var(--color-text-media-2)] leading-[26px]">
                  {social.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}