import React from "react";
import Review from "./List";
import data from "../data/reviews";

export default function ReviewsList() {
  const reviews = data?.map((review) => {
    return <Review key={review.id} {...review} isReview={true} />;
  });
  return (
    <div class="scroll-list-container mt-5">
      <div class="scroller">{reviews}</div>
    </div>
  );
}
