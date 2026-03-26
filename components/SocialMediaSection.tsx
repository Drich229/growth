'use client';

import { Mail, Send, MessageCircle } from 'lucide-react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import Image from 'next/image';

const Facebook = FaFacebook;
const Instagram = FaInstagram;

const socialMedias = [
  {
    id: 1,
    name: 'MESSENGER',
    icon: '/messen.png',
    description: 'Réponses instantanées & relances intelligentes',
    content: 'Hundreds of finely crafted components for shadcn/ui available in Sigma. Easily modify the design system to your brand.',
    bgColor: '#ADD8E6',
    iconBgColor: '#CBE2F9'
  },
  {
    id: 2,
    name: 'INSTAGRAM',
    icon: '/insta.png',
    description: 'Boostez engagement & DM automatisés',
    content: 'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
    bgColor: '#FFB6D9',
    iconBgColor: '#F9B7C8'
  },
  {
    id: 3,
    name: 'WHATSAPP',
    icon: '/whatsap.png',
    description: 'Automatisation 24/7 sur le canal n°1',
    content: 'Hundreds of finely crafted components for shadcn/ui available in Figma. Easily modify the design system to your brand.',
    bgColor: '#90EE90',
    iconBgColor: '#BFF9B7'
  },
  {
    id: 4,
    name: 'FACEBOOK',
    icon: '/meta.png',
    description: 'Leads & support sans effort manuel',
    content: 'Cupidatat ut dolore adipisicing labore voluptate laboris ullamco quis nostrud nulla cupidatat et sint commodo sunt in in. Nisi est voluptate',
    bgColor: '#0B7FFF',
    iconBgColor: '#4F71F9'
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
          {socialMedias.map(social => (
            <div
              key={social.id}
              className="flex flex-col p-8 rounded-2xl bg-[var(--color-input-bg)]"
            >
              {/* Top Section: Text on Left, Icon on Right */}
              <div className="flex items-stretch gap-8 mb-8 pb-0 border-b border-[var(--color-border)]">
                {/* Left: Title and Description */}
                <div className="flex-1 flex flex-col justify-center py-8">
                  <p className="text-sm font-semibold text-[var(--color-text-light)] tracking-widest uppercase mb-3">
                    {social.name}
                  </p>
                  <p className="text-2xl font-bold text-[var(--color-text)] leading-tight">
                    {social.description}
                  </p>
                </div>

                {/* Right: Icon Bubble with nested circle */}
                <div
                  className="flex items-center justify-center w-56 h-full flex-shrink-0"
                  style={{ 
                    backgroundColor: social.bgColor,
                    borderRadius: '0 2rem 0 0'
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                  >
                    <Image src={social.icon} alt={social.name} width={88} height={109} />
                  </div>
                </div>
              </div>

              {/* Bottom: Description Text */}
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
