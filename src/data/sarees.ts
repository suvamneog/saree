export type CategoryId =
  | 'all'
  | 'silk'
  | 'cotton'
  | 'georgette'
  | 'kanjivaram'
  | 'party-wear'
  | 'handloom'
  | 'banarasi';

export interface CollectionItem {
  id: CategoryId;
  name: string;
  tagline: string;
  image: string;
}

export interface SareeProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: CategoryId;
  categoryLabel: string;
  image: string;
  fabric: string;
  weaveOrigin: string;
  blouseIncluded: string;
  length: string;
  care: string;
  description: string;
  isBestSeller?: boolean;
  isBanarasi?: boolean;
}

export interface HeroSlide {
  id: string;
  indexLabel: string;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  ctaLabel: string;
  targetCategory: CategoryId;
  image: string;
  imagePosition?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-01',
    indexLabel: '01',
    eyebrow: 'TIMELESS ELEGANCE',
    headlineLine1: 'Beautiful Sarees',
    headlineLine2: 'for Every Story',
    subtitle: 'From traditional handloom to modern weaves, find the perfect saree for every occasion.',
    ctaLabel: 'Shop Now',
    targetCategory: 'all',
    image: '/src/assets/images/hero_purple_banarasi_1795002470800.jpg',
    imagePosition: 'object-right-top md:object-center',
  },
  {
    id: 'slide-02',
    indexLabel: '02',
    eyebrow: 'FEATURED HERITAGE',
    headlineLine1: 'Artisanal Handloom',
    headlineLine2: 'Woven with Grace',
    subtitle: 'Heirloom temple borders and breathable organic cotton-silks crafted by master weavers.',
    ctaLabel: 'Explore Handloom',
    targetCategory: 'handloom',
    image: '/src/assets/images/banner_handloom_ivory_1795002471635.jpg',
    imagePosition: 'object-left-top',
  },
  {
    id: 'slide-03',
    indexLabel: '03',
    eyebrow: 'ROYAL BANARASI',
    headlineLine1: 'Luminous Zari',
    headlineLine2: 'for Festive Nights',
    subtitle: 'Pure mulberry silk brocades infused with antique gold zari for celebrations that linger.',
    ctaLabel: 'Shop Banarasi',
    targetCategory: 'banarasi',
    image: '/src/assets/images/banner_banarasi_plum_1795002471622.jpg',
    imagePosition: 'object-right',
  },
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'silk',
    name: 'Silk Sarees',
    tagline: 'Elegant & Rich',
    image: '/src/assets/images/cat_silk_saree_1795002471689.jpg',
  },
  {
    id: 'cotton',
    name: 'Cotton Sarees',
    tagline: 'Comfort & Class',
    image: '/src/assets/images/cat_cotton_saree_1795002470932.jpg',
  },
  {
    id: 'georgette',
    name: 'Georgette Sarees',
    tagline: 'Light & Graceful',
    image: '/src/assets/images/cat_georgette_saree_1795002470531.jpg',
  },
  {
    id: 'kanjivaram',
    name: 'Kanjivaram Sarees',
    tagline: 'Royal Tradition',
    image: '/src/assets/images/cat_kanjivaram_saree_1795002471570.jpg',
  },
  {
    id: 'party-wear',
    name: 'Party Wear Sarees',
    tagline: 'For Special Moments',
    image: '/src/assets/images/cat_party_saree_1795002471682.jpg',
  },
  {
    id: 'handloom',
    name: 'Handloom Sarees',
    tagline: 'Pure & Authentic',
    image: '/src/assets/images/cat_handloom_saree_1795002471185.jpg',
  },
];

