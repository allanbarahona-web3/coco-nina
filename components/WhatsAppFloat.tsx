'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

export default function WhatsAppFloat() {
  const handleClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse-soft group"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
    </button>
  );
}
