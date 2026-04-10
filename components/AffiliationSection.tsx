'use client';

import { Share2, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const affiliates = [
  {
    id: 1,
    name: 'Nicolas D.',
    date: 'A rejoint le 20 Décembre 2025',
    earnings: '+150.00 €',
    platforms: ['/kloo.png', '/aginap.png', '/wachap.png']
  },
  {
    id: 2,
    name: 'Franky',
    date: 'A rejoint le 10 Décembre 2025',
    earnings: '+200.00 €',
    platforms: ['/kloo.png', '/aginap.png']
  },
  {
    id: 3,
    name: 'Rolande',
    date: 'A rejoint le 15 Décembre 2025',
    earnings: '+180.00 €',
    platforms: ['/kloo.png', '/aginap.png', '/wachap.png', '/typebot.png']
  },
  {
    id: 4,
    name: 'Rolande',
    date: 'A rejoint le 15 Décembre 2025',
    earnings: '+125.00 €',
    platforms: ['/kloo.png', '/typebot.png', '/wachap.png']
  }
];

export function AffiliationSection() {
  return (
    <section className="w-full py-[100px] bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-[var(--color-bg-small)] h-[28px] p-1 rounded-[10px] w-[140px] items-center justify-center mx-auto mb-6">
            <p className="text-sm text-[var(--color-primary)] mb-3">Growth affiliation</p>
          </div>
          <h2 className="lg:text-[48px] text-[30px] font-bold text-[var(--color-neutral-text)] mb-4">
            Recommandez Growth.<br />Gagnez à chaque client apporté.
          </h2>
          <p style={{ fontWeight: 500 }} className="text-[20px] text-[var(--color-neutral-text)] max-w-2xl mx-auto">
            Un programme simple et transparent pour les créateurs, agences et entrepreneurs qui parlent croissance.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="lg:w-[1020px] mt-23 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <div className="rounded-[16px] w-[315px] h-[520px] bg-[var(--color-card-bg)] border-2 border-[var(--color-border)] p-3 flex flex-col">
            {/* Header */}
            <div className='border-black h-[239px] w-[291px] bg-white border-2 rounded-2xl mb-6'>
              <div className="p-5 border-b-2 pb-2 border-[var(--color-border)] mb-6">
                <p className="text-[16px] font-bold text-[#003366] tracking-widest uppercase">Growth Affiliation</p>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mb-auto pb-20">
                <button className="w-[270px] h-[40px] py-3 px-2 mx-auto rounded-[14px] bg-[#2D2D2D] text-white text-[12px] font-bold hover:bg-[#1a1a1a] transition flex items-center justify-center gap-2">
                  <Share2 size={18} /> Partager mon lien de parrainage
                </button>
                <button className="w-[270px] h-[40px] py-3 px-2 mx-auto rounded-[14px] border-2 border-[#003366] text-[#003366] text-[12px] font-bold hover:bg-[#F0F5FF] transition flex items-center justify-center gap-2">
                  🔗 Inviter des amis
                </button>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="pt-4">
              <h3 className="text-4xl font-black text-[var(--color-text)] mb-4">01</h3>
              <p className="text-[24px] leading-[32px] font-semibold text-[var(--color-neutral-text)] mb-3">Vous recommandez Growth</p>
              <p style={{ fontWeight: 400 }} className="text-[14px] w-[226px] leading-[24px] text-[var(--color-neutral-text)]">
                Partagez votre lien d'affiliation à votre audience, vos clients ou votre réseau.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-[16px] w-[315px] h-[506px] bg-[var(--color-card-bg)] border-2 border-[var(--color-border)] p-4 flex flex-col h-full">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-4xl font-bold text-[var(--color-text)]">02</h3>
            </div>
            <p className="text-[24px] leading-[32px] w-[235px] font-semibold text-[var(--color-text)] mb-3">Ils utilisent Growth</p>
            <p style={{ fontWeight: 400 }} className="text-[14px] w-[242px] leading-[24px] text-[var(--color-neutral-text)] mb-4">
              Vos contacts utilisent nos outils (Marketing, ventes, relation client automatisées.)
            </p>

            <div className="rounded-[14px] border border-[#DEE1E6] bg-white mt-6 py-2 mb-1 overflow-hidden">
              <div className="flex items-center px-2 justify-between mb-2">
                <span className="text-[15px] font-bold text-[#172B4D]">Mes affiliés</span>
                <span className="text-[12px] font-medium text-[#565D6D]">Service utilisés</span>
              </div>
              <div className="h-px bg-[#E5E7EB] mb-1" />
              <div className='p-2'>
                {affiliates.slice(0, 4).map((affiliate, index) => (
                  <div key={affiliate.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2 overflow-hidden">
                      {affiliate.id === 1 ? (
                        <span className="w-[36px] h-[36px] flex-shrink-0 rounded-full bg-[#1CE4A7] flex items-center justify-center text-[#172B4D] font-bold text-[13px]">ND</span>
                      ) : (
                        <span className="w-[36px] h-[36px] flex-shrink-0 rounded-full bg-[#FFD2DD] flex items-center justify-center text-[#172B4D] font-bold text-[13px]">{affiliate.name.charAt(0)}</span>
                      )}
                      <div className="overflow-hidden">
                        <p className="text-[13px] font-bold text-[#172B4D] mb-0.5 truncate">{affiliate.name}</p>
                        <p style={{ fontWeight: 400 }} className="text-[10px] tracking-tight whitespace-nowrap text-[#9095A1] truncate">{affiliate.date}</p>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-1">
                      {affiliate.platforms.map((p, i) => (
                        <Image className="rounded-[4px] object-cover" key={i} src={p} alt={p} width={18} height={18} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-[16px] w-[315px] h-[470px] bg-[var(--color-card-bg)] border-2 border-[var(--color-border)] p-3 flex flex-col h-full">
            {/* Header */}

            {/* Content */}
            <div className="space-y-4 h-[247px]  border-black border-2 rounded-2xl pb-23 p-4">
              <div className="rounded-2xl mx-auto w-[130px] lg:w-[230px] border border-[var(--color-border)] bg-white px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#BBFFCC] flex items-center justify-center text-[#008A4B] text-xl font-bold">$</div>
                <div>
                  <p className="text-xs font-medium text-black">Commission reçue</p>
                  <p className="text-2xl font-bold text-black">+ 150.00 €</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <p className="text-xs text-black mb-1">Total commissions (ce mois)</p>
                <p className="text-3xl font-black text-black">2 840,50 €</p>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="pt-7">
              <h3 className="text-4xl font-black text-[var(--color-text)] mb-4">03</h3>
              <p className="text-[24px] font-semibold text-[var(--color-neutral-text)] mb-3">Vous gagnez</p>
              <p style={{ fontWeight: 400 }} className="text-[14px] w-[242px] leading-[24px] text-[var(--color-neutral-text)]">
                Vous touchez une commission récurrente ou par conversion (selon l'offre)
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mx-auto mt-[80px] lg:w-[417px]">
          <button className="px-8 py-4 rounded-[16px] bg-[var(--color-primary)] text-white font-bold shadow transition hover:brightness-110">
            Découvrir le programme d'affiliation →
          </button>
        </div>
      </div>
    </section>
  );
}
