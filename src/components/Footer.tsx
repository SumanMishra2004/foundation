"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import type { FooterData } from "@/lib/sanity/types";

interface FooterProps {
  data: FooterData;
  showCertificates?: boolean;
}

export default function Footer({ data, showCertificates = false }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visibleLinks = data.quickLinks?.filter(
    (link) => link.href !== "/certificates" && link.href !== "#certificates" || showCertificates
  ) || [];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-navy-dark via-navy to-navy-dark text-white border-t border-white/[0.08] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Dynamic accent top border line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber to-transparent opacity-80" />

      <div className="relative z-10 section-container pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Mission — 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-light block mb-2">
                {data.edition || "Inaugural Edition"}
              </span>
              <h3 className="heading-display text-3xl sm:text-4xl text-white font-normal tracking-tight">
                {data.conferenceName}
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Connecting visionaries, researchers, and industry pioneers to exchange groundbreaking ideas and explore the latest technological trends.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {data.twitterUrl && (
                <a
                  href={data.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-amber/40 hover:bg-amber/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-white/50 group-hover:text-amber group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {data.linkedinUrl && (
                <a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-amber/40 hover:bg-amber/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-white/50 group-hover:text-amber group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              )}
              {data.instagramUrl && (
                <a
                  href={data.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-amber/40 hover:bg-amber/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-white/50 group-hover:text-amber group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links — 3 Cols */}
          <div className="lg:col-span-3 lg:pl-8 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-light">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-3">
              {visibleLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/60 hover:text-white transition-all duration-300 py-0.5"
                  >
                    <span className="w-0 h-[1.5px] bg-amber opacity-0 group-hover:opacity-100 group-hover:w-3 group-hover:mr-2.5 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Keep Updated — 5 Cols */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-light">
              Stay Informed
            </h4>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4">
              <p className="text-sm text-white/70 leading-relaxed">
                Subscribe to our newsletter to receive conference updates, agenda schedules, and speaker announcements.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-3 text-amber-light bg-amber/10 border border-amber/20 rounded-xl px-4 py-3.5 text-sm animate-fade-in">
                  <svg className="w-5 h-5 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Thank you! You are now subscribed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-navy-dark border border-white/[0.12] rounded-xl px-4 py-3 text-sm placeholder:text-white/30 text-white focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/50 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="bg-amber hover:bg-amber-dark text-navy font-semibold px-5 rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <Separator className="mt-16 mb-8 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45 tracking-wide text-center md:text-left">
            {data.copyright || `© ${new Date().getFullYear()} ${data.conferenceName}. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/45 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/45 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
