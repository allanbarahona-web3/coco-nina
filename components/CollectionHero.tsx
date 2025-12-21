'use client';

export default function CollectionHero() {
  return (
    <section className="relative w-full h-collection-hero bg-gray-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/branding/Collectionhero.png"
          alt="Origins Collection"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
        {/* Dark Overlay - 30% opacity */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text Overlay - Centered */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-[640px] animate-fade-in">
          {/* Eyebrow */}
          <p className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">
            Origins Collection
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Handcrafted. One of a Kind.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light">
            Limited pieces, never reproduced.
          </p>
        </div>
      </div>
    </section>
  );
}
