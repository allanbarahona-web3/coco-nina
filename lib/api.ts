/**
 * API Client for Coco Nina Jewelry
 * 
 * This module provides functions to fetch data from the NestJS backend API.
 * If NEXT_PUBLIC_API_BASE_URL is not configured, it falls back to mock data.
 * 
 * NestJS Integration Points:
 * - Products endpoint: GET /public/products
 * - Categories endpoint: GET /public/categories (future)
 * - Contact form: POST /api/contact (see ContactForm.tsx)
 */

import { products as mockProducts, categories as mockCategories } from './mockData';
import type { Product, Category, ApiResponse } from './types';

/**
 * Base API URL from environment variables
 * If not set, the app will use mock data instead
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Check if API is configured
 */
export function isApiConfigured(): boolean {
  return !!API_BASE_URL;
}

/**
 * Generic fetch wrapper with error handling
 * 
 * @param endpoint - API endpoint (e.g., '/public/products')
 * @param options - Fetch options
 * @returns Parsed JSON response
 * @throws Error with descriptive message
 */
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not configured');
  }

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      // Add cache control for Next.js
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API Error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`API Fetch Error [${endpoint}]:`, error.message);
      throw error;
    }
    throw new Error('Unknown API error occurred');
  }
}

/**
 * Fetch all products from API or fallback to mock data
 * 
 * NestJS Endpoint: GET /public/products
 * Expected Response: { data: Product[] } or Product[]
 * 
 * @returns Array of products
 */
export async function getProducts(): Promise<Product[]> {
  // If API is not configured, use mock data
  if (!isApiConfigured()) {
    console.log('[API] Using mock data (API_BASE_URL not configured)');
    return mockProducts;
  }

  try {
    console.log('[API] Fetching products from:', `${API_BASE_URL}/public/products`);
    
    // Try to fetch from API
    const response = await apiFetch<ApiResponse<Product[]> | Product[]>('/public/products');
    
    // Handle different response formats from NestJS
    // Format 1: { data: Product[] }
    if (response && typeof response === 'object' && 'data' in response) {
      return (response as ApiResponse<Product[]>).data;
    }
    
    // Format 2: Product[] (direct array)
    if (Array.isArray(response)) {
      return response;
    }
    
    console.warn('[API] Unexpected response format, falling back to mock data');
    return mockProducts;
  } catch (error) {
    console.error('[API] Failed to fetch products, using mock data:', error);
    // Fallback to mock data on error
    return mockProducts;
  }
}

/**
 * Fetch products filtered by category
 * 
 * NestJS Endpoint: GET /public/products?category=bracelets
 * 
 * @param category - Category slug to filter by
 * @returns Filtered array of products
 */
export async function getProductsByCategory(
  category?: string
): Promise<Product[]> {
  const allProducts = await getProducts();
  
  // If no category or 'all', return all products
  if (!category || category === 'all') {
    return allProducts;
  }
  
  // Filter products by category
  return allProducts.filter(product => product.category === category);
}

/**
 * Fetch a single product by ID
 * 
 * NestJS Endpoint: GET /public/products/:id
 * 
 * @param id - Product ID
 * @returns Product or undefined if not found
 */
export async function getProductById(id: string): Promise<Product | undefined> {
  // If API is configured, try to fetch from API
  if (isApiConfigured()) {
    try {
      const response = await apiFetch<ApiResponse<Product> | Product>(
        `/public/products/${id}`
      );
      
      // Handle different response formats
      if (response && typeof response === 'object' && 'data' in response) {
        return (response as ApiResponse<Product>).data;
      }
      
      return response as Product;
    } catch (error) {
      console.error(`[API] Failed to fetch product ${id}:`, error);
    }
  }
  
  // Fallback to mock data
  return mockProducts.find(product => product.id === id);
}

/**
 * Fetch all categories (currently uses mock data)
 * 
 * NestJS Endpoint: GET /public/categories (future implementation)
 * 
 * @returns Array of categories
 */
export async function getCategories(): Promise<Category[]> {
  // Future: Fetch from API when endpoint is available
  // if (isApiConfigured()) {
  //   try {
  //     const response = await apiFetch<ApiResponse<Category[]>>('/public/categories');
  //     return response.data;
  //   } catch (error) {
  //     console.error('[API] Failed to fetch categories:', error);
  //   }
  // }
  
  return mockCategories;
}

/**
 * Submit contact form data
 * 
 * NestJS Endpoint: POST /api/contact
 * Expected Payload: { fullName, email, whatsappNumber, message }
 * 
 * @param formData - Contact form data
 * @returns Success response
 */
export async function submitContactForm(formData: {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  if (!isApiConfigured()) {
    console.warn('[API] Contact form submission skipped (API not configured)');
    return { success: true, message: 'Form submitted (mock mode)' };
  }

  try {
    // Map form fields to backend expected format
    const payload = {
      fullName: formData.name,
      email: formData.email,
      whatsappNumber: formData.whatsapp || '',
      message: formData.message,
    };

    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to submit form: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, message: data.message || 'Form submitted successfully' };
  } catch (error) {
    console.error('[API] Contact form submission failed:', error);
    throw error;
  }
}
