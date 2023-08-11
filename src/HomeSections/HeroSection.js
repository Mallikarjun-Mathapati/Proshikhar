import React from "react";
import Typed from "react-typed";
import "./HomeSection.css";
import Side from "../Images/Home Section/Side Image.png";

const HeroSection = () => {
  return (
    <>
      <div className="home-section">
        <div className="home-main">
          <div className="container">
            <div className="main-home-main-flex">
              <div className="home-flex">
                <div className="home-flex-content">
                  <h1>
                    We are a digital web agency <br /> specializing on
                  </h1>
                  <h2>
                    <Typed
                      strings={[
                        "Digital Marketing",
                        "Web Development",
                        "SEO",
                        "Hosting & Support Services ",
                        "Social Media",
                      ]}
                      typeSpeed={50}
                      backSpeed={50}
                      loop
                    />
                  </h2>
                  <p>
                    We are an award winning digital web agency that strongly
                    believes in the power of creative ideas.
                  </p>
                  <div className="hero-section-button">
                    <button className="hero-section-button-1">
                      See Projects
                    </button>
                    <button className="hero-section-button-2">
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="home-flex-img">
                  <img src={Side} alt="Imagess" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
