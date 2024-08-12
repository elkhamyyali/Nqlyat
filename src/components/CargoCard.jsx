import React from "react";
import N1 from "../assets/na1.jpeg";
import N2 from "../assets/na2.jpeg";

const CargoCard = ({ imgSrc, text }) => {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg relative transform md:translate-y-36 z-10 transition-transform duration-300 ease-in-out">
      <img className="w-full h-64 object-cover" src={imgSrc} alt="Cargo" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-800 via-orange-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="text-sm font-medium">{text}</p>
      </div>
    </div>
  );
};

const ImageOverlaySection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-2">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src={N1}
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <p className="w-full md:w-1/2 text-base mb-4 md:mb-0 md:transform md:translate-y-16 transition-transform duration-300 ease-in-out">
            Discover Our Innovative Solutions
            <span className="text-orange-700 font-inter">
              Experience Efficiency
            </span>
            Discover Our Innovative Solutions
          </p>
          <p className="w-full md:w-1/2 text-base text-left md:transform md:translate-y-20 transition-transform duration-300 ease-in-out">
            <span className="text-orange-700 font-inter">
              Experience Efficiency
            </span>
            and Reliability Like Never Before
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <CargoCard
            imgSrc={N2}
            text="Optimize your logistics with real-time tracking and reliable services."
          />
          <CargoCard
            imgSrc={N2}
            text="Optimize your logistics with real-time tracking and reliable services."
          />
          <CargoCard
            imgSrc={N2}
            text="Optimize your logistics with real-time tracking and reliable services."
          />
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .md\\:transform {
            transform: none !important;
          }

          .md\\:translate-y-16 {
            transform: none !important;
          }

          .md\\:translate-y-20 {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageOverlaySection;
