import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Target, Lightbulb, Users, Zap, Sparkles, Calendar, Award, CheckCircle2 } from "lucide-react";
import { fetchAboutContent } from "@/lib/sanity";
import { fetchSiteSettings } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/motion-wrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Target,
  Lightbulb,
  Users,
  Zap,
  Sparkles,
};

export const revalidate = 60;

export default async function AboutPage() {
  const aboutData = await fetchAboutContent();
  const settings = await fetchSiteSettings();

  const content = {
    heroTitle: aboutData?.heroTitle || "Who We Are & What We Stand For",
    heroSubtitle: aboutData?.heroSubtitle || "IKC Foundation is a dedicated charitable trust driving inclusive growth, rural health, and learning accessibility.",
    introText: aboutData?.introText || "Founded with a vision to merge direct compassionate care with scalable social knowledge, we operate medical camps, community centers, environmental projects, and academic fellowships across underprivileged regions.",
    visionTitle: aboutData?.visionTitle || "Our Vision",
    visionDescription: aboutData?.visionDescription || "To build a just, compassionate, and healthy society where every individual has access to opportunities for a dignified and empowered life.",
    missionTitle: aboutData?.missionTitle || "Our Mission",
    missionDescription: aboutData?.missionDescription || "To drive direct, impactful social initiatives in rural and underprivileged communities through education, healthcare camps, and ecological conservation projects.",
  };

  const valuesList = settings?.aboutValues?.length > 0
    ? settings.aboutValues
    : aboutData?.valuesList?.length > 0 ? aboutData.valuesList : [
    { title: "Active Compassion", description: "Approaching community needs with deep empathy and active care.", icon: "Heart" },
    { title: "Inclusive Empowerment", description: "Providing equal opportunities to marginalized families without discrimination.", icon: "Users" },
    { title: "Grassroots Innovation", description: "Utilizing creative, local resources to solve complex environmental and medical access problems.", icon: "Zap" }
  ];

  const whatWeDoList = settings?.aboutWhatWeDo?.length > 0
    ? settings.aboutWhatWeDo
    : aboutData?.whatWeDoList?.length > 0 ? aboutData.whatWeDoList : [
    { title: "Learning & Education Support", description: "Distributing study kits, supporting rural schools, and funding academic fellowships.", icon: "🎓" },
    { title: "Mobile Diagnostics & Health Camps", description: "Providing primary clinical checkups, diagnosis, and medicine support.", icon: "🏥" },
    { title: "Community & Women Empowerment", description: "Creating local self-help groups, vocational training, and support networks.", icon: "👥" },
    { title: "Eco-Preservation & Afforestation", description: "Promoting community plantation drives, wildlife preservation, and clean water awareness.", icon: "🌱" }
  ];

  const milestones = settings?.aboutMilestones?.length > 0 ? settings.aboutMilestones : [
    { year: "2005", title: "Trust Inception", desc: "IKC Foundation registered as an official charitable trust in Newtown, Kolkata." },
    { year: "2011", title: "First Mobile Medical Camp", desc: "Launched mobile diagnostics and medical camps to support rural areas in West Bengal." },
    { year: "2018", title: "Scholarship Foundation", desc: "Started the learning scholarship program, funding education for over 500 underprivileged students." },
    { year: "2023", title: "Ecology Initiative", desc: "Initiated regional forest protection and afforestation programs, planting over 20,000 trees." },
    { year: "2026", title: "Global Advisory Integration", desc: "Formed a global academic advisory council to direct our programs and ensure global support." }
  ];

  const heroImageUrl = settings?.aboutHeroImage ? urlFor(settings.aboutHeroImage).url() : "/about-bg.png";
  const storyImageUrl = settings?.aboutStoryImage ? urlFor(settings.aboutStoryImage).url() : "/about-banner.png";
  const storyPoints = settings?.aboutStoryPoints?.length
    ? settings.aboutStoryPoints
    : [
        "85% direct-to-field program allocation ratio.",
        "Mobile health camps providing diagnosis, checkups, and free medicines.",
        "Fellowships and study grants to fund underprivileged girls' higher education.",
        "Community afforestation projects and conservation drives.",
      ];

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[65vh] flex items-center justify-center">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={settings?.siteName || "About IKC Foundation background banner"}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
          {/* Dark high-contrast gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-900/80 to-slate-950/95 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-20 text-center py-24 sm:py-32">
          <FadeIn direction="down" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md mb-6 font-display">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              {settings?.aboutHeroEyebrow || "About IKC Trust"}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white font-display mb-6 max-w-4xl mx-auto uppercase">
              {content.heroTitle}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xs sm:text-sm text-slate-300 font-sans-modern leading-relaxed max-w-2xl mx-auto">
              {content.heroSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-20 lg:py-24 bg-[#FAF7E6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <FadeIn direction="right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-display">
                  {settings?.aboutStoryEyebrow || "Our Background"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-6 leading-snug">
                  {settings?.aboutStoryTitle || "Merging Direct Care with Intellectual Development"}
                </h2>
                <p className="text-slate-700 leading-relaxed font-sans-modern mb-8 text-xs sm:text-sm">
                  {content.introText}
                </p>

                {/* Direct Action Points */}
                <div className="space-y-4 mb-8">
                  {storyPoints.map((pt: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span className="text-slate-800 text-xs font-sans-modern leading-relaxed font-semibold">{pt}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Image Frame */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <ScaleIn delay={0.2} className="relative w-full aspect-video lg:aspect-square max-w-100">
                <div className="absolute inset-0 bg-linear-to-tr from-teal-600/10 to-transparent rounded-2xl rotate-2 scale-102" />
                <div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                  <Image
                    src={storyImageUrl}
                    alt={settings?.siteName || "About IKC Foundation Story"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION CARDS ================= */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <FadeIn direction="right" className="bg-[#FAF7E6]/50 border border-slate-200 rounded-2xl p-8 flex gap-6 items-start shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-3 uppercase tracking-wide">
                  {content.visionTitle}
                </h3>
                <p className="text-slate-650 text-xs leading-relaxed font-sans-modern">
                  {content.visionDescription}
                </p>
              </div>
            </FadeIn>

            {/* Mission Card */}
            <FadeIn direction="left" className="bg-slate-950 text-white border border-slate-900 rounded-2xl p-8 flex gap-6 items-start shadow-lg">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-3 uppercase tracking-wide">
                  {content.missionTitle}
                </h3>
                <p className="text-slate-350 text-xs leading-relaxed font-sans-modern">
                  {content.missionDescription}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= MILESTONE TIMELINE ================= */}
      <section className="py-20 lg:py-24 bg-[#FAF7E6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-display">
                {settings?.aboutMilestones?.length ? "Our History" : "Our History"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                Milestones of Sustainable Impact
              </h2>
              <p className="text-xs text-slate-500 font-sans-modern leading-relaxed">
                Tracing our history of development from a local Newtown initiative to a multi-regional support trust.
              </p>
            </FadeIn>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line (only for sm+ screens) */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12 relative">
              {milestones.map((milestone: { year: string; title: string; desc: string }, idx: number) => (
                <FadeIn key={idx} direction={idx % 2 === 0 ? "right" : "left"} className="flex flex-col sm:flex-row items-start sm:justify-between group">
                  {/* Left segment */}
                  <div className={`w-full sm:w-[45%] pl-12 sm:pl-0 text-left sm:text-right ${idx % 2 === 0 ? "block" : "sm:invisible h-0 sm:h-auto overflow-hidden sm:overflow-visible"}`}>
                    {idx % 2 === 0 && (
                      <div>
                        <span className="inline-block px-3 py-1 rounded-lg bg-teal-605 bg-teal-600 text-white font-extrabold text-xs mb-2 font-display">
                          {milestone.year}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 font-display mb-1">{milestone.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-sans-modern">{milestone.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Dot in Center */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-teal-600 flex items-center justify-center -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  </div>

                  {/* Right segment */}
                  <div className={`w-full sm:w-[45%] pl-12 sm:pl-8 text-left ${idx % 2 !== 0 ? "block" : "sm:invisible h-0 sm:h-auto overflow-hidden sm:overflow-visible"}`}>
                    {idx % 2 !== 0 && (
                      <div>
                        <span className="inline-block px-3 py-1 rounded-lg bg-teal-605 bg-teal-600 text-white font-extrabold text-xs mb-2 font-display">
                          {milestone.year}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 font-display mb-1">{milestone.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-sans-modern">{milestone.desc}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-850 mb-6 font-display">
                What Guides Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {settings?.aboutValuesTitle || "Our Foundation Values"}
              </h2>
              <p className="text-xs text-slate-500 font-sans-modern leading-relaxed">
                {settings?.aboutValuesDescription || "The core guidelines driving our volunteer deployments, fund management, and strategic projects."}
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuesList.map((val: any, idx: number) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <StaggerItem
                  key={idx}
                  className="bg-[#FAF7E6]/40 border border-slate-200 rounded-2xl p-8 hover:shadow-md hover:bg-white hover:border-slate-300 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-105 transition-transform duration-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-3 group-hover:text-teal-750 transition-colors uppercase tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans-modern">
                    {val.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= WHAT WE DO GRID ================= */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[32px_32px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-teal-400 border border-slate-700 mb-6 font-display">
                Our Work Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display mb-4">
                {settings?.aboutWhatWeDoTitle || "Primary Spheres of Action"}
              </h2>
              <p className="text-xs text-slate-400 font-sans-modern leading-relaxed">
                {settings?.aboutWhatWeDoDescription || "Reaching communities with comprehensive support focusing on learning accessibility and fundamental healthcare."}
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDoList.map((item: any, idx: number) => (
              <StaggerItem
                key={idx}
                className="bg-slate-950/45 border border-slate-800/80 rounded-xl p-8 flex items-start gap-6 hover:bg-slate-950/80 transition-colors duration-200 group"
              >
                <div className="text-3xl shrink-0 mt-0.5 select-none">{item.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 font-display mb-2 group-hover:text-teal-400 transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-455 text-slate-400 text-xs leading-relaxed font-sans-modern">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-16">
            <FadeIn direction="up">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-650 hover:bg-teal-700 hover:text-white text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 font-display"
              >
                Explore Active Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
