import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { SareeProduct, SAREE_PRODUCTS, formatRs } from '../data/sarees';
import { SafeImage } from './SafeImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: SareeProduct) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const matches = q
    ? SAREE_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.weaveOrigin.toLowerCase().includes(q)
      )
    : SAREE_PRODUCTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative z-10 w-full max-w-2xl bg-[#FAF8F5] text-[#261822] rounded-xl shadow-2xl overflow-hidden border border-[#E6DFD6]"
        role="dialog"
        aria-modal="true"
        aria-label="Search sarees"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E6DFD6] bg-white">
          <Search className="w-4 h-4 text-[#7A726E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Banarasi, Kanjivaram, Georgette, Cotton..."
            className="flex-1 text-sm bg-transparent focus:outline-none placeholder:text-[#9A908A]"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-full hover:bg-[#EFEAE2] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          <p className="px-2 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#7A726E]">
            {q ? `${matches.length} results` : 'Popular Searches'}
          </p>
          {matches.length === 0 ? (
            <p className="py-10 text-center text-xs text-[#7A726E]">
              No sarees found matching &ldquo;{query}&rdquo;. Try &ldquo;Silk&rdquo;, &ldquo;Banarasi&rdquo;, or &ldquo;Cotton&rdquo;.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {matches.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 p-2.5 rounded-lg hover:bg-[#EFEAE2] transition-colors text-left cursor-pointer"
                >
                  <div className="w-14 h-16 rounded-md overflow-hidden bg-[#EFEAE2] shrink-0">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate">{item.name}</p>
                    <p className="text-[11px] text-[#7A726E] mt-0.5">
                      {item.categoryLabel}
                    </p>
                    <p className="text-xs font-medium mt-1 tabular-nums">
                      {formatRs(item.price)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
