import Certificates from "@/components/sections/Certificates";

export const metadata = {
  title: "Certificates Registry | Lorem Summit 2025",
  description: "Verify and download participation and presentation certificates for the Lorem Summit 2025 conference.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-navy-dark pt-20">
      <Certificates />
    </main>
  );
}