export const SAREE_PRODUCTS: SareeProduct[] = [
  {
    id: 'royal-purple-banarasi',
    name: 'Royal Purple Banarasi Silk Saree',
    price: 8500,
    rating: 5,
    reviewCount: 24,
    category: 'silk',
    categoryLabel: 'Banarasi Silk',
    image: '/src/assets/images/prod_purple_banarasi_1795002471328.jpg',
    fabric: 'Pure Katan Mulberry Silk',
    weaveOrigin: 'Varanasi, Uttar Pradesh',
    blouseIncluded: '0.85m matching brocade silk blouse piece',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean only; store wrapped in muslin cloth',
    description:
      'Handwoven in Varanasi in a regal aubergine-purple hue, adorned with delicate gold zari floral butti motifs across the drape and an opulent kadhwa pallu.',
    isBestSeller: true,
    isBanarasi: true,
  },
  {
    id: 'meenakari-silk-saree',
    name: 'Meenakari Silk Saree',
    price: 6999,
    rating: 5,
    reviewCount: 18,
    category: 'silk',
    categoryLabel: 'Meenakari Silk',
    image: '/src/assets/images/prod_meenakari_silk_1795002471705.jpg',
    fabric: 'Pure Resham & Zari Silk',
    weaveOrigin: 'Varanasi, Uttar Pradesh',
    blouseIncluded: '0.85m emerald silk blouse with zari sleeve border',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean only',
    description:
      'Deep forest emerald silk enriched with subtle multi-toned meenakari resham accents and an antique gold paisley border for timeless festive elegance.',
    isBestSeller: true,
    isBanarasi: true,
  },
  {
    id: 'soft-georgette-saree',
    name: 'Soft Georgette Saree',
    price: 4499,
    rating: 5,
    reviewCount: 32,
    category: 'georgette',
    categoryLabel: 'Georgette',
    image: '/src/assets/images/prod_soft_georgette_1795002471252.jpg',
    fabric: 'Pure Viscose Georgette',
    weaveOrigin: 'Jaipur & Banaras Artisan Guild',
    blouseIncluded: '0.85m matching soft georgette blouse piece',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Gentle dry clean or cold hand wash',
    description:
      'Feather-light peach-coral georgette that cascades effortlessly, finished with a subtle gold-woven border and micro-motifs ideal for daytime celebrations.',
    isBestSeller: true,
  },
  {
    id: 'elegant-cotton-saree',
    name: 'Elegant Cotton Saree',
    price: 2999,
    rating: 5,
    reviewCount: 21,
    category: 'cotton',
    categoryLabel: 'Handloom Cotton',
    image: '/src/assets/images/prod_elegant_cotton_1795002471913.jpg',
    fabric: '100% Combed Mulmul & Bengal Cotton',
    weaveOrigin: 'Shantipur, West Bengal',
    blouseIncluded: '0.85m contrast woven border cotton blouse',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Mild hand wash separately in cold water',
    description:
      'Breathable periwinkle-slate handloom cotton with a crisp navy-indigo temple border. Tailored for all-day grace from morning meetings to evening gatherings.',
    isBestSeller: true,
  },
  {
    id: 'crimson-kanchipuram-silk',
    name: 'Crimson Gold Kanchipuram Silk Saree',
    price: 11200,
    rating: 5,
    reviewCount: 29,
    category: 'kanjivaram',
    categoryLabel: 'Kanjivaram Silk',
    image: '/src/assets/images/cat_silk_saree_1795002471689.jpg',
    fabric: 'Pure Mulberry Kanchipuram Silk',
    weaveOrigin: 'Kanchipuram, Tamil Nadu',
    blouseIncluded: '0.85m crimson silk blouse with korvai border',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean only',
    description:
      'Rich vermilion-crimson body framed by a wide traditional peacock and rudraksha gold zari border woven using classic three-shuttle korvai technique.',
    isBestSeller: true,
  },
  {
    id: 'burgundy-heritage-kanjivaram',
    name: 'Burgundy Heritage Kanjivaram Saree',
    price: 12800,
    rating: 5,
    reviewCount: 16,
    category: 'kanjivaram',
    categoryLabel: 'Kanjivaram Silk',
    image: '/src/assets/images/cat_kanjivaram_saree_1795002471570.jpg',
    fabric: 'Heavyweight Kanchipuram Zari Silk',
    weaveOrigin: 'Kanchipuram, Tamil Nadu',
    blouseIncluded: '0.9m matching wine-burgundy silk blouse',
    length: '5.5 meters saree + 0.9 meters blouse',
    care: 'Dry clean only',
    description:
      'Heirloom burgundy-magenta Kanjivaram silk boasting a grand paisley zari pallu and timeless sheen made for weddings and milestone occasions.',
    isBestSeller: true,
  },
  {
    id: 'midnight-sequin-party',
    name: 'Midnight Shimmer Party Wear Saree',
    price: 5899,
    rating: 5,
    reviewCount: 27,
    category: 'party-wear',
    categoryLabel: 'Party Wear',
    image: '/src/assets/images/cat_party_saree_1795002471682.jpg',
    fabric: 'Hand-Embellished Georgette & Velvet Trim',
    weaveOrigin: 'Mumbai Atelier',
    blouseIncluded: '0.85m sequined black satin-silk blouse piece',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Spot clean or dry clean only',
    description:
      'Sculpted charcoal-black evening drape shimmering with tonal micro-sequins and finished with a plush velvet edge.',
    isBestSeller: true,
  },
  {
    id: 'olive-zari-handloom',
    name: 'Olive Zari Handloom Silk-Cotton Saree',
    price: 4850,
    rating: 5,
    reviewCount: 19,
    category: 'handloom',
    categoryLabel: 'Handloom',
    image: '/src/assets/images/cat_handloom_saree_1795002471185.jpg',
    fabric: 'Tussar Silk & Handspun Cotton Blend',
    weaveOrigin: 'Bhagalpur & Chanderi Guild',
    blouseIncluded: '0.85m olive handloom blouse piece',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean recommended',
    description:
      'Earthy moss-olive handloom weave showcasing organic slub texture, subtle gold zari stripes, and delicate floral jamdani motifs.',
    isBestSeller: true,
  },
  {
    id: 'powder-blue-cotton',
    name: 'Powder Blue & Beige Handloom Cotton',
    price: 3250,
    rating: 5,
    reviewCount: 14,
    category: 'cotton',
    categoryLabel: 'Cotton Sarees',
    image: '/src/assets/images/cat_cotton_saree_1795002470932.jpg',
    fabric: '100% Organic Handloom Cotton',
    weaveOrigin: 'Chettinad & Begumpur',
    blouseIncluded: '0.85m warm sand-beige cotton blouse',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Cold gentle hand wash',
    description:
      'Airy sky-blue drape paired with a natural oat-beige zari-kissed border for effortless warm-weather refinement.',
  },
  {
    id: 'dusty-rose-georgette',
    name: 'Dusty Rose Shimmer Georgette Saree',
    price: 4799,
    rating: 5,
    reviewCount: 22,
    category: 'georgette',
    categoryLabel: 'Georgette Sarees',
    image: '/src/assets/images/cat_georgette_saree_1795002470531.jpg',
    fabric: 'Pure Crepe Georgette',
    weaveOrigin: 'Surat Artisan Studio',
    blouseIncluded: '0.85m matching mauve-rose satin blouse',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean only',
    description:
      'Fluid mauve-rose drape accented with a slim antique beadwork border that catches evening light with quiet sophistication.',
  },
  {
    id: 'ivory-temple-handloom',
    name: 'Ivory & Crimson Temple Handloom Saree',
    price: 6200,
    rating: 5,
    reviewCount: 31,
    category: 'handloom',
    categoryLabel: 'Traditional Handloom',
    image: '/src/assets/images/banner_handloom_ivory_1795002471635.jpg',
    fabric: 'Pure Handspun Silk-Cotton',
    weaveOrigin: 'Maheshwar, Madhya Pradesh',
    blouseIncluded: '0.85m crimson brocade blouse piece',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean only',
    description:
      'Classic ivory-cream drape anchored by a bold crimson and antique gold woven temple border—our signature featured handloom piece.',
  },
  {
    id: 'berry-zari-banarasi',
    name: 'Berry Magenta Zari Banarasi Saree',
    price: 9400,
    rating: 5,
    reviewCount: 25,
    category: 'silk',
    categoryLabel: 'Banarasi Silk',
    image: '/src/assets/images/offer_banner_magenta_1795002470696.jpg',
    fabric: 'Pure Banarasi Katan Silk',
    weaveOrigin: 'Varanasi, Uttar Pradesh',
    blouseIncluded: '0.85m berry silk blouse with gold border',
    length: '5.5 meters saree + 0.85 meters blouse',
    care: 'Dry clean only',
    description:
      'Luminous berry-magenta brocade silk woven with dense heirloom gold zari florals across the border and pallu.',
    isBanarasi: true,
  },
];

