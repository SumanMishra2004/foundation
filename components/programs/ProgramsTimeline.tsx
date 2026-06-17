"use client";

import { useState, useMemo } from "react";
import { 
  MapPin, 
  Clock, 
  Target, 
  Calendar,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Award,
  Ambulance,
  Users,
  Heart,
  Leaf,
  AlertTriangle,
  Handshake
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type ProgramItem, type EventItem } from "@/lib/sanity";
import { StackedCardSlider } from "../ui/stacked-card-slider";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Award,
  Ambulance,
  Users,
  Heart,
  Leaf,
  AlertTriangle,
  Handshake,
  Sparkles,
};

interface ProgramsTimelineProps {
  programs: ProgramItem[];
}

// Read More helper component
function ReadMoreText({ text, limit = 160 }: { text: string; limit?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;
  if (text.length <= limit) {
    return <p className="text-xs sm:text-sm text-slate-600 font-sans-modern leading-relaxed">{text}</p>;
  }

  return (
    <div className="font-sans-modern text-xs sm:text-sm text-slate-600 leading-relaxed">
      <p>
        {isExpanded ? text : `${text.slice(0, limit)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-1.5 text-teal-600 hover:text-teal-700 font-bold hover:underline transition-colors focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
    </div>
  );
}

// Date formatter helper
function formatEventDate(dateStr: string) {
  if (!dateStr) return "";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const year = parts[0].length === 4 ? parts[0] : `20${parts[2]}`;
      const month = parts[1];
      const day = parts[0].length === 4 ? parts[2] : parts[0];
      const date = new Date(`${year}-${month}-${day}`);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      }
    }
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
  } catch (e) {
    // fallback
  }
  return dateStr;
}

export function ProgramsTimeline({ programs }: ProgramsTimelineProps) {
  const [activeTab, setActiveTab] = useState<string>(programs[0]?._id || "");

  const activeProgram = useMemo(() => {
    return programs.find((p) => p._id === activeTab) || programs[0];
  }, [programs, activeTab]);

  // Sort events by date descending so the latest is shown first
  const sortedEvents = useMemo(() => {
    if (!activeProgram?.events) return [];
    return [...activeProgram.events].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [activeProgram]);

  if (!programs || programs.length === 0) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Column: Interactive Program Tabs */}
      <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-3 lg:sticky lg:top-24 max-h-[calc(100vh-140px)] overflow-y-auto pr-1">
        <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 font-sans-modern mb-1 px-1">
          Focus Areas
        </h3>
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none snap-x">
          {programs.map((prog) => {
            const IconComp = iconMap[prog.icon] || Sparkles;
            const isActive = prog._id === activeTab;
            
            // Get gradient colors for preview
            const gradientColors = prog.color || "from-teal-500 to-emerald-500";

            return (
              <button
                key={prog._id}
                onClick={() => setActiveTab(prog._id)}
                className={`snap-center flex items-center justify-between gap-4 text-left p-4 rounded-xl border transition-all duration-300 min-w-[240px] lg:min-w-0 shrink-0 lg:shrink ${
                  isActive
                    ? "bg-white border-slate-300 shadow-md ring-1 ring-slate-100"
                    : "bg-[#FAF7E6]/40 hover:bg-white border-slate-200/60 hover:border-slate-300/80 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Circle with Gradient theme */}
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradientColors} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display line-clamp-1">
                      {prog.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-sans-modern line-clamp-1 mt-0.5">
                      {prog.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-400 hidden lg:block transition-transform duration-300 ${isActive ? "translate-x-1 text-teal-600" : ""}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Program Details & Event Timeline */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <AnimatePresence mode="wait">
          {activeProgram && (
            <motion.div
              key={activeProgram._id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Program Detail Header */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                    {activeProgram.title}
                  </h2>
                  <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-700 border border-teal-100 font-sans-modern">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    Active Program
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 font-sans-modern leading-relaxed mb-6">
                  {activeProgram.description}
                </p>
              </div>

              {/* Event Timeline Section */}
              <div className="flex flex-col gap-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display border-b border-slate-200/80 pb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  Deployment History & Event Timeline
                </h3>

                {sortedEvents.length > 0 ? (
                  <div className="relative pl-4 sm:pl-6 pt-2">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[15px] sm:left-[17px] top-0 bottom-0 w-[2px] bg-slate-200/80" />

                    {/* Timeline List */}
                    <div className="flex flex-col gap-8">
                      {sortedEvents.map((event, idx) => (
                        <div key={idx} className="relative flex gap-6 sm:gap-8 items-start">
                          {/* Timeline Node Icon */}
                          <div className="relative z-10 w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-teal-600 shadow-sm shrink-0">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>

                          {/* Event Card */}
                          <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Pane: Details & Description */}
                            <div className="flex-1 flex flex-col gap-3.5">
                              <div>
                                <span className="inline-block text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-100 rounded-full px-2.5 py-0.5 uppercase tracking-wider mb-2 font-sans-modern">
                                  {formatEventDate(event.date)}
                                </span>
                                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                                  {event.title}
                                </h4>
                              </div>

                              {/* Metadata Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 text-[11px] sm:text-xs font-sans-modern text-slate-600">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                                  <span className="truncate"><strong>Venue:</strong> {event.venue}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                                  <span><strong>Timing:</strong> {event.timing}</span>
                                </div>
                                <div className="flex items-start gap-2 sm:col-span-2 border-t border-slate-200/60 pt-2 mt-1">
                                  <Target className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                                  <span><strong>Objective:</strong> {event.objective}</span>
                                </div>
                              </div>

                              {/* Description with Read More */}
                              <div className="border-t border-slate-100 pt-3">
                                <ReadMoreText text={event.description} />
                              </div>
                            </div>

                            {/* Right Pane: Stacked Card Slider (Images) */}
                            {event.images && event.images.length > 0 && (
                              <div className="w-full md:w-[240px] lg:w-[260px] shrink-0 self-center md:self-start">
                                <StackedCardSlider images={event.images} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Fallback Empty State
                  <div className="bg-[#FAF7E6]/30 border border-dashed border-slate-300 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-3">
                    <Calendar className="w-10 h-10 text-slate-400" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-700 font-display">
                        No Events Recorded Yet
                      </h4>
                      <p className="text-xs text-slate-500 font-sans-modern mt-1 max-w-sm">
                        There are currently no timeline activities logged in Sanity for {activeProgram.title}. Please check back later or add deployments in the studio.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
