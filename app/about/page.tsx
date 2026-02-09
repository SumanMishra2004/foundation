import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-white drop-shadow-lg">Who We Are</h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-7 rounded-full"></div>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-medium">
              Integrated Knowledge and Care (IKC) is a charitable trust dedicated to holistic social development by integrating education, healthcare, research, and community welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
              We work to create sustainable impact by empowering individuals and communities with knowledge, care, and opportunity—ensuring dignity, inclusion, and growth for all. Our integrated approach addresses the interconnected challenges facing communities today, from education and healthcare to environmental sustainability and social welfare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <Card className="border-l-4 border-l-blue-600 shadow-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Target className="w-8 h-8 text-blue-600" />
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
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Lightbulb className="w-8 h-8 text-green-600" />
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

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-10 rounded-full"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Compassion',
                  description: 'We approach every challenge with empathy and care for human dignity.',
                  color: 'bg-gradient-to-br from-red-500 to-pink-600'
                },
                {
                  icon: Users,
                  title: 'Inclusion',
                  description: 'We believe in equal opportunities and support for all communities.',
                  color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We seek creative and sustainable solutions to social challenges.',
                  color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
                }
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-white border-2 border-transparent hover:border-blue-500 group">
                  <CardHeader>
                    <div className={`w-20 h-20 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg font-normal leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-slate-50 p-8 rounded-lg shadow-inner">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <div className="space-y-4 text-gray-800">
              <p className="text-base leading-relaxed">
                <strong className="text-gray-900 font-bold">Education & Knowledge Advancement:</strong> We establish and support schools, colleges, coaching centers, and skill development institutes. We organize conferences, seminars, workshops, and provide scholarships to ensure access to quality education for all.
              </p>
              <p className="text-base leading-relaxed">
                <strong className="text-gray-900 font-bold">Healthcare & Medical Services:</strong> Our healthcare initiatives include establishing hospitals, health centers, mobile clinics, and organizing health camps for blood donation, immunization, and preventive care.
              </p>
              <p className="text-base leading-relaxed">
                <strong className="text-gray-900 font-bold">Social Welfare & Community Development:</strong> We support vulnerable populations including children, women, youth, senior citizens, and persons with disabilities through comprehensive welfare programs.
              </p>
              <p className="text-base leading-relaxed">
                <strong className="text-gray-900 font-bold">Environment & Sustainability:</strong> We promote environmental conservation through tree plantation drives, wildlife protection, and advocacy for eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
