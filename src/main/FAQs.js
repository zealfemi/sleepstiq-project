import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQsAccordion from "../components/FAQsAccordion";
import data from "../data/faqs";

export default function FAQs() {
  // STATE FOR CATEGORY
  const [categoryId, setCategoryId] = React.useState(0);

  const newCategories = data?.map((cat) => {
    return { id: cat.id, category: cat.category, isActive: false };
  });

  newCategories[0].isActive = true;

  // STATE FOR ACTIVE
  const [active, setActive] = React.useState(newCategories);

  let faqsCategories = active?.map((cat) => {
    return (
      <div
        key={cat.id}
        id={cat.id}
        className={cat.isActive ? "faq-active faqs-category" : "faqs-category"}
        onClick={checkActive}
      >
        {cat.category}
      </div>
    );
  });

  function changeCategory(event, id) {
    const newCatId = event.target.id;

    setCategoryId((prevCatId) => {
      return newCatId;
    });
  }

  function checkActive(event) {
    const id = event.target.id;
    setActive((current) => {
      const newArr = current?.map((cat) => {
        if (cat.id == id) {
          return { ...cat, isActive: true };
        } else {
          return { ...cat, isActive: false };
        }
      });

      return newArr;
    });
  }

  return (
    <>
      <Header
        topText="We're here to help you"
        largeText="How can we assist?"
        isFAQs={true}
      />

      <section className="faqs-container">
        <div className="row faqs-width g-4">
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
