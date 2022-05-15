import React from "react";
import succes from "../../imges/success_img.png";
import "./service.css";
function Service() {
  return (
    <section className="services">
      <div className="container">
        <h2>Services section</h2>
        <div className="servic-flex">
          <div className="servic-img">
            <img src={succes} alt="services img" />
          </div>
          <div className="servic-info">
            <ul>
              <li>
                <h3>Other successful stories</h3>
              </li>
              <li>
                <h4>Amateur</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, officia.
                </p>
                <p>Lorem ipsum dolor sit amet.</p>
                <h6>More information</h6>
              </li>
              <li>
                <h4>Beginner</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, officia.
                </p>
                <p>Lorem ipsum dolor sit amet.</p>
                <h6>More information</h6>
              </li>

              <li>
                <h4>Profissional</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, officia.
                </p>
                <p>Lorem ipsum dolor sit amet.</p>
                <h6>More information</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
