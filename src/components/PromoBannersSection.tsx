import { ArrowRight } from 'lucide-react';
import { CategoryId } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface PromoBannersSectionProps {
  onSelectCategory: (cat: CategoryId) => void;
}

export function PromoBannersSection({ onSelectCategory }: PromoBannersSectionProps) {
  return (
    <section className="pb-14 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Banner: Traditional Handloom Sarees */}
          <div className="relative h-[280px] sm:h-[310px] rounded-xl overflow-hidden bg-[#3B2A20] group">
            <SafeImage
              src="/src/assets/images/banner_handloom_ivory_1795002471635.jpg"
              alt="Traditional Handloom Sarees"
              className="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-[1.02]"
              fallbackLabel="Traditional Handloom Sarees"
            />
            {/* Right-side warm bronze gradient scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/15 via-[#352419]/65 to-[#2D1E14]/95"
              aria-hidden="true"
            />

            <div className="relative z-10 h-full flex items-center justify-end p-7 sm:p-10">
              <div className="w-[58%] sm:w-[54%] text-left">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 mb-2">
                  FEATURED COLLECTION
                </p>
                <h3 className="font-serif text-2xl sm:text-[30px] font-medium text-white leading-[1.15]">
                  Traditional
                  <br />
                  Handloom Sarees
                </h3>
                <p className="mt-2.5 text-[12.5px] text-white/85">
                  Pure weaves. Timeless beauty.
                </p>
                <button
                  type="button"
                  onClick={() => onSelectCategory('handloom')}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/35 bg-[#331B20]/80 hover:bg-[#49252C] text-white text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Shop Handloom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Banner: Banarasi Sarees */}
          <div className="relative h-[280px] sm:h-[310px] rounded-xl overflow-hidden bg-[#351235] group">
            <SafeImage
              src="/src/assets/images/banner_banarasi_plum_1795002471622.jpg"
              alt="Banarasi Sarees"
              className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-[1.02]"
              fallbackLabel="Banarasi Sarees"
            />
            {/* Left-side deep plum gradient scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#2D0E2D]/95 via-[#351235]/75 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 h-full flex items-center justify-start p-7 sm:p-10">
              <div className="w-[62%] sm:w-[56%] text-left">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 mb-2">
                  TRENDING NOW
                </p>
                <h3 className="font-serif text-2xl sm:text-[30px] font-medium text-white leading-[1.15]">
                  Banarasi Sarees
                </h3>
                <p className="mt-2.5 text-[12.5px] text-white/85">
                  Rich heritage. Modern elegance.
                </p>
                <button
                  type="button"
                  onClick={() => onSelectCategory('banarasi')}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/35 bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Shop Banarasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
