import React from "react";
import ProductReviewList from "./List";
import data from "../data/productReviews";

export default function ProductList() {
  const productReviews = data?.map((review) => {
    return (
      <ProductReviewList
        key={review.id}
        {...review}
        isProduct={true}
        productImg="./images/product-2.png"
      />
    );
  });

  return (
    <div class="scroll-list-container my-4">
      <div class="scroller">{productReviews}</div>
    </div>
  );
}
