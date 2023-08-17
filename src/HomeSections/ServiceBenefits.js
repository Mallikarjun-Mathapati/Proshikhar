import React from "react";
import { ScrollRotate } from "react-scroll-rotate";
import Leaf from "../Images/Home Section/2/leaf 1.png";
import Pie from "../Images/Home Section/2/pie 1.png";
import Rotate from "../Images/Home Section/rotate text 2 1.png";

const ServiceBenefits = () => {
  return (
    <>
      <div className="service-benefits">
        <div className="service-benefits-bg">
          <div className="container">
            <div className="service-benefits-flex">
              <div className="service-benefits-flex-1">
                <div className="service-benefits-flex-1-rotate">
                  <div className="service-benefits-flex-1-rotate-1">
                    <ScrollRotate loops={1} method={"perc"}>
                      <img src={Rotate} alt="" />
                    </ScrollRotate>
                  </div>
                  <div className="service-benefits-flex-1-rotate-2">
                    <ScrollRotate loops={2} method={"perc"}>
                      <img src={Rotate} alt="" />
                    </ScrollRotate>
                  </div>
                  <div className="service-benefits-flex-1-rotate-3">
                    <ScrollRotate loops={5} method={"perc"}>
                      <img src={Rotate} alt="" />
                    </ScrollRotate>
                  </div>
                </div>
              </div>
              <div className="service-benefits-flex-2">
                <h5>
                  {" "}
                  <span>
                    <i class="fa-solid fa-circle-notch"></i>
                  </span>{" "}
                  SERVICE BENEFITS
                </h5>
                <h2>Your partner in digital success. </h2>
                <p>
                  Our services are designed with a primary focus on the benefits
                  they can bring to your business. We seek to streamline your
                  processes and operations, utilizing the latest technologies to
                  automate tasks and reduce overheads.
                </p>
                <div className="service-benefits-flex-2-icon">
                  <div className="service-benefits-flex-2-icon-1">
                    <img src={Leaf} alt="" />
                    <p>
                      Our solutions are designed to streamline your operations,
                      leading to higher productivity and lower costs.
                    </p>
                  </div>
                  <div className="service-benefits-flex-2-icon-1">
                    <img src={Pie} alt="" />
                    <p>
                      By delivering a sleek and modern digital presence, we help
                      elevate your brand's image and reputation.
                    </p>
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

export default ServiceBenefits;
