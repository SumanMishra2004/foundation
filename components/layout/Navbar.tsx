/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/lib/image";
import { type SanityImage } from "@/lib/sanity";

const defaultNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/advisory-board", label: "Advisory Board" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

type NavbarSettings = {
  siteName?: string;
  tagline?: string;
  logo?: SanityImage;
  navLinks?: Array<{ href: string; label: string }>;
  navbarCtaLabel?: string;
  navbarCtaLink?: string;
};

export function Navbar({ settings }: { settings?: NavbarSettings }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const links = settings?.navLinks?.length ? settings.navLinks : defaultNavLinks;
  const siteName = settings?.siteName || "IKC Foundation";
  const tagline = settings?.tagline || "Knowledge & Care";
  const logoUrl = settings?.logo ? urlFor(settings.logo).width(96).height(96).url() : "/logo.png";
  const ctaLabel = settings?.navbarCtaLabel || "Volunteer";
  const ctaLink = settings?.navbarCtaLink || "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7E6]/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-[#FAF7E6]/80 backdrop-blur-sm border-b border-slate-200/30"
        }`}
      >
        <nav className="flex items-center justify-between px-5 sm:px-8 h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-teal-600/20 bg-white shadow-sm p-0.5 shrink-0">
              <Image
                src={logoUrl}
                alt={siteName}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-extrabold font-display tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors leading-none uppercase">
                {siteName}
              </span>
              <span className="text-[7px] tracking-widest uppercase font-bold text-teal-600 mt-1">
                {tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[10px] font-extrabold uppercase tracking-widest transition-colors py-1 ${
                    active ? "text-teal-700" : "text-slate-600 hover:text-teal-700"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-700"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href={ctaLink}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest rounded bg-teal-600 text-white hover:bg-teal-700 shadow-sm transition-colors duration-200 font-display"
          >
            {ctaLabel} <ArrowRight className="w-3 h-3" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100/50 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-xs bg-white shadow-2xl lg:hidden flex flex-col border-l border-slate-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative h-7 w-7 rounded-full overflow-hidden border border-teal-100 bg-white">
                    <Image
                      src={logoUrl}
                      alt={siteName}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="font-extrabold text-slate-900 tracking-wide font-display text-xs">
                    {siteName.toUpperCase()}
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                {links.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                          active
                            ? "bg-teal-50 text-teal-800 border border-teal-100/50"
                            : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA Drawer Button */}
              <div className="p-6 border-t border-slate-100">
                <Link
                  href={ctaLink}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-colors"
                >
                  {ctaLabel} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
