import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/team`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
    console.log('Fetched team members:', teamMembers); // Debug log
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-white drop-shadow-lg">Our Team</h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-7 rounded-full"></div>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-medium">
              Meet the dedicated individuals driving positive change in communities
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              Leadership & Dedication
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Our team consists of passionate individuals committed to creating meaningful social impact. 
              With diverse backgrounds in education, healthcare, social work, and community development, 
              we work together to empower communities and drive positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mission-Driven</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Every team member is deeply committed to our mission of inclusive development and social welfare.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We believe in the power of teamwork and partnerships to achieve greater social impact.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We continuously seek creative solutions to address complex social challenges effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {teamMembers.length === 0 ? (
            <div className="text-center py-16">
              <Card className="max-w-2xl mx-auto bg-white shadow-2xl border-2 border-blue-100">
                <CardContent className="pt-16 pb-16">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-5xl">👥</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Team Information Coming Soon</h3>
                  <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    Our team information will be available soon. Please check back later.
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member) => (
                <Card key={member.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-2 border-transparent hover:border-blue-500 hover:-translate-y-3">
                  <CardHeader className="pb-4">
                    <div className="relative w-full h-72 mb-5 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </CardTitle>
                    <p className="text-blue-600 font-bold text-base mt-2">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 text-base leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
