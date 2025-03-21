import React from "react";

export default function Review(props) {
  let newClass = "slide-content";

  props.isProduct
    ? (newClass = "products-review slide-content")
    : (newClass = "review slide-content");

  return (
    <>
      <div class={newClass}>
        {props.isProduct && (
          <>
            <div className="product-details">
              <img
                src={props.productImg}
                alt="product"
                className="product-image-review"
              />

              <p class="fst-italic pt-3 px-3">{props.reviewText}</p>
            </div>
            <div className="rating-author p-3">
              <h6>{props.reviewAuthor}</h6>
              <img
                src="./images/logos/rating-5-star-green.png"
                alt="rating"
                className="rating-stars"
              />
            </div>
          </>
        )}

        {props.isReview && (
          <>
            <p class="fst-italic p-3">{props.reviewText}</p>

            <div className="rating-author p-3">
              <h6>{props.reviewAuthor}</h6>
              <img
                src="./images/logos/rating-5-star-green.png"
                alt="rating"
                className="rating-stars"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
