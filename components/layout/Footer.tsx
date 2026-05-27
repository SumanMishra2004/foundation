/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart, ArrowUpRight, Phone, Send } from "lucide-react";
import { urlFor } from "@/lib/image";

type FooterSettings = {
  siteName?: string;
  tagline?: string;
  logo?: any;
  footerDescription?: string;
  footerQuote?: string;
  focusAreas?: string[];
  contactAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
};

export function Footer({ settings }: { settings?: FooterSettings }) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About IKC" },
    { href: "/programs", label: "Programs" },
    { href: "/advisory-board", label: "Advisory Board" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  const focusAreas = [
    "Education & Knowledge Development",
    "Healthcare & Medical Assistance",
    "Social & Rural Welfare Initiatives",
    "Culture & Sports Development",
    "Environmental Conservation & Protection",
    "Disaster Relief & Civic Outreach",
  ];

  const logoUrl = settings?.logo
    ? urlFor(settings.logo).width(96).height(96).url()
    : "/logo.png";
  const siteName = settings?.siteName || "IKC Foundation";
  const tagline = settings?.tagline || "Knowledge & Care";
  const description =
    settings?.footerDescription ||
    "A registered public charitable trust committed to driving inclusive social development, educational grants, and rural health consulting.";
  const quote = settings?.footerQuote || "Knowledge empowers, Care transforms.";
  const areas = settings?.focusAreas?.length ? settings.focusAreas : focusAreas;
  const address =
    settings?.contactAddress || "NewTown, Kolkata, West Bengal, India - 700135";
  const email = settings?.contactEmail || "info@ikc.org.in";
  const phone = settings?.contactPhone || "+91 33 2419 0921";

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Top Banner / Newsletter */}

      <div className=" mx-auto px-5 sm:px-8 pt-16 lg:pt-20">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/70">
          {/* Brand Identity Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-18 xl:h-18 rounded-full overflow-hidden border border-teal-500/20 bg-slate-900 p-0.5 shadow-inner">
                <Image
                  src={logoUrl}
                  alt={siteName}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <span className="text-sm md:text-base font-extrabold text-white font-display tracking-tight block uppercase">
                  {siteName}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-teal-300 font-bold block">
                  {tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed font-sans-modern">
              {description}
            </p>

            
          </div>

          {/* Navigation Links Column */}
          <div className="md:pl-8">
            <h3 className="text-[12px] uppercase font-bold tracking-widest text-white font-display mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-[14px] text-slate-400 hover:text-teal-300 transition-colors duration-200 font-sans-modern"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200 text-teal-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas Column */}
          <div>
            <h3 className="text-[12px] uppercase font-bold tracking-widest text-white font-display mb-6">
              Focus Areas
            </h3>
            <ul className="flex flex-col gap-3">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-[14px] text-slate-400 hover:text-slate-200 transition-colors duration-200 font-sans-modern block cursor-default">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[12px] uppercase font-bold tracking-widest text-white font-display mb-6">
                Inquiries
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 text-teal-300 mt-0.5 shrink-0" />
                  <span className="text-[14px] text-slate-400 font-sans-modern leading-relaxed">
                    {address}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-[14px] text-slate-400 hover:text-teal-300 transition-colors duration-200 font-sans-modern"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                  <span className="text-[14px] text-slate-400 font-sans-modern">
                    {phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 shadow-sm">
              <Heart className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" />
              <p className="text-[9px] italic text-slate-400 leading-relaxed font-sans-modern">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-sans-modern">
          <p>
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
