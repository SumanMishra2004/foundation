import { Mail, MapPin, Phone, Clock, HelpCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { fetchSiteSettings } from "@/lib/sanity";
import { ContactForm } from "@/components/contact/ContactForm";

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await fetchSiteSettings();

  const faqs = settings?.contactFaqs?.length
    ? settings.contactFaqs
    : [
        {
          q: "Is IKC Foundation a registered trust?",
          a: "Yes. Integrated Knowledge and Care (IKC) Foundation is a registered public charitable trust under the Indian Trusts Act. All contributions qualify for tax exemptions under Section 80G of the Income Tax Act.",
        },
        {
          q: "How are the trust funds utilized?",
          a: "We maintain a high efficiency rating. 85% of all financial donations are allocated directly to program execution (such as purchasing medicines for mobile camps, distributing school kits, and planting trees). The remaining 15% covers essential operational and auditing overhead.",
        },
        {
          q: "Who can volunteer for the healthcare and literacy drives?",
          a: "We welcome individuals from all backgrounds! We specifically look for medical students, doctors, retired teachers, computer instructors, and ecological enthusiasts to assist in our diagnostic health camps and rural classrooms.",
        },
        {
          q: "How can corporate partners collaborate through CSR?",
          a: "IKC is fully certified for Corporate Social Responsibility (CSR) projects. We collaborate with companies to run targeted health clinics, build computer learning centers, and execute afforestation drives with verifiable impact reviews.",
        },
      ];

  return (
    <div className="w-full bg-[#FAF7E6] overflow-hidden min-h-screen">
      <section className="relative min-h-[45vh] flex items-center justify-center bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#0f766e_1px,transparent_1px)] opacity-20 pointer-events-none" style={{ backgroundSize: "24px 24px" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #020617, #0f172a, rgba(2, 6, 23, 0.9))",
            zIndex: 1,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
          <FadeIn direction="down" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-6 font-sans-modern">
              {settings?.contactHeroEyebrow || "Connect With Us"}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display mb-4">
              {settings?.contactHeroTitle || "Get in Touch & Volunteer"}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm text-slate-400 font-sans-modern leading-relaxed max-w-xl mx-auto">
              {settings?.contactHeroDescription || "Have questions about our rural welfare programs, donation transparency, or wish to join as a field volunteer? We would love to hear from you."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <FadeIn direction="right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
                {settings?.contactOfficeTitle || "Our Office"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-6">
                {settings?.contactOfficeTitle || "Headquarters Coordinates"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans-modern mb-8">
                {settings?.contactOfficeDescription || "Our central operational team coordinates medical diagnosticians, rural teaching materials, and plantation supplies from our Newtown office in Kolkata."}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-650 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-sans-modern mb-1">Office Address</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-sans-modern font-semibold leading-relaxed">
                      {settings?.contactAddress || "NewTown, Kolkata, West Bengal, India - 700135"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-655 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-sans-modern mb-1">Email Inquiry</h4>
                    <a href={`mailto:${settings?.contactEmail || "info@ikc.org.in"}`} className="text-xs sm:text-sm text-teal-700 hover:text-teal-800 font-semibold font-sans-modern transition-colors">
                      {settings?.contactEmail || "info@ikc.org.in"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-650 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-sans-modern mb-1">Phone Line</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-sans-modern font-semibold">
                      {settings?.contactPhone || "+91 33 2419 0921"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7E6] flex items-center justify-center text-teal-650 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider font-sans-modern mb-1">Inquiry Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-850 font-sans-modern font-medium">
                      {settings?.contactHours || "Monday – Friday: 10:00 AM – 06:00 PM IST"}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="left">
              <ContactForm
                title={settings?.contactFormTitle}
                description={settings?.contactFormDescription}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeIn direction="down">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-teal-50 text-teal-800 border border-teal-100 mb-6 font-sans-modern">
              Helpful Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
              Common Questions
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq: { q: string; a: string }, idx: number) => (
            <StaggerItem key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7E6] flex items-center justify-center text-teal-700 shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display mb-2">{faq.q}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans-modern">{faq.a}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}