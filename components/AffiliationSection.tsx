'use client';

import { Share2, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const affiliates = [
  {
    id: 1,
    name: 'Nicolas D.',
    date: 'Depuis le 15 décembre 2024',
    earnings: '+150.00 €',
    platforms: ['/aginap.png', '/wachap.png', '/kloo.png']
  },
  {
    id: 2,
    name: 'Franky',
    date: 'Depuis le 22 novembre 2024',
    earnings: '+200.00 €',
    platforms: ['/wachap.png', '/kloo.png']
  },
  {
    id: 3,
    name: 'Rolande',
    date: 'Depuis le 10 décembre 2024',
    earnings: '+180.00 €',
    platforms: ['/aginap.png', '/wachap.png', '/kloo.png', '/typebot.png']
  },
  {
    id: 4,
    name: 'Rolande',
    date: 'Depuis le 12 décembre 2024',
    earnings: '+125.00 €',
    platforms: ['/kloo.png', '/typebot.png']
  }
];

export function AffiliationSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">Growth affiliation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
            Recommandez Growth.<br />Gagnez à chaque client apporté.
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
            Un programme simple et transparent pour les créateurs, agences et entrepreneurs qui parlent croissance.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <div className="rounded-3xl bg-[var(--color-card-bg)] border-2 border-[var(--color-border)] p-8 flex flex-col h-full">
            {/* Header */}
            <div className= 'border-black bg-white border-2 rounded-2xl p-4 mb-6'>
                <div className="pb-6 border-b-2 border-[var(--color-border)] mb-6">
                    <p className="text-xl font-bold text-[#003366] tracking-widest uppercase">Growth Affiliation</p>
                </div>

                {/* Buttons */}
                <div className="space-y-3 mb-auto pb-20">
                    <button className="w-full py-3 px-4 rounded-full bg-[#2D2D2D] text-white text-sm font-bold hover:bg-[#1a1a1a] transition flex items-center justify-center gap-2">
                        <Share2 size={18} /> Partager mon lien de parrainage
                    </button>
                    <button className="w-full py-3 px-4 rounded-full border-2 border-[#003366] text-[#003366] text-sm font-bold hover:bg-[#F0F5FF] transition flex items-center justify-center gap-2">
                        🔗 Inviter des amis
                    </button>
                </div>
            </div>

            {/* Content Bottom */}
            <div className="pt-8">
              <h3 className="text-4xl font-black text-[var(--color-text)] mb-4">01</h3>
              <h4 className="text-3xl font-bold text-[var(--color-text)] mb-3">Vous recommandez Growth</h4>
              <p className="text-base text-[var(--color-text-light)]">
                Partagez votre lien d'affiliation à votre audience, vos clients ou votre réseau.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-3xl bg-[var(--color-card-bg)] border-2 border-[var(--color-border)] p-8 flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-4xl font-bold text-[var(--color-text)]">02</h3>
            </div>
            <h4 className="text-[30px] w-[320px] font-bold text-[var(--color-text)] mb-3">Ils utilisent Growth</h4>
            <p className="text-[20px] w-[320px] text-[var(--color-text-light)] mb-6">
              Vos contacts utilisent nos outils (Marketing, ventes, relation client automatisées.)
            </p>

            <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-black">Mes affiliés</span>
                <span className="text-xs font-medium text-black">Services utilisés</span>
              </div>
              <div className="h-px bg-[var(--color-border)] mb-3" />
              {affiliates.slice(0, 4).map((affiliate, index) => (
                <div key={affiliate.id} className="flex items-center justify-between py-2"> 
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white font-bold">{affiliate.name.charAt(0)}</span>
                    <div>
                      <p className="text-sm font-semibold text-black">{affiliate.name}</p>
                      <p className="text-xs text-black">{affiliate.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {affiliate.platforms.map((p, i) => (
                      <Image className='pb-0' key={i} src={p} alt={p} width={18} height={18} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-3xl bg-[var(--color-card-bg)] border-2 border-[var(--color-border)] p-8 flex flex-col h-full">
            {/* Header */}

            {/* Content */}
            <div className="space-y-4  border-black border-2 rounded-2xl pb-23 p-4">
              <div className="rounded-2xl mx-auto w-[230px] border border-[var(--color-border)] bg-white px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#BBFFCC] flex items-center justify-center text-[#008A4B] text-xl font-bold">$</div>
                <div>
                  <p className="text-xs font-medium text-black">Commission reçue</p>
                  <p className="text-2xl font-bold text-black">+ 150.00 €</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <p className="text-xs text-black mb-1">Total commissions (ce mois)</p>
                <p className="text-4xl font-black text-black">2 840,50 €</p>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="pt-13">
              <h3 className="text-4xl font-black text-[var(--color-text)] mb-4">03</h3>
              <h4 className="text-3xl font-bold text-[var(--color-text)] mb-3">Vous gagnez</h4>
              <p className="text-base text-[var(--color-text-light)]">
                Vous touchez une commission récurrente ou par conversion (selon l'offre)
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-bold shadow transition hover:brightness-110">
            Découvrir le programme d'affiliation →
          </button>
        </div>
        </div>
    </section>
  );
}
