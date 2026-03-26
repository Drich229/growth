'use client';

import { Megaphone, ShoppingCart, RefreshCw, Heart, Lightbulb } from 'lucide-react';

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
    icon: RefreshCw,
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
    icon: Lightbulb,
    title: 'Intelligence artificielle',
    description: 'Conseiller IA 4/7 + automatisations intelligentes'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-[var(--color-bg-secondary)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm mb-2">
            Avantages exclusifs
          </p>
          <h2 className="text-3xl md:text-4xl pt-2 font-bold text-[var(--color-text)] mb-8">
            Pourquoi choisir Growth ?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Marketing Card - Large */}
          <div className={`${features[0].large ? 'md:row-span-2 lg:col-span-1' : ''} bg-[var(--color-card-bg)] rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-center justify-center w-24 h-24 bg-[var(--color-primary)] rounded-3xl mb-8">
              <Megaphone size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-text)] mb-4">
              {features[0].title}
            </h3>
            <p className="text-base mb-6">
              <span className="font-bold text-[var(--color-text)]">{features[0].stat}</span>
              <span className="text-[var(--color-text-light)]">, {features[0].description}</span>
            </p>
            
            {/* Divider */}
            <div className="border-t border-[var(--color-border)] my-6"></div>
            
            <ul className="space-y-3">
              {features[0].benefits?.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-[var(--color-text)]">
                  <span className="text-[var(--color-primary)] font-bold mt-0">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventes Card */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-[var(--color-primary)] rounded-lg mb-6">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              {features[1].title}
            </h3>
            <p className="text-sm">
              <span className="font-bold text-[var(--color-text)]">{features[1].stat}</span>
              <span className="text-[var(--color-text-light)]"> {features[1].description}</span>
            </p>
          </div>

          {/* Service après-vente Card */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-[var(--color-primary)] rounded-lg mb-6">
              <RefreshCw size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              {features[2].title}
            </h3>
            <p className="text-sm text-[var(--color-text-light)]">
              {features[2].description}
            </p>
          </div>

          {/* Service client Card */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-[var(--color-primary)] rounded-lg mb-6">
              <Heart size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              {features[3].title}
            </h3>
            <p className="text-sm text-[var(--color-text-light)]">
              {features[3].description}
            </p>
          </div>

          {/* Intelligence artificielle Card */}
          <div className="bg-[var(--color-card-bg)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-[var(--color-primary)] rounded-lg mb-6">
              <Lightbulb size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              {features[4].title}
            </h3>
            <p className="text-sm text-[var(--color-text-light)]">
              {features[4].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
