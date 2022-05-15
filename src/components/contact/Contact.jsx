import React from "react";
import "./contact.css";
import contact from "../../imges/contact_img.png";
function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <form>
          <h2>Contact section</h2>
          <div className="contact-img">
            <img src={contact} alt="contact-img" />
          </div>
          <div className="contact-flex">
            <input type="text" placeholder="Enter your name" />
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Write your message here ..."
          ></textarea>
        </form>
      </div>
    </section>
  );
}

export default Contact;
