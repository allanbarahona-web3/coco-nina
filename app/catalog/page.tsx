/**
 * Catalog Page - Server Component
 * 
 * This page fetches products from the NestJS API when NEXT_PUBLIC_API_BASE_URL is configured.
 * Otherwise, it falls back to mock data.
 * 
 * Features:
 * - Server-side rendering for SEO
 * - Category filtering via query params (?cat=bracelets)
 * - Automatic fallback to mock data
 * 
 * NestJS Integration:
 * - Fetches from: GET /public/products
 * - Filters are applied client-side (can be moved to API with ?category=bracelets)
 */

import { Suspense } from 'react';
import { Metadata } from 'next';
import CollectionHero from '@/components/CollectionHero';
import CatalogContent from './CatalogContent';
import { getProducts } from '@/lib/api';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'Jewelry Catalog | Coco Nina',
  description: 'Browse our collection of unique handmade jewelry pieces. Each piece is one of a kind, crafted with premium materials.',
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function CatalogPage() {
  // Fetch products on the server (with automatic fallback to mock data)
  const products = await getProducts();

  return (
    <>
      <CollectionHero />
      <Suspense fallback={
        <div className="pt-32 pb-20 min-h-screen bg-gray-50">
          <div className="container-custom text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-gray-600">Loading catalog...</p>
          </div>
        </div>
      }>
        <CatalogContent products={products} />
      </Suspense>
    </>
  );
}

