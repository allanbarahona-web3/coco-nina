'use client';

/**
 * CatalogContent - Client Component
 * 
 * Handles client-side filtering and rendering of products.
 * Receives products from the parent Server Component.
 */

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { formatCategoryName } from '@/lib/utils';
import { Filter, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/lib/types';

interface CatalogContentProps {
  products: Product[];
}

export default function CatalogContent({ products }: CatalogContentProps) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('cat') || 'all';
  const [sortBy, setSortBy] = useState('featured');

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
    <div className="pt-20 pb-20 min-h-screen bg-gray-50">
      <div className="container-custom">
        {/* Header - Compact */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">
            Origins Collection
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our first limited collection of handcrafted jewelry. Each piece is one of a kind and will never be reproduced.
          </p>
        </div>

        {/* Category Filter - Compact */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-3.5 h-3.5 text-gray-400 mr-1.5" />
            <span className="text-xs font-light text-gray-500 uppercase tracking-widest opacity-75">
              Filter by category
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {categories.map((cat) => {
              const isActive = categoryFilter === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={cat.slug === 'all' ? '/catalog' : `/catalog?cat=${cat.slug}`}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                  } focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-1 focus-visible:outline-none`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Status Bar - Compact */}
        <div className="mb-8 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-gray-200">
            {/* Left: Results Count */}
            <p className="text-xs md:text-sm text-gray-600 font-light">
              <span className="font-medium text-gray-900">{filteredProducts.length}</span> one-of-a-kind {categoryFilter === 'all' ? 'pieces' : formatCategoryName(categoryFilter).toLowerCase()}
            </p>

            {/* Right: Sort Control */}
            <div className="flex items-center gap-3">
              <span className="text-xs md:text-sm text-gray-600 font-light">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-3 py-1.5 text-xs md:text-sm text-gray-700 bg-white border border-gray-200 rounded hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-0 transition-all duration-200 cursor-pointer pr-7"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
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
            Each Piece Is Unique
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            All pieces in our collections are handcrafted and ready to ship. Each design is one of a kind and will not be reproduced once sold.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Looking for something truly special? We also accept custom requests crafted with the same care, materials, and artisanal techniques.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Inquire About a Custom Piece
          </Link>
        </div>
      </div>
    </div>
  );
}
