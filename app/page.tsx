import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Users,
  Leaf,
  Award,
  Ambulance,
  AlertTriangle,
  Handshake,
  Sparkles,
  Target,
  ArrowUpRight,
  ChevronDown,
  Quote,
  ShieldCheck,
  Percent,
  CheckCircle,
} from "lucide-react";
import { fetchHomeContent, fetchPrograms } from "@/lib/sanity";
import { fetchSiteSettings } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/ui/motion-wrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Heart,
  Users,
  Leaf,
  Award,
  Ambulance,
  AlertTriangle,
  Handshake,
  Sparkles,
};

export const revalidate = 60;

export default async function Home() {
  const homeData = await fetchHomeContent();
  const rawPrograms = await fetchPrograms();
  const settings = await fetchSiteSettings();

  const content = {
    heroTitle: homeData?.heroTitle || "Empowering Communities Through Knowledge & Care",
    heroSubtitle:
      homeData?.heroSubtitle ||
      "Dedicated to holistic social welfare, learning excellence, and healthcare access.",
    heroDescription:
      homeData?.heroDescription ||
      "IKC Foundation is a registered charitable trust creating sustainable, grassroots changes in education, healthcare, environment, and rural livelihood support.",
    visionTitle: homeData?.visionTitle || "Our Vision",
    visionDescription:
      homeData?.visionDescription ||
      "To build an inclusive, knowledgeable, and healthy society where every individual has access to opportunities for a dignified and empowered life.",
    missionTitle: homeData?.missionTitle || "Our Mission",
    missionDescription:
      homeData?.missionDescription ||
      "To drive direct, impactful social initiatives in rural and underprivileged communities through education, healthcare camps, and ecological conservation projects.",
    commitmentTitle: homeData?.commitmentTitle || "Our Commitment",
    commitmentDescription:
      homeData?.commitmentDescription ||
      "We believe that real change begins with localized, transparent, and direct community care.",
    ctaTitle: homeData?.ctaTitle || "Become Part of the Change Today",
    ctaDescription:
      homeData?.ctaDescription ||
      "Your involvement helps us expand our mobile health clinics, build learning classrooms, and protect regional ecology.",
  };

  const heroImageUrl = settings?.homeHeroImage
    ? urlFor(settings.homeHeroImage).url()
    : "/hero-bg.png";
  const aboutImageUrl = settings?.homeAboutImage
    ? urlFor(settings.homeAboutImage).url()
    : "/about-banner.png";
  const commitmentImageUrl = settings?.homeCommitmentImage
    ? urlFor(settings.homeCommitmentImage).url()
    : "/hero-community.png";
  const stats = settings?.homeStats?.length
    ? settings.homeStats
    : [
        { number: "12,000+", label: "Lives Impacted" },
        { number: "40+", label: "Rural Villages Served" },
        { number: "250+", label: "Active Volunteers" },
        { number: "85%", label: "Direct Fund Allocation" },
      ];
  const testimonials = settings?.homeTestimonials?.length
    ? settings.homeTestimonials
    : [
        {
          quote: "The free health camp in our village diagnosed my mother's cardiac condition just in time. The medication support provided by IKC has been a blessing.",
          author: "Ramesh Mondal",
          role: "Farmer, Sundarbans Region",
        },
        {
          quote: "Thanks to the IKC study fellowship, I can continue my college education without placing a financial burden on my father.",
          author: "Priya Sharma",
          role: "Science Undergraduate Student",
        },
      ];
  const transparencyBars = settings?.homeTransparencyBars?.length
    ? settings.homeTransparencyBars
    : [
        { label: "Direct Program Execution", value: "85%", width: 85, color: "bg-teal-600" },
        { label: "Administrative Management & Support", value: "10%", width: 10, color: "bg-slate-400" },
        { label: "Development & Fundraising", value: "5%", width: 5, color: "bg-slate-300" },
      ];

  const programs =
    rawPrograms?.length > 0
      ? rawPrograms
      : [
          {
            title: "Education & Knowledge",
            description:
              "Setting up schools, community coaching centers, and providing study kits to rural youth.",
            icon: "GraduationCap",
          },
          {
            title: "Awards & Recognition",
            description:
              "Empowering students and researchers through academic grants and excellence recognition.",
            icon: "Award",
          },
          {
            title: "Healthcare & Mobile Medical Camps",
            description:
              "Providing health consultations, primary diagnostics, and medical distributions directly to villages.",
            icon: "Ambulance",
          },
          {
            title: "Social & Community Welfare",
            description:
              "Supporting child development, women empowerment groups, and elderly assistance programs.",
            icon: "Users",
          },
          {
            title: "Cultural & Sports Support",
            description:
              "Encouraging cultural arts preservation and rural youth sports tournaments.",
            icon: "Heart",
          },
          {
            title: "Eco-Conservation & Protection",
            description:
              "Tree planting drives, wildlife awareness, and promoting sustainable farming practices.",
            icon: "Leaf",
          },
        ];

  return (
    <div className="w-full overflow-hidden bg-[#FAF7E6]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:py-24">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={settings?.siteName || "Aerial view of community village project"}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
          {/* Dark Overlay with Teal undertone for improved branding/contrast */}
          <div className="absolute inset-0 bg-linear-to-tr from-slate-950 via-slate-900/90 to-slate-900/75 z-10 opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="max-w-3xl">
            <FadeIn direction="down" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                {settings?.homeHeroEyebrow || "Registered Charitable Trust"}
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white font-display mb-6">
                {content.heroTitle}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed mb-6 font-medium max-w-2xl">
                {content.heroSubtitle}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-10 max-w-2xl font-sans-modern">
                {content.heroDescription}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md shadow-teal-900/30"
                >
                  Our Mission <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white hover:bg-white/10 hover:border-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200"
                >
                  Support Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
          <span className="text-[9px] uppercase tracking-widest text-slate-550 font-bold">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-slate-550 animate-bounce" />
        </div>
      </section>

      {/* ================= STATS COUNTER BAR ================= */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/50 py-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat: { number: string; label: string }, idx: number) => (
              <StaggerItem
                key={idx}
                className="flex flex-col items-center justify-center text-center px-4 border-r last:border-0 border-slate-100"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-teal-600 font-display block mb-1">
                  {stat.number}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 font-sans-modern">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Visual Content */}
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <Image
                    src={aboutImageUrl}
                    alt={settings?.siteName || "Community learning initiative"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    unoptimized
                  />
                  {/* Years active overlay tag */}
                  <div className="absolute bottom-5 left-5 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800">
                    <span className="text-xl font-bold text-teal-400 font-display block leading-none">
                      2005
                    </span>
                    <span className="text-[8px] uppercase tracking-widest font-bold text-slate-450 font-sans-modern">
                      Inception Year
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right - Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <FadeIn direction="left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                  {settings?.homeAboutEyebrow || "Who We Are"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-6 leading-snug">
                  {settings?.homeAboutTitle || "Uniting Care and Knowledge to Build Sustainable Livelihoods"}
                </h2>
                <p className="text-slate-655 leading-relaxed mb-4 text-sm font-sans-modern">
                  {content.visionDescription}
                </p>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm font-sans-modern">
                  {content.missionDescription}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-teal-700 font-bold uppercase tracking-wider text-xs hover:text-teal-800 transition-colors group font-sans-modern"
                >
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS GRID SECTION ================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                {settings?.programsIntroTitle ? "Our Programs" : "Our Programs"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                {settings?.programsIntroTitle || "Core Fields of Active Engagement"}
              </h2>
              <p className="text-sm text-slate-500 font-sans-modern leading-relaxed">
                {settings?.programsIntroDescription || "Direct grassroots interventions seeking to address basic life needs, educational growth, and ecological balance."}
              </p>
            </FadeIn>
          </div>

          {/* Program Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 6).map((prog: { title: string; description: string; icon: string }, idx: number) => {
              const IconComp = iconMap[prog.icon] || Sparkles;
              return (
                <StaggerItem
                  key={idx}
                  className="bg-[#FAF7E6]/60 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:bg-white hover:border-slate-350/80 transition-all duration-305 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-teal-650/10 border border-teal-500/10 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-105 transition-transform duration-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display mb-3 group-hover:text-teal-750 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-sans-modern">
                      {prog.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 font-sans-modern">
                      Active Program
                    </span>
                    <Link
                      href="/programs"
                      className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= NEW SECTION: DONOR TRANSPARENCY ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Concept */}
            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                  Transparency
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-6">
                  {settings?.homeTransparencyTitle || "85% of Funds Go Directly to Program Execution"}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans-modern">
                  {settings?.homeTransparencyDescription || "We maintain strict accountability. Administrative and fundraising costs are kept to a bare minimum (15% combined) to ensure that donations directly support grassroots execution in villages and slums."}
                </p>

                {/* Progress bars */}
                <div className="space-y-4">
                  {transparencyBars.map((bar: { label: string; value: string; width: number; color?: string }) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1 font-sans-modern">
                        <span>{bar.label}</span>
                        <span>{bar.value}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className={`${bar.color || "bg-teal-600"} h-full rounded-full`} style={{ width: `${bar.width}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Badges grid */}
            <div className="lg:col-span-6">
              <FadeIn direction="left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-slate-200/80 p-8 rounded-2xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-650 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Tax Exemptions</h4>
                      <p className="text-slate-500 text-xs font-sans-modern leading-relaxed">
                        Donations qualify for valid 80G tax exemptions under Indian Trust Registration acts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-650 shrink-0">
                      <Percent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Minimal Overhead</h4>
                      <p className="text-slate-500 text-xs font-sans-modern leading-relaxed">
                        Strict audit standards ensure funds are utilized with maximal efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:col-span-2 border-t border-slate-100 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-650 shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Annual Reports</h4>
                      <p className="text-slate-500 text-xs font-sans-modern leading-relaxed">
                        Verified balance sheets, annual project reviews, and medical camp summaries are published transparently for public auditing.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: STORIES OF HOPE ================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                Our Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
                Stories of Direct Hope
              </h2>
              <p className="text-sm text-slate-500 font-sans-modern leading-relaxed">
                Real voices from families, students, and elders whom IKC Foundation programs have had the privilege to serve.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test: { quote: string; author: string; role: string }, idx: number) => (
              <FadeIn key={idx} direction={idx === 0 ? "right" : "left"} delay={0.1}>
                <div className="bg-[#FAF7E6]/40 border border-slate-200 shadow-sm p-8 rounded-2xl flex flex-col justify-between" style={{ minHeight: 220 }}>
                  <div>
                    <Quote className="w-8 h-8 text-teal-650/20 mb-4" />
                    <p className="text-slate-700 italic text-sm leading-relaxed font-sans-modern mb-6">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between min-h-55">
                    <span className="text-sm font-bold text-slate-900 font-display">{test.author}</span>
                    <span className="text-[10px] font-bold text-teal-655 uppercase tracking-widest font-sans-modern">{test.role}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION DETAIL SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6] border-t border-slate-205 border-t-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision - Clean Slate Blue Card */}
            <FadeIn
              direction="right"
              className="bg-slate-950 text-white rounded-2xl p-10 border border-slate-900 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-4">
                {content.visionTitle}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans-modern">
                {content.visionDescription}
              </p>
            </FadeIn>

            {/* Mission - Warm Mint Card */}
            <FadeIn
              direction="left"
              className="bg-white text-slate-900 rounded-2xl p-10 border border-teal-100/60 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-[#FAF7E6] border border-teal-100 flex items-center justify-center text-teal-700 mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 font-display mb-4">
                {content.missionTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans-modern">
                {content.missionDescription}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= COMPACT QUOTE BANNER ================= */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={commitmentImageUrl}
            alt={settings?.siteName || "Rural outreach community support"}
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-slate-950/85 z-10" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <ScaleIn>
            <p className="text-lg sm:text-xl md:text-2xl font-medium italic text-teal-100/90 font-display leading-relaxed mb-6">
              &ldquo;{settings?.homeCommitmentDescription || content.commitmentDescription}&rdquo;
            </p>
            <div className="w-12 bg-teal-500 mx-auto mb-4" style={{ height: 2 }} />
            <span className="text-[10px] uppercase tracking-widest text-slate-450 font-bold font-sans-modern">
              {settings?.homeCommitmentTitle || content.commitmentTitle}
            </span>
          </ScaleIn>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7E6] text-center border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
              Join Our Outreach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-6">
              {settings?.homeCtaTitle || content.ctaTitle}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto font-sans-modern">
              {settings?.homeCtaDescription || content.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md shadow-teal-900/10 w-full sm:w-auto font-sans-modern"
              >
                Inquire &amp; Volunteer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-350 hover:border-slate-900 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 w-full sm:w-auto font-sans-modern"
              >
                Learn More About IKC
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
