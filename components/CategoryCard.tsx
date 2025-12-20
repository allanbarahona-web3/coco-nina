import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/types';
import { getImageUrl } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/catalog?cat=${category.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] block hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={getImageUrl(category.image.src)}
          alt={category.image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
          {category.name}
        </h3>
        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {category.description}
        </p>
        
        {/* Arrow indicator */}
        <div className="mt-4 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          <span>View Collection</span>
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
