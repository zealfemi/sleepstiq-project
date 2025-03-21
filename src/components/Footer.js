import React from "react";
import Socials from "./Socials";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const showScrollTopButton = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", showScrollTopButton);

    return () => {
      window.removeEventListener("scroll", showScrollTopButton);
    };
  });

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <footer id="footer">
        <div className="footer-container d-flex flex-column align-items-center gap-5">
          <img
            src="./images/sleepstiq-big-footer.png"
            alt="sleepstiq pic"
            className=""
          />

          <div className="row w-100 g-5">
            <div className="col-6 col-lg-2">
              <p className="fw-bold mb-3">COMPANY</p>

              <ul className="d-flex flex-column gap-2 text-white-50">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Jobs</li>
              </ul>
            </div>

            <div className="col-6 col-lg-2">
              <p className="fw-bold mb-3">CONTACT</p>

              <ul className="d-flex flex-column gap-2">
                <li className="text-white-50">Phone</li>
                <li>+234 708 507 3128</li>
                <li className="text-white-50">Address</li>
                <li>16, Ogindipe Close, Upston Close</li>
              </ul>
            </div>

            <div className="col-12 col-lg-5 mb-3">
              <p className="fw-bold mb-3">CONSUMER ADVISORY</p>
              <ul className="d-flex flex-column gap-2">
                <li>
                  These statements have not been evaluated by the Food and Drug
                  Administration. This product is not intended to diagnose,
                  treat, cure, or prevent any disease. This product should be
                  used only as directed on the label. All trademarks and
                  copyrights are property of their respective owners and not
                  affiliated with nor do they endorse this product. Results may
                  vary.
                </li>
                <li>
                  By using our website or product, you agree to follow our{" "}
                  <Link to="#">terms of service.</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3 left-border height-100">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-bold mb-3">GET IN TOUCH</p>

                  <div className="d-flex flex-column gap-3">
                    <p className="text-white-50">
                      Feel free to get in touch with us via email
                    </p>
                    <p className="fs-4 fw-bold">hello@sleepstiq.com</p>
                    <Socials />
                  </div>
                </div>

                <p className="small text-white-50 justify-self-end mt-3">
                  &copy; 2020 @sleepstiq. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {showButton && (
          <button className="back-to-top" onClick={scrollTop}>
            &#x2191;
          </button>
        )}
      </footer>
    </>
  );
}
