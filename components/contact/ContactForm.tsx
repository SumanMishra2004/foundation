"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

export function ContactForm({ title, description }: { title?: string; description?: string }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-2xl shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 font-display mb-2">{title || "Send an Inquiry Message"}</h3>
      <p className="text-slate-550 text-xs font-sans-modern leading-relaxed mb-6">
        {description || "Fill out the form below. Our support team or field coordinators will review your query and reply within 48 hours."}
      </p>

      {formSubmitted ? (
        <div className="bg-teal-50 border border-teal-200 text-teal-850 p-6 rounded-xl text-center space-y-3">
          <CheckCircle className="w-8 h-8 text-teal-600 mx-auto" />
          <h4 className="font-bold text-sm font-display">Inquiry Sent Successfully</h4>
          <p className="text-xs text-teal-700 font-sans-modern">
            Thank you for contacting IKC. A trust coordinator will reply shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold text-slate-650 uppercase tracking-wider mb-2 font-sans-modern">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Priyan Mondal"
                className="w-full bg-[#FAF7E6] border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[11px] font-bold text-slate-650 uppercase tracking-wider mb-2 font-sans-modern">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-[#FAF7E6] border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-[11px] font-bold text-slate-655 uppercase tracking-wider mb-2 font-sans-modern">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-[#FAF7E6] border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-[11px] font-bold text-slate-650 uppercase tracking-wider mb-2 font-sans-modern">
                Inquiry Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#FAF7E6] border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-teal-600 transition-colors"
              >
                <option value="General Inquiry">General Trust Inquiry</option>
                <option value="Volunteering">Apply to Volunteer</option>
                <option value="Donation Query">Donation &amp; 80G Query</option>
                <option value="Partner with Us">Partner / CSR Collaboration</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-bold text-slate-650 uppercase tracking-wider mb-2 font-sans-modern">
              Message Details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Detail your question or specify the volunteer activities you are interested in..."
              className="w-full bg-[#FAF7E6] border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-teal-600 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3.5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md shadow-teal-900/10"
          >
            Send Message <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}