import { Button } from "@/components/ui/button";
import type { HeroData } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface HeroBannerProps {
  data: HeroData;
}

export default function HeroBanner({ data }: HeroBannerProps) {
  const bgImage = data.backgroundImage
    ? urlFor(data.backgroundImage).width(1920).quality(85).url()
    : data.heroImage
      ? urlFor(data.heroImage).width(1920).quality(85).url()
      : "/hero-bg.png";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-zoom"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent" />

      {/* Animated geometric overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-amber/30 to-transparent hero-line-slide" style={{ right: '30%' }} />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hero-line-slide-slow" style={{ right: '55%' }} />

        {/* Corner accent shapes */}
        <svg className="absolute top-24 right-8 w-32 h-32 opacity-[0.08] hero-spin-slow" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="4" stroke="#F59E0B" strokeWidth="0.5" />
          <rect x="25" y="25" width="50" height="50" rx="4" stroke="#F59E0B" strokeWidth="0.5" transform="rotate(15 50 50)" />
        </svg>

        {/* Floating dots pattern on right */}
        <div className="absolute top-1/4 right-12 grid grid-cols-3 gap-3 opacity-[0.12]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber" />
          ))}
        </div>

        {/* Bottom decorative ring */}
        <svg className="absolute -bottom-20 -left-20 w-64 h-64 opacity-[0.06]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* Main Content — Centered asymmetric layout */}
      <div className="relative z-10 w-full pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Primary content — spans 7 cols */}
            <div className="lg:col-span-7 hero-fade-in">
              {/* Edition badge */}
              {data.edition && (
                <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] hero-fade-in-delay-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-amber-light">
                    {data.edition}
                  </span>
                </div>
              )}

              {/* Subtitle */}
              {data.subtitle && (
                <p className="text-sm sm:text-base font-medium text-white/50 mb-3 tracking-wider uppercase hero-fade-in-delay-1">
                  {data.subtitle}
                </p>
              )}

              {/* Conference Name */}
              <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
                {data.conferenceName}
              </h1>

              {/* Tagline */}
              {data.tagline && (
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed hero-fade-in-delay-1">
                  {data.tagline}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 hero-fade-in-delay-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber hover:bg-amber-dark text-navy font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-amber/25 hover:shadow-xl hover:shadow-amber/35 transition-all duration-300 hover:scale-[1.03] group"
                >
                  <a href={data.ctaLink || "#registration"}>
                    {data.ctaLabel || "Register Now"}
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Button>
                {data.secondaryCtaLabel && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-black hover:bg-white/10 hover:border-white/30 hover:text-white font-medium text-base px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    <a href={data.secondaryCtaLink || "#agenda"}>
                      {data.secondaryCtaLabel}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Right: Info cards — spans 5 cols */}
            <div className="lg:col-span-5 hero-fade-in-delay-2">
              {/* Glassmorphism info card */}
              <div className="bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 hero-glass-glow">

                {/* Date & Venue */}
                <div className="space-y-4">
                  {data.date && (
                    <div className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber/15 border border-amber/20 flex items-center justify-center group-hover:bg-amber/25 transition-colors">
                        <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Date</p>
                        <p className="text-base sm:text-lg font-semibold text-white">{data.date}</p>
                      </div>
                    </div>
                  )}

                  {data.venue && (
                    <div className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber/15 border border-amber/20 flex items-center justify-center group-hover:bg-amber/25 transition-colors">
                        <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Venue</p>
                        <p className="text-base sm:text-lg font-semibold text-white">{data.venue}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                {data.highlightStats && data.highlightStats.length > 0 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                )}

                {/* Stats grid */}
                {data.highlightStats && data.highlightStats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {data.highlightStats.map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors">
                        <p className="heading-display text-2xl sm:text-3xl text-amber mb-0.5">
                          {stat.value}
                        </p>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hero-fade-in-delay-3">
        <a href="#countdown" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-white/40 transition-colors">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
