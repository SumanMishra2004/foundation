import Image from "next/image";
import React from "react";

const currentNotice = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-white">
            TATC Paper Submission
          </h1>
          <div className="w-42 h-1 bg-white/50 mx-auto mb-7"></div>
          <p className="px-5 md:px-0 text-xl md:text-2xl text-blue-50 font-medium ">
            22/04/2026 - 22/05/2023 <br />
            SCIENCE CITY
            <br />
            <span className="text-lg text-yellow-400 font-extrabold leading-2.5 tracking-wide">
              last date of submission 20/04/2026
            </span>
          </p>
        </div>
      </div>
      <section className="py-15">
        <div className="max-w-[80vw] flex flex-col md:flex-col lg:flex-row justify-between gap-15 mx-auto text-center ">
          <div className="">
            <Image
              src="/victoria.avif"
              width={400}
              height={400}
              alt="Victoria"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <article className="flex-1 flex flex-col gap-y-10">
            <div className="mx-left w-fit">
              <h2 className="text-xl text-left font-bold text-gray-900  relative mb-10">
                Call for Papers
                <svg
                  className="absolute left-0  overflow-hidden"
                  viewBox="0 0 200 30"
                  height="20"
                >
                  <path
                    d="M0 15 Q75 0 150 15"
                    stroke="#93c5fd"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </h2>

              <table>
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Category</th>
                    <th className="py-2 px-4 border ">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Abstract Submission</td>
                    <td className="py-2 px-4 border">20/04/2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Full Paper Submission</td>
                    <td className="py-2 px-4 border">20/05/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ml-auto w-fit">
              <h2 className="text-xl font-bold text-gray-900 text-right relative mb-10">
                Registration
                <svg
                  className="absolute right-0 overflow-hidden"
                  viewBox="0 0 200 30"
                  height="20"
                >
                  <path
                    d="M200 20 Q75 0 0 20"
                    stroke="#93c5fd"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </h2>
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Category</th>
                    <th className="py-2 px-4 border ">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Early Bird</td>
                    <td className="py-2 px-4 border">15/04/2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Regular</td>
                    <td className="py-2 px-4 border">20/04/2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Full Paper Submission</td>
                    <td className="py-2 px-4 border">20/05/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" w-fit">
              <h2 className="text-xl font-bold text-gray-900  text-left relative mb-10">
                Important Dates
                 <svg
                  className="absolute left-0  overflow-hidden"
                  viewBox="0 0 200 30"
                  height="20"
                >
                  <path
                    d="M0 15 Q85 0 250 20"
                    stroke="#93c5fd"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </h2>
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Event</th>
                    <th className="py-2 px-4 border">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Abstract Submission</td>
                    <td className="py-2 px-4 border">20/04/2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Full Paper Submission</td>
                    <td className="py-2 px-4 border">20/05/2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Full Paper Submission</td>
                    <td className="py-2 px-4 border">20/05/2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Full Paper Submission</td>
                    <td className="py-2 px-4 border">20/05/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ml-auto w-fit">
              <h2 className="text-xl font-bold text-right relative mb-10">Venue
                 <svg
                  className="absolute right-0 overflow-hidden"
                  viewBox="0 0 200 30"
                  height="20"
                >
                  <path
                    d="M200 10 Q85 0 0 12"
                    stroke="#93c5fd"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </h2>
              <p className="text-gray-700 text-lg text-right">Science City</p>
              <p className="text-md text-gray-500 text-right">
                J.B.S. Haldane Avenue, Topsia, Kolkata - 700046, West Bengal,
                India
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default currentNotice;
