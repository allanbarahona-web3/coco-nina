/**
 * Mock data for Coco Nina Jewelry
 * This data is used when NEXT_PUBLIC_API_BASE_URL is not configured
 * or as a fallback when the API is unavailable
 */

import type { Product, Category } from './types';
import { generateSKU } from './sku';

// Export types for backward compatibility
export type { Product, Category } from './types';

/**
 * Collection metadata
 * Used to generate SKUs consistently
 */
const CURRENT_COLLECTION = {
  creator: 'NINA',
  dateCode: 'DIC25', // December 2025
};

// Mock product data - 12 unique handmade jewelry pieces
export const products: Product[] = [
  // Bracelets
  {
    id: 'origins-br-001',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'bracelets',
      sequenceNumber: 1,
    }),
    name: 'Pearl Embrace Bracelet',
    price: 85.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'bracelets',
    shortDescription: 'Elegant wire-wrapped bracelet featuring freshwater pearls and bronze wire with 18k gold plating.',
    fullDescription: `This exquisite handcrafted bracelet showcases the perfect blend of elegance and artisanal craftsmanship. Each freshwater pearl is carefully selected and hand-wrapped with premium bronze AAA wire, finished with 18k gold plating for a luxurious touch.

Perfect for those who appreciate unique, one-of-a-kind jewelry that tells a story. This piece is ideal for special occasions or as a meaningful gift.

CARE: Keep away from moisture and harsh chemicals. Store in a cool, dry place.`,
    materials: ['Freshwater Pearls', 'Bronze AAA Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Alambrismo'],
    tags: ['Unique Piece', 'Handmade', 'Premium'],
    image: {
      src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      alt: 'Handmade wire-wrapped bracelet with freshwater pearls'
    },
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-6811bcdd55f7?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-br-002',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'bracelets',
      sequenceNumber: 2,
    }),
    name: 'Tiger Eye Protection',
    price: 75.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'bracelets',
    shortDescription: 'Bold bracelet combining tiger eye stones with intricate wire weaving on stainless steel base.',
    fullDescription: `A powerful statement piece featuring natural tiger eye stones known for their protective properties. Each stone is hand-selected and wrapped with intricate wire weaving, creating a striking visual effect.

The combination of tiger eye with Czech crystals and stainless steel creates a modern yet timeless design that works for both casual and formal wear.

PROPERTIES: Tiger Eye is believed to bring courage, strength, and clarity to the wearer.`,
    materials: ['Tiger Eye', 'Stainless Steel', 'Czech Crystals'],
    techniques: ['Wire Wrapping', 'Stone Setting'],
    tags: ['Unique Piece', 'Handmade', 'Natural Stones'],
    image: {
      src: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      alt: 'Tiger eye stone bracelet with wire wrapping'
    },
    gallery: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-br-003',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'bracelets',
      sequenceNumber: 3,
    }),
    name: 'Volcanic Energy Band',
    price: 65.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'bracelets',
    shortDescription: 'Minimalist design featuring volcanic stone beads wrapped with bronze wire.',
    fullDescription: `A minimalist masterpiece that combines raw volcanic stone with elegant bronze wire work. The natural gray tones of the volcanic beads create a contemporary look perfect for everyday wear.

Each bead is hand-wrapped using traditional alambrismo techniques, ensuring durability and visual appeal. This is a true one-of-a-kind piece that won't be replicated.

DESIGN: Inspired by natural elements and modern aesthetics.`,
    materials: ['Volcanic Stone', 'Bronze Wire', 'Indonesian Beads'],
    techniques: ['Wire Wrapping', 'Bead Integration'],
    tags: ['Unique Piece', 'Handmade', 'Minimalist'],
    image: {
      src: 'https://images.unsplash.com/photo-1590065761959-1e357c50eee0?w=800&q=80',
      alt: 'Volcanic stone bracelet with bronze wire'
    },
    gallery: [
      'https://images.unsplash.com/photo-1590065761959-1e357c50eee0?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-6811bcdd55f7?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  
  // Necklaces
  {
    id: 'origins-nk-001',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'necklaces',
      sequenceNumber: 1,
    }),
    name: 'Ocean Pearl Cascade',
    price: 95.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'necklaces',
    shortDescription: 'Stunning necklace showcasing mother-of-pearl and freshwater pearls in an elegant wire-wrapped design.',
    fullDescription: `An enchanting necklace that captures the essence of the ocean. This piece features a cascading design with mother-of-pearl and freshwater pearls, meticulously hand-wrapped with premium bronze wire and finished with 18k gold plating.

Perfect for special occasions or as a statement piece for those who appreciate fine craftsmanship. The intricate wire work creates movement and light play, making this necklace truly mesmerizing.

LENGTH: Adjustable (available in 16", 18", and 20" lengths)`,
    materials: ['Mother-of-Pearl', 'Freshwater Pearls', '18k Gold Plating', 'Bronze Wire'],
    techniques: ['Wire Wrapping', 'Multi-layer Design'],
    tags: ['Unique Piece', 'Handmade', 'Statement Piece'],
    image: {
      src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      alt: 'Mother-of-pearl necklace with wire wrapping'
    },
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-6811bcdd55f7?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-nk-002',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'necklaces',
      sequenceNumber: 2,
    }),
    name: 'Agate Harmony',
    price: 80.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'necklaces',
    shortDescription: 'Natural agate centerpiece surrounded by delicate wire work and zirconia accents.',
    fullDescription: `A mesmerizing combination of natural agate and zirconia creates this stunning necklace. The agate stone is carefully framed with intricate wire work, creating a harmonious balance of nature and artistry.

Perfect for those seeking a piece that celebrates natural beauty with modern craftsmanship. Each agate stone is unique, making every piece truly one-of-a-kind.

PROPERTIES: Agate is believed to promote balance, harmony, and inner peace.`,
    materials: ['Agate', 'Zirconia', 'Stainless Steel', 'Czech Crystals'],
    techniques: ['Wire Wrapping', 'Stone Framing'],
    tags: ['Unique Piece', 'Handmade', 'Natural Beauty'],
    image: {
      src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      alt: 'Agate stone necklace with wire frame'
    },
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-nk-003',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'necklaces',
      sequenceNumber: 3,
    }),
    name: 'Jade Serenity',
    price: 90.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'necklaces',
    shortDescription: 'Elegant jade pendant wrapped in intricate wire patterns with gold accents.',
    fullDescription: `This serene jade pendant embodies tranquility and elegance. Wrapped in intricate wire patterns and finished with 18k gold plating, it's a perfect blend of traditional craftsmanship and timeless beauty.

Ideal for daily wear or special occasions. The jade stone brings a sense of calm and sophistication to any outfit.

CARE: Avoid harsh chemicals and excessive heat. Clean gently with a soft cloth.`,
    materials: ['Jade', 'Bronze Wire', '18k Gold Plating', 'Quartz'],
    techniques: ['Wire Wrapping', 'Alambrismo'],
    tags: ['Unique Piece', 'Handmade', 'Premium'],
    image: {
      src: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      alt: 'Jade pendant with intricate wire wrapping'
    },
    gallery: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  
  // Rings
  {
    id: 'origins-rg-001',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'rings',
      sequenceNumber: 1,
    }),
    name: 'Garnet Wire Crown',
    price: 70.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'rings',
    shortDescription: 'Exquisite ring featuring a vibrant garnet stone set in an ornate wire crown design.',
    fullDescription: `A regal piece featuring a deep red garnet stone crowned with intricate wire work. The crown design elevates this ring to statement status, perfect for those who appreciate bold, artistic jewelry.

Each garnet is hand-selected for color and clarity, ensuring a premium finished piece.

PROPERTIES: Garnet is believed to bring passion, energy, and vitality to the wearer.`,
    materials: ['Garnet', 'Bronze AAA Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Crown Setting'],
    tags: ['Unique Piece', 'Handmade', 'Elegant'],
    image: {
      src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      alt: 'Garnet ring with wire crown setting'
    },
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-6811bcdd55f7?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-rg-002',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'rings',
      sequenceNumber: 2,
    }),
    name: 'Crystal Spiral Ring',
    price: 55.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'rings',
    shortDescription: 'Modern design featuring Czech crystals wrapped in a mesmerizing spiral pattern.',
    fullDescription: `A contemporary masterpiece featuring sparkling Czech crystals arranged in a hypnotic spiral pattern. This ring combines modern aesthetics with traditional wire-wrapping techniques.

Perfect for those who appreciate contemporary design and craftsmanship. The spiral design creates visual movement and catches light beautifully.

DESIGN: Inspired by natural spirals found in nature.`,
    materials: ['Czech Crystals', 'Stainless Steel', 'Silver Wire'],
    techniques: ['Wire Wrapping', 'Spiral Technique'],
    tags: ['Unique Piece', 'Handmade', 'Contemporary'],
    image: {
      src: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
      alt: 'Crystal ring with spiral wire design'
    },
    gallery: [
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-rg-003',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'rings',
      sequenceNumber: 3,
    }),
    name: 'Pearl Elegance Band',
    price: 65.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'rings',
    shortDescription: 'Delicate ring with freshwater pearl centerpiece and fine wire detailing.',
    fullDescription: `Elegance personified. This delicate ring features a lustrous freshwater pearl set with fine wire detailing. The minimalist design lets the pearl's natural beauty shine through.

Perfect for everyday wear or as a subtle statement piece. The pearl symbolizes purity and sophistication.

CARE: Keep away from moisture and harsh chemicals to maintain the pearl's luster.`,
    materials: ['Freshwater Pearl', 'Bronze Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Pearl Setting'],
    tags: ['Unique Piece', 'Handmade', 'Feminine'],
    image: {
      src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      alt: 'Pearl ring with delicate wire work'
    },
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  
  // Earrings
  {
    id: 'origins-er-001',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'earrings',
      sequenceNumber: 1,
    }),
    name: 'Quartz Cascade Earrings',
    price: 60.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'earrings',
    shortDescription: 'Elegant drop earrings featuring clear quartz wrapped in flowing wire patterns.',
    fullDescription: `Cascading elegance. These drop earrings feature clear quartz stones wrapped in flowing wire patterns that seem to dance down from the ear. The combination of natural quartz with intricate wire work creates a sophisticated piece.

Perfect for formal events or everyday elegance. The clear quartz is believed to enhance clarity and energy.`,
    materials: ['Quartz', 'Bronze Wire', '18k Gold Plating', 'Indonesian Beads'],
    techniques: ['Wire Wrapping', 'Drop Design'],
    tags: ['Unique Piece', 'Handmade', 'Statement'],
    image: {
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      alt: 'Quartz drop earrings with wire wrapping'
    },
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-er-002',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'earrings',
      sequenceNumber: 2,
    }),
    name: 'Mother-of-Pearl Drops',
    price: 70.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'earrings',
    shortDescription: 'Sophisticated earrings combining iridescent mother-of-pearl with intricate wire work.',
    fullDescription: `Iridescent beauty at its finest. These sophisticated earrings combine iridescent mother-of-pearl with layered wire work and zirconia accents. The play of light on the pearl creates a mesmerizing effect.

Ideal for those who appreciate subtle luxury and natural beauty.`,
    materials: ['Mother-of-Pearl', 'Stainless Steel', 'Zirconia'],
    techniques: ['Wire Wrapping', 'Layered Design'],
    tags: ['Unique Piece', 'Handmade', 'Elegant'],
    image: {
      src: 'https://images.unsplash.com/photo-1596944946407-bce7e6a144f3?w=800&q=80',
      alt: 'Mother-of-pearl earrings with wire details'
    },
    gallery: [
      'https://images.unsplash.com/photo-1596944946407-bce7e6a144f3?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
  {
    id: 'origins-er-003',
    sku: generateSKU({
      creator: CURRENT_COLLECTION.creator,
      collectionDate: CURRENT_COLLECTION.dateCode,
      category: 'earrings',
      sequenceNumber: 3,
    }),
    name: 'Czech Crystal Hoops',
    price: 55.00,
    collection: 'Origins',
    collectionDate: 'DIC25',
    origin: 'Costa Rica',
    category: 'earrings',
    shortDescription: 'Modern hoop earrings adorned with sparkling Czech crystals and fine wire weaving.',
    fullDescription: `Modern meets traditional in these stunning hoop earrings. Adorned with sparkling Czech crystals and featuring fine wire weaving, they're the perfect blend of contemporary design and artisanal craftsmanship.

Versatile enough for everyday wear, yet statement-making for special occasions.`,
    materials: ['Czech Crystals', 'Bronze AAA Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Hoop Design'],
    tags: ['Unique Piece', 'Handmade', 'Versatile'],
    image: {
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      alt: 'Crystal hoop earrings with wire wrapping'
    },
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    stock: 1,
    available: true,
  },
];

// Category data for the home page
export const categories: Category[] = [
  {
    slug: 'bracelets',
    name: 'Bracelets',
    description: 'Handcrafted wire-wrapped bracelets featuring premium stones and materials',
    image: {
      src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      alt: 'Collection of handmade bracelets'
    }
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    description: 'Unique statement pieces crafted with fine wire-wrapping techniques',
    image: {
      src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      alt: 'Collection of handmade necklaces'
    }
  },
  {
    slug: 'rings',
    name: 'Rings',
    description: 'Elegant rings featuring natural stones in intricate wire designs',
    image: {
      src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      alt: 'Collection of handmade rings'
    }
  },
  {
    slug: 'earrings',
    name: 'Earrings',
    description: 'Sophisticated earrings combining artisan craftsmanship with premium materials',
    image: {
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      alt: 'Collection of handmade earrings'
    }
  },
];

/**
 * DEPRECATED: Use getProductsByCategory from api.ts instead
 * Get products by category
 */
export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

/**
 * DEPRECATED: Use getProductById from api.ts instead
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
