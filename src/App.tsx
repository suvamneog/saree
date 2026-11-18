/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CategoryId, InfoModalTopic, SareeProduct } from './data/sarees';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CollectionsSection } from './components/CollectionsSection';
import { PromoBannersSection } from './components/PromoBannersSection';
import { BestSellersSection } from './components/BestSellersSection';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { InfoModal } from './components/InfoModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sareeaura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sareeaura_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [promoCode, setPromoCode] = useState<string>(() => {
    try {
      return localStorage.getItem('sareeaura_promo') || '';
    } catch {
      return '';
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SareeProduct | null>(null);
  const [infoTopic, setInfoTopic] = useState<InfoModalTopic | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('sareeaura_cart', JSON.stringify(cartItems));
    } catch {
      // ignore storage errors
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('sareeaura_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore storage errors
    }
  }, [wishlistIds]);

  useEffect(() => {
    try {
      localStorage.setItem('sareeaura_promo', promoCode);
    } catch {
      // ignore storage errors
    }
  }, [promoCode]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSelectCategory = (cat: CategoryId) => {
    setActiveCategory(cat);
    const target = document.getElementById('best-sellers');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: SareeProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#261822]">
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onSelectCategory={handleSelectCategory}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenInfo={(topic) => setInfoTopic(topic)}
      />

      <main className="flex-1">
        <HeroSection onShopNow={handleSelectCategory} />

        <CollectionsSection
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        <PromoBannersSection onSelectCategory={handleSelectCategory} />

        <BestSellersSection
          activeCategory={activeCategory}
          onResetCategory={() => setActiveCategory('all')}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onOpenProduct={(product) => setSelectedProduct(product)}
        />

        <SpecialOfferSection
          onApplyPromoCode={(code) => setPromoCode(code)}
        />

        <TrustBadgesSection />
      </main>

      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenInfo={(topic) => setInfoTopic(topic)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        promoCode={promoCode}
        onApplyPromoCode={setPromoCode}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onMoveToCart={handleAddToCart}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={
          selectedProduct ? wishlistIds.includes(selectedProduct.id) : false
        }
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      <InfoModal
        topic={infoTopic}
        onClose={() => setInfoTopic(null)}
      />
    </div>
  );
}
