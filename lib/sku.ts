/**
 * SKU Generation System for Coco Nina Jewelry
 * 
 * Automatically generates unique, readable SKU codes for products
 * Format: COCO-[CREATOR]-[MONTH/YEAR]-[CATEGORY]-[SEQUENCE]
 * 
 * Example: COCO-ROSSY-DIC25-BR-001
 */

import type { ProductCategory } from './types';

interface SKUOptions {
  brand?: string;           // Default: 'COCO'
  creator: string;          // e.g., 'ROSSY'
  collectionDate: string;   // e.g., 'DIC25' (MES25)
  category: ProductCategory;
  sequenceNumber: number;   // e.g., 001
}

/**
 * Generate a unique SKU for a product
 * 
 * @param options SKU options
 * @returns Generated SKU string
 * 
 * @example
 * generateSKU({
 *   creator: 'ROSSY',
 *   collectionDate: 'DIC25',
 *   category: 'bracelets',
 *   sequenceNumber: 1
 * })
 * // Returns: 'COCO-ROSSY-DIC25-BR-001'
 */
export function generateSKU(options: SKUOptions): string {
  const {
    brand = 'COCO',
    creator,
    collectionDate,
    category,
    sequenceNumber,
  } = options;

  // Map category to 2-letter code
  const categoryMap: Record<ProductCategory, string> = {
    bracelets: 'BR',
    necklaces: 'NK',
    rings: 'RG',
    earrings: 'ER',
  };

  const categoryCode = categoryMap[category];
  const sequenceCode = String(sequenceNumber).padStart(3, '0');

  return `${brand}-${creator}-${collectionDate}-${categoryCode}-${sequenceCode}`;
}

/**
 * Get next sequence number for a category
 * 
 * In production, this would query the database
 * For now, we track via the mock data
 * 
 * @param category Product category
 * @returns Next sequence number to use
 * 
 * @example
 * getNextSequenceNumber('bracelets') // Returns: 4 (if 3 bracelets exist)
 */
export function getNextSequenceNumber(
  products: Array<{ category: ProductCategory }>,
  category: ProductCategory
): number {
  const categoryProducts = products.filter(p => p.category === category);
  return categoryProducts.length + 1;
}

/**
 * Validate SKU format
 * 
 * @param sku SKU to validate
 * @returns true if valid format
 */
export function isValidSKU(sku: string): boolean {
  const pattern = /^[A-Z]+-[A-Z]+-[A-Z0-9]+-[A-Z]{2}-\d{3}$/;
  return pattern.test(sku);
}

/**
 * Parse SKU to extract information
 * 
 * @param sku SKU string
 * @returns Parsed SKU information
 * 
 * @example
 * parseSKU('COCO-ROSSY-DIC25-BR-001')
 * // Returns: {
 * //   brand: 'COCO',
 * //   creator: 'ROSSY',
 * //   collectionDate: 'DIC25',
 * //   category: 'BR',
 * //   sequenceNumber: 1
 * // }
 */
export function parseSKU(sku: string) {
  const parts = sku.split('-');
  
  if (parts.length !== 5) {
    throw new Error(`Invalid SKU format: ${sku}`);
  }

  return {
    brand: parts[0],
    creator: parts[1],
    collectionDate: parts[2],
    category: parts[3],
    sequenceNumber: parseInt(parts[4], 10),
  };
}

/**
 * Helper: Get month/year code from Date
 * 
 * @param date Date object (defaults to today)
 * @returns Month/Year code (e.g., 'DIC25', 'ENE26')
 * 
 * @example
 * getCollectionDateCode(new Date('2025-12-01'))
 * // Returns: 'DIC25'
 */
export function getCollectionDateCode(date = new Date()): string {
  const months = [
    'ENE', // January (Enero)
    'FEB', // February (Febrero)
    'MAR', // March (Marzo)
    'ABR', // April (Abril)
    'MAY', // May (Mayo)
    'JUN', // June (Junio)
    'JUL', // July (Julio)
    'AGO', // August (Agosto)
    'SEP', // September (Septiembre)
    'OCT', // October (Octubre)
    'NOV', // November (Noviembre)
    'DIC', // December (Diciembre)
  ];

  const month = months[date.getMonth()];
  const year = String(date.getFullYear()).slice(-2);

  return `${month}${year}`;
}
