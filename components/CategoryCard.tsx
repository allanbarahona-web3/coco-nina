import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  category: {
    slug: string;
    name: string;
    image: string;
    description: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const ariaLabel = `View ${category.name} collection`;

  return (
    <Link
      href={`/catalog?cat=${category.slug}`}
      aria-label={ariaLabel}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] block transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 focus-visible:outline-none"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay - Default: subtle, Hover: darker */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-250 ease-out" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Title - Always visible */}
        <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
          {category.name}
        </h3>

        {/* Description - Hidden by default, revealed on hover/focus */}
        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transform translate-y-2 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all duration-250 ease-out mt-3">
          {category.description}
        </p>

        {/* CTA - Hidden by default, revealed on hover/focus */}
        <div className="mt-4 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transform translate-y-2 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all duration-250 ease-out">
          <span>View Collection</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
