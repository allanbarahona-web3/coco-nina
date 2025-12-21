'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageCircle, ShoppingCart } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      image: '/branding/hero1.png',
      title: 'Model wearing necklace',
    },
    {
      image: '/branding/hero2.png',
      title: 'Bracelet craftsmanship',
    },
    {
      image: '/branding/hero3.png',
      title: 'Necklace and earrings set',
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-gray-950 pt-20">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Text Overlay - Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-3xl">
            {/* Eyebrow */}
            <p className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-widest mb-4">
              Every Piece Is One of a Kind
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
              Handmade Jewelry
            </h1>

            {/* Subheadline */}
            <p className="text-3xl md:text-4xl font-serif font-semibold text-white/95 mb-6">
              Unique Pieces
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
              Premium wire-wrapped jewelry crafted with intention. No replicas. Only exclusive designs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button: Buy This Piece */}
              <Link
                href="/catalog"
                className="group inline-flex items-center justify-center gap-2 bg-[#8A6A2F] hover:bg-[#755824] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy This Piece</span>
              </Link>

              {/* Secondary Button: Contact via WhatsApp */}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^\d+]/g, '')}?text=Hi! I'm interested in your jewelry collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators - Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/40 hover:bg-white/60 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
