import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star, Check } from 'lucide-react';
import {
  CategoryId,
  COLLECTIONS,
  SareeProduct,
  SAREE_PRODUCTS,
  formatRs,
} from '../data/sarees';
import { SafeImage } from './SafeImage';

interface BestSellersSectionProps {
  activeCategory: CategoryId;
  onResetCategory: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: SareeProduct) => void;
  onOpenProduct: (product: SareeProduct) => void;
}

export function BestSellersSection({
  activeCategory,
  onResetCategory,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onOpenProduct,
}: BestSellersSectionProps) {
  const [page, setPage] = useState(0);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  useEffect(() => {
    setPage(0);
  }, [activeCategory]);

  const filteredProducts = (() => {
    if (activeCategory === 'all') {
      return SAREE_PRODUCTS;
    }
    if (activeCategory === 'banarasi') {
      return SAREE_PRODUCTS.filter((p) => p.isBanarasi);
    }
    return SAREE_PRODUCTS.filter((p) => p.category === activeCategory);
  })();

  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const safePage = Math.min(page, totalPages - 1);
  const visibleProducts = filteredProducts.slice(
    safePage * pageSize,
    safePage * pageSize + pageSize
  );

  const activeCategoryLabel = (() => {
    if (activeCategory === 'all') return null;
    if (activeCategory === 'banarasi') return 'Banarasi Sarees';
    return COLLECTIONS.find((c) => c.id === activeCategory)?.name ?? null;
  })();

  const handleAddClick = (product: SareeProduct) => {
    onAddToCart(product);
    setRecentlyAddedId(product.id);
    window.setTimeout(() => {
      setRecentlyAddedId((prev) => (prev === product.id ? null : prev));
    }, 1200);
  };

  return (
    <section id="best-sellers" className="pb-14 sm:pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#7A726E]">
              {activeCategoryLabel ? 'CURATED SELECTION' : 'BEST SELLERS'}
            </p>
            <h2 className="mt-1 font-serif text-3xl sm:text-[34px] font-medium text-[#261822] leading-tight">
              {activeCategoryLabel ? activeCategoryLabel : 'Loved by Many'}
            </h2>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <p className="text-[13px] text-[#6E6560]">
                Our most popular sarees, handpicked for you.
              </p>
              {activeCategoryLabel && (
                <button
                  type="button"
                  onClick={onResetCategory}
                  className="text-xs font-semibold text-[#6E3A7A] hover:underline cursor-pointer"
                >
                  Show all sarees
                </button>
              )}
            </div>
          </div>

          {/* Prev / Next Pagination Arrows */}
          <div className="flex items-center gap-2.5 self-start sm:self-end">
            <button
              type="button"
              onClick={() =>
                setPage((prev) => (prev - 1 + totalPages) % totalPages)
              }
              disabled={totalPages <= 1}
              aria-label="Previous sarees"
              className="w-9 h-9 rounded-full bg-[#EFECE8] hover:bg-[#E4DFD8] disabled:opacity-45 text-[#261822] flex items-center justify-center transition-colors cursor-pointer disabled:cursor-default"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setPage((prev) => (prev + 1) % totalPages)}
              disabled={totalPages <= 1}
              aria-label="Next sarees"
              className="w-9 h-9 rounded-full bg-[#EFECE8] hover:bg-[#E4DFD8] disabled:opacity-45 text-[#261822] flex items-center justify-center transition-colors cursor-pointer disabled:cursor-default"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const justAdded = recentlyAddedId === product.id;

            return (
              <article
                key={product.id}
                className="group flex flex-col"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/4.2] w-full rounded-lg overflow-hidden bg-[#EFEAE2]">
                  <button
                    type="button"
                    onClick={() => onOpenProduct(product)}
                    className="w-full h-full block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E3A7A]"
                    aria-label={`View ${product.name}`}
                  >
                    <SafeImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      fallbackLabel={product.name}
                    />
                  </button>

                  {/* Wishlist Heart Button */}
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label={
                      isWishlisted
                        ? `Remove ${product.name} from wishlist`
                        : `Save ${product.name} to wishlist`
                    }
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 hover:bg-white shadow-sm flex items-center justify-center transition-transform duration-150 hover:scale-105 cursor-pointer"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-colors ${
                        isWishlisted
                          ? 'fill-[#6E3A7A] text-[#6E3A7A]'
                          : 'text-[#261822]'
                      }`}
                      strokeWidth={1.8}
                    />
                  </button>
                </div>

                {/* Product Metadata */}
                <div className="mt-3.5 flex-1 flex flex-col">
                  <button
                    type="button"
                    onClick={() => onOpenProduct(product)}
                    className="text-left text-[13.5px] font-semibold text-[#261822] hover:text-[#6E3A7A] transition-colors leading-snug cursor-pointer"
                  >
                    {product.name}
                  </button>
                  <p className="mt-1 text-[13.5px] font-medium text-[#261822] tabular-nums">
                    {formatRs(product.price)}
                  </p>

                  {/* Star Rating */}
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 text-[#D49B35]" aria-label={`${product.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3 h-3 fill-[#D49B35] text-[#D49B35]"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#7A726E] tabular-nums">
                      ({product.reviewCount})
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddClick(product)}
                    className={`mt-3.5 w-full py-2.5 px-4 rounded-md text-xs font-medium text-white flex items-center justify-center gap-1.5 transition-colors duration-150 cursor-pointer ${
                      justAdded
                        ? 'bg-[#6E3A7A]'
                        : 'bg-[#281028] hover:bg-[#3E193E]'
                    }`}
                  >
                    {justAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <span>Add to Cart</span>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
