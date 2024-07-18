import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-container d-flex flex-column align-items-center gap-5">
          <img
            src="./images/sleepstiq-big-footer.png"
            alt="sleepstiq pic"
            className=""
          />

          <div className="row w-100 g-3">
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
                <li className="fw-bold">+234 708 507 3128</li>
                <li className="text-white-50">Address</li>
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

            <div className="col-12 col-lg-3 height-100">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-bold mb-3">GET IN TOUCH</p>

                  <div className="d-flex flex-column gap-3">
                    <p className="text-white-50">
                      Feel free to get in touch with us vai email
                    </p>
                    <p className="fs-4 fw-bold">hello@sleepstiq.com</p>
                    <ul className="d-flex gap-2">
                      <li>
                        <img src="./images/logos/facebook.png" alt="facebook" />
                      </li>
                      <li>
                        <img src="./images/logos/twitter.png" alt="facebook" />
                      </li>
                      <li>
                        <img
                          src="./images/logos/google-plus.png"
                          alt="facebook"
                        />
                      </li>
                      <li>
                        <img src="./images/logos/linkedin.png" alt="facebook" />
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="small text-white-50 justify-self-end mt-3">
                  &copy; 2020@sleepstiq. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center">Designed by Mackie</p>
        </div>
      </footer>
    </>
  );
}
