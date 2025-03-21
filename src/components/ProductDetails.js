import React from "react";

export default function ProductDetails(props) {
  const defaultUnit = 2;
  const originalPrice = props.price;
  const defaultPrice = originalPrice * defaultUnit;

  const [productPrice, setPrice] = React.useState(defaultPrice);
  const [unit, setUnit] = React.useState(defaultUnit);

  // FUNCTIONS

  function changePrice(event) {
    const newUnit = event.target.value;

    setUnit((prevUnit) => {
      return newUnit;
    });

    setPrice((prevPrice) => {
      return originalPrice * newUnit;
    });
  }

  const detailsList = props.details.map((detail) => {
    return <li>{detail}</li>;
  });
  return (
    <>
      <section id="product">
        <div className="w-100 d-flex flex-column flex-lg-row gap-5">
          <div className="col-lg">
            <img
              src={props.img}
              alt="sleepstiq pic"
              className="product-img object-contain w-100"
            />
          </div>

          <div className="col-lg d-flex flex-column justify-content-center container">
            <div className="sm-content-container gap-4">
              <h2>About Product</h2>
              <p className="color-low">{props.description}</p>

              <ul>{detailsList}</ul>

              <div className="row w-lg-50 align-items-center g-2">
                <div className="col-6">Price</div>
                <div className="col-6">Unit</div>
                <div className="col-6 fw-bold">
                  {props.currency} {productPrice}
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    onChange={changePrice}
                    className="w-50 fw-bold px-2 py-1 g-2 rounded border-1"
                    value={unit}
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
