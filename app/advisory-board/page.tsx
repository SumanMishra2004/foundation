import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Globe, BookOpen, GraduationCap, ShieldAlert } from "lucide-react";
import { fetchAdvisoryBoard } from "@/lib/sanity";
import { fetchSiteSettings } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion-wrapper";

interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

interface AdvisoryMember {
  _id: string;
  name: string;
  bio: string;
  image?: SanityImage;
}

export const revalidate = 60;

export default async function AdvisoryBoardPage() {
  const members: AdvisoryMember[] = await fetchAdvisoryBoard();
  const settings = await fetchSiteSettings();
  const heroImageUrl = settings?.advisoryHeroImage ? urlFor(settings.advisoryHeroImage).url() : "/hero-community.png";

  const stats = [
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
            alt={settings?.siteName || "Advisory Board background"}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 lg:py-36">
          <FadeIn direction="down" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md mb-6 font-sans-modern">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              {settings?.advisoryHeroEyebrow || "Strategic Advisors"}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white font-display mb-6">
              {settings?.advisoryHeroTitle || "Our Advisory Board"}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-slate-355 text-slate-300 font-sans-modern leading-relaxed max-w-2xl mx-auto">
              {settings?.advisoryHeroDescription || "World-class researchers, public health experts, and environmentalists providing strategic direction to IKC trust initiatives."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="bg-white border-y border-slate-200/60 py-10 relative z-10 shadow-sm shadow-slate-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-505 text-slate-500 font-sans-modern">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-850 mb-6 font-sans-modern">
                Board Council
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {settings?.advisorySectionTitle || "Guided by Global Experience"}
              </h2>
              <p className="text-sm text-slate-500 font-sans-modern leading-relaxed">
                {settings?.advisorySectionDescription || "Evaluating programs, conducting periodic project audits, and ensuring alignment with international social development standards."}
              </p>
            </FadeIn>
          </div>

          {members && members.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="group rounded-2xl overflow-hidden bg-white border border-slate-205 border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative"
                  >
                    {/* Academic Award Badge */}
                    <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center shadow-md shadow-teal-900/20">
                      <Award className="w-4 h-4 text-white" />
                    </div>

                    {/* Image Container */}
                    <div style={{ position: "relative", overflow: "hidden", backgroundColor: "rgb(241 245 249)", aspectRatio: "3 / 4" }}>
                      <Image
                        src={imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-550 group-hover:scale-103"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized={true}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-teal-700 transition-colors">
                        {member.name}
                      </h3>
                      {member.bio && (
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-sans-modern">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <FadeIn className="text-center py-16 max-w-md mx-auto border border-slate-100 p-8 rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6 text-slate-500">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                No Advisory Council Added
              </h3>
              <p className="text-xs text-slate-500 font-sans-modern mb-6 leading-relaxed">
                Add council members dynamically using the integrated Content Studio.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all font-sans-modern"
              >
                Open Studio <ArrowRight className="w-4 h-4" />
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
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-teal-400 border border-slate-700 mb-6 font-sans-modern">
              Advisory Board Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-6">
              {settings?.advisoryCtaTitle || "Promoting Scientific &amp; Grassroots Research"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans-modern mb-10 max-w-xl mx-auto">
              {settings?.advisoryCtaDescription || "Our board coordinates partnerships with environmental bodies, research universities, and public health institutes."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md shadow-teal-900/10 font-sans-modern w-full sm:w-auto"
              >
                Inquire With Council <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-800 hover:border-slate-350 text-slate-350 hover:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 font-sans-modern w-full sm:w-auto"
              >
                Meet Executive Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
