"use client";

import { useState } from "react";
import Image from "next/image";
import type { Speaker } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";

interface InvitedSpeakersProps {
  speakers: Speaker[];
}

export default function InvitedSpeakers({ speakers }: InvitedSpeakersProps) {
  const [showAll, setShowAll] = useState(false);

  if (!speakers || speakers.length === 0) return null;

  const visibleSpeakers = showAll ? speakers : speakers.slice(0, 4);

  return (
    <section className="pb-24 bg-gradient-to-b from-white to-slate-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="heading-display text-3xl sm:text-4xl text-navy mb-3">Invited Speakers</h3>
          <p className="text-slate-500 text-sm sm:text-base">Distinguished experts joining the conversation</p>
          <div className="w-16 h-1 bg-amber/50 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleSpeakers.map((speaker, i) => {
            const photoUrl = speaker.photo
              ? urlFor(speaker.photo).width(300).height(300).url()
              : `https://i.pravatar.cc/300?img=${i + 15}`;

            return (
              <div
                key={speaker._id}
                className="group bg-white border border-slate-100 hover:border-amber/20 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative aspect-square overflow-hidden bg-slate-50 shrink-0">
                  <Image
                    src={photoUrl}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details Footer */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-navy text-base group-hover:text-amber transition-colors line-clamp-1">
                      {speaker.name}
                    </h4>
                    <p className="text-xs font-medium text-amber-dark uppercase tracking-wider mt-1 line-clamp-1">
                      {speaker.designation}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-1 border-t border-slate-100 pt-2">
                    {speaker.organization}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Speakers Button */}
        {speakers.length > 4 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-slate-200 text-slate-700 hover:text-navy hover:bg-slate-50 font-medium px-8 py-5 rounded-full shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "View All Speakers"}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
