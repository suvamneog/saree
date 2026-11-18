import { useState } from 'react';
import { Check } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface SpecialOfferSectionProps {
  onApplyPromoCode: (code: string) => void;
}

export function SpecialOfferSection({ onApplyPromoCode }: SpecialOfferSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleUseCode = () => {
    onApplyPromoCode('WELCOME10');
    if (navigator.clipboard) {
      navigator.clipboard.writeText('WELCOME10').catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="pb-12 sm:pb-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-xl overflow-hidden bg-[#240B24] min-h-[185px] sm:min-h-[205px] flex items-center">
          {/* Right-side Silk & Jasmine Image */}
          <SafeImage
            src="/src/assets/images/offer_banner_magenta_1795002470696.jpg"
            alt="Special offer magenta Banarasi silk brocade saree with jasmine flower"
            className="absolute inset-0 w-full h-full object-cover object-right"
            fallbackLabel="Special Offer Banarasi Silk"
          />

          {/* Smooth Dark Plum Left-to-Right Scrim */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#210921] via-[#2B0D2B]/90 to-transparent"
            aria-hidden="true"
          />

          {/* Foreground Content */}
          <div className="relative z-10 w-full px-7 sm:px-12 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div>
              <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-white/75">
                SPECIAL OFFER
              </p>
              <h2 className="mt-1.5 font-serif text-3xl sm:text-[36px] font-medium text-white leading-[1.12]">
                Get 10% Off
                <br />
                on your first order
              </h2>
            </div>

            <div className="md:pt-4">
              <button
                type="button"
                onClick={handleUseCode}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/45 bg-white/5 hover:bg-white/15 text-white text-xs font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#DFB3D2]" />
                    <span>Code WELCOME10 Applied!</span>
                  </>
                ) : (
                  <span>Use Code: WELCOME10</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
