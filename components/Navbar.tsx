'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, Instagram, Facebook, Music, Mail } from 'lucide-react';
import { useContactModal } from './ContactForm';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const { openModal } = useContactModal();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const collections = [
    { name: 'Origins Collection', slug: 'origins' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
            aria-label="Coco Nina Jewelry Home"
          >
            <div className="relative h-16 w-48 transition-transform group-hover:scale-105">
              <Image
                src="/branding/logo.png"
                alt="Coco & Nina Jewelry"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>

            {/* Collections Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                <span>Collections</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isCollectionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsCollectionsOpen(true)}
                  onMouseLeave={() => setIsCollectionsOpen(false)}
                >
                  {collections.map((col) => (
                    <Link
                      key={col.slug}
                      href="/catalog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                    >
                      {col.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fragrance */}
            <Link 
              href="/fragrance" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Fragrance
            </Link>

            {/* Apparel */}
            <Link 
              href="/apparel" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Apparel
            </Link>

            <Link 
              href="/#about" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/#contact" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
              <a
                href="https://www.instagram.com/shopcocoandnina/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/shopcocoandnina/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@shopcocoandnina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all"
                aria-label="Follow us on TikTok"
              >
                <Music className="w-4 h-4" />
              </a>
              <button
                onClick={openModal}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-all"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Home
              </Link>

              {/* Mobile Collections Submenu */}
              <div>
                <button 
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors w-full"
                >
                  <span>Collections</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCollectionsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {collections.map((col) => (
                      <Link
                        key={col.slug}
                        href="/catalog"
                        onClick={toggleMenu}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/#about" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                About
              </Link>

              <Link 
                href="/fragrance" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Fragrance
              </Link>

              <Link 
                href="/apparel" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Apparel
              </Link>

              <Link 
                href="/#contact" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
