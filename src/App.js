import React from "react";

import HeroSection from "./components/HeroSection";
import LandingPage from "./components/SoluationSection/SoluationSection";
import TextCardSection from "./components/TextCardSection";
import CargoCard from "./components/CargoCard";
import Section from "./components/ClientSay";
import SectionWithForm from "./components/Quote";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <HeroSection /> {/* Other components */}{" "}
      </div>{" "}
      <div>
        <LandingPage />
      </div>{" "}
      <div>
        <TextCardSection />
      </div>{" "}
      <div>
        <CargoCard />
      </div>{" "}
      <div className="">
        <Section />
      </div>{" "}
      <div className="">
        <SectionWithForm />
      </div>{" "}
      <div className="">
        <Footer />
      </div>{" "}
    </>
  );
};

export default App;
