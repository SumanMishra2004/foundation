import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Globe, BookOpen, GraduationCap, ShieldCheck, ShieldAlert } from "lucide-react";
import { fetchAdvisoryBoard, fetchSiteSettings, fetchAdvisoryContent, type AdvisoryPageContent } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion-wrapper";
import { type SanityImage } from "@/lib/sanity";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Globe,
  BookOpen,
  GraduationCap,
  Award,
  ShieldCheck,
};

interface AdvisoryMember {
  _id: string;
  name: string;
  designation?: string;
  organization?: string;
  expertise?: string;
  linkedinUrl?: string;
  bio: string;
  image?: SanityImage;
}

export const revalidate = 60;

export default async function AdvisoryBoardPage() {
  const members: AdvisoryMember[] = await fetchAdvisoryBoard();
  const pageContent: AdvisoryPageContent | null = await fetchAdvisoryContent();
  const settings = await fetchSiteSettings();

  const siteName = settings?.siteName || "IKC Foundation";

  // Page Specific Content from Advisory Board Singleton
  const heroEyebrow = pageContent?.heroEyebrow || "Strategic Advisors";
  const heroTitle = pageContent?.heroTitle || "Our Advisory Board";
  const heroDescription = pageContent?.heroDescription || "World-class researchers, public health experts, and environmentalists providing strategic direction to IKC trust initiatives.";
  const heroImageUrl = pageContent?.heroImage
    ? urlFor(pageContent.heroImage).url()
    : "/hero-community.png";

  const sectionTitle = pageContent?.sectionTitle || "Guided by Global Experience";
  const sectionDescription = pageContent?.sectionDescription || "Evaluating programs, conducting periodic project audits, and ensuring alignment with international social development standards.";

  const fallbackStudioLabel = pageContent?.fallbackStudioLabel || "Open Studio";
  const fallbackStudioLink = pageContent?.fallbackStudioLink || "/studio";

  const ctaTitle = pageContent?.ctaTitle || "Promoting Scientific & Grassroots Research";
  const ctaDescription = pageContent?.ctaDescription || "Our board coordinates partnerships with environmental bodies, research universities, and public health institutes.";
  const ctaPrimaryLabel = pageContent?.ctaPrimaryLabel || "Inquire With Council";
  const ctaPrimaryLink = pageContent?.ctaPrimaryLink || "/contact";
  const ctaSecondaryLabel = pageContent?.ctaSecondaryLabel || "Meet Executive Team";
  const ctaSecondaryLink = pageContent?.ctaSecondaryLink || "/about";

  const stats = pageContent?.stats?.length
    ? pageContent.stats.map((stat) => ({
        number: stat.number,
        label: stat.label,
        icon: iconMap[stat.icon || "Users"] || Users,
      }))
    : [
        { number: "10+", label: "Academic Mentors", icon: Users },
        { number: "4+", label: "Countries Represented", icon: Globe },
        { number: "25+", label: "Research Studies", icon: BookOpen },
        { number: "1,200+", label: "Students Advised", icon: GraduationCap },
      ];

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={siteName || "Advisory Board background"}
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

      {/* ================= STATS BAR ================= */}
      <section className="bg-white border-y border-slate-200 py-10 relative z-10 shadow-sm shadow-slate-100/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <StaggerItem
                  key={idx}
                  className="flex flex-col items-center justify-center text-center px-4 border-r last:border-0 border-slate-100"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7E6] flex items-center justify-center text-teal-700 mb-3 shadow-inner">
                    <StatIcon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display block mb-1">
                    {stat.number}
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 font-sans-modern">
                    {stat.label}
                  </span>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= ADVISORY GRID ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-850 mb-6 font-sans-modern">
                Board Council
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {sectionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-sans-modern leading-relaxed">
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
                      .height(600)
                      .fit("crop")
                      .url()
                  : "/victoria.avif";

                return (
                  <StaggerItem
                    key={member._id}
                    className="group overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 relative grid grid-cols-1 sm:grid-cols-[104px_minmax(0,1fr)] xl:grid-cols-1"
                  >
                    {/* Academic Award Badge */}
                    <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shadow-md shadow-teal-900/20">
                      <Award className="w-3.5 h-3.5 text-white" />
                    </div>

                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-slate-100 aspect-4/3 sm:aspect-auto sm:min-h-full xl:aspect-4/3 xl:min-h-0">
                      <Image
                        src={imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-550 group-hover:scale-103"
                        sizes="(max-width: 640px) 100vw, (max-width: 1279px) 180px, 33vw"
                        unoptimized={true}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="p-4 sm:p-5 flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display mb-1 group-hover:text-teal-700 transition-colors">
                        {member.name}
                      </h3>
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
                      {member.linkedinUrl && (
                        <div className="mt-3">
                          <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="text-[9px] font-bold uppercase tracking-widest text-teal-700 hover:text-teal-800 transition-colors">
                            View Profile
                          </a>
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
                No Advisory Council Added
              </h3>
              <p className="text-[11px] text-slate-500 font-sans-modern mb-6 leading-relaxed">
                Add council members dynamically using the integrated Content Studio.
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
              Advisory Board Engagement
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
