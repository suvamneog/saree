import { ArrowRight } from 'lucide-react';
import { CategoryId, COLLECTIONS } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface CollectionsSectionProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

export function CollectionsSection({
  activeCategory,
  onSelectCategory,
}: CollectionsSectionProps) {
  return (
    <section id="collections" className="py-14 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Intro Column */}
          <div className="lg:col-span-3 space-y-2.5">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#7A726E]">
              SHOP BY CATEGORY
            </p>
            <h2 className="font-serif text-3xl sm:text-[34px] font-medium text-[#261822] leading-[1.15]">
              Explore Our
              <br />
              Collections
            </h2>
            <p className="text-[13px] text-[#6E6560] leading-relaxed max-w-[230px]">
              Discover sarees for every mood, occasion and style.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onSelectCategory('all')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#261822] hover:text-[#6E3A7A] transition-colors group cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right 6 Circular Category Cards */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {COLLECTIONS.map((item) => {
              const isSelected = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectCategory(isSelected ? 'all' : item.id)}
                  className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-none"
                >
                  <div
                    className={`w-28 h-28 sm:w-28 sm:h-28 xl:w-[118px] xl:h-[118px] rounded-full overflow-hidden transition-all duration-200 shadow-sm ${
                      isSelected
                        ? 'ring-2 ring-[#6E3A7A] ring-offset-4 ring-offset-[#FAF8F5]'
                        : 'group-hover:shadow-md'
                    }`}
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      fallbackLabel={item.name}
                    />
                  </div>
                  <span className="mt-3 text-[12.5px] font-semibold text-[#261822] group-hover:text-[#6E3A7A] transition-colors leading-snug">
                    {item.name}
                  </span>
                  <span className="mt-0.5 text-[11px] text-[#7A726E]">
                    {item.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
