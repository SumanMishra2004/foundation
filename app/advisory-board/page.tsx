'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AdvisoryData } from '@/data/advisory-Board/advisory';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

export default function AdvisoryBoardPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden py-20">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
              Advisory <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Board</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              Distinguished experts and thought leaders guiding our mission
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Visionary Leadership
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Our Advisory Board comprises internationally recognized experts and scholars who bring decades of experience and insight to guide our strategic initiatives and ensure our work maintains the highest standards of excellence and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: 'Global Experts', value: '9+' },
              { icon: Globe, label: 'Countries', value: '5+' },
              { icon: BookOpen, label: 'Publications', value: '1000+' },
              { icon: Users, label: 'Mentored', value: '500+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-modern text-center group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="mb-4">
                  <stat.icon className="w-12 h-12 mx-auto text-purple-600 group-hover:text-pink-600 transition-colors" />
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AdvisoryData.map((member, index) => (
              <div
                key={member.id}
                className="card-modern group hover-lift overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {member.name}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl p-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 backdrop-blur-sm animate-fade-in-up text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Expert Guidance</h2>
            <p className="text-lg leading-relaxed font-medium text-slate-200">
              Our Advisory Board members bring world-class expertise in education, healthcare, research, and social development. Their guidance helps us maintain excellence, drive innovation, and create meaningful impact across all our initiatives and programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
