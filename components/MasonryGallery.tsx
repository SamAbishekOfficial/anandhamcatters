"use client";

import { useState } from 'react';
import Image from 'next/image';
import { STALL_CATEGORIES } from '@/lib/images';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

// Flatten all stalls into a single photography portfolio array
export const ALL_PHOTOS: GalleryItem[] = STALL_CATEGORIES.flatMap((cat) =>
  cat.stalls.map((stall) => ({
    id: stall.id,
    src: stall.src,
    title: stall.title,
    category: cat.name,
    description: stall.caption,
  }))
);

export default function MasonryGallery({ limit }: { limit?: number }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayItems = limit ? ALL_PHOTOS.slice(0, limit) : ALL_PHOTOS;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayItems.length) % displayItems.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayItems.length);
    }
  };

  return (
    <div className="space-y-10">
      {/* Masonry Image Grid */}
      <div className="masonry-grid space-y-6">
        {displayItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl border border-gold/20 shadow-md hover:shadow-2xl transition-all duration-500 bg-charcoal"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gold/80 text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Minimal Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                  {item.category}
                </span>
                <h3 className="font-editorial text-lg sm:text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory/70 line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 text-ivory hover:text-gold p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory hover:text-gold p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory hover:text-gold p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[65vh] rounded-xl overflow-hidden border border-gold/30">
              <Image
                src={displayItems[lightboxIndex].src}
                alt={displayItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center pt-4 space-y-1 text-ivory">
              <span className="text-xs uppercase tracking-widest text-gold">
                {displayItems[lightboxIndex].category} • {lightboxIndex + 1} of {displayItems.length}
              </span>
              <h3 className="font-editorial text-2xl font-light">
                {displayItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-ivory/70 max-w-xl font-light">
                {displayItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
