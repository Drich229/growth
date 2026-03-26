'use client';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="text-[var(--color-primary)]">Accélérez votre croissance</span>
        {' '}
        <span className="text-[var(--color-text)]">sans embaucher 10 personnes</span>
      </h1>
      
      <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto mb-10">
        Maximisez votre chiffre d'affaires avec des outils dotés d'intelligence artificielle, qui automatisent l'acquisition, les ventes et la gestion de la relation client pour une croissance sans effort.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-[16px] hover:bg-[var(--color-primary-dark)] transition-colors">
          Découvrir nos offres →
        </button>
        <button className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-[16px] hover:bg-[var(--color-bg-secondary)] transition-colors">
          Prendre rendez-vous gratuit
        </button>
      </div>
    </section>
  );
}
