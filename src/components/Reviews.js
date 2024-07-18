import React from "react";
import ReviewsList from "./ReviewsList";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="d-flex flex-column flex-lg-row gap-5 py-3 container">
        <div className="col-md">
          <div className="d-flex flex-column justify-content-center">
            <div className="sm-content-container">
              <p className="small">Our Amazing Story</p>
              <h2 className="">10k+ Happy Customers</h2>

              <p className="color-low">
                There's no secret sauce, no wizard behind the curtain. What
                makes Aerolab tick is an interdisciplinary team with a framework
                that fosters candid collaboration.
              </p>

              <a href="./#" className="small know-more">
                Know more about us
              </a>
            </div>
          </div>
        </div>

        <div className="col-md ">
          <div className="d-flex flex-column justify-content-center">
            <div className="sm-content-container review-card-large">
              <p className="fst-italic text-black review-large-text">
                I'm a very anxious person but use this and feel so relaxed and
                sleep way better now with the aid of sleepstiq.
              </p>

              <div className="review-large-author">
                <img src="./images/ceo.png" alt="review author" />

                <div>
                  <h6>James Miller</h6>
                  <p className="">CEO, Techbias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS LIST */}
      <ReviewsList />
    </section>
  );
}
