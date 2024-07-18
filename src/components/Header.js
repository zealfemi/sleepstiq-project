import React from "react";
import { Link } from "react-router-dom";
import Partners from "./Partners";

export default function Header(props) {
  const styles = {
    height: "80vh",
  };

  props.isHome ? (styles.height = "100vh") : (styles.height = "80vh");

  return (
    <>
      <header id="header">
        <div className="header" style={styles}>
          <img src={props.banner} alt="header banner" className="banner-img" />

          <div className="header-contents">
            <div className="container">
              <nav className="header-nav">
                <img
                  src="./images/logos/sleepstiq-header.png"
                  alt="header logo"
                  className="header-logo"
                />

                <ul className="header-nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/product">About</Link>
                  </li>
                  <li>
                    <Link to="/product">Shop</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                </ul>
              </nav>

              <div className="banner-contents">
                {props.topText && (
                  <p className="banner-top-text">{props.topText}</p>
                )}
                {props.largeText && (
                  <h1 className="banner-large-text">{props.largeText}</h1>
                )}
                {props.bottomText && (
                  <p className="banner-bottom-text">{props.bottomText}</p>
                )}
              </div>
              {props.buttonText && (
                <button className="btn">{props.buttonText}</button>
              )}
            </div>
          </div>

          {props.partners && <Partners />}
        </div>
      </header>
    </>
  );
}
