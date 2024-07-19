import React from "react";
import { NavLink, Link } from "react-router-dom";
import Partners from "./Partners";

export default function Header(props) {
  const styles = {
    height: "80vh",
    marginBottom: "none",
  };

  props.isHome ? (styles.height = "100vh") : (styles.height = "80vh");

  props.isHome
    ? (styles.marginBottom = "150px")
    : (styles.marginBottom = "none");

  function boldText(event) {
    console.log(event.target.innerHTML);
  }

  return (
    <>
      <header id="header">
        <div className="header" style={styles}>
          {props.banner && (
            <img
              src={props.banner}
              alt="header banner"
              className="banner-img"
            />
          )}

          <div className="header-contents">
            <div className="container h-100">
              <div className="header-spread">
                <nav className="header-nav">
                  <img
                    src="./images/logos/sleepstiq-header.png"
                    alt="header logo"
                    className="header-logo"
                  />

                  <ul className="header-nav-links" onClick={boldText}>
                    <NavLink exact activeClassName="active" to="/">
                      <li>Home</li>
                    </NavLink>
                    <NavLink activeClassName="" to="/about">
                      <li>About</li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/shop">
                      <li>Shop</li>
                    </NavLink>
                    <NavLink activeClassName="active" to="/faqs">
                      <li>FAQs</li>
                    </NavLink>
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

                  {props.buttonText && (
                    <Link to={props.buttonLink}>
                      <button className="btn">{props.buttonText}</button>
                    </Link>
                  )}

                  {props.isFAQs && (
                    <form className="d-flex gap-3 search-form">
                      <img src="./images/logos/search.png" alt="search logo" />
                      <input type="text" placeholder="Search FAQs here" />
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {props.partners && <Partners />}
        </div>
      </header>
    </>
  );
}
