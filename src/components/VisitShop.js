import React from "react";
import { Link } from "react-router-dom";

export default function VisitShop() {
  return (
    <article className="container">
      <div className="visit-shop">
        <h2>Visit Shop</h2>
        <p className="color-low text-center">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Link to="/shop">
          <button className="btn">Visit Shop</button>
        </Link>
      </div>
    </article>
  );
}
