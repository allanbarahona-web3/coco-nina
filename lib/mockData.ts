/**
 * Mock data for Coco Nina Jewelry
 * This data is used when NEXT_PUBLIC_API_BASE_URL is not configured
 * or as a fallback when the API is unavailable
 */

import type { Product, Category } from './types';

// Export types for backward compatibility
export type { Product, Category } from './types';

// Mock product data - 12 unique handmade jewelry pieces
export const products: Product[] = [
  // Bracelets
  {
    id: 'br-001',
    name: 'Pearl Embrace Bracelet',
    category: 'bracelets',
    shortDescription: 'Elegant wire-wrapped bracelet featuring freshwater pearls and bronze wire with 18k gold plating.',
    materials: ['Freshwater Pearls', 'Bronze AAA Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Alambrismo'],
    tags: ['Unique Piece', 'Handmade', 'Premium'],
    image: {
      src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      alt: 'Handmade wire-wrapped bracelet with freshwater pearls'
    }
  },
  {
    id: 'br-002',
    name: 'Tiger Eye Protection',
    category: 'bracelets',
    shortDescription: 'Bold bracelet combining tiger eye stones with intricate wire weaving on stainless steel base.',
    materials: ['Tiger Eye', 'Stainless Steel', 'Czech Crystals'],
    techniques: ['Wire Wrapping', 'Stone Setting'],
    tags: ['Unique Piece', 'Handmade', 'Natural Stones'],
    image: {
      src: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      alt: 'Tiger eye stone bracelet with wire wrapping'
    }
  },
  {
    id: 'br-003',
    name: 'Volcanic Energy Band',
    category: 'bracelets',
    shortDescription: 'Minimalist design featuring volcanic stone beads wrapped with bronze wire.',
    materials: ['Volcanic Stone', 'Bronze Wire', 'Indonesian Beads'],
    techniques: ['Wire Wrapping', 'Bead Integration'],
    tags: ['Unique Piece', 'Handmade', 'Minimalist'],
    image: {
      src: 'https://images.unsplash.com/photo-1590065761959-1e357c50eee0?w=800&q=80',
      alt: 'Volcanic stone bracelet with bronze wire'
    }
  },
  
  // Necklaces
  {
    id: 'nk-001',
    name: 'Ocean Pearl Cascade',
    category: 'necklaces',
    shortDescription: 'Stunning necklace showcasing mother-of-pearl and freshwater pearls in an elegant wire-wrapped design.',
    materials: ['Mother-of-Pearl', 'Freshwater Pearls', '18k Gold Plating', 'Bronze Wire'],
    techniques: ['Wire Wrapping', 'Multi-layer Design'],
    tags: ['Unique Piece', 'Handmade', 'Statement Piece'],
    image: {
      src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      alt: 'Mother-of-pearl necklace with wire wrapping'
    }
  },
  {
    id: 'nk-002',
    name: 'Agate Harmony',
    category: 'necklaces',
    shortDescription: 'Natural agate centerpiece surrounded by delicate wire work and zirconia accents.',
    materials: ['Agate', 'Zirconia', 'Stainless Steel', 'Czech Crystals'],
    techniques: ['Wire Wrapping', 'Stone Framing'],
    tags: ['Unique Piece', 'Handmade', 'Natural Beauty'],
    image: {
      src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      alt: 'Agate stone necklace with wire frame'
    }
  },
  {
    id: 'nk-003',
    name: 'Jade Serenity',
    category: 'necklaces',
    shortDescription: 'Elegant jade pendant wrapped in intricate wire patterns with gold accents.',
    materials: ['Jade', 'Bronze Wire', '18k Gold Plating', 'Quartz'],
    techniques: ['Wire Wrapping', 'Alambrismo'],
    tags: ['Unique Piece', 'Handmade', 'Premium'],
    image: {
      src: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      alt: 'Jade pendant with intricate wire wrapping'
    }
  },
  
  // Rings
  {
    id: 'rg-001',
    name: 'Garnet Wire Crown',
    category: 'rings',
    shortDescription: 'Exquisite ring featuring a vibrant garnet stone set in an ornate wire crown design.',
    materials: ['Garnet', 'Bronze AAA Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Crown Setting'],
    tags: ['Unique Piece', 'Handmade', 'Elegant'],
    image: {
      src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      alt: 'Garnet ring with wire crown setting'
    }
  },
  {
    id: 'rg-002',
    name: 'Crystal Spiral Ring',
    category: 'rings',
    shortDescription: 'Modern design featuring Czech crystals wrapped in a mesmerizing spiral pattern.',
    materials: ['Czech Crystals', 'Stainless Steel', 'Silver Wire'],
    techniques: ['Wire Wrapping', 'Spiral Technique'],
    tags: ['Unique Piece', 'Handmade', 'Contemporary'],
    image: {
      src: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
      alt: 'Crystal ring with spiral wire design'
    }
  },
  {
    id: 'rg-003',
    name: 'Pearl Elegance Band',
    category: 'rings',
    shortDescription: 'Delicate ring with freshwater pearl centerpiece and fine wire detailing.',
    materials: ['Freshwater Pearl', 'Bronze Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Pearl Setting'],
    tags: ['Unique Piece', 'Handmade', 'Feminine'],
    image: {
      src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      alt: 'Pearl ring with delicate wire work'
    }
  },
  
  // Earrings
  {
    id: 'er-001',
    name: 'Quartz Cascade Earrings',
    category: 'earrings',
    shortDescription: 'Elegant drop earrings featuring clear quartz wrapped in flowing wire patterns.',
    materials: ['Quartz', 'Bronze Wire', '18k Gold Plating', 'Indonesian Beads'],
    techniques: ['Wire Wrapping', 'Drop Design'],
    tags: ['Unique Piece', 'Handmade', 'Statement'],
    image: {
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      alt: 'Quartz drop earrings with wire wrapping'
    }
  },
  {
    id: 'er-002',
    name: 'Mother-of-Pearl Drops',
    category: 'earrings',
    shortDescription: 'Sophisticated earrings combining iridescent mother-of-pearl with intricate wire work.',
    materials: ['Mother-of-Pearl', 'Stainless Steel', 'Zirconia'],
    techniques: ['Wire Wrapping', 'Layered Design'],
    tags: ['Unique Piece', 'Handmade', 'Elegant'],
    image: {
      src: 'https://images.unsplash.com/photo-1596944946407-bce7e6a144f3?w=800&q=80',
      alt: 'Mother-of-pearl earrings with wire details'
    }
  },
  {
    id: 'er-003',
    name: 'Czech Crystal Hoops',
    category: 'earrings',
    shortDescription: 'Modern hoop earrings adorned with sparkling Czech crystals and fine wire weaving.',
    materials: ['Czech Crystals', 'Bronze AAA Wire', '18k Gold Plating'],
    techniques: ['Wire Wrapping', 'Hoop Design'],
    tags: ['Unique Piece', 'Handmade', 'Versatile'],
    image: {
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      alt: 'Crystal hoop earrings with wire wrapping'
    }
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
