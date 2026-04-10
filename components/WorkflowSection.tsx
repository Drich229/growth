'use client';

import { Sliders, Users, Bolt, Zap, CheckCircle } from 'lucide-react';

export function WorkflowSection() {
  return (
    <section className="w-full bg-[var(--color-bg-secondary)] py-[100px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center lg:mr-95 mb-12 w-[300px] md:w-[600px] sm:w-[600px] mx-auto">
          <div className="mx-auto text-center">
            <h2 style={{
              fontSize: '48px',
              lineHeight: '62px',
            }} className="lg:w-[728px] font-bold text-[var(--color-text)]">
              Comment Growth s’adapte à votre façon de travailler
            </h2>
          </div>
          <div className='mx-auto text-center'>
            <p style={{
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '29px',
            }} className="lg:ml-10 lg:h-[58px] mt-4 lg:w-[661px] md:text-xl text-[var(--color-neutral-text)] ">
              Chez Growth, vous choisissez votre niveau d’implication. Gérez tout vous-même ou déléguez l’exécution à notre équipe.
            </p>
          </div>
        </div>

        <div className="grid lg:w-[1050px] mx-auto grid-cols-1 lg:grid-cols-2 gap-1 mb-10">
          <article className="rounded-[16px] w-[496px] bg-[var(--color-card-bg)] border border-[var(--color-border)] p-8">
            <div className="flex justify-between gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#FF9800] flex items-center justify-center text-white">
                <Sliders size={20} />
              </div>
              <span className="px-2 h-[26px] px-1.5 rounded-full bg-[#FF8A00] text-white flex items-center justify-center text-[12px] leading-[20px] font-normal hover:bg-[#C96B00] active:bg-[#944F00] transition">
                Autonome
              </span>
            </div>
            <h3 className="text-[24px] font-semibold text-[var(--color-neutral-text)] mb-3">Self-service</h3>
            <p style={{ fontWeight: 500 }} className="text-[16px] text-[var(--color-neutral-text)] mb-4">
              Vous gérez vos campagnes et automatisations en toute autonomie.
            </p>
            <ul style={{ fontWeight: 400 }} className="space-y-2 text-[var(--color-text-light)]">
              <li className="text-[14px] flex items-center gap-2"><CheckCircle size={16} className="text-[#FF9800]" /> Accès direct aux outils</li>
              <li className="text-[14px] flex items-center gap-2"><CheckCircle size={16} className="text-[#FF9800]" /> Interface simple et intuitive</li>
              <li className="text-[14px] flex items-center gap-2"><CheckCircle size={16} className="text-[#FF9800]" /> Contrôle total de vos actions</li>
              <li className="text-[14px] flex items-center gap-2"><CheckCircle size={16} className="text-[#FF9800]" /> Idéal pour équipes internes ou profils techniques</li>
            </ul>
          </article>

          <article className="rounded-[16px] w-[496px] bg-[var(--color-card-bg)] border border-[var(--color-border)] p-8">
            <div className="flex justify-between gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#FF9800] flex items-center justify-center text-white">
                <Users size={20} />
              </div>
              <span style={{ fontWeight: 400 }} className="h-[26px] px-1.5 rounded-full bg-[var(--color-card-bg)] text-[#FF8A00] border border-[#FF8A00] flex items-center justify-center text-[12px] leading-[20px] font-medium hover:bg-[#FFDCB4] active:bg-[#FFB25A] transition">
                Délégation complète
              </span>
            </div>
            <h3 className="text-[24px] font-semibold text-[var(--color-neutral-text)] mb-3">Service managé</h3>
            <p style={{ fontWeight: 500 }} className="text-[16px] text-[var(--color-neutral-text)] mb-4">
              Vous déléguez l’exécution à l’équipe Growth.
            </p>
            <ul style={{ fontWeight: 400 }} className="space-y-2 text-[var(--color-text-light)]">
              <li className="text-[14px] flex items-center gap-2"><Zap size={16} className="text-[#FF9800]" /> Stratégie, création et exécution prises en charge</li>
              <li className="text-[14px] flex items-center gap-2"><Zap size={16} className="text-[#FF9800]" /> Gain de temps maximal</li>
              <li className="text-[14px] flex items-center gap-2"><Zap size={16} className="text-[#FF9800]" /> Expertise humaine + IA</li>
              <li className="text-[14px] flex items-center gap-2"><Zap size={16} className="text-[#FF9800]" /> Idéal si vous manquez de temps ou de ressources</li>
            </ul>
          </article>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 rounded-[16px] bg-[var(--color-primary)] text-white font-bold shadow transition hover:brightness-110">
            Choisir mon mode d'utilisation →
          </button>
        </div>
      </div>
    </section>
  );
}
