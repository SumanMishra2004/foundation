/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Award,
  Ambulance,
  Users,
  Heart,
  Leaf,
  AlertTriangle,
  Handshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { fetchPrograms } from "@/lib/sanity";
import { fetchSiteSettings } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion-wrapper";

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

export const revalidate = 60;

export default async function ProgramsPage() {
  const rawPrograms = await fetchPrograms();
  const settings = await fetchSiteSettings();

  const programs =
    rawPrograms?.length > 0
      ? rawPrograms
      : [
          {
            title: "Learning Centers & Library Support",
            icon: "GraduationCap",
            description:
              "Empowering through community classrooms, libraries, and book kits.",
            details: [
              "Community teaching rooms & rural libraries",
              "Study grants & scholarships for girls' higher education",
              "Vocational and computer literacy certifications",
              "Annual notebook and kit distribution drives",
            ],
          },
          {
            title: "Scholarships & Academic Awards",
            icon: "Award",
            description:
              "Encouraging outstanding academic and research achievements.",
            details: [
              "Direct learning fellowships for deserving youth",
              "Grants for primary and secondary schooling",
              "Community research awards",
              "Vocational training sponsorships",
            ],
          },
          {
            title: "Mobile Clinics & Healthcare Camps",
            icon: "Ambulance",
            description:
              "Providing direct medical access, checkups, and free medicines.",
            details: [
              "Periodic diagnostics & medical camp deployments",
              "Free distribution of essential medicines & vitamins",
              "Rural child immunization support",
              "First-aid training for community youth leaders",
            ],
          },
          {
            title: "Social Welfare & Relief",
            icon: "Users",
            description: "Supporting vulnerable families and community safety nets.",
            details: [
              "Women self-help micro-development groups",
              "Distribution of food aids & winter blanket sets",
              "Elderly support and loneliness outreach",
              "Local disaster response volunteer training",
            ],
          },
          {
            title: "Culture & Traditional Arts",
            icon: "Heart",
            description:
              "Supporting traditional folk arts and local sports initiatives.",
            details: [
              "Folk music & traditional crafts workshops",
              "Inter-village sports meets and youth kits",
              "Community unity & cultural festivals",
              "Creative arts fellowships",
            ],
          },
          {
            title: "Ecological Conservation & Afforestation",
            icon: "Leaf",
            description:
              "Promoting plantation, clean-water care, and bio-protection.",
            details: [
              "Periodic community tree-planting campaigns",
              "Local biodiversity and wildlife awareness",
              "Water-conservation and rain-harvesting setups",
              "Eco-friendly waste management training",
            ],
          },
        ];

    const heroImageUrl = settings?.programsHeroImage ? urlFor(settings.programsHeroImage).url() : "/hero-bg.png";

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={settings?.siteName || "Programs background"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          {/* Dark Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95))",
              zIndex: 1,
            }}
          />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24 lg:py-28">
          <FadeIn direction="down" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-500/20 text-teal-100 border border-teal-500/30 backdrop-blur-md mb-6 font-sans-modern">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              {settings?.programsHeroEyebrow || "Our Initiatives"}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-white font-display mb-4 sm:mb-5">
              {settings?.programsHeroTitle || "Programs & Focus Areas"}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xs sm:text-sm text-slate-100/85 font-sans-modern leading-relaxed max-w-2xl mx-auto">
              {settings?.programsHeroDescription || "Through direct volunteer deployment and transparent fund utilization, we run structured programs in learning development, mobile health, and eco-conservation."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= PROGRAMS GRID ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-850 mb-6 font-sans-modern">
                What We Do
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {settings?.programsIntroTitle || "Core Initiatives &amp; Sub-projects"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-sans-modern leading-relaxed">
                {settings?.programsIntroDescription || "Detailing our active field operations. Each program is run in partnership with regional volunteer networks."}
              </p>
            </FadeIn>
          </div>

          {/* Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((prog: any, idx: number) => {
              const IconComp = iconMap[prog.icon] || Sparkles;
              const details: string[] = prog.details || [];

              return (
                <StaggerItem
                  key={idx}
                  className="group bg-white rounded-2xl border border-slate-205 border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-905 font-display group-hover:text-teal-750 transition-colors">
                        {prog.title}
                      </h3>
                      {prog.description && (
                        <p className="text-[11px] sm:text-xs text-slate-500 font-sans-modern mt-0.5 line-clamp-1">
                          {prog.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Details Bullet List */}
                  {details.length > 0 && (
                    <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 border-t border-slate-100 pt-4 sm:pt-5">
                      {details.map((detail: string, dIdx: number) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-[11px] sm:text-xs text-slate-650 font-sans-modern leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-650 shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-650">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Footer Status bar */}
                  <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-slate-400 font-sans-modern">
                      Active Deployment
                    </span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-200">
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white relative">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.03,
            pointerEvents: "none",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="down">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-teal-300 border border-slate-700 mb-6 font-sans-modern">
              Outreach Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display mb-5 sm:mb-6">
              {settings?.programsCtaTitle || "Would You Like to Volunteer or Collaborate?"}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans-modern mb-8 sm:mb-10 max-w-xl mx-auto">
              {settings?.programsCtaDescription || "We welcome partnerships with local health centers, ecological experts, and youth volunteers to expand our rural reach."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md shadow-teal-900/10 font-sans-modern w-full sm:w-auto"
              >
                Apply as Volunteer <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-800 hover:border-slate-300 text-slate-300 hover:bg-white/10 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 font-sans-modern w-full sm:w-auto"
              >
                Our Annual Trust Audits
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
