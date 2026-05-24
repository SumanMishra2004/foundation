'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import staticTeamMembers from '@/data/team';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = staticTeamMembers;

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
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              Dedicated individuals driving positive change in communities
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="card-modern group hover-lift overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <CardHeader className="pb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-purple-600 mt-2">{member.role}</p>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Join Our Mission</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            We're always looking for passionate individuals who want to make a difference. If you share our vision, we'd love to hear from you.
          </p>
        </div>
      </section>
    </div>
  );
}
