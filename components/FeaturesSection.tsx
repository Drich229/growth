'use client';

import { Megaphone, Bot, HeartHandshake, Heart, Sparkles, ShoppingCart } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Megaphone,
    title: 'Marketing',
    stat: '+40% d\'engagement',
    description: 'campagnes automatisées sur tous les canaux',
    benefits: [
      'Automatisation multicanale',
      'Personalisation intelligente',
      'Résultats mesurables'
    ],
    large: true
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'Ventes',
    stat: '+30% de conversion',
    description: 'grâce à chatbots IA et WhatsApp'
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: 'Service après-vente',
    description: 'Fidélisation client automatisée et personnalisée'
  },
  {
    id: 4,
    icon: Heart,
    title: 'Service client',
    description: 'Réponses 24/7, tickets résolus en < 2h'
  },
  {
    id: 5,
    icon: Sparkles,
    title: 'Intelligence artificielle',
    description: 'Conseiller IA 4/7 + automatisations intelligentes'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-[var(--color-bg-feature)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-[var(--color-bg-small)] h-[28px] p-1 rounded-[10px] w-[160px] items-center justify-center mx-auto mb-6">
            <p className="text-[var(--color-primary)] font-weight-[400px] text-sm mb-2">
              Avantages exclusifs
            </p>
          </div>
          <h2 className="text-[48px] pt-2 font-bold text-[var(--color-text)] mb-8">
            Pourquoi choisir Growth ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="lg:mx-auto grid grid-cols-1 max-w-full lg:w-[1150px] md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Marketing Card - Large */}
          <div className={`${features[0].large ? 'md:row-span-2 lg:col-span-1' : ''} bg-[var(--color-card-bg)] lg:w-[350px] lg:h-[459px] rounded-[16px] p-5 border border-[var(--color-border-feat)]`}>
            <div className="flex items-center justify-center w-[62px] h-[62px] bg-[var(--color-primary)] rounded-[12px] mb-8">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 8.5h4.5L18 4v16L7.5 15.5H3v-7z" />
                <path d="M10 15v4.5a2 2 0 0 1-4 0V14.5" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-text)] mb-4">
              {features[0].title}
            </h3>
            <p className="text-[18px] mb-6 lg:w-[309px] lg:h-[49px]">
              <span className="font-bold text-[var(--color-neutral-text)]">{features[0].stat}</span>
              <span className="text-[var(--color-neutral-text)]">, {features[0].description}</span>
            </p>

            {/* Divider */}
            <div className="border-t border-[var(--color-border)] my-6"></div>

            <ul className="space-y-3">
              {features[0].benefits?.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[16px] text-[var(--color-neutral-text)]">
                  <span className="text-[var(--color-neutral-text)] font-bold mt-0">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventes Card */}
          <div className="bg-[var(--color-card-bg)] lg:w-[360px] lg:h-[220px] rounded-[16px] p-8 border border-[var(--color-border-feat)]">
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[var(--color-primary)] rounded-[12px] mb-6">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-[var(--color-neutral-text)] mb-2">
              {features[1].title}
            </h3>
            <p className="text-[16px] lg:w-[316px]">
              <span className="font-bold text-[var(--color-neutral-text)]">{features[1].stat}</span>
              <span className="text-[var(--color-neutral-text)]"> {features[1].description}</span>
            </p>
          </div>

          {/* Service après-vente Card */}
          <div className="bg-[var(--color-card-bg)] lg:w-[360px] lg:h-[220px] rounded-[16px] p-8 border border-[var(--color-border-feat)]">
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[var(--color-primary)] rounded-[12px] mb-6">
              <HeartHandshake size={24} className="text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-[var(--color-neutral-text)] mb-2">
              {features[2].title}
            </h3>
            <p className="text-[16px] lg:w-[273px] lg:h-[46px] text-[var(--color-neutral-text)]">
              {features[2].description}
            </p>
          </div>

          {/* Service client Card */}
          <div className="bg-[var(--color-card-bg)] lg:w-[360px] lg:h-[220px] rounded-[16px] p-8 border border-[var(--color-border-feat)]">
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[var(--color-primary)] rounded-[12px] mb-6">
              <Heart size={24} className="text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-[var(--color-neutral-text)] mb-2">
              {features[3].title}
            </h3>
            <p className="text-[16px] lg:w-[310px] lg:h-[29px] text-[var(--color-neutral-text)]">
              {features[3].description}
            </p>
          </div>

          {/* Intelligence artificielle Card */}
          <div className="bg-[var(--color-card-bg)] lg:w-[360px] lg:h-[220px] rounded-[16px] p-8 border border-[var(--color-border-feat)] ">
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[var(--color-primary)] rounded-[12px] mb-6">
              <Bot size={24} className="text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-[var(--color-neutral-text)] mb-2">
              {features[4].title}
            </h3>
            <p className="text-[16px] lg:w-[283px] lg:h-[46px] text-[var(--color-neutral-text)]">
              {features[4].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
