import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Truck,
    title: 'Free Shipping',
    subtitle: 'On orders above Rs. 3000',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    subtitle: '100% safe & trusted',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    subtitle: 'Hassle-free within 7 days',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    subtitle: "We're here to help",
  },
];

export function TrustBadgesSection() {
  return (
    <section className="pb-14 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#E6DFD6] border-t border-b border-[#EDE7DF] py-8 gap-y-6">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center justify-start lg:justify-center gap-3.5 px-4"
              >
                <Icon
                  className="w-7 h-7 text-[#4A3B44] shrink-0"
                  strokeWidth={1.35}
                />
                <div>
                  <p className="text-[13.5px] font-semibold text-[#261822]">
                    {item.title}
                  </p>
                  <p className="text-[11.5px] text-[#7A726E] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
