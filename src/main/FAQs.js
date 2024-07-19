import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQsAccordion from "../components/FAQsAccordion";
import data from "../data/faqs";

export default function FAQs() {
  const faqsCategories = data?.map((cat) => {
    return (
      <div key={cat.id} id={cat.id} className="faqs-category">
        {cat.category}
      </div>
    );
  });

  // STATE FOR CATEGORY

  const [categoryId, setCategoryId] = React.useState(0);

  function changeCategory(event, id) {
    const newCatId = event.target.id;

    setCategoryId((prevCatId) => {
      return newCatId;
    });
  }

  return (
    <>
      <Header
        topText="We're here to help you"
        largeText="How can we assist?"
        isFAQs={true}
      />

      <section className="container">
        <div className="row w-100 g-4">
          <div
            className="col-lg-3 d-flex flex-row flex-lg-column gap-2 align-items-center align-items-lg-start"
            onClick={changeCategory}
          >
            {faqsCategories}
          </div>
          <div className="col-lg-9">
            <FAQsAccordion key={categoryId} categoryId={categoryId} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
