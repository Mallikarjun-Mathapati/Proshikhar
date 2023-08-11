import React from "react";
import { Link } from "react-router-dom";
import Web from "../Images/Home Section/2/Website_design.png";
import Marke from "../Images/Home Section/2/Marketing 1.png";
import Social from "../Images/Home Section/2/social 1.png";
import Dev from "../Images/Home Section/2/web_development 1.png";
import Call from "../Images/Home Section/2/call.png";

const OurServices = () => {
  return (
    <>
      <div className="our-services">
        <div className="our-service-heading">
          <h2>ELEVATE YOUR DIGITAL GAME.</h2>
        </div>
        <div className="our-service-main-flex">
          <h5>
            {" "}
            <span>
              <i class="fa-solid fa-circle-notch"></i>
            </span>{" "}
            Our Services
          </h5>
          <h2>
            Crafting digital solutions tailored to your unique business needs.
          </h2>
          <p>
            Our designs prioritize user experience, ensuring seamless navigation
            and interaction for your site visitors.
          </p>
        </div>
        <div className="container">
          <div className="our-service-main-card">
            <div className="our-service-main-card-grid">
              <div className="our-service-grid-1 our-service-grid-1-shadow-left ">
                <img src={Web} alt="" />
                <h4>Website Design</h4>
                <p>
                  We create visually stunning and functional websites that not
                  only attract visitors but also turn them into customers.
                </p>
                <Link to="/Services">
                  <button>Learn More.......</button>
                </Link>
              </div>
              <div className="our-service-grid-1 our-service-grid-1-shadow-center">
                <img src={Marke} alt="" />
                <h4>Digital Marketing</h4>
                <p>
                  Our expert team uses a data-driven approach, leveraging the
                  latest techniques to boost your online presence.
                </p>
                <Link to="/Services">
                  <button>Learn More.......</button>
                </Link>
              </div>
              <div className="our-service-grid-1 our-service-grid-1-shadow-center">
                <img src={Social} alt="" />
                <h4>Social Media</h4>
                <p>
                  Our social media experts craft compelling content, engage with
                  your audience, and manage your social presence.
                </p>
                <Link to="/Services">
                  <button>Learn More.......</button>
                </Link>
              </div>
              <div className="our-service-grid-1 our-service-grid-1-shadow-right">
                <img src={Dev} alt="" />
                <h4>Website Development </h4>
                <p>
                  We create visually stunning and functional websites that not
                  only attract visitors but also turn them into customers.
                </p>
                <Link to="/Services">
                  <button>Learn More.......</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="our-service-buttons">
          <button>Services Page</button>
          <div className="our-service-buttons-contact">
            <img src={Call} alt="" />
            <p>+91 123456790</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
