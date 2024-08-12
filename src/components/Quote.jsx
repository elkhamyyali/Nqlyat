import React from "react";
import backgroundImage from "../assets/sewa.jpeg"; // Update with the path to your background image
import sectionImage from "../assets/car22.jpeg"; // Update with the path to your section image
import { Calendar } from "lucide-react";

const CompetitiveQuoteForm = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          <span className="text-orange-700">Get</span> A Competitive Instant
          Quote
        </h1>
        <p className="text-base sm:text-lg text-white mb-6 text-center">
          Fill out the form for LTL and Full Truckload rates. Quick access
          without login!
        </p>

        <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto gap-4 lg:gap-6">
          {/* Form Section */}
          <div className="flex-1 glassmorphism p-4 sm:p-6 rounded-lg shadow-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Pickup Location
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Pickup Location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Date
                </label>
                <input
                  type="date"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Delivery Location
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Delivery Location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Date
                </label>
                <input
                  type="date"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Weight (Tons)
                </label>
                <input
                  type="number"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Weight"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Load Category
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Load Category"
                />
              </div>

              {/* Adding extra inputs */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Delivery Location
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Delivery Location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Date
                </label>
                <input
                  type="date"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Weight (Tons)
                </label>
                <input
                  type="number"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Weight"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Load Category
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Load Category"
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Request Your Quote
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block lg:w-2/5">
            <img
              src={sectionImage}
              alt="Descriptive Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveQuoteForm;
