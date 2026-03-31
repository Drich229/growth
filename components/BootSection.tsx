import { Camera } from 'lucide-react';

const BoostSection = () => {
  return (
    <section className="relative mt-[110px] bg-[var(--color-bg-secondary)] text-white py-25 px-4 sm:px-6 lg:px-8">
      {/* Star Decoration */}
      <div className="absolute top-4 left-4 w-12 h-12">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63l-7.19.61L5.46 14l-1.64 7.03L12 17.27z" />
        </svg>
      </div>

      {/* Star Decoration - Right */}
      <div className="absolute bottom-0 right-4 w-48 h-48 opacity-30">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63l-7.19.61L5.46 14l-1.64 7.03L12 17.27z" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Prêt à booster votre croissance sans stress ?
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div>
            <a
            href="#offres"
            className="bg-white text-[var(--color-primary)] font-semibold py-3 px-6 rounded-[16px] hover:bg-gray-100 transition duration-300"
          >
            Découvrir nos offres →
          </a>
          </div>
          <div className='pt-10'>
            <a
            href="#rdv"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-[16px] hover:bg-white hover:text-orange-500 transition duration-300 flex items-center gap-2"
          >
            <Camera className="w-5 h-5" />
            Prendre rendez-vous gratuit
          </a>
          <p className="mt-4 text-sm">
          30 min pour voir ce qu’on peut faire pour vous
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BoostSection;