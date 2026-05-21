import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RegistrationData } from "@/lib/sanity/types";

interface RegistrationProps {
  data: RegistrationData;
}

export default function Registration({ data }: RegistrationProps) {
  return (
    <section id="registration" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Tickets
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-4">{data.heading}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Choose the tier that works best for you
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.ticketTiers?.map((tier, i) => (
            <Card
              key={i}
              className={`relative group overflow-hidden transition-all duration-300 hover:-translate-y-2 py-0 ${
                tier.isRecommended
                  ? "border-2 border-amber shadow-xl shadow-amber/10 hover:shadow-2xl hover:shadow-amber/20"
                  : "border border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300"
              }`}
            >
              {tier.isRecommended && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-amber to-amber-light text-center py-2">
                    <Badge className="bg-navy text-white text-xs font-semibold border-0">
                      ⭐ Recommended
                    </Badge>
                  </div>
                </div>
              )}

              <CardContent className={`p-8 ${tier.isRecommended ? "pt-14" : ""}`}>
                <div className="text-center mb-6">
                  <h3 className="heading-display text-2xl text-navy mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="heading-display text-4xl text-navy">{tier.price}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.inclusions?.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`w-full rounded-full font-semibold py-5 transition-all duration-300 ${
                    tier.isRecommended
                      ? "bg-amber hover:bg-amber-dark text-navy shadow-lg shadow-amber/25 hover:shadow-xl"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  <a href={tier.ctaLink || "#"}>{tier.ctaLabel}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {data.groupNote && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 italic">{data.groupNote}</p>
          </div>
        )}
      </div>
    </section>
  );
}
