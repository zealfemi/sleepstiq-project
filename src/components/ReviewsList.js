import React from "react";
import Review from "./review";

export default function ReviewsList() {
  return (
    <div class="scroll-list-container mt-5">
      <div class="scroller">
        <Review
          reviewText="Love it! I have trouble falling asleep and this knocked me right out. Will be buying more."
          reviewAuthor="John Matthews"
        />
        <Review
          reviewText="I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq."
          reviewAuthor="Eunice Oliver"
        />
        <Review
          reviewText="It's a really good product and helps me sleep better at night!"
          reviewAuthor="Laura Davies"
        />
        <Review
          reviewText="Helps me relax and remember to breathe. Stress level definitely goes down"
          reviewAuthor="Jane Bocks"
        />
        <Review
          reviewText="Love it! I have trouble falling asleep and this knocked me right
            out. Will be buying more."
          reviewAuthor="John Matthews"
        />
      </div>
    </div>
  );
}
