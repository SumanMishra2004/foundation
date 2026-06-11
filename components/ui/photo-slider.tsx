"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { urlFor } from "@/lib/image";
import { type SanityImage } from "@/lib/sanity";

interface GalleryImage extends SanityImage {
  caption?: string;
  description?: string;
  year?: string;
  location?: string;
  alt?: string;
}

interface PhotoSliderProps {
  images?: GalleryImage[];
  autoPlayInterval?: number;
}

export function PhotoSlider({ images, autoPlayInterval = 6000 }: PhotoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goToNext = useCallback(() => {
    if (!images || images.length === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  const goToPrev = useCallback(() => {
    if (!images || images.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const goTo = (idx: number) => {
    if (!images) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images, goToNext, autoPlayInterval, isHovered]);

  if (!images || images.length === 0) return null;

  const current = images[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 group"
      style={{ aspectRatio: "16/9" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <AnimatePresence custom={direction} mode="sync" initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={urlFor(current).url()}
            alt={current.alt || current.caption || `Gallery image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentIndex === 0}
            unoptimized
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Text overlay */}
          {(current.caption || current.description || current.year || current.location) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12 pointer-events-none"
            >
              {/* Badges row */}
              {(current.year || current.location) && (
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {current.year && (
                    <span className="px-3 py-1 bg-teal-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full">
                      {current.year}
                    </span>
                  )}
                  {current.location && (
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold tracking-wide rounded-full">
                      📍 {current.location}
                    </span>
                  )}
                </div>
              )}

              {current.caption && (
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-1.5 drop-shadow-md" style={{ fontFamily: "inherit" }}>
                  {current.caption}
                </h3>
              )}

              {current.description && (
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl line-clamp-2 drop-shadow">
                  {current.description}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Prev button */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Top-right counter */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/15 rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5" />
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 right-4 sm:right-6 z-20 flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  idx === currentIndex
                    ? "w-6 h-2 bg-teal-400"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
            <motion.div
              key={currentIndex}
              className="h-full bg-teal-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            />
          </div>
        </>
      )}
    </div>
  );
}
