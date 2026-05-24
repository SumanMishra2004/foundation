import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, Users, Leaf, Award, Ambulance, HandHeart, Sparkles, ArrowRight, Target, Lightbulb } from 'lucide-react';

export default function Home() {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: 'Education & Knowledge',
      description: 'Establishing schools, colleges, and skill development institutes. Organizing conferences, seminars, and providing scholarships.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      description: 'Instituting award programs and honors for excellence in education, research, teaching, and social contribution.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Ambulance,
      title: 'Healthcare & Medical',
      description: 'Establishing hospitals, health centers, mobile clinics, and organizing health camps including immunization programs.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Social Welfare',
      description: 'Supporting children, women, youth, senior citizens, and marginalized communities with essential services.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Culture & Sports',
      description: 'Promoting Indian culture through arts, music, dance, and organizing sports events and competitions.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Leaf,
      title: 'Environment',
      description: 'Tree plantation, environmental awareness, wildlife conservation, and promoting eco-friendly practices.',
      gradient: 'from-teal-500 to-green-500',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Lives Impacted' },
    { number: '50+', label: 'Programs Active' },
    { number: '100+', label: 'Team Members' },
    { number: '20+', label: 'Years of Service' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-10 flex justify-center animate-fade-in-down">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-60 animate-glow"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="IKC Logo" 
                    width={128}
                    height={128}
                    className="p-3"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Integrated Knowledge
              </span>
              <span className="block text-slate-900">and Care</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Empowering lives through knowledge, healthcare, and community welfare
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              A charitable trust dedicated to holistic social development through education, healthcare, research, and community welfare initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link href="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" className="border-2 border-slate-300 text-slate-900 font-bold px-8 py-6 text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto">
                  Our Programs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="card-modern group hover-lift animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-lg font-medium">
                  To create a just, compassionate, and knowledgeable society where every individual has equal access to education, healthcare, and opportunities for a dignified and empowered life.
                </p>
              </CardContent>
            </div>

            {/* Mission */}
            <div className="card-modern group hover-lift animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-lg font-medium">
                  To drive inclusive development through education, healthcare, research, skill building, and social welfare initiatives that strengthen communities, nurture talent, and promote sustainable growth.
                </p>
              </CardContent>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="section-spacing bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Focus Areas</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We work across multiple domains to create sustainable impact in communities
            </p>
          </div>

          {/* Focus Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="card-modern group cursor-pointer hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-base leading-relaxed font-normal">
                    {area.description}
                  </p>
                </CardContent>
              </div>
            ))}
          </div>

          {/* Explore Button */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/programs">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl">
                Explore All Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-spacing bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Our Commitment</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
              At IKC, we believe that <strong>knowledge empowers</strong> and <strong>care transforms</strong>. Through integrated efforts across education, healthcare, and social welfare, we strive to build resilient communities.
            </p>
          </div>

          {/* Commitment Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, label: 'Education' },
              { icon: Ambulance, label: 'Healthcare' },
              { icon: Users, label: 'Community' },
              { icon: Leaf, label: 'Environment' },
            ].map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl text-center group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-300 group-hover:text-pink-300 transition-colors" />
                <p className="font-semibold text-lg text-slate-50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Ready to Make a <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Difference?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 font-medium leading-relaxed">
              Join us in our mission to empower communities and create lasting positive impact through integrated social development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto">
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-2 border-slate-300 text-slate-900 font-bold px-8 py-6 text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto">
                  Learn About IKC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
