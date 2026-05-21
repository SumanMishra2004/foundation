import { Card, CardContent } from "@/components/ui/card";
import type { ThemeData } from "@/lib/sanity/types";

interface ConferenceThemeProps {
  data: ThemeData;
}

export default function ConferenceTheme({ data }: ConferenceThemeProps) {
  return (
    <section id="theme" className="section-padding bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Theme
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-6">
            {data.heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full" />
        </div>

        {/* Theme Title */}
        <div className="text-center mb-12">
          <h3 className="heading-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-6">
            <span className="relative inline-block">
              {data.themeTitle}
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 7 Q50 0 100 4 Q150 8 200 1" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data.themeDescription}
          </p>
        </div>

        {/* Focus Areas Grid */}
        {data.focusAreas && data.focusAreas.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {data.focusAreas.map((area, i) => (
              <Card
                key={i}
                className="group border border-slate-200 hover:border-amber/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-amber-100 transition-colors">
                      {area.icon}
                    </div>
                    <h4 className="heading-display text-xl text-navy mb-3">
                      {area.label}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-amber/0 via-amber to-amber/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Why This Theme */}
        {data.whyThisTheme && (
          <div className="max-w-3xl mx-auto">
            <div className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="absolute -top-4 left-8">
                <span className="inline-block px-4 py-1 bg-amber text-navy text-sm font-semibold rounded-full">
                  Why This Theme?
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed mt-2">
                {data.whyThisTheme}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
