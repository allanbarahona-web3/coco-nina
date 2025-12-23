import Hero from '@/components/Hero';
import Image from 'next/image';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';
import { Sparkles, Heart, Award } from 'lucide-react';

export default async function Home() {
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Explore Our Collections
            </h2>
            <p className="text-lg text-gray-600">
              Discover handcrafted jewelry pieces across our four main collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { slug: 'bracelets', name: 'Bracelets', image: 'https://barmentech-saas.atl1.digitaloceanspaces.com/coco-nina%20/bracelets.png', description: 'Delicate designs handcrafted with timeless detail.' },
              { slug: 'necklaces', name: 'Necklaces', image: 'https://barmentech-saas.atl1.digitaloceanspaces.com/coco-nina%20/necklaces.png', description: 'Unique statement pieces crafted with fine wire-wrapping techniques.' },
              { slug: 'rings', name: 'Rings', image: 'https://barmentech-saas.atl1.digitaloceanspaces.com/coco-nina%20/rings.png', description: 'One-of-a-kind rings designed to endure and stand out.' },
              { slug: 'earrings', name: 'Earrings', image: 'https://barmentech-saas.atl1.digitaloceanspaces.com/coco-nina%20/earrings.png', description: 'Subtle accents that frame and elevate every look.' },
            ].map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Crafted with Passion
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each piece is meticulously handcrafted using the ancient art of wire-wrapping (alambrismo).
                We work with carefully selected materials — natural gemstones, freshwater pearls, and 18k gold plating — to create jewelry that is truly one of a kind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Unique & Exclusive
                </h3>
                <p className="text-gray-600">
                  Every piece is created as a single expression. 
                  No mass production. No replicas. Just one.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Handcrafted Love
                </h3>
                <p className="text-gray-600">
                  Designed and shaped entirely by hand, using traditional wire-wrapping techniques passed down through generations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Premium Materials
                </h3>
                <p className="text-gray-600">
                  Natural gemstones, freshwater pearls, and 18k gold plating — chosen for their beauty, quality, and character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Transition */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif font-light text-gray-700 tracking-wide">
              “Behind every piece, there is a story — and the hands that shape it.”
            </p>
          </div>
        </div>
      </section>

      {/* Materials & Craftsmanship Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">
                Premium Materials & Craftsmanship
              </h2>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-8 font-light">
                Carefully chosen. Thoughtfully made. Always one of a kind.
              </p>

              <div className="space-y-6 mb-10">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every piece begins with intention. Our jewelry is handcrafted using traditional wire-wrapping techniques, combining patience, precision, and carefully selected materials to create pieces that exist only once.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Natural gemstones, freshwater pearls, bronze wire, and 18k gold plating come together through a slow, thoughtful process — guided by the hands and vision of our artisan.
                </p>
              </div>

              {/* Curated List */}
              <div className="space-y-3">
                {[
                  'Handcrafted wire-wrapping',
                  'Natural gemstones',
                  'Freshwater pearls',
                  'Bronze wire',
                  '18k gold plating',
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Artisan Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://barmentech-saas.atl1.digitaloceanspaces.com/coco-nina%20/artisian-coconina.png"
                  alt="Our artisan crafting jewelry with precision and care"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-gray-500 text-center mt-6 font-light italic">
                Meet our artisan — the hands and heart behind each piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
