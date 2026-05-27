import type { SubmissionData } from "@/lib/sanity/types";
import { Button } from "@/components/ui/button";

interface SubmissionsProps {
  data: SubmissionData;
}

export default function Submissions({ data }: SubmissionsProps) {
  return (
    <section id="submissions" className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-light">
            Academic Submissions
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl font-normal tracking-tight">
            {data.heading}
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto rounded-full" />
          {data.intro && (
            <p className="text-white/70 text-base leading-relaxed">
              {data.intro}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tracks / Topics — 7 Columns */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-light tracking-wide uppercase text-sm">
                Conference Tracks & Topics
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Authors are invited to submit papers addressing original research in the following technical areas, but not limited to:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.tracks?.map((track, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/[0.08] hover:border-amber/30 rounded-2xl p-5 hover:bg-white/[0.05] transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center text-amber text-xs font-semibold shrink-0 group-hover:bg-amber group-hover:text-navy transition-colors">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                      {track}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {data.submissionInstructions && (
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 mt-8 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber">
                  Submission Guidelines
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {data.submissionInstructions}
                </p>
              </div>
            )}
          </div>

          {/* Timeline / Dates — 5 Columns */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-8 backdrop-blur-md">
            <div>
              <h3 className="text-lg font-semibold tracking-wide text-white">Important Dates</h3>
              <p className="text-xs text-white/50">Stay on track with submission deadlines</p>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-white/10 pl-6 ml-2 space-y-8">
              {data.importantDates?.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-all group-hover:scale-125 ${
                      item.isPassed
                        ? "bg-white/20 border-white/30"
                        : "bg-navy-dark border-amber ring-4 ring-amber/15"
                    }`}
                  />

                  {/* Date details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h4 className={`text-sm font-semibold ${item.isPassed ? "text-white/40 line-through" : "text-white"}`}>
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            item.badge.toLowerCase().includes("passed") || item.isPassed
                              ? "bg-white/10 text-white/40"
                              : "bg-amber/15 text-amber-light border border-amber/20"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-base font-semibold ${item.isPassed ? "text-white/30" : "text-amber"}`}>
                      {item.dateString}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Submit Button */}
            {data.submissionLink && (
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-amber hover:bg-amber-dark text-navy font-bold py-6 rounded-2xl shadow-lg shadow-amber/25 hover:shadow-xl hover:shadow-amber/35 transition-all duration-300 group hover:scale-[1.01]"
                >
                  <a href={data.submissionLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Submit Paper
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
