import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryId, HERO_SLIDES } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onShopNow: (targetCategory: CategoryId) => void;
}

export function HeroSection({ onShopNow }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="top"
      className="relative w-full h-[580px] sm:h-[620px] lg:h-[660px] overflow-hidden bg-[#1D0B1D]"
    >
      {/* Background Photograph */}
      <SafeImage
        key={slide.id}
        src={slide.image}
        alt={`${slide.headlineLine1} ${slide.headlineLine2}`}
        className={`absolute inset-0 w-full h-full object-cover ${
          slide.imagePosition || 'object-center'
        } transition-opacity duration-500`}
        fallbackLabel="SareeAura Hero Showcase"
      />

      {/* Left-weighted Dark Editorial Scrim for crisp WCAG AA contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#170917]/85 via-[#1B0B1B]/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/35"
        aria-hidden="true"
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-8 flex flex-col justify-between pt-28 pb-8">
        <div />

        {/* Main Hero Copy */}
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 mb-3">
            {slide.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-medium text-white leading-[1.08] tracking-tight text-balance">
            {slide.headlineLine1}
            <br />
            {slide.headlineLine2}
          </h1>
          <p className="mt-4 text-sm sm:text-[15px] text-white/85 leading-relaxed max-w-md">
            {slide.subtitle}
          </p>
          <div className="mt-7">
            <button
              type="button"
              onClick={() => onShopNow(slide.targetCategory)}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#6E3A7A] hover:bg-[#7F458D] text-white text-sm font-medium shadow-lg shadow-black/25 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 whitespace-nowrap"
            >
              <span>{slide.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Slider Controls */}
        <div className="flex items-center justify-between pt-6">
          {/* Numeric Indicators */}
          <div className="flex items-center gap-5" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative pb-1.5 text-xs font-medium tabular-nums transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {item.indexLabel}
                  {isActive && (
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-white/40 bg-black/20 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-white/40 bg-black/20 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
