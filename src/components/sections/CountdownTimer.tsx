"use client";

import { useSyncExternalStore } from "react";
import type { CountdownData } from "@/lib/sanity/types";

interface CountdownTimerProps {
  data: CountdownData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function subscribe(callback: () => void) {
  const timer = window.setInterval(callback, 1000);
  return () => window.clearInterval(timer);
}

function getSnapshot() {
  return Date.now();
}

function getServerSnapshot() {
  return 0;
}

export default function CountdownTimer({ data }: CountdownTimerProps) {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const timeLeft = now === 0 ? undefined : calculateTimeLeft(data.eventDate);

  if (timeLeft === undefined) {
    return (
      <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="section-container text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-white shadow-lg border border-slate-200 flex items-center justify-center">
                  <span className="heading-display text-3xl sm:text-4xl md:text-5xl text-navy">
                    --
                  </span>
                </div>
                <span className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!timeLeft) {
    return (
      <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
        </div>
        <div className="section-container text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-amber-50 border border-amber-100">
            <span className="text-2xl">🎉</span>
            <p className="text-lg sm:text-xl font-semibold text-navy">
              The event has concluded. Thank you!
            </p>
          </div>
        </div>
      </section>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="section-container text-center relative z-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-dark mb-8">
          Event Starts In
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-3 sm:gap-5 md:gap-8">
              <div className="flex flex-col items-center group">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-white shadow-lg border border-slate-200/80 flex items-center justify-center group-hover:shadow-xl group-hover:border-amber/30 transition-all duration-300">
                  <span className="heading-display text-3xl sm:text-4xl md:text-5xl text-navy">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
                </div>
                <span className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {unit.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <div className="flex flex-col gap-2 -mt-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse delay-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
