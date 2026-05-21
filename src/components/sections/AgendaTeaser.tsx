import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AgendaData } from "@/lib/sanity/types";

interface AgendaTeaserProps {
  data: AgendaData;
}

const typeColors: Record<string, string> = {
  Keynote: "bg-amber/10 text-amber-dark border-amber/20",
  Panel: "bg-blue-50 text-blue-700 border-blue-200",
  Workshop: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Break: "bg-slate-100 text-slate-500 border-slate-200",
  Networking: "bg-purple-50 text-purple-700 border-purple-200",
  Talk: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function AgendaTeaser({ data }: AgendaTeaserProps) {
  return (
    <section id="agenda" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Schedule
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-4">{data.heading}</h2>
          {data.dayLabel && (
            <p className="text-lg text-slate-500 font-medium">{data.dayLabel}</p>
          )}
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full mt-6" />
        </div>

        <Tabs defaultValue="overview" className="max-w-3xl mx-auto items-center">
          <TabsList className="mb-8 bg-white shadow-sm ring-1 ring-slate-200">
            <TabsTrigger value="overview" className="px-4 py-2">
              {data.dayLabel || "Day 1"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="w-full">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

              <div className="space-y-4">
                {data.agendaItems?.map((item, i) => {
                  const colorClass = typeColors[item.type] || typeColors.Talk;
                  const isBreak = item.type === "Break" || item.type === "Networking";

                  return (
                    <div
                      key={i}
                      className={`group relative flex flex-col sm:flex-row items-start gap-4 p-5 rounded-xl transition-all duration-300 ${
                        isBreak
                          ? "bg-slate-100/50"
                          : "bg-white shadow-sm hover:shadow-md border border-slate-100 hover:border-amber/20"
                      }`}
                    >
                      {/* Time */}
                      <div className="shrink-0 sm:w-24 text-right">
                        <span className={`text-sm font-semibold ${isBreak ? "text-slate-400" : "text-navy"}`}>
                          {item.time}
                        </span>
                      </div>

                      {/* Dot on timeline */}
                      <div className="hidden sm:block absolute left-[7.1rem] top-6 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10"
                        style={{ backgroundColor: isBreak ? "#CBD5E1" : "#F59E0B" }}
                      />

                      {/* Content */}
                      <div className="flex-1 sm:pl-8">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className={`font-semibold ${isBreak ? "text-slate-500" : "text-navy"}`}>
                            {item.title}
                          </h4>
                          <Badge variant="outline" className={`text-xs ${colorClass}`}>
                            {item.type}
                          </Badge>
                        </div>
                        {item.speaker && (
                          <p className="text-sm text-slate-500">{item.speaker}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Full Schedule Note */}
          {data.fullScheduleNote && (
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber/10 border border-amber/20">
                <svg className="w-5 h-5 text-amber-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-amber-dark">{data.fullScheduleNote}</span>
              </div>
            </div>
          )}
        </Tabs>
      </div>
    </section>
  );
}