export const BLOG_POSTS = [
  {
    id: 'art-of-banarasi',
    title: 'Inside the Kadhwa Looms of Varanasi',
    date: 'October 2026',
    readTime: '4 min read',
    excerpt:
      'How master weavers spend weeks interlocking pure mulberry silk and real gold-dipped zari threads without floating back-threads.',
    image: '/src/assets/images/banner_banarasi_plum_1795002471622.jpg',
  },
  {
    id: 'handloom-heritage',
    title: 'Why Handloom Cotton-Silk Ages with Grace',
    date: 'September 2026',
    readTime: '3 min read',
    excerpt:
      'Understanding natural slub textures, breathable weaves, and why handspun fabrics soften beautifully after every gentle drape.',
    image: '/src/assets/images/banner_handloom_ivory_1795002471635.jpg',
  },
  {
    id: 'storing-heirloom-silks',
    title: 'Caring for Your Heirloom Kanjivaram & Silk Sarees',
    date: 'August 2026',
    readTime: '5 min read',
    excerpt:
      'Simple archival practices—from unbleached muslin wraps to refolding creases every four months—to preserve zari luster for decades.',
    image: '/src/assets/images/cat_kanjivaram_saree_1795002471570.jpg',
  },
];

export type InfoModalTopic =
  | 'about'
  | 'blog'
  | 'contact'
  | 'account'
  | 'shipping'
  | 'returns'
  | 'size-guide'
  | 'faqs'
  | 'terms'
  | 'privacy';

export function formatRs(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-IN')}`;
}
