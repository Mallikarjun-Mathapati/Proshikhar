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
                action="https://formsubmit.co/malluma0007@gmail.com"
                method="POST"
              >
                <div className="contact-home-form-grid">
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="User Name">Name</label>
                    <input name="User Name" type="text" required />
                  </div>
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="User Name">Last Name</label>
                    <input name="Last Name" type="text" required />
                  </div>
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="Phone   Number">Phone Number</label>
                    <input name="Phone Number" type="tel" />
                  </div>
                  <div className="contact-home-form-grid-1">
                    <label htmlFor="E-Mail">E-mail</label>
                    <input name="e-mail" type="e-mail" required />
                  </div>
                </div>
                <div className="contact-home-form-grid-1 contact-home-form-grid-2">
                  <label htmlFor="Message">Message</label>
                  <textarea name="message" />
                </div>
                <button type="submit" form="form1" value="Send">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
