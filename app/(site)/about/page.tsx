import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Target, Lightbulb, Users, Zap, Sparkles, Calendar, CheckCircle2 } from "lucide-react";
import { fetchAboutContent, fetchSiteSettings, type AboutContent } from "@/lib/sanity";
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

type ValueItem = {
  title: string;
  description: string;
  icon: string;
};

type WhatWeDoItem = {
  title: string;
  description: string;
  icon: string;
};

type MilestoneItem = {
  year: string;
  title: string;
  desc: string;
};

export const revalidate = 60;

export default async function AboutPage() {
  const aboutData: AboutContent | null = await fetchAboutContent();
  const settings = await fetchSiteSettings();

  const siteName = settings?.siteName || "IKC Foundation";

  // Hero Section Details
  const heroEyebrow = aboutData?.heroEyebrow || "About IKC Trust";
  const heroTitle = aboutData?.heroTitle || "Who We Are & What We Stand For";
  const heroSubtitle = aboutData?.heroSubtitle || "IKC Foundation is a dedicated charitable trust driving inclusive growth, rural health, and learning accessibility.";
  const heroImageUrl = aboutData?.heroImage
    ? urlFor(aboutData.heroImage).url()
    : "/about-bg.png";

  // Story Details
  const storyEyebrow = aboutData?.storyEyebrow || "Our Background";
  const storyTitle = aboutData?.storyTitle || "Merging Direct Care with Intellectual Development";
  const introText = aboutData?.introText || "Founded with a vision to merge direct compassionate care with scalable social knowledge, we operate medical camps, community centers, environmental projects, and academic fellowships across underprivileged regions.";
  const storyPoints = aboutData?.storyPoints?.length
    ? aboutData.storyPoints
    : [
        "85% direct-to-field program allocation ratio.",
        "Mobile health camps providing diagnosis, checkups, and free medicines.",
        "Fellowships and study grants to fund underprivileged girls' higher education.",
        "Community afforestation projects and conservation drives.",
      ];
  const storyImageUrl = aboutData?.storyImage
    ? urlFor(aboutData.storyImage).url()
    : "/about-banner.png";

  // Vision / Mission Details
  const visionTitle = aboutData?.visionTitle || "Our Vision";
  const visionDescription = aboutData?.visionDescription || "To build a just, compassionate, and healthy society where every individual has access to opportunities for a dignified and empowered life.";
  const missionTitle = aboutData?.missionTitle || "Our Mission";
  const missionDescription = aboutData?.missionDescription || "To drive direct, impactful social initiatives in rural and underprivileged communities through education, healthcare camps, and ecological conservation projects.";

  // Milestones Timeline
  const historyEyebrow = aboutData?.historyEyebrow || "Our History";
  const historyTitle = aboutData?.historyTitle || "Milestones of Sustainable Impact";
  const historyDescription = aboutData?.historyDescription || "Tracing our history of development from a local Newtown initiative to a multi-regional support trust.";

  const milestones: MilestoneItem[] = (aboutData?.milestones?.length
    ? aboutData.milestones
    : [
        { year: "2005", title: "Trust Inception", desc: "IKC Foundation registered as an official charitable trust in Newtown, Kolkata." },
        { year: "2011", title: "First Mobile Medical Camp", desc: "Launched mobile diagnostics and medical camps to support rural areas in West Bengal." },
        { year: "2018", title: "Scholarship Foundation", desc: "Started the learning scholarship program, funding education for over 500 underprivileged students." },
        { year: "2023", title: "Ecology Initiative", desc: "Initiated regional forest protection and afforestation programs, planting over 20,000 trees." },
        { year: "2026", title: "Global Advisory Integration", desc: "Formed a global academic advisory council to direct our programs and ensure global support." }
      ]).map((item) => ({
    year: item?.year || "",
    title: item?.title || "",
    desc: item?.desc || "",
  }));

  // Values Grid
  const valuesTitle = aboutData?.valuesTitle || "Our Foundation Values";
  const valuesDescription = aboutData?.valuesDescription || "The core guidelines driving our volunteer deployments, fund management, and strategic projects.";
  const valuesList: ValueItem[] = (aboutData?.valuesList?.length
    ? aboutData.valuesList
    : [
        { title: "Active Compassion", description: "Approaching community needs with deep empathy and active care.", icon: "Heart" },
        { title: "Inclusive Empowerment", description: "Providing equal opportunities to marginalized families without discrimination.", icon: "Users" },
        { title: "Grassroots Innovation", description: "Utilizing creative, local resources to solve complex environmental and medical access problems.", icon: "Zap" }
      ]).map((item) => ({
    title: item?.title || "",
    description: item?.description || "",
    icon: item?.icon || "Sparkles",
  }));

  // What We Do Grid
  const whatWeDoTitle = aboutData?.whatWeDoTitle || "Primary Spheres of Action";
  const whatWeDoDescription = aboutData?.whatWeDoDescription || "Reaching communities with comprehensive support focusing on learning accessibility and fundamental healthcare.";
  const whatWeDoList: WhatWeDoItem[] = (aboutData?.whatWeDoList?.length
    ? aboutData.whatWeDoList
    : [
        { title: "Learning & Education Support", description: "Distributing study kits, supporting rural schools, and funding academic fellowships.", icon: "🎓" },
        { title: "Mobile Diagnostics & Health Camps", description: "Providing primary clinical checkups, diagnosis, and medicine support.", icon: "🏥" },
        { title: "Community & Women Empowerment", description: "Creating local self-help groups, vocational training, and support networks.", icon: "👥" },
        { title: "Eco-Preservation & Afforestation", description: "Promoting community plantation drives, wildlife preservation, and clean water awareness.", icon: "🌱" }
      ]).map((item) => ({
    title: item?.title || "",
    description: item?.description || "",
    icon: item?.icon || "✨",
  }));

  const whatWeDoLinkLabel = aboutData?.whatWeDoLinkLabel || "Explore Active Programs";
  const whatWeDoLinkHref = aboutData?.whatWeDoLinkHref || "/programs";

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden">
      
<section className="relative w-full h-[40vh] min-h-[160px] max-h-[350px] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src={heroImageUrl}
      alt={siteName || "About IKC Foundation background banner"}
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
      unoptimized
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90" />
  </div>

  {/* Content */}
  <div className="relative z-20 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center">

    {/* Eyebrow */}
    <FadeIn direction="down" delay={0.1}>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-widest bg-teal-500/20 text-teal-100 border border-teal-500/30 backdrop-blur-md mb-2">

        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />

        {heroEyebrow}

      </span>
    </FadeIn>

    {/* Title */}
    <FadeIn direction="up" delay={0.2}>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-white uppercase font-display mb-2 max-w-2xl mx-auto">

        {heroTitle}

      </h1>
    </FadeIn>

    {/* Subtitle */}
    <FadeIn direction="up" delay={0.3}>
      <p className="text-[10px] sm:text-xs md:text-sm text-slate-100/85 leading-relaxed max-w-xl mx-auto">

        {heroSubtitle}

      </p>
    </FadeIn>

  </div>

</section>
      {/* ================= STORY SECTION ================= */}
      <section className="py-12  bg-[#FAF7E6]">
        <div className="w-full px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <FadeIn direction="right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-display">
                  {storyEyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-6 leading-snug">
                  {storyTitle}
                </h2>
                <p className="text-slate-700 leading-relaxed font-sans-modern mb-8 text-xs sm:text-sm">
                  {introText}
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
              <ScaleIn delay={0.2} className="relative w-full aspect-video lg:aspect-square max-w-md">
                <div className="absolute inset-0 bg-linear-to-tr from-teal-600/10 to-transparent rounded-2xl rotate-2 scale-102" />
                <div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                  <Image
                    src={storyImageUrl}
                    alt={siteName || "About IKC Foundation Story"}
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
        <div className="w-full px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <FadeIn direction="right" className="bg-[#FAF7E6]/50 border border-slate-200 rounded-2xl p-8 flex gap-6 items-start shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-3 uppercase tracking-wide">
                  {visionTitle}
                </h3>
                <p className="text-slate-650 text-xs leading-relaxed font-sans-modern">
                  {visionDescription}
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
                  {missionTitle}
                </h3>
                <p className="text-slate-350 text-xs leading-relaxed font-sans-modern">
                  {missionDescription}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= MILESTONE TIMELINE ================= */}
      <section className="py-20 lg:py-24 bg-[#FAF7E6]">
        <div className="w-full px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-display">
                {historyEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {historyTitle}
              </h2>
              <p className="text-xs text-slate-500 font-sans-modern leading-relaxed">
                {historyDescription}
              </p>
            </FadeIn>
          </div>

          <div className="relative w-full mx-auto">
            {/* Center line (only for sm+ screens) */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12 relative">
              {milestones.map((milestone: MilestoneItem, idx: number) => (
                <FadeIn key={idx} direction={idx % 2 === 0 ? "right" : "left"} className="flex flex-col sm:flex-row items-start sm:justify-between group">
                  {/* Left segment */}
                  <div className={`w-full sm:w-[45%] pl-12 sm:pl-0 text-left sm:text-right ${idx % 2 === 0 ? "block" : "sm:invisible h-0 sm:h-auto overflow-hidden sm:overflow-visible"}`}>
                    {idx % 2 === 0 && (
                      <div>
                        <span className="inline-block px-3 py-1 rounded-lg bg-teal-600 text-white font-extrabold text-xs mb-2 font-display">
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
                        <span className="inline-block px-3 py-1 rounded-lg bg-teal-600 text-white font-extrabold text-xs mb-2 font-display">
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
        <div className="w-full px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-display">
                What Guides Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {valuesTitle}
              </h2>
              <p className="text-xs text-slate-500 font-sans-modern leading-relaxed">
                {valuesDescription}
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuesList.map((val: ValueItem, idx: number) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <StaggerItem
                  key={idx}
                  className="bg-[#FAF7E6]/40 border border-slate-200 rounded-2xl p-8 hover:shadow-md hover:bg-white hover:border-slate-300 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-105 transition-transform duration-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-3 group-hover:text-teal-700 transition-colors uppercase tracking-wide">
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
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.03] pointer-events-none" />

        <div className="w-full px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-teal-400 border border-slate-700 mb-6 font-display">
                Our Work Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display mb-4">
                {whatWeDoTitle}
              </h2>
              <p className="text-xs text-slate-400 font-sans-modern leading-relaxed">
                {whatWeDoDescription}
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDoList.map((item: WhatWeDoItem, idx: number) => (
              <StaggerItem
                key={idx}
                className="bg-slate-950/45 border border-slate-800/80 rounded-xl p-8 flex items-start gap-6 hover:bg-slate-950/80 transition-colors duration-200 group"
              >
                <div className="text-3xl shrink-0 mt-0.5 select-none">{item.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 font-display mb-2 group-hover:text-teal-400 transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans-modern">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-16">
            <FadeIn direction="up">
              <Link
                href={whatWeDoLinkHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 hover:text-white text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 font-display"
              >
                {whatWeDoLinkLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
