'use client';

import { MessageCircle, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/types';

interface ProductTopSectionProps {
  product: Product;
}

export default function ProductTopSection({ product }: ProductTopSectionProps) {
  // Generate WhatsApp message with product details and URL
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the "${product.name}" from Coco&Nina.\n\n` +
    `Price: $${product.price.toFixed(2)} USD\n` +
    `SKU: ${product.sku}\n` +
    `Link: ${typeof window !== 'undefined' ? window.location.href : ''}\n\n` +
    `Could you tell me more about this piece?`
  );

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^\d+]/g, '')}?text=${whatsappMessage}`;

  // Buy Now link (placeholder - will be replaced with actual payment link)
  const buyNowUrl = `#`; // TODO: Connect to payment processor

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
        {product.name}
      </h1>

      {/* Emotional Description */}
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
        {product.shortDescription}
      </p>

      {/* Price */}
      <div className="pt-2">
        <p className="text-4xl font-serif font-bold text-gray-900">
          ${product.price.toFixed(2)} <span className="text-lg text-gray-500 font-normal">USD</span>
        </p>
      </div>

      {/* Availability Badge */}
      <div className="flex items-center gap-3 pt-2">
        {product.available ? (
          <>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-sm font-medium text-gray-900">One of a kind</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-sm font-medium text-gray-600">Only 1 available</span>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full" />
              <span className="text-sm font-medium text-gray-600">Sold Out</span>
            </div>
          </>
        )}
      </div>

      {/* Buttons - Two Column on Desktop, Stack on Mobile */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6">
        {/* Primary: Buy Now (or Sold Out) */}
        {product.available ? (
          <a
            href={buyNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#8A6A2F] hover:bg-[#755824] text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy Now
          </a>
        ) : (
          <button
            disabled
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-300 text-gray-500 cursor-not-allowed font-semibold rounded-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Sold Out
          </button>
        )}

        {/* Secondary: Inquire via WhatsApp (Always Available) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2F6F5E] hover:bg-[#275E50] text-white font-semibold rounded-lg transition-colors duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          {product.available ? 'Inquire via WhatsApp' : 'Check Availability'}
        </a>
      </div>
    </div>
  );
}
