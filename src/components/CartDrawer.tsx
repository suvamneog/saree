import { useState, FormEvent } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2, Tag } from 'lucide-react';
import { SareeProduct, formatRs } from '../data/sarees';
import { SafeImage } from './SafeImage';

export interface CartItem {
  product: SareeProduct;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  promoCode: string;
  onApplyPromoCode: (code: string) => void;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  promoCode,
  onApplyPromoCode,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [codeInput, setCodeInput] = useState(promoCode);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'confirmed'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const hasDiscount = promoCode.trim().toUpperCase() === 'WELCOME10';
  const discount = hasDiscount ? Math.round(subtotal * 0.1) : 0;
  const afterDiscount = subtotal - discount;
  const shippingFee = afterDiscount >= 3000 || afterDiscount === 0 ? 0 : 199;
  const total = afterDiscount + shippingFee;
  const remainingForFreeShipping = Math.max(0, 3000 - afterDiscount);

  const handlePromoSubmit = (e: FormEvent) => {
    e.preventDefault();
    onApplyPromoCode(codeInput.trim().toUpperCase());
  };

  const handleConfirmOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) return;
    setOrderId(`SA-${Math.floor(1000 + Math.random() * 9000)}`);
    setCheckoutStep('confirmed');
    onClearCart();
  };

  const resetAndClose = () => {
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[1px]"
        onClick={resetAndClose}
        aria-hidden="true"
      />
      <aside
        className="relative z-10 w-full max-w-md bg-[#FAF8F5] text-[#261822] h-full flex flex-col shadow-2xl"
        aria-label="Shopping Bag"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E6DFD6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-[#6E3A7A]" />
            <h2 className="font-serif text-xl font-medium">
              {checkoutStep === 'confirmed' ? 'Order Confirmed' : 'Your Shopping Bag'}
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close bag"
            className="p-1.5 rounded-full hover:bg-[#EFEAE2] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {checkoutStep === 'confirmed' ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#6E3A7A] mx-auto" />
              <h3 className="font-serif text-2xl font-medium">
                Thank you, {customerName}
              </h3>
              <p className="text-xs text-[#6E6560] leading-relaxed max-w-xs mx-auto">
                Order <span className="font-semibold text-[#261822] tabular-nums">{orderId}</span> has been placed. Our weavers and atelier team are preparing your drape for dispatch.
              </p>
              <button
                type="button"
                onClick={resetAndClose}
                className="mt-4 px-6 py-2.5 rounded-md bg-[#281028] hover:bg-[#3E193E] text-white text-xs font-medium cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#A0958E] mx-auto" strokeWidth={1.3} />
              <p className="font-serif text-xl text-[#261822]">Your bag is empty</p>
              <p className="text-xs text-[#7A726E] max-w-xs mx-auto">
                Explore our Banarasi, Kanjivaram, and handloom weaves to find your next heirloom saree.
              </p>
              <button
                type="button"
                onClick={resetAndClose}
                className="mt-2 px-5 py-2.5 rounded-md bg-[#281028] text-white text-xs font-medium cursor-pointer"
              >
                Browse Sarees
              </button>
            </div>
          ) : checkoutStep === 'shipping' ? (
            <form id="checkout-form" onSubmit={handleConfirmOrder} className="space-y-4">
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="text-xs font-semibold text-[#6E3A7A] hover:underline cursor-pointer"
              >
                ← Back to Bag
              </button>
              <h3 className="font-serif text-lg font-medium">Delivery Details</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[#5A4F4B] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ananya Sharma"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5A4F4B] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5A4F4B] mb-1">
                    Delivery Address &amp; PIN Code
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="House No, Street, City, State - PIN"
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                  />
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#EFEAE2] text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#6E6560]">Payable Total</span>
                  <span className="font-semibold tabular-nums">{formatRs(total)}</span>
                </div>
                <p className="text-[11px] text-[#7A726E]">
                  Includes insured express delivery &amp; 7-day easy returns.
                </p>
              </div>
            </form>
          ) : (
            <div className="space-y-5">
              {/* Free shipping indicator */}
              <div className="p-3 rounded-lg bg-[#EFEAE2] text-xs text-[#261822]">
                {remainingForFreeShipping === 0 ? (
                  <span>You have unlocked complimentary express shipping.</span>
                ) : (
                  <span>
                    Add <span className="font-semibold tabular-nums">{formatRs(remainingForFreeShipping)}</span> more for free shipping.
                  </span>
                )}
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-[#E6DFD6]">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="py-4 flex gap-4">
                    <div className="w-20 h-24 rounded-md overflow-hidden bg-[#EFEAE2] shrink-0">
                      <SafeImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-[#261822] leading-snug">
                          {product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(product.id)}
                          aria-label={`Remove ${product.name}`}
                          className="text-[#7A726E] hover:text-[#261822] p-0.5 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="mt-1 text-xs font-medium tabular-nums">
                        {formatRs(product.price)}
                      </p>
                      <div className="mt-3 inline-flex items-center border border-[#DCD4CA] rounded-md bg-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1 hover:bg-[#EFEAE2] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1 hover:bg-[#EFEAE2] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <form onSubmit={handlePromoSubmit} className="pt-2">
                <label className="block text-[11px] font-medium text-[#6E6560] mb-1.5">
                  Promo Code (try WELCOME10)
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#7A726E] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value)}
                      placeholder="WELCOME10"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-md border border-[#DCD4CA] bg-white focus:outline-none focus:border-[#6E3A7A]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md border border-[#281028] text-xs font-medium text-[#281028] hover:bg-[#281028] hover:text-white transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {hasDiscount && (
                  <p className="mt-1.5 text-[11px] text-[#6E3A7A] font-medium">
                    WELCOME10 applied: 10% off your order.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>

        {/* Footer Totals */}
        {items.length > 0 && checkoutStep !== 'confirmed' && (
          <div className="px-6 py-5 border-t border-[#E6DFD6] bg-white space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#6E6560]">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatRs(subtotal)}</span>
              </div>
              {hasDiscount && (
                <div className="flex justify-between text-[#6E3A7A]">
                  <span>Discount (WELCOME10)</span>
                  <span className="tabular-nums">-{formatRs(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#6E6560]">
                <span>Shipping</span>
                <span className="tabular-nums">
                  {shippingFee === 0 ? 'Free' : formatRs(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#261822] pt-1.5 border-t border-[#EFEAE2]">
                <span>Total</span>
                <span className="tabular-nums">{formatRs(total)}</span>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                type="button"
                onClick={() => setCheckoutStep('shipping')}
                className="w-full py-3 rounded-md bg-[#281028] hover:bg-[#3E193E] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
            ) : (
              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3 rounded-md bg-[#6E3A7A] hover:bg-[#7F458D] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Confirm Order ({formatRs(total)})
              </button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
