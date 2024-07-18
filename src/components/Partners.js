import React from "react";
import Partner from "./Partner";
import data from "../data/partners";

export default function Partners() {
  const partners = data.map((partner) => {
    return <Partner key={partner.id} {...partner} />;
  });

  return (
    <>
      <div className="header-partners-container">
        <div className="header-partners">{partners}</div>
      </div>
    </>
  );
}
