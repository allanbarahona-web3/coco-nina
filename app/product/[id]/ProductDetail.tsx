'use client';

/**
 * ProductDetail - Client Component
 * 
 * Main product page component that integrates all sections:
 * - Top section (title, price, buttons)
 * - Gallery (images + optional video)
 * - Full description
 * - Details (materials, techniques)
 * - Each Piece Is Unique
 * - Care instructions
 */

import ProductGallery from './ProductGallery';
import ProductTopSection from './ProductTopSection';
import ProductDetails from './ProductDetails';
import ProductUnique from './ProductUnique';
import ProductCare from './ProductCare';
import type { Product } from '@/lib/types';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const galleryImages = product.gallery || [product.image.src];

  return (
    <div className="container-custom py-12">
      {/* Back Link */}
      <a
        href={`/catalog?cat=${product.category}`}
        className="inline-block text-sm text-gray-500 hover:text-gray-700 mb-12 transition-colors"
      >
        ← Back to {product.category}
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Gallery */}
        <div>
          <ProductGallery
            images={galleryImages}
            productName={product.name}
          />
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col">
          {/* Top Section */}
          <ProductTopSection product={product} />

          {/* Full Description */}
          {product.fullDescription && (
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.fullDescription}
              </p>
            </div>
          )}

          {/* Details */}
          <ProductDetails
            materials={product.materials}
            techniques={product.techniques}
          />

          {/* Each Piece Is Unique */}
          <ProductUnique />

          {/* Care Instructions */}
          <ProductCare />
        </div>
      </div>
    </div>
  );
}
