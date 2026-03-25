"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const page = () => {
  const names = [
    "Arav Meheta",
    "Pinky Sharma",
    "Rohit Basu",
    "Anjali Verma",
    "Suresh Kumar",
    "Priya Singh",
    "Vikram Patel",
  ];
  const designation = [
    "Education Expert",
    "Healthcare Specialist",
    "Social Worker",
    "Community Organizer",
    "Youth Mentor",
    "Cultural Advisor",
    "Sports Coach",
  ];
  const about = [
    "Arav is an education expert with over 20 years of experience in curriculum development and teacher training.",
    "Pinky is a healthcare specialist focused on improving access to medical services in rural areas.",
    "Rohit is a social worker dedicated to empowering marginalized communities through grassroots initiatives.",
    "Anjali is a community organizer who has successfully mobilized resources for various social causes.",
    "Suresh is a youth mentor who has guided countless young individuals towards successful careers.",
    "Priya is a cultural advisor passionate about preserving and promoting traditional arts and culture.",
    "Vikram is a sports coach who has trained athletes to compete at national and international levels.",
  ];
const[refinesdName, setRefinedName] = React.useState("");

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-white">
            Advisory Board
          </h1>
          <div className="w-36 h-1 bg-white/50 mx-auto mb-7"></div>
          <p className="sm:px-5 text-xl md:text-2xl text-blue-50 font-medium ">
            It acts as a trusted, neutral third party for leaders to test ideas
            before implementation.
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="px-5 md:px-5 lg:px-3 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 50 }, (_, i) => {
            return (
              <Card key={i} className="mb-4 max-w-lg">
                <CardHeader>
                  <div className="flex items-center gap-4 h-20">
                    <section className="w-20 border border-2 border-green-500 rounded-full overflow-hidden ">
                      <Image
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={names[Math.floor(Math.random() / 10)]}
                        width={100}
                        height={100}
                        className="rounded-full border border-2 border-blue-200"
                      />
                    </section>
                    <section>
                      <h3 className="text-xl font-bold text-gray-900">
                        {names[Math.floor(Math.random() * names.length)]}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        {
                          designation[
                            Math.floor(Math.random() * designation.length)
                          ]
                        }
                      </p>
                    </section>

                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {
                      about[Math.floor(Math.random()* about.length)]
                    }
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
