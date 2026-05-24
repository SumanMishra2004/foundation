import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, Ambulance, Users, Heart, Leaf, AlertTriangle, PawPrint, Handshake, CheckCircle2 } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education & Knowledge',
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        'Establishing and supporting schools, colleges, coaching centers',
        'Organizing seminars, workshops, training programs',
        'Providing scholarships and learning resources',
        'Supporting research and innovation initiatives'
      ]
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      gradient: 'from-purple-500 to-pink-500',
      items: [
        'Award programs for excellence in education and research',
        'Recognizing social contributions and leadership',
        'Promoting talent and innovation',
        'Seed support for promising initiatives'
      ]
    },
    {
      icon: Ambulance,
      title: 'Healthcare & Medical',
      gradient: 'from-red-500 to-orange-500',
      items: [
        'Establishing hospitals and health centers',
        'Mobile health clinics and medical relief',
        'Health camps and immunization programs',
        'Emergency ambulance services'
      ]
    },
    {
      icon: Users,
      title: 'Social Welfare',
      gradient: 'from-green-500 to-emerald-500',
      items: [
        'Support for children, women, and senior citizens',
        'Food, shelter, and medical assistance programs',
        'Tribal welfare and rural development',
        'Support for persons with disabilities'
      ]
    },
    {
      icon: Heart,
      title: 'Culture & Sports',
      gradient: 'from-pink-500 to-rose-500',
      items: [
        'Promoting Indian culture and heritage',
        'Sports events and competitions',
        'Youth development programs',
        'Cultural celebrations and festivals'
      ]
    },
    {
      icon: Leaf,
      title: 'Environment',
      gradient: 'from-teal-500 to-green-500',
      items: [
        'Tree plantation and conservation',
        'Wildlife and biodiversity protection',
        'Organic farming promotion',
        'Eco-friendly advocacy'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Disaster Relief',
      gradient: 'from-orange-500 to-yellow-500',
      items: [
        'Emergency relief during natural disasters',
        'Support for affected communities',
        'Rehabilitation and recovery',
        'Community resilience building'
      ]
    },
    {
      icon: Handshake,
      title: 'Partnerships',
      gradient: 'from-indigo-500 to-blue-500',
      items: [
        'Collaboration with Government and NGOs',
        'Institutional partnerships',
        'CSR collaborations',
        'Network building for development'
      ]
    }
  ];

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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Focus Areas</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              Comprehensive programs addressing education, healthcare, social welfare, and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="card-modern group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {program.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                        <span className="font-normal leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl p-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 backdrop-blur-sm animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Our Commitment</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed font-medium">
                At IKC, we believe that <strong>knowledge empowers</strong> and <strong>care transforms</strong>.
              </p>
              <p className="text-lg leading-relaxed font-medium text-slate-200">
                Through integrated efforts across education, healthcare, and social welfare, we strive to build resilient communities and a better future for generations to come. Our programs are designed to address immediate needs while creating long-term sustainable solutions that empower individuals and strengthen communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
