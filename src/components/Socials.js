import React from "react";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <>
      <ul className="d-flex gap-2">
        <li>
          <Link to="#">
            <img
              src="./images/logos/facebook.png"
              className="social-logo"
              alt="facebook"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              src="./images/logos/twitter.png"
              className="social-logo"
              alt="twitter"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              src="./images/logos/google-plus.png"
              className="social-logo"
              alt="google plus"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              src="./images/logos/linkedin.png"
              className="social-logo"
              alt="linkedin"
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
