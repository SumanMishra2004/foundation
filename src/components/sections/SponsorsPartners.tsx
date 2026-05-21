import Image from "next/image";
import type { SponsorsData } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface SponsorsPartnersProps {
  data: SponsorsData;
}

export default function SponsorsPartners({ data }: SponsorsPartnersProps) {
  return (
    <section id="sponsors" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Support
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-4">{data.heading}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full mt-6" />
        </div>

        <div className="space-y-12">
          {data.sponsorTiers?.map((tier, i) => (
            <div key={i}>
              <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
                {tier.tierName}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {tier.sponsors?.map((sponsor, j) => {
                  const logoUrl = sponsor.logo
                    ? urlFor(sponsor.logo).width(160).height(80).url()
                    : `https://via.placeholder.com/160x80/F1F5F9/64748B?text=${encodeURIComponent(sponsor.name)}`;

                  return (
                    <a
                      key={j}
                      href={sponsor.website || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-xl border border-slate-100 hover:border-amber/20 hover:shadow-md transition-all duration-300"
                    >
                      <Image
                        src={logoUrl}
                        alt={sponsor.name}
                        width={160}
                        height={80}
                        className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {data.becomeSponsorLink && (
          <div className="mt-16 text-center">
            <a
              href={data.becomeSponsorLink}
              className="inline-flex items-center gap-2 text-amber-dark hover:text-navy font-semibold transition-colors group"
            >
              Interested in sponsoring?
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
