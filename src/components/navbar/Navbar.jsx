import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imges/logo.png";
import "./nav.css";
function Navbar() {
  const about = () => {
    let pronon = new SpeechSynthesisUtterance("About section");
    window.speechSynthesis.speak(pronon);
  };
  const project = () => {
    let pronon = new SpeechSynthesisUtterance("Product section");
    window.speechSynthesis.speak(pronon);
  };

  const services = () => {
    let pronon = new SpeechSynthesisUtterance("Services  section");
    window.speechSynthesis.speak(pronon);
  };

  const contact = () => {
    let pronon = new SpeechSynthesisUtterance("Contact  section");
    window.speechSynthesis.speak(pronon);
  };

  return (
    <nav>
      <div className="container">
        <div className="flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <Link to="/" onClick={about}>
                About
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={project}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={services}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={contact}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
