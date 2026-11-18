import { X, Heart, Trash2 } from 'lucide-react';
import { SareeProduct, SAREE_PRODUCTS, formatRs } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onMoveToCart: (product: SareeProduct) => void;
}

export function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onToggleWishlist,
  onMoveToCart,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  const savedProducts = SAREE_PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="relative z-10 w-full max-w-md bg-[#FAF8F5] text-[#261822] h-full flex flex-col shadow-2xl"
        aria-label="Saved Wishlist"
      >
        <div className="px-6 py-5 border-b border-[#E6DFD6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Heart className="w-4 h-4 text-[#6E3A7A]" />
            <h2 className="font-serif text-xl font-medium">Saved Sarees</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="p-1.5 rounded-full hover:bg-[#EFEAE2] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {savedProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Heart className="w-10 h-10 text-[#A0958E] mx-auto" strokeWidth={1.3} />
              <p className="font-serif text-xl">No saved sarees yet</p>
              <p className="text-xs text-[#7A726E] max-w-xs mx-auto">
                Tap the heart icon on any saree card to curate your personal wishlist.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#E6DFD6]">
              {savedProducts.map((product) => (
                <div key={product.id} className="py-4 flex gap-4">
                  <div className="w-20 h-24 rounded-md overflow-hidden bg-[#EFEAE2] shrink-0">
                    <SafeImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-semibold leading-snug">
                        {product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onToggleWishlist(product.id)}
                        aria-label={`Remove ${product.name} from wishlist`}
                        className="text-[#7A726E] hover:text-[#261822] p-0.5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs font-medium tabular-nums">
                      {formatRs(product.price)}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        onMoveToCart(product);
                        onClose();
                      }}
                      className="mt-3 px-4 py-1.5 rounded-md bg-[#281028] hover:bg-[#3E193E] text-white text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
