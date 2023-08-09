import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logos/Main Logo.png";
import Facebook from "../Images/Logos/Social media/facebook.png";
import Instagram from "../Images/Logos/Social media/instagram.png";
import Messenger from "../Images/Logos/Social media/messenger.png";
import Whatsapp from "../Images/Logos/Social media/whatsapp.png";
import MenuL from "../Images/Logos/Social media/jam_menu.png";
import Close from "../Images/Logos/Social media/ic_round-close.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="main-navbar">
            <div className="navbar-flex">
              <div className="navbar-logo">
                <img src={Logo} alt="ProShiker Logo" />
              </div>
              <div className="navbar-links">
                <Link to="/Home">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/OurTeam">Our team</Link>
                <Link to="/Blog">Blog</Link>
              </div>
              <div className="navbar-social">
                <div className="navbar-social-icon">
                  <Link
                    to="/"
                    target="_blank"
                    rel="noreferrer"
                    className="block-icon"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </Link>
                  <Link
                    to="/"
                    target="_blank"
                    rel="noreferrer"
                    className="block-icon"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </Link>
                  <Link
                    to="/"
                    target="_blank"
                    rel="noreferrer"
                    className="block-icon"
                  >
                    <img src={Messenger} alt="Messenger" />
                  </Link>
                  <Link to="/" target="_blank" rel="noreferrer">
                    <img src={Whatsapp} alt="Whatsapp" />
                  </Link>
                  <div
                    className={`menu-navbar-menu show-menu ${
                      menu ? "second-time-block-menu" : " "
                    } `}
                    onClick={() => setMenu(!menu)}
                  >
                    <img src={MenuL} alt="icon" />
                  </div>
                  <div
                    className={`menu-navbar-xbar ${
                      menu ? "show-menu-xbar" : ""
                    } `}
                    onClick={() => setMenu(!menu)}
                  >
                    <img src={Close} alt="close" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RESPONSIVE MENU  */}
        <div className="container ">
          <div className={`menu-navbar-main ${menu ? "menu-navbar-show" : ""}`}>
            <div className="menu-navbar-link">
              <Link to="/Home" onClick={() => setMenu(!menu)}>
                Home
              </Link>
              <Link to="/AboutUs" onClick={() => setMenu(!menu)}>
                About Us
              </Link>
              <Link to="/Portfolio" onClick={() => setMenu(!menu)}>
                Portfolio
              </Link>
              <Link to="/Services" onClick={() => setMenu(!menu)}>
                Services
              </Link>
              <Link to="/Contact" onClick={() => setMenu(!menu)}>
                Contact
              </Link>
              <Link to="/OurTeam" onClick={() => setMenu(!menu)}>
                Our team
              </Link>
              <Link to="/Blog" onClick={() => setMenu(!menu)}>
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
