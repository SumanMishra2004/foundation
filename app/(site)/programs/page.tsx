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
} from "lucide-react";
import { fetchPrograms, fetchSiteSettings, fetchProgramsPageContent, type ProgramsPageContent, type ProgramItem } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { ProgramsTimeline } from "@/components/programs/ProgramsTimeline";

export const revalidate = 60;

export default async function ProgramsPage() {
  const rawPrograms = await fetchPrograms();
  const pageContent: ProgramsPageContent | null = await fetchProgramsPageContent();
  const settings = await fetchSiteSettings();

  const siteName = settings?.siteName || "IKC Foundation";

  // Page Specific Content from Programs Singleton
  const heroEyebrow = pageContent?.heroEyebrow || "Our Initiatives";
  const heroTitle = pageContent?.heroTitle || "Programs & Focus Areas";
  const heroDescription = pageContent?.heroDescription || "Through direct volunteer deployment and transparent fund utilization, we run structured programs in learning development, mobile health, and eco-conservation.";
  const heroImageUrl = pageContent?.heroImage
    ? urlFor(pageContent.heroImage).url()
    : "/hero-bg.png";

  const introTitle = pageContent?.introTitle || "Core Initiatives & Sub-projects";
  const introDescription = pageContent?.introDescription || "Detailing our active field operations. Each program is run in partnership with regional volunteer networks.";

  const ctaTitle = pageContent?.ctaTitle || "Would You Like to Volunteer or Collaborate?";
  const ctaDescription = pageContent?.ctaDescription || "We welcome partnerships with local health centers, ecological experts, and youth volunteers to expand our rural reach.";
  const ctaPrimaryLabel = pageContent?.ctaPrimaryLabel || "Apply as Volunteer";
  const ctaPrimaryLink = pageContent?.ctaPrimaryLink || "/contact";
  const ctaSecondaryLabel = pageContent?.ctaSecondaryLabel || "Our Annual Trust Audits";
  const ctaSecondaryLink = pageContent?.ctaSecondaryLink || "/about";

  const programs: ProgramItem[] =
    rawPrograms?.length > 0
      ? rawPrograms
      : [
          {
            _id: "prog-1",
            title: "Learning Centers & Library Support",
            icon: "GraduationCap",
            description: "Empowering through community classrooms, libraries, and book kits.",
            color: "from-purple-500 to-indigo-600",
            events: [
              {
                title: "Annual Notebook and Kit Distribution Drive",
                date: "2026-04-26",
                description: "Successfully distributed study kits, schoolbags, and notebooks to over 300 primary school children in rural blocks. The event was managed in coordination with local youth volunteer networks, and parents were invited to share feedback on learning resources.",
                venue: "Govt Primary School Hall, Block C",
                objective: "Provide educational resources to underprivileged students for the upcoming school year.",
                timing: "10:00 AM - 1:30 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-1", _type: "reference" } },
                  { _type: "image", asset: { _ref: "image-mock-2", _type: "reference" } }
                ]
              },
              {
                title: "Community Classroom & Digital Lab Launch",
                date: "2026-01-15",
                description: "Opened our new rural tech-enabled classroom. The space is equipped with 5 laptops, high-speed connection, and learning software. Regular coding and computer literacy sessions will be run here on weekends.",
                venue: "Village Panchayat Center Room 2",
                objective: "Provide computer literacy access to village youths.",
                timing: "11:00 AM - 3:00 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-2", _type: "reference" } }
                ]
              }
            ]
          },
          {
            _id: "prog-2",
            title: "Scholarships & Academic Awards",
            icon: "Award",
            description: "Encouraging outstanding academic and research achievements.",
            color: "from-teal-500 to-emerald-600",
            events: [
              {
                title: "Higher Education Scholarship Grant Ceremony",
                date: "2026-05-10",
                description: "Presented scholarships to 15 deserving rural girl students pursuing undergraduate streams in engineering and sciences. Grants cover tuition fees, study materials, and monthly transport allowances.",
                venue: "District Welfare Hall",
                objective: "Award direct tuition scholarships.",
                timing: "10:00 AM - 12:30 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-2", _type: "reference" } }
                ]
              }
            ]
          },
          {
            _id: "prog-3",
            title: "Mobile Clinics & Healthcare Camps",
            icon: "Ambulance",
            description: "Providing direct medical access, checkups, and free medicines.",
            color: "from-red-500 to-rose-600",
            events: [
              {
                title: "Pediatric & Maternal Health Screening Camp",
                date: "2026-04-12",
                description: "Organized a specialized diagnostics camp targeting children and new mothers. Provided pediatric health checkups, dental screening, and distributed vital supplements (calcium, iron, vitamins) alongside basic hygiene kits.",
                venue: "Primary Health Center Yard",
                objective: "Direct health screening and vitamin distribution.",
                timing: "9:00 AM - 4:00 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-3", _type: "reference" } },
                  { _type: "image", asset: { _ref: "image-mock-4", _type: "reference" } }
                ]
              }
            ]
          },
          {
            _id: "prog-4",
            title: "Social Welfare & Relief",
            icon: "Users",
            description: "Supporting vulnerable families and community safety nets.",
            color: "from-blue-500 to-cyan-600",
            events: [
              {
                title: "Winter Relief & Blanket Distribution",
                date: "2025-12-18",
                description: "Distributed heavy-duty winter blankets, thermal wear, and monthly dry ration kits containing rice, wheat flour, edible oils, and legumes to 120 elderly residents and widows living in low-shelter dwellings.",
                venue: "Outreach Center, Sector 2",
                objective: "Provide winter warmth support to vulnerable elderly households.",
                timing: "11:00 AM - 3:00 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-4", _type: "reference" } }
                ]
              }
            ]
          },
          {
            _id: "prog-5",
            title: "Culture & Traditional Arts",
            icon: "Heart",
            description: "Supporting traditional folk arts and local sports initiatives.",
            color: "from-pink-500 to-orange-500",
            events: [
              {
                title: "Folk Craft Preservation Workshop",
                date: "2026-03-05",
                description: "A unique community workshop pairing local elder craftsmen with youth to pass down traditional bamboo carving and weaving skills. An evening folk music concert concluded the celebration of local cultural roots.",
                venue: "Community Amphitheater",
                objective: "Promote traditional tribal crafts and music.",
                timing: "1:00 PM - 5:00 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-1", _type: "reference" } }
                ]
              }
            ]
          },
          {
            _id: "prog-6",
            title: "Ecological Conservation & Afforestation",
            icon: "Leaf",
            description: "Promoting plantation, clean-water care, and bio-protection.",
            color: "from-green-500 to-emerald-600",
            events: [
              {
                title: "Monsoon Afforestation & Soil Binding Plantations",
                date: "2026-06-01",
                description: "Planted over 1,200 native saplings (including neem, local tamarind, and banyan trees) along the river embankment to prevent monsoon soil erosion. Over 80 community volunteers and local school children joined.",
                venue: "Wasteland Zone B",
                objective: "Afforesting degraded soils using native saplings.",
                timing: "8:00 AM - 12:00 PM",
                images: [
                  { _type: "image", asset: { _ref: "image-mock-5", _type: "reference" } }
                ]
              }
            ]
          },
        ];

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={siteName}
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
              {heroEyebrow}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-white font-display mb-4 sm:mb-5">
              {heroTitle}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xs sm:text-sm text-slate-100/85 font-sans-modern leading-relaxed max-w-2xl mx-auto">
              {heroDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= INTERACTIVE TIMELINE SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6]">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                What We Do
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {introTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-sans-modern leading-relaxed">
                {introDescription}
              </p>
            </FadeIn>
          </div>

          {/* Timeline & Tabs */}
          <ProgramsTimeline programs={programs} />
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
              {ctaTitle}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans-modern mb-8 sm:mb-10 max-w-xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={ctaPrimaryLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md shadow-teal-900/10 font-sans-modern w-full sm:w-auto"
              >
                {ctaPrimaryLabel} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={ctaSecondaryLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-800 hover:border-slate-300 text-slate-300 hover:bg-white/10 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 font-sans-modern w-full sm:w-auto"
              >
                {ctaSecondaryLabel}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
