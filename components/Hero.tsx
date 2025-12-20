import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
            <span>Every Piece is One of a Kind</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Handmade Jewelry
            <br />
            <span className="text-primary-600">Unique Pieces</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium wire-wrapped jewelry crafted with passion. 
            No replicas, only exclusive treasures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/catalog"
              className="group inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore Catalog</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 border-2 border-gray-200"
            >
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Unique Designs</h3>
              <p className="text-sm text-gray-600">No two pieces are alike</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Handcrafted</h3>
              <p className="text-sm text-gray-600">Fine wire-wrapping art</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-3">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Premium Materials</h3>
              <p className="text-sm text-gray-600">Natural stones & metals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
