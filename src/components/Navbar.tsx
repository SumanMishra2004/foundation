"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { urlFor } from "@/lib/sanity/client";
import type { NavData } from "@/lib/sanity/types";

interface NavbarProps {
  data: NavData;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Theme", href: "#theme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#agenda" },
  { label: "Register", href: "#registration" },
];

export default function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = data.logoImage
    ? urlFor(data.logoImage).height(48).fit("max").url()
    : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={data.logo || "Lorem Summit"}
                width={160}
                height={48}
                className="h-9 w-auto"
              />
            ) : (
              <span
                className={`heading-display text-xl sm:text-2xl font-normal transition-colors ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                {data.logo || "Lorem Summit"}
              </span>
            )}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber ${
                  scrolled ? "text-slate-600" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            >
              <a href="#registration">Register Now</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    scrolled ? "text-navy hover:bg-slate-100" : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-slate-100">
                    <span className="heading-display text-xl text-navy">
                      {data.logo || "Lorem Summit"}
                    </span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="space-y-1">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 rounded-lg text-slate-600 hover:text-navy hover:bg-slate-50 font-medium transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-100">
                    <Button
                      asChild
                      className="w-full bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full py-5"
                    >
                      <a href="#registration" onClick={() => setIsOpen(false)}>
                        Register Now
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
