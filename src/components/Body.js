import React from "react";

export default function Body() {
  return (
    <>
      {/* REVIEWS */}
      <section id="reviews">
        <div className="d-flex flex-column flex-lg-row gap-5 py-3 container">
          <div className="col-md">
            <div className="d-flex flex-column justify-content-center">
              <div className="sm-content-container">
                <p className="small">Our Amazing Story</p>
                <h2 className="">10k+ Happy Customers</h2>

                <p className="color-low">
                  There's no secret sauce, no wizard behind the curtain. What
                  makes Aerolab tick is an interdisciplinary team with a
                  framework that fosters candid collaboration.
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

        <div class="scroll-list-container mt-5">
          <div class="scroller">
            <div class="content">
              <div class="simple-carousel-slide review">
                <p class="fst-italic p-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>

                <div className="rating-author p-3">
                  <h6>John Matthews</h6>
                  <img
                    src="./images/logos/rating-5-star-green.png"
                    alt="rating"
                    className="rating-stars"
                  />
                </div>
              </div>
            </div>
            <div class="content">
              <div class="simple-carousel-slide review">
                <p class="fst-italic p-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>

                <div className="rating-author p-3">
                  <h6>John Matthews</h6>
                  <img
                    src="./images/logos/rating-5-star-green.png"
                    alt="rating"
                    className="rating-stars"
                  />
                </div>
              </div>
            </div>
            <div class="content">
              <div class="simple-carousel-slide review">
                <p class="fst-italic p-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>

                <div className="rating-author p-3">
                  <h6>John Matthews</h6>
                  <img
                    src="./images/logos/rating-5-star-green.png"
                    alt="rating"
                    className="rating-stars"
                  />
                </div>
              </div>
            </div>
            <div class="content">
              <div class="simple-carousel-slide review">
                <p class="fst-italic p-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>

                <div className="rating-author p-3">
                  <h6>John Matthews</h6>
                  <img
                    src="./images/logos/rating-5-star-green.png"
                    alt="rating"
                    className="rating-stars"
                  />
                </div>
              </div>
            </div>
            <div class="content">
              <div class="simple-carousel-slide review">
                <p class="fst-italic p-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>

                <div className="rating-author p-3">
                  <h6>John Matthews</h6>
                  <img
                    src="./images/logos/rating-5-star-green.png"
                    alt="rating"
                    className="rating-stars"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider"></div>
      </div>

      {/* SHOP NOW AND OUR MISSION*/}
      <section>
        <article id="shop-now">
          <div className="row w-100 d-flex flex-column flex-lg-row gap-5">
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
                  Our Personal Diffuser is an aromatherapy device that contains
                  a blend of melatonin, lavender, and chamomile. A few breaths
                  of our plant-based essential oil mist will mellow you out,
                  quiet the mind, and lull you to bed.
                </p>
                <button className="btn">Visit Shop</button>
              </div>
            </div>
          </div>
        </article>

        <article id="our-mission" className="my-5 py-5">
          <div className="row w-100 d-flex flex-column flex-lg-row gap-5">
            <div className="col-lg d-flex flex-column justify-content-lg-center container">
              <div className="sm-content-container">
                <h2>Our Mission</h2>
                <p className="color-low">
                  We started Sleepstiq with 1 simple goal: to be your best
                  friend at bedtime. We, just like you, deal with stress,
                  unease, and trouble sleeping from a number of silly things
                  like school, work, screens, numbers, and people. That's why we
                  created products that aim to -
                </p>
                <ul className="color-low">
                  <li>✓ Promote Calm</li>
                  <li>✓ Support Sleep</li>
                  <li>✓ Reduce Stress</li>
                  <li>✓ Aid Relaxation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg">
              <img
                src="./images/woman-lying.png"
                alt="woman lying"
                className="our-mission-img"
              />
            </div>
          </div>
        </article>

        <article className="container">
          <div className="visit-shop">
            <h2>Visit Shop</h2>
            <p className="color-low text-center">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>
            <button className="btn">Visit Shop</button>
          </div>
        </article>
      </section>

      <div className="container">
        <div className="divider"></div>
      </div>

      {/* PRODUCT REVIEWS */}
      <section id="products">
        <div className="container">
          <h2 className="">Product Reviews</h2>
        </div>

        <div class="scroll-list-container my-4">
          <div class="scroller">
            <div class="products-review slide-content shadow">
              <div className="product-details">
                <img
                  src="./images/product-2.png"
                  alt="product"
                  className="product-image-review"
                />

                <p class="fst-italic pt-2 px-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>
              </div>

              <div className="rating-author p-3">
                <h6>John Matthews</h6>
                <img
                  src="./images/logos/rating-5-star-green.png"
                  alt="rating"
                  className="rating-stars"
                />
              </div>
            </div>
            <div class="products-review slide-content shadow">
              <div className="product-details">
                <img
                  src="./images/product-2.png"
                  alt="product"
                  className="product-image-review"
                />

                <p class="fst-italic pt-2 px-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>
              </div>

              <div className="rating-author p-3">
                <h6>John Matthews</h6>
                <img
                  src="./images/logos/rating-5-star-green.png"
                  alt="rating"
                  className="rating-stars"
                />
              </div>
            </div>
            <div class="products-review content">
              <div className="product-details">
                <img
                  src="./images/product-2.png"
                  alt="product"
                  className="product-image-review"
                />

                <p class="fst-italic pt-2 px-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>
              </div>

              <div className="rating-author p-3">
                <h6>John Matthews</h6>
                <img
                  src="./images/logos/rating-5-star-green.png"
                  alt="rating"
                  className="rating-stars"
                />
              </div>
            </div>
            <div class="products-review slide-content shadow">
              <div className="product-details">
                <img
                  src="./images/product-2.png"
                  alt="product"
                  className="product-image-review"
                />

                <p class="fst-italic pt-2 px-3">
                  Love it! I have trouble falling asleep and this knocked me
                  right out. Will be buying more.
                </p>
              </div>

              <div className="rating-author p-3">
                <h6>John Matthews</h6>
                <img
                  src="./images/logos/rating-5-star-green.png"
                  alt="rating"
                  className="rating-stars"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
