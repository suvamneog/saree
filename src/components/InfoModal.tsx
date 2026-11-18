import { useState, FormEvent } from 'react';
import { X, Check } from 'lucide-react';
import { BLOG_POSTS, InfoModalTopic } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface InfoModalProps {
  topic: InfoModalTopic | null;
  onClose: () => void;
}

const POLICY_COPY: Record<
  Exclude<InfoModalTopic, 'about' | 'blog' | 'contact' | 'account'>,
  { title: string; eyebrow: string; sections: { heading: string; body: string }[] }
> = {
  shipping: {
    eyebrow: 'CUSTOMER CARE',
    title: 'Shipping Policy',
    sections: [
      {
        heading: 'Complimentary Express Delivery',
        body: 'All orders above Rs. 3,000 qualify for complimentary insured shipping across India. Orders below Rs. 3,000 carry a flat Rs. 199 courier charge.',
      },
      {
        heading: 'Dispatch & Transit Times',
        body: 'Ready-to-ship weaves dispatch within 24–48 hours from our Varanasi and Bengaluru ateliers, arriving within 3–5 business days.',
      },
    ],
  },
  returns: {
    eyebrow: 'CUSTOMER CARE',
    title: 'Return & Exchange',
    sections: [
      {
        heading: '7-Day Hassle-Free Returns',
        body: 'If a saree does not resonate with you in person, request a reverse pickup within 7 days of delivery. Items must remain unworn, unwashed, with original weaver tags intact.',
      },
      {
        heading: 'Instant Exchanges & Refunds',
        body: 'Once inspected, refunds are processed to your original payment method within 3 business days, or exchanged immediately for another weave.',
      },
    ],
  },
  'size-guide': {
    eyebrow: 'DRAPE & DIMENSIONS',
    title: 'Saree Size Guide',
    sections: [
      {
        heading: 'Standard Saree Length',
        body: 'Every SareeAura drape measures 5.5 meters in length and 1.12 meters (44 inches) in width, offering effortless pleats for all heights.',
      },
      {
        heading: 'Unstitched Blouse Piece',
        body: 'All sarees include an attached 0.85m to 0.90m matching or contrast unstitched blouse fabric unless noted otherwise.',
      },
    ],
  },
  faqs: {
    eyebrow: 'HELP CENTER',
    title: 'Frequently Asked Questions',
    sections: [
      {
        heading: 'Are your Banarasi and Kanjivaram sarees Silk Mark certified?',
        body: 'Yes. Every pure silk weave at SareeAura is handloom-crafted and accompanied by an authenticity weave card detailing its loom origin.',
      },
      {
        heading: 'How do I apply code WELCOME10?',
        body: 'Click "Use Code: WELCOME10" on the Special Offer banner or enter WELCOME10 inside your Shopping Bag to receive 10% off your first order.',
      },
    ],
  },
  terms: {
    eyebrow: 'LEGAL',
    title: 'Terms & Conditions',
    sections: [
      {
        heading: 'Handloom Irregularities',
        body: 'Subtle slubs, minor weave variations, and gentle dye nuances are hallmarks of authentic handloom textiles rather than defects.',
      },
      {
        heading: 'Pricing & Orders',
        body: 'All listed prices are inclusive of applicable GST in Indian Rupees (Rs.).',
      },
    ],
  },
  privacy: {
    eyebrow: 'LEGAL',
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Data Respect & Security',
        body: 'We collect only the contact and delivery details required to fulfill your order and provide personalized styling assistance. We never sell or share customer data.',
      },
    ],
  },
};

export function InfoModal({ topic, onClose }: InfoModalProps) {
  const [contactSent, setContactSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  if (!topic) return null;

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactName('');
    setContactEmail('');
    setContactMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative z-10 w-full max-w-2xl bg-[#FAF8F5] text-[#261822] rounded-xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 border-b border-[#E6DFD6] flex items-center justify-between bg-white">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#7A726E]">
            {topic === 'about'
              ? 'OUR HERITAGE'
              : topic === 'blog'
                ? 'THE SAREEAURA JOURNAL'
                : topic === 'contact'
                  ? 'GET IN TOUCH'
                  : topic === 'account'
                    ? 'PATRON ACCOUNT'
                    : POLICY_COPY[topic].eyebrow}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-[#EFEAE2] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {topic === 'about' && (
            <>
              <h2 className="font-serif text-3xl font-medium">
                Tradition in Every Drape
              </h2>
              <p className="text-sm text-[#5A4F4B] leading-relaxed">
                Founded to bridge India&rsquo;s master weaving clusters with modern wardrobes, SareeAura partners directly with artisan families in Varanasi, Kanchipuram, Maheshwar, and Shantipur.
              </p>
              <p className="text-sm text-[#5A4F4B] leading-relaxed">
                Every weave is curated in small batches—celebrating pure mulberry silk, antique zari, breathable handspun cotton, and fluid georgettes that carry heritage effortlessly into contemporary life.
              </p>
            </>
          )}

          {topic === 'blog' && (
            <>
              <h2 className="font-serif text-3xl font-medium">
                Stories from the Loom
              </h2>
              <div className="space-y-4 pt-1">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col sm:flex-row gap-4 p-3.5 rounded-lg bg-white border border-[#E6DFD6]"
                  >
                    <div className="w-full sm:w-28 h-24 rounded-md overflow-hidden shrink-0 bg-[#EFEAE2]">
                      <SafeImage
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#7A726E]">
                        {post.date} · {post.readTime}
                      </p>
                      <h3 className="mt-1 font-serif text-lg font-medium">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#5A4F4B] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {topic === 'contact' && (
            <>
              <h2 className="font-serif text-3xl font-medium">
                We&rsquo;d Love to Assist You
              </h2>
              <p className="text-xs text-[#6E6560]">
                Questions about custom blouse tailoring, bridal trousseau curation, or order status? Write to our stylists directly.
              </p>
              {contactSent ? (
                <div className="p-5 rounded-lg bg-[#EFEAE2] flex items-center gap-3 text-xs">
                  <Check className="w-4 h-4 text-[#6E3A7A]" />
                  <span>
                    Thank you for reaching out. Our stylist team will reply within 24 hours.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                  />
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                  />
                  <textarea
                    required
                    rows={3}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="How can we help with your saree selection?"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-md bg-[#281028] hover:bg-[#3E193E] text-white text-xs font-medium cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </>
          )}

          {topic === 'account' && (
            <>
              <h2 className="font-serif text-3xl font-medium">
                Welcome to SareeAura
              </h2>
              <p className="text-xs text-[#6E6560] leading-relaxed">
                Track active dispatches, manage your saved weaves, and apply your welcome code <span className="font-semibold text-[#261822]">WELCOME10</span> at checkout.
              </p>
              <div className="p-4 rounded-lg bg-white border border-[#E6DFD6] space-y-2 text-xs">
                <p className="font-semibold">Guest Patron Session</p>
                <p className="text-[#6E6560]">
                  Your wishlist and shopping bag are automatically saved in this browser for effortless checkout.
                </p>
              </div>
            </>
          )}

          {topic !== 'about' &&
            topic !== 'blog' &&
            topic !== 'contact' &&
            topic !== 'account' && (
              <>
                <h2 className="font-serif text-3xl font-medium">
                  {POLICY_COPY[topic].title}
                </h2>
                <div className="space-y-4">
                  {POLICY_COPY[topic].sections.map((sec) => (
                    <div key={sec.heading} className="space-y-1">
                      <h3 className="text-xs font-semibold text-[#261822]">
                        {sec.heading}
                      </h3>
                      <p className="text-xs text-[#5A4F4B] leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
