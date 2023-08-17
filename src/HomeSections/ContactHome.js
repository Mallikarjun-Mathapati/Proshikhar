import React from "react";
import Phone from "../Images/Home Section/HomeContact/Phone Number.png";

const ContactHome = () => {
  return (
    <>
      <div className="contact-home">
        <div className="contact-home-bg">
          <div className="contact-home-heading">
            <h5>
              {" "}
              <span>
                <i class="fa-solid fa-circle-notch"></i>
              </span>{" "}
              CONTACT US
            </h5>
            <h2>Grow your business with our robust digital solutions. </h2>
            <p>
              Our designs prioritize user experience, ensuring seamless
              navigation and interaction for your site visitors.
            </p>
          </div>
          <div className="home-contact-flex">
            <div className="contact-home-content">
              <h2>
                <span>Grow your business</span> with our robust digital
                solutions.
              </h2>
              <p>
                We consistently exceed our clients' expectations by providing
                high quality digital solutions. Get in touch with us get
                started!
              </p>
              <div className="contact-home-content-contact-number">
                <div className="contact-home-content-contact-number-img">
                  <img src={Phone} alt="phone" />
                </div>
                <div className="contact-home-content-contact-number-phone">
                  <h4>+91 1234567890</h4>
                  <h5>(TALK TO AN EXPERT)</h5>
                </div>
              </div>
            </div>

            <div className="contact-home-form">
              <form
                // action="https://formsubmit.co/malluma0007@gmail.com"
                action="mailto:malluma0007@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="contact-home-form-grid">
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="username">Name</label>
                    <input
                      name="username"
                      type="text"
                      required
                      placeholder=" "
                    />
                  </div>
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      name="lastname"
                      type="text"
                      required
                      placeholder=" "
                    />
                  </div>
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input name="phonenumber" type="tel" placeholder=" " />
                  </div>
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="email">E-mail</label>
                    <input
                      name="e-mail"
                      type="email"
                      required
                      placeholder=" "
                    />
                  </div>
                </div>
                <div className="contact-home-form-grid-1 contact-home-form-grid-2">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" placeholder=" " />
                </div>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
