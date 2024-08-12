import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import logo from "../assets/nqlyatlogo.png";
import footerImage from "../assets/herosection.jpeg"; // Ensure you have the correct path to your background image

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-[#383838] px-6 md:px-32 pt-10 md:pt-14 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col space-y-4 md:space-y-8">
            {/* Logo and Text */}
            <div className="flex flex-col items-center md:items-start max-w-xs">
              <img
                src={logo}
                alt="Nqlyat"
                className="h-16 w-16 md:h-40 md:w-40 mb-4"
              />
              <p className="text-xs md:text-sm md:w-48 text-center md:text-left transform md:translate-x-6 md:-translate-y-16">
                Nqlyat solutions: the leading shipping platform with superior
                service quality.
              </p>
              <h3 className="font-bold text-lg mt-4 transform md:translate-x-2 md:-translate-y-16">
                Get in touch
              </h3>
              <div className="space-y-2 mt-2 transform md:translate-x-2 md:-translate-y-16">
                <p className="flex items-center">
                  <span className="bg-orange-500 p-1 rounded mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  marie28@yahoo.com
                </p>
                <p className="flex items-center">
                  <span className="bg-orange-500 p-1 rounded mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  360.766.0553
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mt-8 md:mt-16">
            <nav className="flex flex-wrap md:flex-col space-x-4 md:space-x-0 md:space-y-2">
              <h3 className="font-bold text-lg mb-4 transform md:translate-x-2 md:translate-y-1">
                Company
              </h3>
              <a href="#home" className="block hover:text-gray-300 md:mb-2">
                Home
              </a>
              <a href="#solution" className="block hover:text-gray-300 md:mb-2">
                Solution
              </a>
              <a href="#pricing" className="block hover:text-gray-300 md:mb-2">
                Pricing
              </a>
              <a href="#services" className="block hover:text-gray-300 md:mb-2">
                Services
              </a>
              <a href="#about" className="block hover:text-gray-300 md:mb-2">
                About Us
              </a>
              <a href="#news" className="block hover:text-gray-300 md:mb-2">
                News
              </a>
              <a href="#contact" className="block hover:text-gray-300 md:mb-2">
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        {/* Right Section with Full Background Image */}
        <div className="w-full md:w-1/2 relative h-48 md:h-auto">
          <img
            src={footerImage}
            alt="Footer Background"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 z-10">
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <div className="flex flex-col space-y-2 mt-4 w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 bg-white text-gray-800 rounded"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <SiThreads size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
