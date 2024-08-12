import React from "react";
import Naql1 from "../assets/naql1.jpeg"; // Replace with your image
import Naql2 from "../assets/naql2.jpeg"; // Replace with your image
import Naql3 from "../assets/naql3.jpeg"; // Replace with your image

const TextCardSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Naql2}
          alt="Background Image"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        ></div>
      </div>

      {/* Section with Text and Cards */}
      <div className="relative z-10 max-w-6xl mx-auto p-8 text-center">
        <div className="mb-12">
          <p className="text-lg text-white mx-auto max-w-2xl">
            Elevate your organization with the leading Naqlyat loading panel for
            achieving a national vision for your loads. Expand your capacity and
            profitability by using industry-leading load loading platforms for
            brokers from "NQLYATsolutions".
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-[#F05326] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.4px] backdrop-filter-[blur(2.4px)] max-w-xs w-full overflow-hidden">
            <img
              src={Naql1}
              alt="Card Image 1"
              className="object-cover w-11/12 mt-2 rounded-2xl h-40 mx-auto"
            />
            <div className="p-4">
              <p className="text-white mb-4">
                Description of service 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(255,255,255,0.03)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.4px] backdrop-filter-[blur(2.4px)] max-w-xs w-full overflow-hidden">
            <img
              src={Naql2}
              alt="Card Image 2"
              className="object-cover w-11/12 mt-2 rounded-2xl h-40 mx-auto"
            />
            <div className="p-4">
              <p className="text-white mb-4">
                Description of service 2. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(255,255,255,0.03)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.4px] backdrop-filter-[blur(2.4px)] max-w-xs w-full overflow-hidden">
            <img
              src={Naql3}
              alt="Card Image 3"
              className="object-cover w-11/12 mt-2 rounded-2xl h-40 mx-auto"
            />
            <div className="p-4">
              <p className="text-white mb-4">
                Description of service 3. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-white text-[#F05326] font-inter  rounded-full shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextCardSection;
