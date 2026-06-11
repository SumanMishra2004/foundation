"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { urlFor } from "@/lib/image";
import { type SanityImage } from "@/lib/sanity";

interface StackedCardSliderProps {
  images: SanityImage[];
  autoPlayInterval?: number;
}

export function StackedCardSlider({ images, autoPlayInterval = 5000 }: StackedCardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered || isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images, autoPlayInterval, isHovered, isPaused, currentIndex]);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // We show up to 3 cards in the stack at any time
  const visibleCards = [];
  const totalToShow = Math.min(images.length, 3);
  for (let i = 0; i < totalToShow; i++) {
    const imgIndex = (currentIndex + i) % images.length;
    visibleCards.push({
      image: images[imgIndex],
      index: imgIndex,
      depth: i, // 0 is top, 1 is middle, 2 is bottom
    });
  }

  // Position, scale, and rotation offset style depending on card depth in the stack
  const getCardStyle = (depth: number) => {
    switch (depth) {
      case 0: // Top card
        return {
          zIndex: 10,
          scale: 1,
          y: 0,
          rotate: 0,
          opacity: 1,
        };
      case 1: // Middle card
        return {
          zIndex: 9,
          scale: 0.94,
          y: 10,
          rotate: -2,
          opacity: 0.85,
        };
      case 2: // Bottom card
        return {
          zIndex: 8,
          scale: 0.88,
          y: 20,
          rotate: 3,
          opacity: 0.65,
        };
      default:
        return {
          zIndex: 0,
          scale: 0.8,
          y: 30,
          rotate: 0,
          opacity: 0,
        };
    }
  };

  // Safe image URL resolver
  const getImageUrl = (img: SanityImage) => {
    try {
      if (!img || !img.asset || !img.asset._ref) {
        return "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop";
      }
      if (img.asset._ref.startsWith("image-mock")) {
        // Return different high quality unsplash images for different mocks
        const mockUrls: Record<string, string> = {
          "image-mock-1": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop", // learning
          "image-mock-2": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop", // books
          "image-mock-3": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop", // clinical
          "image-mock-4": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop", // health
          "image-mock-5": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", // eco
        };
        return mockUrls[img.asset._ref] || mockUrls["image-mock-1"];
      }
      return urlFor(img).url();
    } catch (e) {
      return "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop";
    }
  };

  return (
    <div 
      className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto h-[280px] sm:h-[300px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards container */}
      <div className="relative w-[85%] h-[85%] flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleCards.reverse().map(({ image, index, depth }) => {
            const style = getCardStyle(depth);
            
            return (
              <motion.div
                key={index}
                style={{ originX: 0.5, originY: 0.5 }}
                animate={style}
                initial={depth === totalToShow - 1 ? { opacity: 0, scale: 0.8, y: 30 } : style}
                exit={{ 
                  x: depth === 0 ? -240 : 0, 
                  opacity: 0,
                  rotate: depth === 0 ? -12 : 0,
                  scale: 0.8,
                  transition: { duration: 0.45, ease: "easeOut" } 
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md flex items-center justify-center cursor-pointer transition-shadow hover:shadow-lg"
                onClick={depth === 0 ? handleNext : undefined}
              >
                <Image
                  src={getImageUrl(image)}
                  alt={`Event image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                  priority={depth === 0}
                  unoptimized
                />
                
                {/* Overlay card details or index */}
                {depth === 0 && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white tracking-widest z-20">
                    {index + 1} / {images.length}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Manual Controllers & Pause/Play Buttons */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center gap-4 z-20">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-7 h-7 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-all shadow-sm focus:outline-none"
            aria-label={isPaused ? "Play autoplay" : "Pause autoplay"}
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
          </button>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
