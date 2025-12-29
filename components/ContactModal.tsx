'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { submitContactForm } from '@/lib/api';
import { useContactModal } from './ContactForm';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      setTimeout(() => nameInputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    // Reset form
    setIsSubmitted(false);
    setFormData({ name: '', email: '', whatsapp: '', message: '' });
    setErrors({});
    // Call closeModal from context
    closeModal();
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitContactForm(formData);
      setIsSubmitted(true);

      // Close modal after 2 seconds of success state
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      setErrors({ submit: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 id="modal-title" className="text-2xl font-serif font-bold text-gray-900">
              Send an Inquiry
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              We usually respond within 24 hours.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-lg"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all`}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all`}
                  placeholder="your.email@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* WhatsApp (optional) */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  WhatsApp <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  placeholder="+506 1234 5678"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell us about your inquiry..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
