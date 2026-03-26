'use client';

import Image from 'next/image';

export function LogosSection() {
  const logos = [
    { id: 1, image: '/visily-image.png' },
    { id: 2, image: '/visily-image (1).png' },
    { id: 3, image: '/visily-image (2).png' },
    { id: 4, image: '/visily-image.png' },
    { id: 5, image: '/visily-image (2).png' },
    { id: 6, image: '/visily-image (2).png' },
  ];

  return (
    <section className="w-full mx-auto px-6 py-16">
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {logos.map(logo => (
          <div
            key={logo.id}
            className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo.image}
              alt="Logo partenaire"
              width={200}
              height={39}
              
            />
          </div>
        ))}
      </div>
    </section>
  );
}
