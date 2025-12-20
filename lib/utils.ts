import { type ClassValue, clsx } from "clsx";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Get image URL from CDN or use placeholder
 */
export function getImageUrl(imagePath: string): string {
  const cdnBase = process.env.NEXT_PUBLIC_CDN_BASE_URL;
  
  // If imagePath is already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If CDN base is configured, use it
  if (cdnBase) {
    return `${cdnBase}/${imagePath}`;
  }
  
  // Otherwise return the path as is (for local development)
  return imagePath;
}

/**
 * Format WhatsApp URL with encoded message
 */
export function getWhatsAppUrl(message?: string): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+506XXXXXXXX';
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 
    'Hello, I saw your jewelry catalog and would like to inquire about a piece.';
  
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  
  // Remove any non-numeric characters except +
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
  
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Format category name for display
 */
export function formatCategoryName(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}
