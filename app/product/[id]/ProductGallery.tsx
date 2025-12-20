'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  video?: {
    src: string;
    alt: string;
  };
}

export default function ProductGallery({
  images,
  productName,
  video,
}: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const selectedImage = images[selectedImageIndex];

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setShowVideo(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setShowVideo(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image / Video Area */}
      <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
        {showVideo && video ? (
          <video
            src={video.src}
            className="w-full h-full object-cover"
            loop
            muted
            controls={false}
          />
        ) : (
          <Image
            src={selectedImage}
            alt={productName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={selectedImageIndex === 0}
          />
        )}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-gray-900 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-gray-900 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full">
          {selectedImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery - Horizontal Scroll on Mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedImageIndex(index);
              setShowVideo(false);
            }}
            className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
              selectedImageIndex === index ? 'ring-2 ring-[#8A6A2F]' : 'hover:ring-2 hover:ring-gray-300'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productName} view ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}

        {/* Video Thumbnail (Optional) */}
        {video && (
          <button
            onClick={() => setShowVideo(true)}
            className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
              showVideo ? 'ring-2 ring-[#8A6A2F]' : 'hover:ring-2 hover:ring-gray-300'
            }`}
            aria-label="View product video"
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-t-2.5 border-b-2.5 border-l-gray-600 border-t-transparent border-b-transparent ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
