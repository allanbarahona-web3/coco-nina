'use client';

import Link from 'next/link';
import { Instagram, Facebook, Mail, Music } from 'lucide-react';
import { useContactModal } from './ContactForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useContactModal();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Coco&Nina
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Handmade jewelry crafted with passion. Every piece is unique, 
              made with fine wire-wrapping techniques and premium materials.
            </p>
            <p className="text-xs text-gray-500 italic">
              by Barmentech LLC
            </p>
            <p className="text-xs text-gray-500 mt-2">
              1110 Brickell Ave #430K-410<br />
              Miami, Florida 33131<br />
              +1 (786) 391-8722
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/catalog" 
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link 
                  href="/#about" 
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/shopcocoandnina/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/shopcocoandnina/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@shopcocoandnina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Follow us on TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
              <button
                onClick={openModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              <a 
                href="mailto:support@barmentech.com"
                className="hover:text-primary-600 transition-colors"
              >
                support@barmentech.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {currentYear} Coco&Nina by Barmentech LLC. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Handcrafted with love | Every piece is unique
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
