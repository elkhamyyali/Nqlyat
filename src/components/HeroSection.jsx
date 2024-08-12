import React from "react";
import heroImage from "../assets/herosection.jpeg";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center pt-16">
      {/* Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Intermediaries in <br />
          <span className="text-[#F05326]">"NQLYAT solutions"</span>
        </h1>

        <p className="text-lg md:text-2xl w-full max-w-2xl capitalize text-center">
          can now transport more cargo and tackle any logistical challenge,
          thanks to access to the largest fleet and the widest data in the
          market.
        </p>

        <button className="mt-8 px-10 py-3 border border-orange-400 bg-white text-[#F05326] rounded-3xl hover:bg-orange-600 hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
