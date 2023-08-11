import React from "react";
import Price from "../Images/Home Section/2/Price icon.png";
import Star from "../Images/Home Section/2/star 1.png";
import Stra from "../Images/Home Section/2/Stratergies icon.png";
import Focus from "../Images/Home Section/2/Focus Cu icon.png";
import Client from "../Images/Home Section/2/clients 1.png";
import Crown from "../Images/Home Section/2/crown 1.png";
import Prof from "../Images/Home Section/2/ps_designfloat.png";
import SideImage from "../Images/Home Section/SideImage.png";

const Whychoose = () => {
  return (
    <>
      <div className="why-choose-us">
        <div className="container">
          <div className="main-why-choose-us">
            <div className="why-choose-us-flex">
              <div className="why-choose-us-flex-card">
                <div className="why-choose-us-flex-card-section">
                  <div className="why-choose-us-flex-card-section-1">
                    <img src={Price} alt="" />
                  </div>
                  <div className="why-choose-us-flex-card-section-2">
                    <h4>Competitive Pricing</h4>
                    <p>
                      We offer our top-quality services at competitive prices,
                      providing you with great value for your investment.
                    </p>
                  </div>
                </div>
                <div className="why-choose-us-flex-card-section">
                  <div className="why-choose-us-flex-card-section-1">
                    <img src={Focus} alt="" />
                  </div>
                  <div className="why-choose-us-flex-card-section-2">
                    <h4>Customer-centric Focus</h4>
                    <p>
                      We put our clients at the heart of everything we do,
                      creating solutions that resonate with your audience and
                      drive engagement.
                    </p>
                  </div>
                </div>
                <div className="why-choose-us-flex-card-section">
                  <div className="why-choose-us-flex-card-section-1">
                    <img src={Stra} alt="" />
                  </div>
                  <div className="why-choose-us-flex-card-section-2">
                    <h4>Tailor-made Strategies</h4>
                    <p>
                      We don’t believe in a one-size-fits-all approach. Every
                      solution we provide is tailored to your unique business
                      goals and challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="why-choose-us-flex-content">
                <h5>
                  {" "}
                  <span>
                    <i class="fa-solid fa-circle-notch"></i>
                  </span>{" "}
                  Why Choose Us?
                </h5>
                <h2>Your vision, digitally realized.</h2>
                <p>
                  Since our inception, we have been driven by one mission - to
                  empower businesses to achieve their full potential in the
                  digital era. We have worked with hundreds of clients across
                  industries, delivering tailor-made solutions that drive
                  growth, boost engagement, and generate value.
                </p>
                <div className="why-choose-us-flex-content-sub">
                  <div className="why-choose-us-flex-content-sub-icon-main">
                    <div className="why-choose-us-flex-content-sub-icon">
                      <div className="why-choose-us-flex-content-icon-1">
                        <img src={Star} alt="" />
                        <p>400+ five star rating!</p>
                      </div>
                      <div className="why-choose-us-flex-content-icon-1">
                        <img src={Client} alt="" />
                        <p>98% client retention!</p>
                      </div>
                    </div>
                    <div className="why-choose-us-flex-content-sub-icon-twice">
                      <div className="why-choose-us-flex-content-sub-icon-twice-1 hr">
                        <img src={Crown} alt="" />
                        <p>
                          Customized strategies tailored to your business needs.
                        </p>
                      </div>
                      {/* <hr /> */}
                      <div className="why-choose-us-flex-content-sub-icon-twice-1 hr2">
                        <img src={Prof} alt="" />
                        <p>
                          Ongoing support and assistance post-project
                          completion.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="why-choose-us-flex-content-sub-side-img">
                    <img src={SideImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
