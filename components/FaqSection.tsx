'use client';
import { useState } from 'react';

const faqItems = [
  {
    question: 'Combien ça coûte ?',
    answer: 'Nous proposons plusieurs plans flexibles adaptés aux besoins de tous les volumes : starter, pro, et entreprise. Les tarifs démarrent à 49 €/mois, avec réduction annuelle.'
  },
  {
    question: 'Combien de demandes/mois ?',
    answer: 'Le quota dépend du plan choisi. Par exemple, le plan Starter inclut 500 demandes/mois, le Pro 2000, et le Entreprise est illimité avec SLA.'
  },
  {
    question: 'On peut tout déléguer ?',
    answer: 'Oui, avec notre offre Service Managé, notre équipe prend en charge la configuration, le pilotage et l’optimisation. Vous restez maître de la stratégie.'
  },
  {
    question: 'Quelle est votre politique de remboursement ?',
    answer: 'Nous offrons une garantie satisfait ou remboursé pendant 14 jours. Après cette période, l’abonnement peut être interrompu à tout moment en gardant l’accès jusqu’à la fin de la période payée.'
  },
  {
    question: 'Puis-je annuler mon abonnement ?',
    answer: 'Oui, vous pouvez annuler à tout moment depuis le tableau de bord. L’accès continue jusqu’à la fin de la période en cours, et aucun frais additionnel n’est appliqué.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">Questions fréquemment posées</h2>
          <p className="mt-2 text-lg text-[var(--color-text-light)]">Tout ce que vous devez savoir pour démarrer sereinement.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="rounded-2xl bg-[var(--color-input-bg)] border border-[var(--color-border)] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-lg font-semibold text-[var(--color-text)]">{item.question}</span>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-[var(--color-text-light)] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
