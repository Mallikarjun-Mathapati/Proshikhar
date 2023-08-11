import React from "react";
import Tailor from "../Images/Home Section/2/Tailoricon.png";
import Team from "../Images/Home Section/2/Team Icon.png";
import Quality from "../Images/Home Section/2/Quality icon.png";

const Service1 = () => {
  return (
    <>
      <div className="Service1">
        <div className="container">
          <div className="main-service1">
            <div className="service1-grid">
              <div className="service1-grid-Tailor">
                <div className="service1-grid-Tailor-sub">
                  <img src={Tailor} alt="" />
                  <h4>Tailor-made Strategies</h4>
                  <p>
                    We do not believe in one-size-fits-all. Our solutions are
                    customized to your business needs.
                  </p>
                </div>
              </div>
              <div className="service1-grid-team">
                <img src={Team} alt="" />
                <h4>Experienced Team</h4>
                <p>
                  We have professionals with experience on our team. Each
                  project benefits from their expertise and enthusiasm.
                </p>
              </div>
              <div className=" service1-grid-Tailor service1-grid-quality">
                <div className="service1-grid-Tailor-sub">
                  <img src={Quality} alt="" />
                  <h4>Tailor-made Strategies</h4>
                  <p>
                    We do not believe in one-size-fits-all. Our solutions are
                    customized to your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1;
