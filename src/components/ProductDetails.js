import React from "react";

export default function ProductDetails() {
  const originalPrice = 25;

  const [productPrice, setPrice] = React.useState(originalPrice);

  function changePrice(event) {
    console.log(event.target.value);

    setPrice((prevPrice) => {
      return originalPrice * event.target.value;
    });
  }
  return (
    <>
      <section id="product">
        <div className="w-100 d-flex flex-column flex-lg-row gap-5">
          <div className="col-lg">
            <img
              src="./images/product-1.png"
              alt="sleepstiq pic"
              className="product-img object-contain w-100"
            />
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

              <ul>
                <li>😊 Promotes calm and relaxation.</li>
                <li>💤 Inhalation allows for a rapid effect.</li>
                <li>✅ 100% drug-free, plant-based ingredients.</li>
                <li>⚕️ 3rd-party lab tested.</li>
              </ul>

              <div className="row w-lg-50 align-items-center g-2">
                <div className="col-6">Price</div>
                <div className="col-6">Unit</div>
                <div className="col-6 fw-bold">USD {productPrice}</div>
                <div className="col-6">
                  <input
                    type="number"
                    onChange={changePrice}
                    className="w-50 fw-bold px-2 py-1 g-2 rounded border-1"
                    defaultValue={2}
                    min={1}
                    max={100}
                  />
                </div>
              </div>

              <button className="btn">Buy</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
