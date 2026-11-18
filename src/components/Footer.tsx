import { useState, FormEvent } from 'react';
import { ArrowRight, ArrowUp, Check } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CategoryId, InfoModalTopic } from '../data/sarees';

interface FooterProps {
  onSelectCategory: (cat: CategoryId) => void;
  onOpenInfo: (topic: InfoModalTopic) => void;
}

export function Footer({ onSelectCategory, onOpenInfo }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    window.setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D0B1D] text-white pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-10">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo />
            <p className="text-xs text-white/75 leading-relaxed max-w-[260px]">
              Timeless sarees. Modern you.
              <br />
              Discover elegance, culture and craftsmanship in every drape.
            </p>
            <div className="flex items-center gap-3.5 pt-1 text-white/80">
              <a
                href="#facebook"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfo('about');
                }}
                aria-label="SareeAura on Facebook"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H8v3h2.5V21h3z" />
                </svg>
              </a>
              <a
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfo('about');
                }}
                aria-label="SareeAura on Instagram"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                </svg>
              </a>
              <a
                href="#pinterest"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfo('about');
                }}
                aria-label="SareeAura on Pinterest"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8-.1-2 .2-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.3.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.9 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.9 2-1.3 2.7A10 10 0 1 0 12 2z" />
                </svg>
              </a>
              <a
                href="#youtube"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfo('blog');
                }}
                aria-label="SareeAura on YouTube"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wide text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop
                </button>
              </li>
              <li>
                <a
                  href="#collections"
                  className="hover:text-white transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wide text-white mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('shipping')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('returns')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Return &amp; Exchange
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('size-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('faqs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfo('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Join Our Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold tracking-wide text-white">
              Join Our Newsletter
            </h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs">
              Be the first to know about new arrivals, exclusive offers and more.
            </p>
            <form onSubmit={handleSubscribe} className="pt-1 max-w-sm">
              <div className="flex items-center rounded-md border border-white/20 bg-white/5 overflow-hidden focus-within:border-[#DFB3D2]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-xs text-white placeholder:text-white/45 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-3.5 py-2.5 bg-[#7B4588] hover:bg-[#8E539C] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-[11px] text-[#DFB3D2]">
                  Thank you for subscribing to SareeAura updates.
                </p>
              )}
            </form>

            <div className="pt-6 flex items-center justify-between text-[11px] text-white/55">
              <span>© 2026 SareeAura. All rights reserved.</span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-full border border-white/25 hover:border-white/60 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
