import { Star } from "lucide-react";
import React from "react";
import Person from "../assets/personcard.jpeg";

const SectionComponent = () => {
  return (
    <section className="relative bg-[#383838] p-8 overflow-hidden pt-52 pb-28">
      {/* Left Circular Background */}
      <div className="absolute inset-0 pt-44">
        <div className="relative h-full w-full">
          <div className="absolute inset-0">
            <div
              className="absolute inset-y-0 left-0 w-1/2 clip-left bg-orange-600"
              style={{ transform: "translateX(0%) translateY(10%)" }} // Adjust as needed
            ></div>
          </div>
        </div>
      </div>

      {/* Right Circular Background */}
      <div className="absolute inset-0 pt-44">
        <div className="relative h-full w-full">
          <div className="absolute inset-0">
            <div
              className="absolute inset-y-0 right-0 w-1/2 clip-right bg-orange-600"
              style={{ transform: "translateX(0%) translateY(10%)" }} // Adjust as needed
            ></div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mb-32 relative z-10">
        <button className="bg-white text-orange-600 rounded-full py-2 px-5 transition duration-300">
          Click Me
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-3xl font-bold text-white">
          What <span className="text-orange-600 text-2xl">Our Client</span> Says
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 max-w-sm shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src={Person}
              alt="Ahmed"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-xl">Ahmed</h3>
              <p className="text-gray-600">Owner</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Lorem Ipsum Dolor Sit Amet Consectetur. Tincidunt Pharetra Duis Enim
            Donec Etiam Tellus. Ac Malesuada Bibendum Faucibus Sollicitudin In
            Amet At. Mauris Donec Pellentesque Sit Velit Massa Sem Eget Ligula.
            Morbi Elit Quis Placerat Pharetra In.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 max-w-sm shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src={Person}
              alt="Ahmed"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-xl">Ahmed</h3>
              <p className="text-gray-600">Owner</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Lorem Ipsum Dolor Sit Amet Consectetur. Tincidunt Pharetra Duis Enim
            Donec Etiam Tellus. Ac Malesuada Bibendum Faucibus Sollicitudin In
            Amet At. Mauris Donec Pellentesque Sit Velit Massa Sem Eget Ligula.
            Morbi Elit Quis Placerat Pharetra In.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 max-w-sm shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src={Person}
              alt="Ahmed"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-xl">Ahmed</h3>
              <p className="text-gray-600">Owner</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Lorem Ipsum Dolor Sit Amet Consectetur. Tincidunt Pharetra Duis Enim
            Donec Etiam Tellus. Ac Malesuada Bibendum Faucibus Sollicitudin In
            Amet At. Mauris Donec Pellentesque Sit Velit Massa Sem Eget Ligula.
            Morbi Elit Quis Placerat Pharetra In.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          img {
            transform: none !important;
          }
        }

        .clip-right {
          clip-path: circle(29% at 100% 51%);
        }
        .clip-left {
          clip-path: circle(29% at 0% 51%);
        }
      `}</style>
    </section>
  );
};

export default SectionComponent;
