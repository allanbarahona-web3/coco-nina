/**
 * Product Detail Page - Server Component
 * 
 * Displays complete product information including gallery, description,
 * materials, techniques, and inquiry options.
 * 
 * NestJS Integration:
 * - Fetches from: GET /public/products/:id
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from './ProductDetail';
import { getProductById } from '@/lib/api';

interface Props {
  params: {
    id: string;
  };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | Coco Nina',
    };
  }

  return {
    title: `${product.name} | Coco Nina Jewelry`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image.src }],
    },
  };
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <ProductDetail product={product} />
    </div>
  );
}
