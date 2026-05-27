"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Certificates() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [certData, setCertData] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError("");
    setCertData(null);
    setShowPreview(false);

    try {
      const response = await fetch(`/api/certificate?email=${encodeURIComponent(email.trim().toLowerCase())}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("No certificate record found for this email address. Please make sure you enter the email used during registration.");
        } else {
          throw new Error("An error occurred while fetching your certificate. Please try again later.");
        }
      }
      const data = await response.json();
      setCertData(data);
    } catch (err: any) {
      setError(err.message || "Failed to lookup certificate.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="certificates" className="py-24 bg-gradient-to-b from-navy-dark via-navy to-navy-dark text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-amber/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-light">
            Post-Conference Portal
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl font-normal tracking-tight">
            Download Certificates
          </h2>
          <div className="w-16 h-1 bg-amber mx-auto rounded-full" />
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            Registered attendees, speakers, and organizers can query, preview, and download their official certificates of participation and presentation.
          </p>
        </div>

        {/* Lookup Container */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl hero-glass-glow">
            <h3 className="text-lg font-semibold text-center text-white">Certificate Search</h3>
            <p className="text-xs text-white/50 text-center">Enter the email address you registered with to retrieve your certificate.</p>
            
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-1">
                <input
                  type="email"
                  required
                  placeholder="e.g. researcher@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-navy-dark border border-white/[0.12] rounded-2xl px-4 py-3.5 text-sm placeholder:text-white/30 text-white focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/50 transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-amber hover:bg-amber-dark text-navy font-bold py-6 rounded-2xl shadow-lg shadow-amber/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Searching Registry...
                  </div>
                ) : (
                  "Retrieve Certificate"
                )}
              </Button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/25 rounded-2xl p-4 text-sm text-red-200 flex gap-3 animate-fade-in">
                <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="leading-relaxed">{error}</p>
              </div>
            )}

            {/* Success Results Card */}
            {certData && (
              <div className="border-t border-white/10 pt-6 space-y-6 animate-fade-in">
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-amber-light block">
                        Record Found
                      </span>
                      <h4 className="font-semibold text-lg text-white mt-1">{certData.name}</h4>
                      <p className="text-xs text-white/50">{certData.email}</p>
                    </div>
                    <span className="bg-amber/15 border border-amber/25 text-amber text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      {certData.role}
                    </span>
                  </div>

                  {certData.presentationTitle && (
                    <div className="border-t border-white/[0.04] pt-3">
                      <p className="text-[10px] text-white/40 uppercase font-semibold">Presentation Title</p>
                      <p className="text-sm italic text-white/80 mt-0.5">"{certData.presentationTitle}"</p>
                    </div>
                  )}

                  <div className="flex justify-between text-[11px] text-white/40 border-t border-white/[0.04] pt-3">
                    <span>Verification Code:</span>
                    <span className="font-mono text-white/60">{certData.certificateCode}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => setShowPreview(true)}
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-medium py-6 rounded-2xl backdrop-blur-sm transition-all duration-300"
                  >
                    Preview Certificate
                  </Button>
                  <Button
                    onClick={() => {
                      setShowPreview(true);
                      setTimeout(() => {
                        window.print();
                      }, 300);
                    }}
                    className="flex-1 bg-amber hover:bg-amber-dark text-navy font-bold py-6 rounded-2xl shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/35 transition-all duration-300"
                  >
                    Print / Download PDF
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certificate Rendering & Modal Preview */}
        {showPreview && certData && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in no-print">
            <div className="w-full max-w-4xl bg-navy-dark border border-white/10 rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
              {/* Close Button */}
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-xl font-semibold">Certificate Preview</h4>
                <p className="text-xs text-white/50">Verify details before printing. In the print dialog, set layout to <b>Landscape</b> and margins to <b>None</b> for best results.</p>
              </div>

              {/* On-screen preview container (Scale-to-fit scroll container) */}
              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white p-4">
                <div className="min-w-[800px] max-w-[842px] aspect-[1.414] bg-white text-navy p-12 border-[8px] border-double border-amber relative flex flex-col justify-between select-none mx-auto shadow-inner">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-amber/30 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-amber/30 pointer-events-none" />
                  <div className="absolute inset-4 border border-amber/20 pointer-events-none" />

                  {/* Header */}
                  <div className="text-center space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-dark block">
                      Official Conference Certificate
                    </span>
                    <h1 className="font-serif text-3xl tracking-wide uppercase text-navy">
                      Certificate of {certData.role === "Presenter" ? "Presentation" : "Participation"}
                    </h1>
                    <div className="w-24 h-[1px] bg-amber/40 mx-auto" />
                  </div>

                  {/* Body Text */}
                  <div className="text-center space-y-6 my-4">
                    <p className="text-sm italic font-serif text-navy/60">This certificate is proudly awarded to</p>
                    <h2 className="font-serif text-3xl font-normal text-navy tracking-wide border-b border-amber/10 pb-2 max-w-md mx-auto">
                      {certData.name}
                    </h2>
                    <p className="text-sm leading-relaxed max-w-2xl mx-auto text-navy/70">
                      for active contribution and attendance as a <span className="font-bold text-navy">{certData.role}</span> at the 
                      <span className="font-semibold block text-base text-amber-dark mt-1">Lorem Summit 2025</span>
                      held on 15 November 2025 at the Biswa Bangla Convention Centre, Kolkata, India.
                    </p>

                    {certData.presentationTitle && (
                      <p className="text-xs italic leading-relaxed text-navy/80 max-w-xl mx-auto mt-2">
                        Presenter of the research paper titled:<br />
                        <span className="font-serif font-bold text-sm text-navy mt-1 block">"{certData.presentationTitle}"</span>
                      </p>
                    )}
                  </div>

                  {/* Footer (Signatures & Crest) */}
                  <div className="flex justify-between items-end border-t border-amber/10 pt-6">
                    {/* Left Signature */}
                    <div className="text-center w-48 space-y-1">
                      <div className="h-8 font-serif italic text-navy/60 flex items-center justify-center border-b border-navy/20 pb-1">
                        Suman Mishra
                      </div>
                      <p className="text-[10px] font-bold text-navy/70 uppercase">Dr. Suman Mishra</p>
                      <p className="text-[9px] text-navy/40">General Chair, Steering Committee</p>
                    </div>

                    {/* Security Seal & Code */}
                    <div className="text-center flex flex-col items-center gap-1.5 shrink-0">
                      <div className="w-10 h-10 rounded-full border border-amber/40 bg-amber/5 flex items-center justify-center text-amber-dark text-[9px] font-bold tracking-tighter uppercase relative shadow-inner">
                        Seal
                        <div className="absolute inset-0.5 rounded-full border border-dashed border-amber/30 animate-spin-slow" />
                      </div>
                      <span className="font-mono text-[9px] text-navy/40 uppercase tracking-wider block">
                        ID: {certData.certificateCode}
                      </span>
                    </div>

                    {/* Right Signature */}
                    <div className="text-center w-48 space-y-1">
                      <div className="h-8 font-serif italic text-navy/60 flex items-center justify-center border-b border-navy/20 pb-1">
                        Nonummy Nibh
                      </div>
                      <p className="text-[10px] font-bold text-navy/70 uppercase">Prof. Nonummy Nibh</p>
                      <p className="text-[9px] text-navy/40">Organizing Chair, Local Committee</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  onClick={() => setShowPreview(false)}
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-medium py-6 px-6 rounded-2xl"
                >
                  Close Preview
                </Button>
                <Button
                  onClick={handlePrint}
                  className="bg-amber hover:bg-amber-dark text-navy font-bold py-6 px-8 rounded-2xl shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/35 transition-all duration-300"
                >
                  Print Certificate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PRINT-ONLY CSS RULES & DOM STRUCTURE */}
      {certData && (
        <div id="certificate-print-area" className="only-print bg-white text-navy font-sans select-none">
          <div className="w-[297mm] h-[210mm] p-[25mm] border-[10px] border-double border-[#D97706] relative flex flex-col justify-between">
            {/* Decorative Corner Accents */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#D97706]/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-[6px] border-r-[6px] border-[#D97706]/30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-[6px] border-l-[6px] border-[#D97706]/30 pointer-events-none" />

            {/* Header */}
            <div className="text-center space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#D97706] block">
                Official Conference Certificate
              </span>
              <h1 className="font-serif text-[42px] leading-none tracking-wide uppercase text-navy font-normal">
                Certificate of {certData.role === "Presenter" ? "Presentation" : "Participation"}
              </h1>
              <div className="w-36 h-[2px] bg-[#D97706]/40 mx-auto" />
            </div>

            {/* Body Content */}
            <div className="text-center space-y-8 my-6">
              <p className="text-[16px] italic font-serif text-navy/60">This certificate is proudly awarded to</p>
              <h2 className="font-serif text-[45px] font-normal text-navy tracking-wide border-b border-[#D97706]/20 pb-3 max-w-xl mx-auto">
                {certData.name}
              </h2>
              <p className="text-[16px] leading-relaxed max-w-3xl mx-auto text-navy/70">
                for active contribution and attendance as a <span className="font-bold text-navy">{certData.role}</span> at the 
                <span className="font-semibold block text-[20px] text-[#D97706] mt-2">Lorem Summit 2025</span>
                held on 15 November 2025 at the Biswa Bangla Convention Centre, Kolkata, India.
              </p>

              {certData.presentationTitle && (
                <p className="text-[14px] italic leading-relaxed text-navy/80 max-w-2xl mx-auto mt-4">
                  Presenter of the research paper titled:<br />
                  <span className="font-serif font-bold text-[18px] leading-relaxed text-navy mt-2 block">"{certData.presentationTitle}"</span>
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end border-t border-[#D97706]/20 pt-8">
              {/* Left Signature */}
              <div className="text-center w-64 space-y-2">
                <div className="h-10 font-serif italic text-[18px] text-navy/60 flex items-end justify-center border-b border-navy/20 pb-2">
                  Suman Mishra
                </div>
                <p className="text-[12px] font-bold text-navy/70 uppercase tracking-wider">Dr. Suman Mishra</p>
                <p className="text-[10px] text-navy/40">General Chair, Steering Committee</p>
              </div>

              {/* Security Seal */}
              <div className="text-center flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-[#D97706]/40 bg-[#D97706]/5 flex items-center justify-center text-[#D97706] text-[11px] font-bold tracking-tighter uppercase relative shadow-inner">
                  Seal
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#D97706]/30 animate-spin-slow" />
                </div>
                <span className="font-mono text-[10px] text-navy/40 uppercase tracking-wider block">
                  ID: {certData.certificateCode}
                </span>
              </div>

              {/* Right Signature */}
              <div className="text-center w-64 space-y-2">
                <div className="h-10 font-serif italic text-[18px] text-navy/60 flex items-end justify-center border-b border-navy/20 pb-2">
                  Nonummy Nibh
                </div>
                <p className="text-[12px] font-bold text-navy/70 uppercase tracking-wider">Prof. Nonummy Nibh</p>
                <p className="text-[10px] text-navy/40">Organizing Chair, Local Committee</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for handling dynamic print stylesheet */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print,
          header,
          footer,
          nav,
          section,
          main,
          aside {
            display: none !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          .only-print {
            display: block !important;
            visibility: visible !important;
          }
          #certificate-print-area {
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
            z-index: 99999 !important;
          }
          @page {
            size: A4 landscape !important;
            margin: 0 !important;
          }
        }
        .only-print {
          display: none;
        }
      `}</style>
    </section>
  );
}
