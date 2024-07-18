import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-container d-flex flex-column align-items-center gap-3">
          <img
            src="./images/sleepstiq-big-footer.png"
            alt="sleepstiq pic"
            className=""
          />

          <div className="row w-100 g-3">
            <div className="col-6 col-lg-2">
              <p className="fw-bold mb-3">COMPANY</p>

              <ul className="d-flex flex-column gap-2">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Jobs</li>
              </ul>
            </div>

            <div className="col-6 col-lg-2">
              <p className="fw-bold mb-3">CONTACT</p>

              <ul className="d-flex flex-column gap-2">
                <li>Phone</li>
                <li className="fw-bold">+234 708 507 3128</li>
                <li>Address</li>
                <li className="fw-bold">16, Ogindipe Close, Upston Close</li>
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
                  affiliated with nor do they endorse this product.
                </li>
                <li>
                  Results may vary. By using our website or product, you agree
                  to follow our terms of service.
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3 mb-3">
              <p className="fw-bold">GET IN TOUCH</p>

              <div>
                <p>Feel free to get in touch with us vai email</p>
                <p className="fs-4 fw-bold">hello@sleepstiq.com</p>
                <ul>
                  <li></li>
                </ul>
              </div>
              <p className="small">
                &copy; 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
