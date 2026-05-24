import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Lightbulb, Users, Zap, Globe } from 'lucide-react';

export default function AboutPage() {
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
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Who We Are</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              Integrated Knowledge and Care (IKC) is a charitable trust dedicated to holistic social development by integrating education, healthcare, research, and community welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Intro paragraph */}
          <div className="mb-16 animate-fade-in-up">
            <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium">
              We work to create sustainable impact by empowering individuals and communities with knowledge, care, and opportunity—ensuring dignity, inclusion, and growth for all. Our integrated approach addresses the interconnected challenges facing communities today, from education and healthcare to environmental sustainability and social welfare.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div className="card-modern group hover-lift animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-lg font-medium">
                  To create a just, compassionate, and knowledgeable society where every individual has equal access to education, healthcare, and opportunities for a dignified and empowered life.
                </p>
              </CardContent>
            </div>

            <div className="card-modern group hover-lift animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-lg font-medium">
                  To drive inclusive development through education, healthcare, research, skill building, and social welfare initiatives that strengthen communities and promote sustainable growth.
                </p>
              </CardContent>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center mb-14 animate-fade-in-down">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Core Values</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Compassion',
                  description: 'We approach every challenge with empathy and care for human dignity and well-being.',
                  gradient: 'from-red-500 to-pink-500'
                },
                {
                  icon: Users,
                  title: 'Inclusion',
                  description: 'We believe in equal opportunities and support for all communities without discrimination.',
                  gradient: 'from-blue-500 to-purple-500'
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  description: 'We seek creative and sustainable solutions to complex social challenges.',
                  gradient: 'from-yellow-500 to-orange-500'
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="card-modern group hover-lift text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <CardHeader>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 text-lg font-normal leading-relaxed">{value.description}</p>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-3xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-4xl font-black mb-10 text-white">What We Do</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Education & Knowledge Advancement',
                  description: 'We establish and support schools, colleges, coaching centers, and skill development institutes. We organize conferences, seminars, workshops, and provide scholarships to ensure access to quality education for all.',
                  icon: '🎓'
                },
                {
                  title: 'Healthcare & Medical Services',
                  description: 'Our healthcare initiatives include establishing hospitals, health centers, mobile clinics, and organizing health camps for blood donation, immunization, and preventive care.',
                  icon: '🏥'
                },
                {
                  title: 'Social Welfare & Community Development',
                  description: 'We support vulnerable populations including children, women, youth, senior citizens, and persons with disabilities through comprehensive welfare programs.',
                  icon: '👥'
                },
                {
                  title: 'Environment & Sustainability',
                  description: 'We promote environmental conservation through tree plantation drives, wildlife protection, and advocacy for eco-friendly practices.',
                  icon: '🌱'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 pb-6 border-b border-slate-700/50 last:border-b-0">
                  <div className="text-4xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
