import React from "react";
import Naql1 from "../../assets/naql1.jpeg";
import Naql2 from "../../assets/naql2.jpeg";
import Naql3 from "../../assets/naql3.jpeg";
import CardsSection from "./CardsSection";
import ImageBadgeSection from "./ImageBadgeSection";

const LandingPage = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Background with radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(161,71,39,1) 10%, rgba(88,88,88,1) 24%)",
          }}
        ></div>

        {/* Orange Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full clip-left bg-orange-700"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full clip-right bg-orange-700"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 w-full h-full">
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-12">
              <div className="text-white">
                <p className="text-sm md:text-base mb-6 transform md:translate-x-[-70px] md:translate-y-[20px]">
                  Take advantage of the superior load-loading platforms of
                  "NQLYATsolutions", which serve intermediaries of all sizes.
                  Whether you are an emerging broker or a country-wide
                  operation, the pallets for loading cargo for brokers from
                  "transport solutions" guarantee prompt delivery of your
                  shipments.
                </p>
                <p className="mb-8 text-xs md:text-sm transform md:translate-x-[-70px] md:translate-y-[20px]">
                  Cargo loading platforms from "NQLYAT solutions" are designed
                  to simplify your operations and keep your cargo in constant
                  motion. We rely on actual transactions to deliver accurate
                  market prices across various routes, while peer reviews direct
                  you to the perfect carrier every time. With "transportation
                  solutions", you can publish and search for trucks without
                  limits, and stay informed thanks to instant alerts even when
                  you are offline.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="text-orange-500 bg-white px-6 py-2 rounded-full">
                    Get Started
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-12">
              {/* Overlapping Images */}
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-64 md:h-80 lg:h-96">
                {/* Image Container with Fixed Height */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Image 1 */}
                  <img
                    src={Naql1}
                    alt="Image 1"
                    className="absolute inset-0 object-cover rounded-xl shadow-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: 50,
                      transform: "translate(4px, 4px)",
                    }}
                  />
                  {/* Image 2 */}
                  <img
                    src={Naql2}
                    alt="Image 2"
                    className="absolute inset-0 object-cover rounded-xl shadow-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: 40,
                      transform: "translate(100px, 50px)",
                    }}
                  />
                  {/* Image 3 */}
                  <img
                    src={Naql3}
                    alt="Image 3"
                    className="absolute inset-0 object-cover rounded-xl shadow-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: 30,
                      transform: "translate(150px, 70px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orange Clip Paths */}
        <style jsx>{`
          @media (max-width: 767px) {
            .text-white p {
              transform: none !important;
            }

            img {
              transform: none !important;
            }

            .clip-left,
            .clip-right {
              clip-path: none;
              background: transparent;
            }
          }

          @media (min-width: 768px) {
            .clip-left {
              clip-path: circle(50% at 0% 50%);
            }
            .clip-right {
              clip-path: circle(50% at 100% 50%);
            }
          }
        `}</style>
      </div>
      <div>
        <CardsSection />
      </div>
      <div>
        <ImageBadgeSection />
      </div>
    </>
  );
};

export default LandingPage;
