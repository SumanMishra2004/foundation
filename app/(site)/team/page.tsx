import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { fetchTeamMembers, fetchSiteSettings, fetchTeamContent, type TeamPageContent } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion-wrapper";
import { type SanityImage } from "@/lib/sanity";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  designation?: string;
  organization?: string;
  expertise?: string;
  email?: string;
  linkedinUrl?: string;
  bio: string;
  image?: SanityImage;
}

export const revalidate = 60;

export default async function TeamPage() {
  const members: TeamMember[] = await fetchTeamMembers();
  const pageContent: TeamPageContent | null = await fetchTeamContent();
  const settings = await fetchSiteSettings();

  const siteName = settings?.siteName || "IKC Foundation";

  // Page specific content from Team Page Content singleton
  const heroEyebrow = pageContent?.heroEyebrow || "Our People";
  const heroTitle = pageContent?.heroTitle || "Meet Our Executive Team";
  const heroDescription = pageContent?.heroDescription || "Meet the volunteers, managers, and coordinators driving regional healthcare camps and learning centers.";
  const heroImageUrl = pageContent?.heroImage
    ? urlFor(pageContent.heroImage).url()
    : "/about-bg.png";

  const sectionTitle = pageContent?.sectionTitle || "Guided by Care & Service";
  const sectionDescription = pageContent?.sectionDescription || "Dedicated professionals coordinating healthcare diagnostic teams, learning campaigns, and conservation projects.";

  const fallbackStudioLabel = pageContent?.fallbackStudioLabel || "Open Studio";
  const fallbackStudioLink = pageContent?.fallbackStudioLink || "/studio";

  const ctaTitle = pageContent?.ctaTitle || "Empower Others With Your Service";
  const ctaDescription = pageContent?.ctaDescription || "We welcome medical students, teaching interns, and environment enthusiasts to join our field teams.";
  const ctaPrimaryLabel = pageContent?.ctaPrimaryLabel || "Volunteer Signup";
  const ctaPrimaryLink = pageContent?.ctaPrimaryLink || "/contact";
  const ctaSecondaryLabel = pageContent?.ctaSecondaryLabel || "View Active Fields";
  const ctaSecondaryLink = pageContent?.ctaSecondaryLink || "/programs";

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={siteName || "Team background"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          {/* Dark Cinematic Overlay */}
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

      {/* ================= TEAM GRID ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                Field Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {sectionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-505 text-slate-500 font-sans-modern leading-relaxed">
                {sectionDescription}
              </p>
            </FadeIn>
          </div>

          {members && members.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {members.map((member) => {
                const imageUrl = member.image
                  ? urlFor(member.image)
                      .width(480)
                      .height(640)
                      .fit("crop")
                      .url()
                  : "/victoria.avif";

                return (
                  <StaggerItem
                    key={member._id}
                    className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 sm:grid-cols-[104px_minmax(0,1fr)] xl:grid-cols-1"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-auto sm:min-h-full xl:aspect-[4/3] xl:min-h-0">
                      <Image
                        src={imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                        sizes="(max-width: 640px) 100vw, (max-width: 1279px) 180px, 33vw"
                        unoptimized={true}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="p-4 sm:p-5 flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display mb-1 group-hover:text-teal-700 transition-colors">
                        {member.name}
                      </h3>
                      {member.role && (
                        <p className="text-[8px] uppercase font-bold tracking-widest text-teal-600 mb-2 font-sans-modern">
                          {member.role}
                        </p>
                      )}
                      {(member.designation || member.organization || member.expertise) && (
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                          {member.designation && (
                            <span className="inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-teal-700">
                              {member.designation}
                            </span>
                          )}
                          {member.organization && (
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-slate-600">
                              {member.organization}
                            </span>
                          )}
                          {member.expertise && (
                            <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-amber-700">
                              {member.expertise}
                            </span>
                          )}
                        </div>
                      )}
                      {member.bio && (
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed line-clamp-3 font-sans-modern">
                          {member.bio}
                        </p>
                      )}
                      {(member.email || member.linkedinUrl) && (
                        <div className="mt-3 flex flex-wrap gap-3 text-[9px] font-bold uppercase tracking-widest">
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="text-teal-700 hover:text-teal-800 transition-colors">
                              Email
                            </a>
                          )}
                          {member.linkedinUrl && (
                            <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-700 transition-colors">
                              LinkedIn
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <FadeIn className="text-center py-14 max-w-md mx-auto border border-slate-100 p-7 rounded-2xl bg-white shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5 text-slate-500">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                No Team Members Configured
              </h3>
              <p className="text-[11px] text-slate-500 font-sans-modern mb-6 leading-relaxed">
                Add team profiles dynamically using the integrated Content Studio.
              </p>
              <Link
                href={fallbackStudioLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all font-sans-modern"
              >
                {fallbackStudioLabel} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeIn>
          )}
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-teal-300 border border-slate-700 mb-5 sm:mb-6 font-sans-modern">
              Volunteer Outreach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display mb-4 sm:mb-5">
              {ctaTitle}
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed font-sans-modern mb-7 sm:mb-8 max-w-xl mx-auto">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-800 hover:border-slate-350 text-slate-300 hover:bg-white/10 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 font-sans-modern w-full sm:w-auto"
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
