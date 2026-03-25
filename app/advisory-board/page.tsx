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
  const designations = [
    "Education Expert",
    "Healthcare Specialist",
    "Social Worker",
    "Community Organizer",
    "Youth Mentor",
    "Cultural Advisor",
    "Sports Coach",
  ];
  const abouts = [
    "Arav is an education expert with over 20 years of experience in curriculum development and teacher training.",
    "Pinky is a healthcare specialist focused on improving access to medical services in rural areas.",
    "Rohit is a social worker dedicated to empowering marginalized communities through grassroots initiatives.",
    "Anjali is a community organizer who has successfully mobilized resources for various social causes.",
    "Suresh is a youth mentor who has guided countless young individuals towards successful careers.",
    "Priya is a cultural advisor passionate about preserving and promoting traditional arts and culture.",
    "Vikram is a sports coach who has trained athletes to compete at national and international levels.",
  ];

  const AdvisoryData = Array.from({ length: 50 }, (_, index) => {
    const name = names[index % names.length];
    const designation = designations[index % designations.length];
    const about = abouts[index % abouts.length];
    const email = `${name.split(" ")[0].toLowerCase()}.${name.split(" ")[1].toLowerCase()}@gmail.com`;
    const image = `https://i.pravatar.cc/150?img=${index + 1}`;
    return {
      index: index + 1,
      name,
      designation,
      about,
      email,
      image,
    };
  });
  console.log("Advisory Board Data:", AdvisoryData); // Debug log to verify data structure
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
        <div className="px-5 md:px-5 lg:px-3 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {AdvisoryData.map((member) => {
            return (
              <Card key={member.index} className=" max-w-lg border-0 shadow-2xl">
                <CardHeader className="px-4 py-2">
                  <div className=" items-center flex gap-4 sm:items-center lg:h-14 md:items-start">
                    <section className="flex-shrink-0 w-[100px] h-[100px] lg:w-16 lg:h-16 border-2 border-green-500 rounded-full overflow-hidden ">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        
                        className="rounded-full border-2 border-blue-200 object-cover"
                      />
                    </section>
                    <section>
                      <h3 className="text-xl lg:text-lg font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-[16px] text-blue-600 font-bold">
                        {member.designation}
                      </p>
                    </section>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 p-4">
                  <p className="text-gray-700 text-lg md:text-sm md:h-25">
                    {member.about}
                  </p>
                  <p className="text-lg md:text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className=" group relative text-blue-500 hover:underline font-bold"
                    >
                      <div className="hidden group-hover:block absolute translate-y-[-15%] left-18 md:left-16 border border-1 w-fit p-2 rounded-full bg-amber-50">
                        {member.email}
                      </div>
                      Contact
                    </a>
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
