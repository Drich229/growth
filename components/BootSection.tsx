import { Camera } from 'lucide-react';
import Image from 'next/image';

const BoostSection = () => {
  return (
    <section className="relative mt-[110px] bg-[var(--color-primary)] text-white py-25 px-4 sm:px-6 lg:px-8">
      {/* Star Decoration */}
      <div>
        <Image src="/star2.png" alt="Star Decoration" style={{ position: "absolute", 
        top: '23px', 
        left: '29px', 
        borderRadius: '0px', 
        transform: 'rotate(345.69deg)'}} width={61} height={60}/>
      </div>

      {/* Star Decoration - Right */}
      <div>
        <Image src="/star.png" alt="Star Decoration" className="lg:top-[190px] lg:w-[350px] lg:h-[400px] lg:left-[1300px] top-[350px] left-[200px]" style={{  position: 'absolute',
          borderRadius: '0px',
          transform: 'rotate(8.32deg)' }} width={160} height={200}/>
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
            className="bg-white w-[337px] h-[50px] text-[var(--color-primary)] font-semibold py-3 px-6 rounded-[16px] hover:bg-gray-100 transition duration-300"
          >
            Découvrir nos offres →
          </a>
          </div>
          <div className='pt-10 mb-2'>
            <a
            href="#rdv"
            className="bg-transparent w-[346px] h-[45px] border-2 border-white text-white font-semibold py-3 px-6 rounded-[16px] hover:bg-white hover:text-orange-500 transition duration-300 flex items-center gap-2"
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