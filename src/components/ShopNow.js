import React from "react";
import data from "../data/products";
import { Link } from "react-router-dom";

export default function ShopNow() {
  const product = data[0];

  const details = product.details.map((detail) => {
    return <li>{detail}</li>;
  });

  return (
    <>
      <section id="shop-now">
        <div className="w-100 d-flex flex-column flex-lg-row gap-5">
          <div className="col-lg">
            <div className="position-relative">
              <img
                src={product.img}
                alt="sleepstiq pic"
                className="our-mission-img"
              />

              <div className="shop-now-img-description">
                <ul>{details}</ul>
              </div>
            </div>
          </div>

          <div className="col-lg d-flex flex-column justify-content-center container">
            <div className="sm-content-container gap-4">
              <h2>Shop Now</h2>
              <p className="color-low">{product.description}</p>
              <Link to="/shop">
                <button className="btn">Visit Shop</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
