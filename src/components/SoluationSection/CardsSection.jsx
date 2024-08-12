import React from "react";
import { FaTruck, FaBox, FaHandshake } from "react-icons/fa";

const CardsSection = () => {
  return (
    <div className="relative ">
      {/* Background with linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(161,71,39,1) 0%, rgba(88,88,88,1) 0%)",
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center h-full rounded">
        <div className="max-w-4xl mx-auto p-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F05326] text-white rounded-3xl shadow-2xl backdrop-blur-lg p-6 flex flex-col items-start justify-center h-full">
              <FaTruck className="text-4xl mb-4" />
              <p className="text-base">
                This card represents transportation solutions and features a
                description of how our services can benefit you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white bg-opacity-5 text-white rounded-3xl shadow-2xl backdrop-blur-lg p-6 flex flex-col items-start justify-center h-full">
              <FaBox className="text-4xl mb-4" />
              <p className="text-base">
                This card highlights packaging and storage solutions, providing
                an overview of our offerings in this area.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white bg-opacity-5 text-white rounded-3xl shadow-2xl backdrop-blur-lg p-6 flex flex-col items-start justify-center h-full">
              <FaHandshake className="text-4xl mb-4" />
              <p className="text-base">
                This card focuses on partnership opportunities and services,
                detailing how we collaborate with clients and partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
