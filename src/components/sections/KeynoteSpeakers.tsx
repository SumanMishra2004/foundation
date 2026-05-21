import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Speaker } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface KeynoteSpeakersProps {
  speakers: Speaker[];
}

export default function KeynoteSpeakers({ speakers }: KeynoteSpeakersProps) {
  return (
    <section id="speakers" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Speakers
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-4">
            Keynote Speakers
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Industry leaders and visionaries sharing their insights
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, i) => {
            const photoUrl = speaker.photo
              ? urlFor(speaker.photo).width(300).height(300).url()
              : `https://i.pravatar.cc/300?img=${i + 1}`;

            return (
              <Card
                key={speaker._id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="relative pt-10 pb-8 px-8 text-center">
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy/5 to-transparent" />
                    <div className="relative z-10 mb-6 inline-block">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-amber/30 transition-all duration-500 group-hover:scale-105">
                        <Image
                          src={photoUrl}
                          alt={speaker.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="heading-display text-xl text-navy mb-1">{speaker.name}</h3>
                    <p className="text-sm font-semibold text-amber-dark mb-1">{speaker.designation}</p>
                    <p className="text-sm text-slate-500 mb-4">{speaker.organization}</p>
                    {speaker.bio && (
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{speaker.bio}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
