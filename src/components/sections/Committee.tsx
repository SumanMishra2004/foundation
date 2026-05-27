"use client";

import { useState } from "react";
import Image from "next/image";
import type { CommitteeData } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";

interface CommitteeProps {
  data: CommitteeData;
}

export default function Committee({ data }: CommitteeProps) {
  const [showAll, setShowAll] = useState(false);

  if (!data || !data.committeeGroups || data.committeeGroups.length === 0) return null;

  const visibleGroups = showAll ? data.committeeGroups : data.committeeGroups.slice(0, 1);

  return (
    <section id="committee" className="py-24 bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-light">
            People Behind the Event
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl font-normal tracking-tight">
            {data.heading}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto rounded-full" />
        </div>

        {/* Committee Groups Grid */}
        <div className="space-y-16">
          {visibleGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-8 animate-fade-in">
              {/* Group Name */}
              <div className="flex items-center gap-4">
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-amber-light uppercase">
                  {group.groupName}
                </h3>
                <div className="flex-grow h-px bg-white/10" />
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {group.members?.map((member, memberIdx) => {
                  const photoUrl = member.image
                    ? urlFor(member.image).width(300).height(300).url()
                    : `https://i.pravatar.cc/300?img=${(groupIdx + 1) * 10 + memberIdx}`;

                  return (
                    <div
                      key={memberIdx}
                      className="group bg-white/[0.02] border border-white/[0.06] hover:border-amber/30 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      {/* Photo Header */}
                      <div className="relative aspect-square overflow-hidden bg-white/[0.02] shrink-0 border-b border-white/[0.04]">
                        <Image
                          src={photoUrl}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {member.role && (
                          <div className="absolute top-3 right-3 bg-blue-400/95 text-white font-bold text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md z-10 border-black border">
                            {member.role}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Details Footer */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <h4 className="font-semibold text-white text-base group-hover:text-amber transition-colors line-clamp-1">
                            {member.name}
                          </h4>
                          <p className="text-xs text-white/70 mt-1 line-clamp-1 font-medium">
                            {member.designation}
                          </p>
                        </div>
                        <p className="text-xs text-white/40 line-clamp-1 border-t border-white/[0.06] pt-2">
                          {member.organization}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Team Button */}
        {data.committeeGroups.length > 1 && (
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-white/10 text-black hover:text-navy hover:bg-white font-medium px-8 py-5 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "View Full Team"}</span>
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
