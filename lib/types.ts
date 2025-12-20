/**
 * Core TypeScript interfaces for the Coco Nina Jewelry application
 * These types are used across the frontend and should match the NestJS API schema
 */

/**
 * Product interface
 * Represents a unique handmade jewelry piece
 * 
 * @interface Product
 * @property {string} id - Unique identifier (e.g., 'origins-br-001')
 * @property {string} sku - Unique SKU code (e.g., 'COCO-NINA-DIC25-BR-001')
 * @property {string} name - Product display name
 * @property {number} price - Price in USD
 * @property {string} collection - Collection name (e.g., 'Origins')
 * @property {string} collectionDate - Collection date (e.g., 'DIC25')
 * @property {string} origin - Origin country (e.g., 'Costa Rica')
 * @property {ProductCategory} category - Product category slug
 * @property {string} shortDescription - Brief product description
 * @property {string} [fullDescription] - Full product description
 * @property {string[]} materials - Array of materials used
 * @property {string[]} techniques - Crafting techniques applied
 * @property {string[]} tags - Product tags (e.g., 'Unique Piece', 'Handmade')
 * @property {ProductImage} image - Product image data
 * @property {string[]} [gallery] - Array of additional product images
 * @property {number} [stock] - Stock quantity
 * @property {boolean} [available] - Availability status
 */
export interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  collection: string;
  collectionDate: string;
  origin: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription?: string;
  materials: string[];
  techniques: string[];
  tags: string[];
  image: ProductImage;
  gallery?: string[];
  stock?: number;
  available?: boolean;
}

/**
 * Product category type
 * Must match one of the four main jewelry categories
 */
export type ProductCategory = 'bracelets' | 'necklaces' | 'rings' | 'earrings';

/**
 * Product image interface
 * Contains image URL and accessibility information
 */
export interface ProductImage {
  src: string;
  alt: string;
}

/**
 * Category interface
 * Represents a product category with metadata
 * 
 * @interface Category
 * @property {ProductCategory} slug - Category identifier (URL-safe)
 * @property {string} name - Display name
 * @property {string} description - Category description
 * @property {CategoryImage} image - Category image data
 */
export interface Category {
  slug: ProductCategory;
  name: string;
  description: string;
  image: CategoryImage;
}

/**
 * Category image interface
 */
export interface CategoryImage {
  src: string;
  alt: string;
}

/**
 * API Response wrapper (expected from NestJS backend)
 * Generic response format for paginated or wrapped data
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

/**
 * API Error response
 */
export interface ApiError {
  success: false;
  message: string;
  error?: string;
  statusCode?: number;
}
