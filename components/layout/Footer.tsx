import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-8 border-t-4 border-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-extrabold text-xl text-blue-400">IKC</h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              Integrated Knowledge and Care - Empowering lives through knowledge, care, and community welfare.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group">
                <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group">
                <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group">
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group">
                <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-xl mb-5 text-blue-400">Quick Links</h3>
            <ul className="space-y-3 text-base text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-extrabold text-xl mb-5 text-blue-400">Contact Us</h3>
            <div className="flex flex-col gap-4 text-base text-slate-300">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg mt-0.5 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">Address</p>
                  <p className="text-sm">Generic City, State<br />Country - 000000</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg mt-0.5 group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">Email</p>
                  <a href="mailto:contact@ikctrust.org" className="text-sm hover:text-blue-400 transition-colors">
                    contact@ikctrust.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg mt-0.5 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">Phone</p>
                  <a href="tel:+1234567890" className="text-sm hover:text-blue-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-extrabold text-xl mb-5 text-blue-400">Our Mission</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              To drive inclusive development through education, healthcare, research, and social welfare initiatives.
            </p>
            <div className="p-4 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-2 border-blue-700 rounded-xl backdrop-blur-sm">
              <p className="text-sm text-blue-200 font-medium italic">
                &quot;Creating a just, compassionate, and knowledgeable society for all.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Integrated Knowledge and Care (IKC). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
