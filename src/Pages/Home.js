import React from "react";
import HeroSection from "../HomeSections/HeroSection";
import Service1 from "../HomeSections/Service1";
import AboutUsHome from "../HomeSections/AboutUsHome";
import OurServices from "../HomeSections/OurServices";
import Whychoose from "../HomeSections/Whychoose";

const Home = () => {
  return (
    <>
      <div className="main-home-padding">
        <div className="background-color-home">
          <HeroSection />
          <Service1 />
          <AboutUsHome />
          <OurServices />
          <Whychoose />
        </div>
      </div>
    </>
  );
};

export default Home;
