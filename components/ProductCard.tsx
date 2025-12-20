import Image from 'next/image';
import type { Product } from '@/lib/types';
import { getImageUrl } from '@/lib/utils';
import { Sparkles, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={getImageUrl(product.image.src)}
          alt={product.image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="inline-flex items-center space-x-1 bg-primary-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-3 h-3" />
            <span>UNIQUE PIECE</span>
          </span>
          <span className="inline-flex items-center space-x-1 bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            <Heart className="w-3 h-3 text-red-500" />
            <span>Handmade</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Materials */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Materials
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {product.materials.slice(0, 3).map((material: string) => (
              <span
                key={material}
                className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
              >
                {material}
              </span>
            ))}
            {product.materials.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                +{product.materials.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Techniques */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Techniques
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {product.techniques.map((technique: string) => (
              <span
                key={technique}
                className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full font-medium"
              >
                {technique}
              </span>
            ))}
          </div>
        </div>

        {/* Inquire Button */}
        <button
          onClick={() => {
            const message = `Hello! I'm contacting you from the Coco&Nina website.\n\nI'm interested in:\n📿 ${product.name}\n🏷️ Category: ${product.category}\n\nCould you provide more information about this piece?`;
            const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^\d+]/g, '')}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
          }}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-md hover:shadow-lg"
        >
          Inquire via WhatsApp
        </button>
      </div>
    </article>
  );
}
