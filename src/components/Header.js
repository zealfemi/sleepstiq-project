import React from "react";

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="header">
          <img
            src="./images/banner-home.png"
            alt="header logo"
            className="banner-img"
          />

          <div className="container">
            <div className="container header-contents">
              <nav className="header-nav">
                <img
                  src="./images/logos/sleepstiq-header.png"
                  alt="header logo"
                  className="header-logo"
                />

                <ul className="header-nav-links">
                  <li>
                    <a href="./#" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./#">About</a>
                  </li>
                  <li>
                    <a href="./#">Shop</a>
                  </li>
                  <li>
                    <a href="./#">FAQs</a>
                  </li>
                </ul>
              </nav>

              <div className="banner-contents">
                <p className="banner-top-text">We're here to help you</p>
                <h1 className="banner-large-text">Relax &amp; Rest</h1>
                <p className="banner-bottom-text">
                  With the aid of our Melatonin Sleepstiq, we can assure you
                  that you can get quality sleep.
                </p>
              </div>
              <button className="btn">Visit Shop</button>
            </div>
          </div>

          {/* <div className="header-partners-container">
            <div className="header-partners">
              <img
                src="./images/logos/google.png"
                className=""
                alt="partners"
              />
              <img
                src="./images/logos/google.png"
                className=""
                alt="partners"
              />
              <img
                src="./images/logos/google.png"
                className=""
                alt="partners"
              />
              <img
                src="./images/logos/google.png"
                className=""
                alt="partners"
              />
              <img
                src="./images/logos/google.png"
                className=""
                alt="partners"
              />
            </div>
          </div> */}
        </div>
      </header>
    </>
  );
}
