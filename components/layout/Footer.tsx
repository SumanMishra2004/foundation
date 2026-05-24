import Link from 'next/link';
import { Mail, MapPin, Heart, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IKC</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Integrated Knowledge and Care - Empowering lives through education, healthcare, and community welfare.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-600' },
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className={`w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} border border-slate-700/50 hover:border-slate-600`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold text-lg mb-6 text-slate-100">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Our Team', href: '/team' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-bold text-lg mb-6 text-slate-100">Contact</h3>
            <div className="space-y-5">
              <div className="flex gap-3 group">
                <div className="p-2.5 bg-slate-800/50 rounded-lg shrink-0 group-hover:bg-purple-600/30 transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Address</p>
                  <p className="text-sm text-slate-400">NewTown, Kolkata<br />India - 700135</p>
                </div>
              </div>
              <div className="flex gap-3 group">
                <div className="p-2.5 bg-slate-800/50 rounded-lg shrink-0 group-hover:bg-purple-600/30 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Email</p>
                  <a href="mailto:info@ikc.org.in" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">
                    info@ikc.org.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-bold text-lg mb-6 text-slate-100">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Creating a just, compassionate, and knowledgeable society where every individual has equal access to education and healthcare.
            </p>
            <div className="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
              <p className="text-sm text-purple-300 italic">
                &quot;Knowledge empowers, Care transforms.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Integrated Knowledge and Care (IKC). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">Terms</Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
