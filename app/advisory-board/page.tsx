"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import {AdvisoryData} from "../../data/advisory-Board/advisory";
const page = () => {

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 md:py-28  overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-white">
            Advisory Board
          </h1>
          <div className="w-36 h-1 bg-white/50 mx-auto mb-7"></div>
          <p className="px-5 md:px-0 text-xl md:text-2xl text-blue-50 font-medium ">
            It acts as a trusted, neutral third party for leaders to test ideas
            before implementation.
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="px-5 md:px-5 lg:px-3 max-w-8xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {AdvisoryData.map((member) => {
            return (
              <Card
                key={member.id}
                className=" border-0 shadow-2xl h-full p-5"
              >
                <CardHeader className="">
                  <div className=" items-center flex gap-4  lg:h-14">
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
                   
                    </section>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col ">
                  <p className="text-gray-700 text-lg md:text-sm overflow-hidden text-justify">
                    {member.bio}
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
