import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';
import { getCategories } from '@/lib/api';
import { Sparkles, Heart, Award } from 'lucide-react';

export default async function Home() {
  const categories = await getCategories();
  
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
            {categories.map((category: any) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Crafted with Passion
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each piece of jewelry is meticulously handcrafted using the ancient art of 
                wire-wrapping (alambrismo). We work with premium materials including 18k gold 
                plating, natural gemstones, and AAA-grade bronze wire to create truly unique pieces.
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
                  Every piece is one of a kind. No mass production, no replicas. 
                  When you wear our jewelry, you wear something truly unique.
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
                  Each piece is carefully crafted by hand using traditional wire-wrapping 
                  techniques passed down through generations.
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
                  We use only the finest materials: natural gemstones, freshwater pearls, 
                  18k gold plating, and premium bronze wire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Premium Materials & Techniques
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We carefully select each material for its beauty, durability, and uniqueness.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                'Wire Wrapping (Alambrismo)',
                'Bronze AAA Wire',
                '18k Gold Plating',
                'Stainless Steel',
                'Freshwater Pearls',
                'Mother-of-Pearl',
                'Zirconia',
                'Czech Crystals',
                'Agate',
                'Jade',
                'Tiger Eye',
                'Quartz',
                'Garnet',
                'Volcanic Stone',
                'Indonesian Beads',
                'Natural Gemstones',
              ].map((material) => (
                <div
                  key={material}
                  className="bg-white px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {material}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
