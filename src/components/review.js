import React from "react";

export default function Review(props) {
  return (
    <>
      <div class="review slide-content">
        <p class="fst-italic p-3">{props.reviewText}</p>

        <div className="rating-author p-3">
          <h6>{props.reviewAuthor}</h6>
          <img
            src="./images/logos/rating-5-star-green.png"
            alt="rating"
            className="rating-stars"
          />
        </div>
      </div>
    </>
  );
}
