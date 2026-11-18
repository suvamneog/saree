import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CategoryId, COLLECTIONS, InfoModalTopic } from '../data/sarees';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenInfo: (topic: InfoModalTopic) => void;
}

export function Navbar({
  cartCount,
  wishlistCount,
  onSelectCategory,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenInfo,
}: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<'shop' | 'collections' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleCategoryPick = (cat: CategoryId) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onSelectCategory(cat);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#1D0B1D]/95 backdrop-blur-md shadow-md border-b border-white/10'
          : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        {/* Left: Brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
        >
          <BrandLogo />
        </a>

        {/* Center: Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-white/90">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative py-1 text-white whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[1.5px] after:bg-white"
          >
            Home
          </a>

          {/* Shop Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'shop' ? null : 'shop')}
              className="inline-flex items-center gap-1 py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              aria-expanded={openDropdown === 'shop'}
            >
              <span>Shop</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'shop' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'shop' && (
              <div className="absolute left-0 top-full mt-3 w-56 rounded-lg bg-[#FAF8F5] text-[#261822] shadow-xl border border-[#E6DFD6] py-2 z-50">
                <button
                  type="button"
                  onClick={() => handleCategoryPick('all')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-[#EFEAE3] transition-colors cursor-pointer"
                >
                  All Sarees
                </button>
                <button
                  type="button"
                  onClick={() => handleCategoryPick('banarasi')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-[#EFEAE3] transition-colors cursor-pointer"
                >
                  Banarasi Edit
                </button>
                <div className="my-1 border-t border-[#E6DFD6]" />
                {COLLECTIONS.map((col) => (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => handleCategoryPick(col.id)}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#EFEAE3] transition-colors cursor-pointer"
                  >
                    {col.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Collections Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === 'collections' ? null : 'collections')
              }
              className="inline-flex items-center gap-1 py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              aria-expanded={openDropdown === 'collections'}
            >
              <span>Collections</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'collections' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'collections' && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-lg bg-[#FAF8F5] text-[#261822] shadow-xl border border-[#E6DFD6] py-2 z-50">
                {COLLECTIONS.map((col) => (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => handleCategoryPick(col.id)}
                    className="w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-[#EFEAE3] transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-semibold">{col.name}</span>
                    <span className="text-[11px] text-[#7A726E]">{col.tagline}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onOpenInfo('about')}
            className="py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onOpenInfo('blog')}
            className="py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Blog
          </button>
          <button
            type="button"
            onClick={() => onOpenInfo('contact')}
            className="py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Utility Icons */}
        <div className="flex items-center gap-3.5 sm:gap-5 text-white shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search sarees"
            className="p-1.5 hover:text-[#DFB3D2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full"
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={() => onOpenInfo('account')}
            aria-label="Account"
            className="hidden sm:inline-flex p-1.5 hover:text-[#DFB3D2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full"
          >
            <User className="w-[18px] h-[18px]" strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="relative p-1.5 hover:text-[#DFB3D2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full"
          >
            <Heart className="w-[18px] h-[18px]" strokeWidth={1.6} />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-[#6E3A7A] text-white text-[10px] font-semibold flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Shopping cart"
            className="relative p-1.5 hover:text-[#DFB3D2] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full"
          >
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.6} />
            <span className="absolute -top-0.5 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-white text-[#261822] text-[10px] font-bold flex items-center justify-center tabular-nums shadow-sm">
              {cartCount}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1.5 hover:text-[#DFB3D2] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1D0B1D] border-t border-white/10 px-6 py-5 space-y-4 text-white">
          <div className="flex flex-col gap-3 text-sm font-medium">
            <button
              type="button"
              onClick={() => handleCategoryPick('all')}
              className="text-left py-1 hover:text-[#DFB3D2]"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleCategoryPick('all')}
              className="text-left py-1 hover:text-[#DFB3D2]"
            >
              Shop All Sarees
            </button>
            <div className="pl-3 border-l border-white/15 grid grid-cols-2 gap-2 text-xs text-white/80">
              {COLLECTIONS.map((col) => (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => handleCategoryPick(col.id)}
                  className="text-left py-1 hover:text-white"
                >
                  {col.name}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfo('about');
              }}
              className="text-left py-1 hover:text-[#DFB3D2]"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfo('blog');
              }}
              className="text-left py-1 hover:text-[#DFB3D2]"
            >
              Blog
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfo('contact');
              }}
              className="text-left py-1 hover:text-[#DFB3D2]"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfo('account');
              }}
              className="text-left py-1 hover:text-[#DFB3D2]"
            >
              Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
