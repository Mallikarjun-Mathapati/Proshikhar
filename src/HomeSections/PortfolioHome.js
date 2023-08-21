import React, { useContext } from "react";
// import royal from "../Images/Project Img/Royal x img.png";
import { StateContext } from "../Context/Context";

const PortfolioHome = () => {
  const { portData } = useContext(StateContext);
  console.log(portData);
  return (
    <>
      <div className="portfolio-home">
        <div className="flex portfolio-home-heading container">
          <h5>
            {" "}
            <span>
              <i className="fa-solid fa-circle-notch"></i>
            </span>{" "}
            PORTFOLIOS
          </h5>
          <h2>
            Creating impact with every project, experience the innovation.{" "}
          </h2>
          <p>
            A showcase of our commitment to delivering top-tier, innovative
            digital solutions. We believe in the power of technology and design
            to transform businesses, catapulting them into the future. Our
            commitment to quality and excellence is unparalleled.
          </p>
        </div>
        {/* start  */}
        <div className="portfolio-home-portfolio-grid">
          {/* <div className=" portfolio-home-portfolio"> */}
          {/* <div className="container2"> */}
          {portData.map((ele, id) => {
            const {
              project_name,
              description,
              class_name,
              img,
              project_name_span,
            } = ele;
            return (
              <>
                <div
                  className={`${"portfolio-home-portfolio-grid-main"} ${"container"} ${class_name}`}
                  key={id}
                >
                  <div className="portfolio-home-portfolio-grid-main-1">
                    <img src={img} alt={project_name} />
                  </div>
                  <div className="portfolio-home-portfolio-grid-main-2">
                    <h3>
                      {project_name} <span>{project_name_span}</span>
                    </h3>
                    <p>{description}</p>
                    <button>
                      {/* Learn More <i className="fa-solid fa-arrow-right-long"></i> */}
                      Learn More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="12"
                        viewBox="0 0 38 12"
                        fill="none"
                      >
                        <path
                          d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z"
                          fill="#303030"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          {/* </div> */}
          {/* </div> */}
        </div>
        {/* end  */}
      </div>
    </>
  );
};

export default PortfolioHome;
