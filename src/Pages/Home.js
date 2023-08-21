import React from "react";
import HeroSection from "../HomeSections/HeroSection";
import Service1 from "../HomeSections/Service1";
import AboutUsHome from "../HomeSections/AboutUsHome";
import OurServices from "../HomeSections/OurServices";
import Whychoose from "../HomeSections/Whychoose";
import ContactHome from "../HomeSections/ContactHome";
import ServiceBenefits from "../HomeSections/ServiceBenefits";
import PortfolioHome from "../HomeSections/PortfolioHome";

const Home = () => {
  return (
    <>
      <div className="main-home-padding">
        <div className="background-color-home">
          <HeroSection />
          <Service1 />
          <AboutUsHome />
          <OurServices />
          <ServiceBenefits />
          <PortfolioHome />
          <Whychoose />
          <ContactHome />
        </div>
      </div>
    </>
  );
};

export default Home;
