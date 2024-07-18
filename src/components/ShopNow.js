import React from "react";

export default function ShopNow() {
  return (
    <>
      <section id="shop-now">
        <div className="w-100 d-flex flex-column flex-lg-row gap-5">
          <div className="col-lg">
            <div className="position-relative">
              <img
                src="./images/product-1.png"
                alt="sleepstiq pic"
                className="our-mission-img"
              />

              <div className="shop-now-img-description">
                <ul>
                  <li>😊 Promotes calm and relaxation.</li>
                  <li>💤 Inhalation allows for a rapid effect.</li>
                  <li>✅ 100% drug-free, plant-based ingredients.</li>
                  <li>⚕️ 3rd-party lab tested.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg d-flex flex-column justify-content-center container">
            <div className="sm-content-container gap-4">
              <h2>Shop Now</h2>
              <p className="color-low">
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
              </p>
              <button className="btn">Visit Shop</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
