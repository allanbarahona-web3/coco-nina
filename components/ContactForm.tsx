'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { MessageSquare, MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';

export interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useContactModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within ModalProvider');
  }
  return context;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{
      isOpen,
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }}>
      {children}
    </ModalContext.Provider>
  );
}

const WHATSAPP_URL = `https://wa.me/17863918722?text=Hi%20Coco%20Nina,%20I%20have%20an%20inquiry%20about%20your%20jewelry.`;

function ContactFormContent() {
  const { openModal } = useContactModal();

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* CTA Block */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                Let's Create Something Beautiful
              </h2>
              <p className="text-lg text-gray-600">
                Questions, support, or custom pieces—reach out and we'll respond within 24 hours.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary: Send Inquiry */}
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                aria-label="Send inquiry to Coco & Nina"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Inquiry
              </button>

              {/* Secondary: WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </button>
            </div>

            {/* Optional: Response time callout */}
            <p className="text-sm text-gray-500 font-light">
              💌 We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactForm() {
  return (
    <ModalProvider>
      <ContactFormContent />
      <ContactModal />
    </ModalProvider>
  );
}
