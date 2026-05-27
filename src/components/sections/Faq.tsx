"use client";

import { useState } from "react";
import type { FaqData } from "@/lib/sanity/types";

interface FaqProps {
  data: FaqData;
}

export default function Faq({ data }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-light">
            Have Questions?
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl font-normal tracking-tight">
            {data.heading}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto rounded-full" />
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {data.faqs?.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.03] transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-white/[0.04] transition-colors"
                >
                  <span className="text-base sm:text-lg font-medium text-white/95 group-hover:text-white transition-colors pr-2">
                    {item.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-white/60 border border-white/[0.08] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-amber/10 border-amber/20 text-amber" : ""}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 border-t border-white/[0.05]" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 py-5 text-sm sm:text-base text-white/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
