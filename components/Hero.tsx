'use client';

export function Hero() {
  return (
    <section className="max-w-7xl bg-[var(--color-bg-secondary)] mx-auto px-6 mt-[160px] pb-10 text-center">
      <h1 style={{ lineHeight: '72px' }} className="text-[60px] lg:w-[1050px] mx-auto font-bold mb-7">
        <span className="text-[var(--color-primary)]">Accélérez votre croissance</span>
        {' '}
        <span className="text-[var(--color-hero-text)]">sans embaucher 10 personnes</span>
      </h1>

      <p style={{ fontWeight: 400 }} className="lg:w-[859px] dark:w-[819px] text-[24px] leading-[33px] text-[var(--color-hero-text-2)] mx-auto mb-10">
        Maximisez votre chiffre d'affaires avec des outils dotés d'intelligence artificielle, qui automatisent l'acquisition, les ventes et la gestion de la relation client pour une croissance sans effort.
      </p>

      <div className="flex flex-col sm:flex-row items-center lg:mt-[86px] justify-center gap-3">
        <button className="px-8 py-3 w-[337px] h-[50px] bg-[var(--color-primary)] text-white font-semibold rounded-[16px] hover:bg-[var(--color-primary-dark)] transition-colors">
          Découvrir nos offres →
        </button>
        <button className="px-8 py-3 border-2 w-[337px] h-[50px] border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-[16px] hover:bg-[var(--color-bg-secondary)] transition-colors">
          Prendre rendez-vous gratuit
        </button>
      </div>
    </section>
  );
}
