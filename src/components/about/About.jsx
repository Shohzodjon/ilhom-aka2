import React from "react";
import "./about.css";
import img from "../../imges/header_img.png";
function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About</h2>
        <div className="about-img">
          <img src={img} alt="header" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
          molestiae officiis temporibus neque nihil voluptate placeat fugiat
          voluptates fuga necessitatibus beatae repellat saepe nam voluptatum
          consequuntur totam magni id officia!
        </p>
      </div>
    </section>
  );
}

export default About;
