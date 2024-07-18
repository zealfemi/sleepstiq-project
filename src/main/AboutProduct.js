import React from "react";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import ReviewsList from "../components/ReviewsList";
import DividerLine from "../components/DividerLine";
import Footer from "../components/Footer";

import data from "../data/products";

export default function AboutProduct() {
  const product = data.map((product) => {
    return <ProductDetails key={product.id} {...product} />;
  });

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
      {product[0]}
      <DividerLine />
      <ReviewsList />
      <Footer />
    </>
  );
}
