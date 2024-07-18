import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQs() {
  return (
    <>
      <Header
        topText="We're here to help you"
        largeText="How can we assist?"
        isFAQs={true}
      />

      <Footer />
    </>
  );
}
