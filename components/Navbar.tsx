'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <Link 
              href="/catalog" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Collections
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
              <Link 
                href="/catalog" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Collections
              </Link>
              <Link 
                href="/#about" 
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                About
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
