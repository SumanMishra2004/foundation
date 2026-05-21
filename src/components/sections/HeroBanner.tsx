import { Button } from "@/components/ui/button";
import type { HeroData } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface HeroBannerProps {
  data: HeroData;
}

export default function HeroBanner({ data }: HeroBannerProps) {
  const bgImage = data.backgroundImage
    ? urlFor(data.backgroundImage).width(1920).quality(85).url()
    : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white section-container">
        {/* Edition label */}
        {data.edition && (
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">
              {data.edition}
            </span>
          </div>
        )}

        {/* Conference Name */}
        <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-6 tracking-tight">
          {data.conferenceName}
        </h1>

        {/* Tagline */}
        {data.tagline && (
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.tagline}
          </p>
        )}

        {/* Date & Venue */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12 text-white/80">
          {data.date && (
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-base sm:text-lg font-medium">{data.date}</span>
            </div>
          )}
          {data.date && data.venue && (
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber" />
          )}
          {data.venue && (
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-base sm:text-lg font-medium">{data.venue}</span>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-amber hover:bg-amber-dark text-navy font-semibold text-base px-8 py-6 rounded-full shadow-lg shadow-amber/25 hover:shadow-xl hover:shadow-amber/30 transition-all duration-300 hover:scale-105"
          >
            <a href={data.ctaLink || "#registration"}>
              {data.ctaLabel || "Register Now"}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-medium text-base px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <a href="#agenda">
              View Schedule
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
