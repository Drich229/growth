'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function LogosSection() {
  const logos = [
    { id: 1, src: '/visily-image.png', alt: 'Logo partenaire 1' },
    { id: 2, src: '/visily-image (1).png', alt: 'Logo partenaire 2' },
    { id: 3, src: '/visily-image (2).png', alt: 'Logo partenaire 3' },
    { id: 4, src: '/visily-image.png', alt: 'Logo partenaire 4' },
    { id: 5, src: '/visily-image (2).png', alt: 'Logo partenaire 5' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // Vitesse de défilement (ajuste selon tes besoins)

    const animate = () => {
      position -= speed;
      if (position <= -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="w-full border-t border-[var(--color-border)] mx-auto pt-20 py-10 mt-40 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-8 whitespace-nowrap"
        style={{ display: 'inline-flex', width: 'max-content' }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 transition-opacity duration-300 hover:opacity-100 opacity-60 px-2"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={39}
              className="object-contain"
              priority={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}