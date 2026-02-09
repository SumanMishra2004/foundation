import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, Users, Leaf, Award, Ambulance, HandHeart, Sparkles } from 'lucide-react';

export default function Home() {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: 'Education & Knowledge',
      description: 'Establishing schools, colleges, and skill development institutes. Organizing conferences, seminars, and providing scholarships.',
      color: 'bg-blue-500',
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      description: 'Instituting award programs and honors for excellence in education, research, teaching, and social contribution.',
      color: 'bg-purple-500',
    },
    {
      icon: Ambulance,
      title: 'Healthcare & Medical',
      description: 'Establishing hospitals, health centers, mobile clinics, and organizing health camps including immunization programs.',
      color: 'bg-red-500',
    },
    {
      icon: Users,
      title: 'Social Welfare',
      description: 'Supporting children, women, youth, senior citizens, and marginalized communities with essential services.',
      color: 'bg-green-500',
    },
    {
      icon: Heart,
      title: 'Culture & Sports',
      description: 'Promoting Indian culture through arts, music, dance, and organizing sports events and competitions.',
      color: 'bg-pink-500',
    },
    {
      icon: Leaf,
      title: 'Environment',
      description: 'Tree plantation, environmental awareness, wildlife conservation, and promoting eco-friendly practices.',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24 md:py-36 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-top duration-700">
              <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full p-5 shadow-2xl ring-4 ring-white/20 hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="IKC Logo" 
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Integrated Knowledge and Care
            </h1>
            <p className="text-2xl md:text-3xl mb-3 text-blue-50 font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Empowering Lives through Knowledge & Care
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              A charitable trust dedicated to holistic social development through education, healthcare, research, and community welfare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <Link href="/about">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 font-bold w-full sm:w-auto shadow-xl text-lg px-8 py-6 transition-all duration-300">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-700 hover:scale-105 font-bold w-full sm:w-auto text-lg px-8 py-6 transition-all duration-300">
                  Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-blue-600 shadow-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Sparkles className="w-7 h-7 text-blue-600" />
                  </div>
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  To create a just, compassionate, and knowledgeable society where every individual has equal access to education, healthcare, and opportunities for a dignified and empowered life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 shadow-2xl bg-gradient-to-br from-green-50 to-white hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <HandHeart className="w-7 h-7 text-green-600" />
                  </div>
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  To drive inclusive development through education, healthcare, research, skill building, and social welfare initiatives that strengthen communities, nurture talent, and promote sustainable and ethical growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 tracking-tight">Our Core Focus Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-5 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              We work across multiple domains to create sustainable impact in communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500 bg-white hover:-translate-y-3 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl ${area.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base leading-relaxed font-normal">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg">
                Explore All Programs
              </Button>
            </Link>
          </div>
        
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Commitment</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
              At IKC, we believe that <strong className="text-white">knowledge empowers</strong> and <strong className="text-white">care transforms</strong>. Through integrated efforts across education, healthcare, and social welfare, we strive to build resilient communities and a better future for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {[
              { label: 'Education Programs', icon: GraduationCap },
              { label: 'Healthcare Services', icon: Ambulance },
              { label: 'Community Support', icon: Users },
              { label: 'Environment Care', icon: Leaf },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors">
                <item.icon className="w-10 h-10 mx-auto mb-3 text-white" />
                <p className="font-semibold text-lg text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Join us in our mission to empower communities and create lasting positive impact through integrated social development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/team">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full sm:w-auto shadow-lg">
                Meet Our Team
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold w-full sm:w-auto">
                Learn About IKC
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
