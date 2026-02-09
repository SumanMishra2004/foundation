import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, Ambulance, Users, Heart, Leaf, AlertTriangle, PawPrint, Handshake } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education & Knowledge Advancement',
      color: 'bg-blue-500',
      items: [
        'Establishing and supporting schools, colleges, coaching centers, and skill development institutes',
        'Organizing conferences, seminars, workshops, training programs, and summer schools',
        'Providing scholarships, free education, coaching, and learning resources',
        'Supporting research, innovation, knowledge hubs, and publications'
      ]
    },
    {
      icon: Award,
      title: 'Awards, Recognition & Capacity Building',
      color: 'bg-purple-500',
      items: [
        'Instituting and organizing award programs, honors, and recognitions for excellence',
        'Recognizing achievements in education, research, teaching, and social contribution',
        'Promoting talent, leadership, and innovation through recognition',
        'Providing seed support for promising initiatives'
      ]
    },
    {
      icon: Ambulance,
      title: 'Healthcare & Medical Services',
      color: 'bg-red-500',
      items: [
        'Establishing and supporting hospitals, health centers, and diagnostic facilities',
        'Running mobile health clinics, dispensaries, and medical relief services',
        'Organizing health camps: blood donation, eye camps, immunization programs',
        'Providing ambulance and emergency support services'
      ]
    },
    {
      icon: Users,
      title: 'Social Welfare & Community Development',
      color: 'bg-green-500',
      items: [
        'Supporting children, women, youth, senior citizens, and persons with disabilities',
        'Providing food, shelter, clothing, education, and medical assistance',
        'Promoting tribal welfare and rural development programs',
        'Implementing inclusive social programs for marginalized communities'
      ]
    },
    {
      icon: Heart,
      title: 'Culture, Sports & Youth Engagement',
      color: 'bg-pink-500',
      items: [
        'Promoting Indian culture through music, dance, drama, and literature',
        'Organizing sports events, competitions, and sports academies',
        'Providing recreational facilities for youth development',
        'Celebrating national days, festivals, and honoring great personalities'
      ]
    },
    {
      icon: Leaf,
      title: 'Environment & Sustainability',
      color: 'bg-emerald-500',
      items: [
        'Tree plantation and environmental awareness programs',
        'Wildlife and biodiversity conservation initiatives',
        'Promotion of organic farming practices',
        'Advocacy for eco-friendly and sustainable living'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Humanitarian Aid & Disaster Relief',
      color: 'bg-orange-500',
      items: [
        'Providing emergency relief during natural calamities',
        'Supporting flood, earthquake, and drought-affected communities',
        'Rehabilitation and recovery assistance for disaster victims',
        'Building community resilience against future disasters'
      ]
    },
    {
      icon: PawPrint,
      title: 'Animal Welfare',
      color: 'bg-amber-500',
      items: [
        'Care, rescue, and rehabilitation of stray and abandoned animals',
        'Vaccination and sterilization programs',
        'Promoting compassion and humane treatment of all living beings',
        'Building animal shelters and veterinary care facilities'
      ]
    },
    {
      icon: Handshake,
      title: 'Collaboration & Partnerships',
      color: 'bg-indigo-500',
      items: [
        'Working with Government bodies and NGOs',
        'Partnering with institutions and CSR organizations',
        'Implementing welfare schemes at scale',
        'Building networks for sustainable social development'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-white drop-shadow-lg">Our Core Focus Areas</h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-7 rounded-full"></div>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-medium">
              Comprehensive programs addressing education, healthcare, social welfare, and sustainable development across communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500 bg-white hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl ${program.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {program.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-800 text-base">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="font-normal leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-l-4 border-l-blue-600 shadow-lg bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 text-lg leading-relaxed mb-4 font-medium">
                At IKC, we believe that <strong className="text-gray-900 font-bold">knowledge empowers</strong> and <strong className="text-gray-900 font-bold">care transforms</strong>.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                Through integrated efforts across education, healthcare, and social welfare, we strive to build resilient communities and a better future for generations to come. Our programs are designed to address immediate needs while creating long-term sustainable solutions that empower individuals and strengthen communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
