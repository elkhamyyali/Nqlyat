import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/nqlyatlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // New state for active link

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-auto w-40" src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeLink === item.name
                    ? "bg-[#F05326] text-white rounded-full px-4"
                    : scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                scrolled
                  ? "text-[#F05326] hover:text-orange-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[#F05326] text-white rounded-3xl hover:bg-orange-600">
              Sign Up
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50"
          >
            <div className="bg-white w-1/3 h-full shadow-lg p-5 transform transition-transform duration-300 ease-in-out">
              <button className="text-gray-800 mb-4" onClick={toggleMenu}>
                <X className="w-6 h-6" />
              </button>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setActiveLink(item.name)}
                      className={`text-gray-800 hover:text-orange-500 ${
                        activeLink === item.name ? "text-orange-500" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2">
                <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-[#F05326] text-white rounded-3xl hover:bg-orange-600">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
