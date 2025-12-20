'use client';

/**
 * CatalogContent - Client Component
 * 
 * Handles client-side filtering and rendering of products.
 * Receives products from the parent Server Component.
 */

import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { formatCategoryName } from '@/lib/utils';
import { Filter } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/lib/types';

interface CatalogContentProps {
  products: Product[];
}

export default function CatalogContent({ products }: CatalogContentProps) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('cat') || 'all';

  // Filter products based on category
  const filteredProducts = categoryFilter === 'all'
    ? products
    : products.filter(product => product.category === categoryFilter);

  const categories = [
    { slug: 'all', name: 'All Pieces' },
    { slug: 'bracelets', name: 'Bracelets' },
    { slug: 'necklaces', name: 'Necklaces' },
    { slug: 'rings', name: 'Rings' },
    { slug: 'earrings', name: 'Earrings' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Jewelry Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover unique handmade pieces crafted with premium materials and 
            fine wire-wrapping techniques. Each piece is one of a kind.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isActive = categoryFilter === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={cat.slug === 'all' ? '/catalog' : `/catalog?cat=${cat.slug}`}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> unique {categoryFilter === 'all' ? 'pieces' : formatCategoryName(categoryFilter).toLowerCase()}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 text-gray-400 rounded-full mb-4">
              <Filter className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filter or browse all collections.
            </p>
            <Link
              href="/catalog"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              View All Products
            </Link>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
            Each Piece is Unique
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            All our jewelry is handcrafted to order. Because each piece is unique, 
            slight variations in design and materials may occur, making your piece 
            truly one of a kind.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Custom Orders Available
          </Link>
        </div>
      </div>
    </div>
  );
}
