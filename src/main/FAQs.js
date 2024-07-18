import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQsAccordion from "../components/FAQsAccordion";
import data from "../data/faqs";

export default function FAQs() {
  const faqsCategories = data.map((category) => {
    return category;
  });

  return (
    <>
      <Header
        topText="We're here to help you"
        largeText="How can we assist?"
        isFAQs={true}
      />

      <section>
        acc
        {/* <FAQsAccordion /> */}
      </section>

      <Footer />
    </>
  );
}
