import React from "react";

export default function Partner(props) {
  return (
    <>
      <img
        src={props.partnerLogo}
        className="partner-logo"
        alt={props.partnerName}
      />
    </>
  );
}
