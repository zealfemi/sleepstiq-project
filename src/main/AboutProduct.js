import React from "react";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import ReviewsList from "../components/ReviewsList";
import DividerLine from "../components/DividerLine";
import Footer from "../components/Footer";

export default function AboutProduct() {
  return (
    <>
      <Header
        banner="../images/product-header.png"
        topText="We're here to help you"
        largeText="Relax & Rest"
        bottomText=""
        buttonText=""
        showButton={false}
      />
      <ProductDetails />
      <DividerLine />
      <ReviewsList />
      <Footer />
    </>
  );
}
