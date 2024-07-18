import React from "react";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <>
      <ul className="d-flex gap-2">
        <li>
          <Link to="#">
            <img src="./images/logos/facebook.png" alt="facebook" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="./images/logos/twitter.png" alt="twitter" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="./images/logos/google-plus.png" alt="google plus" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="./images/logos/linkedin.png" alt="linkedin" />
          </Link>
        </li>
      </ul>
    </>
  );
}
