import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  return (
    <>
      <Header
        banner="../images/product-header.png"
        topText="Page not found..."
        largeText="Error 404"
        bottomText=""
        buttonText=""
        showButton={false}
      />
      <section className="container text-center">
        <h2>Oops! That page cannot be found.</h2>
        <p className="mt-3">
          It looks like nothing was found at this location. Maybe try one of the
          links in the menu or press back to go to the previous page.
        </p>
      </section>
      <Footer />
    </>
  );
}
