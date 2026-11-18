import { X, Heart, Star, Check } from 'lucide-react';
import { useState } from 'react';
import { SareeProduct, formatRs } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface ProductDetailModalProps {
  product: SareeProduct | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: SareeProduct) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}: ProductDetailModalProps) {
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative z-10 w-full max-w-3xl bg-[#FAF8F5] text-[#261822] rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        {/* Left Image */}
        <div className="bg-[#EFEAE2] h-72 md:h-auto relative">
          <SafeImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Details */}
        <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#7A726E]">
                {product.categoryLabel}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close product details"
                className="p-1.5 rounded-full hover:bg-[#EFEAE2] transition-colors cursor-pointer -mt-1 -mr-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h2 className="mt-1.5 font-serif text-2xl font-medium leading-snug">
              {product.name}
            </h2>

            <div className="mt-2.5 flex items-center gap-4">
              <span className="text-lg font-semibold tabular-nums">
                {formatRs(product.price)}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5 text-[#D49B35]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-[#D49B35] text-[#D49B35]"
                    />
                  ))}
                </div>
                <span className="text-xs text-[#7A726E] tabular-nums">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#5A4F4B] leading-relaxed">
              {product.description}
            </p>

            <dl className="mt-5 pt-4 border-t border-[#E6DFD6] space-y-2 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A726E]">Fabric</dt>
                <dd className="font-medium text-right">{product.fabric}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A726E]">Origin</dt>
                <dd className="font-medium text-right">{product.weaveOrigin}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A726E]">Dimensions</dt>
                <dd className="font-medium text-right">{product.length}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A726E]">Blouse Piece</dt>
                <dd className="font-medium text-right">{product.blouseIncluded}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#7A726E]">Care</dt>
                <dd className="font-medium text-right">{product.care}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E6DFD6] flex items-center gap-3">
            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 py-3 px-5 rounded-md text-xs font-medium text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                added ? 'bg-[#6E3A7A]' : 'bg-[#281028] hover:bg-[#3E193E]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart</span>
                </>
              ) : (
                <span>Add to Cart — {formatRs(product.price)}</span>
              )}
            </button>
            <button
              type="button"
              onClick={() => onToggleWishlist(product.id)}
              aria-label="Toggle wishlist"
              className="p-3 rounded-md border border-[#DCD4CA] hover:bg-[#EFEAE2] transition-colors cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? 'fill-[#6E3A7A] text-[#6E3A7A]' : 'text-[#261822]'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
