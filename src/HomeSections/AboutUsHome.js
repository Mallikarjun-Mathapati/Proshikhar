import React from "react";
import { ScrollRotate } from "react-scroll-rotate";
import { Link } from "react-router-dom";
import Cust from "../Images/Home Section/2/Customer.png";
import Pro from "../Images/Home Section/2/Professional.png";
import AboutmeBg from "../Images/Home Section/About me bg.png";

const AboutUsHome = () => {
  return (
    <div>
      <>
        <div className="about-us-home">
          <div className="container">
            <div className="main-about-us-home-flex">
              <div className="about-us-home-flex">
                <div className="about-us-home-flex-content">
                  <p>
                    <span>
                      <i class="fa-solid fa-circle-notch"></i>
                    </span>{" "}
                    About Us
                  </p>
                  <h2>Unleashing possibilities in the digital world.</h2>
                  <p
                    className="about-us-home-flex-content-p"
                    style={{
                      fontWeight: "500",
                      color: "var(--paragraph, #343434)",
                      lineHeight: "23px",
                    }}
                  >
                    We believe in creating more than just digital solutions - we
                    create experiences. Our customer-centric approach ensures
                    that every solution we craft is perfectly aligned with your
                    business objectives and customer needs. We blend creativity
                    with technology to deliver solutions that are not only
                    aesthetically pleasing but also functionally superior.
                  </p>
                  <div className="about-us-home-icons">
                    <div className="about-us-home-icons-1">
                      <div className="about-us-home-icons-1-logo">
                        <img src={Cust} alt="" />
                      </div>
                      <div className="about-us-home-icons-1-content">
                        <h4>Customer-centric Focus</h4>
                        <p>
                          We put our clients at the heart of everything we do,
                          creating solutions that resonate with your audience
                          and drive engagement.
                        </p>
                      </div>
                    </div>
                    <div className="about-us-home-icons-1">
                      <div className="about-us-home-icons-1-logo">
                        <img src={Pro} alt="" />
                      </div>
                      <div className="about-us-home-icons-1-content">
                        <h4>Professional Support</h4>
                        <p>
                          We provide round-the-clock support to ensure smooth
                          operation and quick resolution of any issues you might
                          encounter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-home-flex-img">
                  <ScrollRotate loops={0.08} method="perc">
                    <img src={AboutmeBg} alt="" />
                  </ScrollRotate>
                </div>
              </div>
              <div className="about-us-home-about-page-link">
                <Link to="/AboutUs">
                  <button>Learn More About Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutUsHome;
