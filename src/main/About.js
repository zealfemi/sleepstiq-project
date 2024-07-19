import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header
        banner="../images/product-header.png"
        topText="We're here to help you"
        largeText="About Us"
        bottomText=""
        buttonText=""
        showButton={false}
      />
      <section className="container">ABOUT PAGE HERE</section>
      <Footer />
    </>
  );
}
