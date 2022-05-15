import React from "react";
import "./footer.css";
import footerLogo from "../../imges/footer_logo.png";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div>
            <div className="footer-logo">
              <img src={footerLogo} alt="footer logo" />
            </div>
            <ul>
              <li className="other">Tashkent, Mustakillik St, 15</li>
              <li>Tel: +998 99 000 00 00</li>
              <li>E-mail: deadPool@gmail.com</li>
            </ul>
          </div>

          <ul>
            <li>
              <b>About</b>
            </li>
            <li>About us</li>
            <li>Our team</li>
            <li>Frequent Questions</li>
            <li>Contact us</li>
          </ul>

          <ul>
            <li>
              <b>Products</b>
            </li>
            <li>Metall</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
          <ul>
            <li>
              <b>Services</b>
            </li>
            <li>Blog</li>
            <li>Gardening</li>
            <li>Melon</li>
            <li>Water dist</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
