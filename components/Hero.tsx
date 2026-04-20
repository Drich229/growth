'use client';

export function Hero() {
  return (
    <section className="relative z-0 max-w-7xl lg:w-[1217px] bg-[var(--color-bg-secondary)] mx-auto px-6 mt-[160px] pb-10 text-center">
      <div
        className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] -z-10 pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(180deg, #FF8A00FF 96%, #FF8A00FF 99%)',
          borderRadius: '423px',
          filter: 'blur(120px)'
        }}
      />
      <h1 className="text-4xl leading-tight lg:text-[60px] lg:leading-[72px] lg:w-[1093px] w-full mx-auto font-bold mb-7 relative z-10">
        <span className="text-[var(--color-primary)] mx-2">Accélérez votre croissance</span>
        {' '}
        <span className="text-[var(--color-hero-text)] mx-2">sans embaucher 10 personnes</span>
      </h1>

      <p style={{ fontWeight: 400 }} className="lg:w-[850px] w-full text-lg lg:text-[24px] lg:leading-[33px] text-[var(--color-hero-text-2)] mx-auto mb-10">
        Maximisez votre chiffre d'affaires avec des outils dotés d'intelligence artificielle, qui automatisent l'acquisition, les ventes et la gestion de la relation client pour une croissance sans effort.
      </p>

      <div className="flex flex-col sm:flex-row items-center lg:mt-[86px] justify-center gap-3">
        <button className="w-[337px] h-[50px] bg-[var(--color-primary)] text-white font-semibold rounded-[16px] hover:bg-[var(--color-primary-dark)] transition-colors">
          Découvrir nos offres →
        </button>
        <button className="border-2 w-[337px] h-[50px] border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-[16px] hover:bg-[var(--color-bg-secondary)] transition-colors">
          Prendre rendez-vous gratuit
        </button>
      </div>
    </section>
  );
}
