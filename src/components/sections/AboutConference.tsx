import { Card, CardContent } from "@/components/ui/card";
import type { AboutData } from "@/lib/sanity/types";

interface AboutConferenceProps {
  data: AboutData;
}

export default function AboutConference({ data }: AboutConferenceProps) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Discover
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-6">
            {data.heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full" />
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Who it's for */}
          <div>
            <h3 className="heading-display text-2xl text-navy mb-6">
              Who It&apos;s For
            </h3>
            <div className="space-y-4">
              {data.whoItsFor?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-transparent hover:border-amber-100 transition-all duration-300 group"
                >
                  <span className="text-2xl">{item.slice(0, 2)}</span>
                  <span className="text-slate-700 font-medium group-hover:text-navy transition-colors">
                    {item.slice(2).trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="heading-display text-2xl text-navy mb-6">
              Our Mission
            </h3>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-navy to-navy-light text-white">
              <div className="absolute top-4 right-4 text-6xl opacity-10 heading-display">
                &ldquo;
              </div>
              <p className="text-white/90 leading-relaxed relative z-10">
                {data.mission}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        {data.stats && data.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.stats.map((stat, i) => (
              <Card
                key={i}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="relative p-8 text-center">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber to-amber-light" />
                    <p className="heading-display text-4xl sm:text-5xl text-amber-dark mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
