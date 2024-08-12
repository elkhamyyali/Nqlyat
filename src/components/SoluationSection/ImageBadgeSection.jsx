import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Single icon for all badges
import Naql1 from "../../assets/naql1.jpeg";
import Naql2 from "../../assets/naql2.jpeg";
import Naql3 from "../../assets/naql3.jpeg";
import Naql4 from "../../assets/4f.jpeg";

const ImageBadgeSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(161,71,39,1) 0%, rgba(88,88,88,1) 0%, rgba(79,79,79,1) 67%, rgba(143,63,40,1) 100%)",
        }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center mt-6 justify-center px-4 lg:px-32 py-8">
        <div className="w-full lg:max-w-6xl flex flex-col lg:flex-row gap-8">
          {/* Left Section with Images */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={Naql2}
                alt="Image 1"
                className="object-cover rounded-xl shadow-lg w-full h-40"
              />
              <img
                src={Naql1}
                alt="Image 2"
                className="object-cover rounded-xl shadow-lg w-full h-72"
              />
              <img
                src={Naql3}
                alt="Image 3"
                className="object-cover rounded-xl shadow-lg w-full h-72 transform -translate-y-32"
              />
              <img
                src={Naql4}
                alt="Image 4"
                className="object-cover rounded-xl shadow-lg w-full h-40"
              />
            </div>
          </div>

          {/* Right Section with Badges */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <h3 className="text-[#F05326] mb-4 font-inter text-center text-xl lg:text-left">
              NQLYAT loading platform
            </h3>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                "Transportation Solutions",
                "Shipping",
                "Charger",
                "Middle East",
                "North Africa",
                "Loads",
                "Communication",
                "Agreements",
                "Acceleration",
                "Business Growth",
                "Ease",
              ].map((text) => (
                <div
                  key={text}
                  className="bg-white bg-opacity-10 text-white rounded-full shadow-sm backdrop-blur-lg px-4 py-3 flex items-center justify-center"
                >
                  <FaCheckCircle className="text-orange-600 mr-2" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBadgeSection;
