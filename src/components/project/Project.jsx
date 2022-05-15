import React from "react";
import product from "./data";
import "./project.css";
function Project() {
  return (
    <section className="product">
      <div className="container">
        <h2>Product section</h2>

        <div className="grid">
          {product?.map((item) => {
            return (
              <div className="cart" key={item.id}>
                <div className="cart-img">
                  <img src={item.img} alt="cart img" />
                </div>
                <p>{item.des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
