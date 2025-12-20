'use client';

/**
 * ProductDetail - Client Component
 * 
 * Displays product gallery, description, materials, techniques, and inquiry button.
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, MessageCircle, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import type { Product } from '@/lib/types';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.image.src);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const galleryImages = product.gallery || [product.image.src];
  const whatsappUrl = getWhatsAppUrl(`I'm interested in: 💎 ${product.name} from the Coco&Nina website. Could you provide more information?`);

  return (
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery Section */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  selectedImage === image
                    ? 'ring-2 ring-primary-600'
                    : 'hover:ring-2 hover:ring-gray-300'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col">
          {/* Breadcrumb */}
          <Link
            href={`/catalog?cat=${product.category}`}
            className="text-sm text-primary-600 hover:text-primary-700 mb-4"
          >
            ← Back to {product.category}
          </Link>

          {/* Title & Badges */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                {product.name}
              </h1>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex-shrink-0 p-3 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isWishlisted
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            {product.available ? (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-green-700 font-medium">In Stock - Unique Piece</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
                <span className="text-gray-600 font-medium">Sold Out</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.fullDescription || product.shortDescription}
            </p>
          </div>

          {/* Materials */}
          <div className="mb-8">
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
              Materials
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((material) => (
                <span
                  key={material}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {/* Techniques */}
          <div className="mb-8">
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
              Crafting Techniques
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.techniques.map((technique) => (
                <span
                  key={technique}
                  className="px-4 py-2 bg-accent-100 text-accent-700 text-sm rounded-full"
                >
                  {technique}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-gray-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire via WhatsApp
            </a>
            <Link
              href="/#contact"
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Contact About Order
            </Link>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p className="font-semibold text-gray-900 mb-2">✨ Each Piece Is Unique</p>
            <p>
              This handcrafted jewelry piece is one of a kind and will not be reproduced once sold. 
              We also accept custom requests crafted with the same care and artisanal techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
