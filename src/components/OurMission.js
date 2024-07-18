import React from "react";

export default function OurMission() {
  return (
    <>
      <section id="our-mission">
        <div className="w-100 d-flex flex-column flex-lg-row gap-5">
          <div className="col-lg d-flex flex-column justify-content-lg-center container">
            <div className="sm-content-container">
              <h2>Our Mission</h2>
              <p className="color-low">
                We started Sleepstiq with 1 simple goal: to be your best friend
                at bedtime. We, just like you, deal with stress, unease, and
                trouble sleeping from a number of silly things like school,
                work, screens, numbers, and people. That's why we created
                products that aim to -
              </p>
              <ul className="color-low">
                <li>✓ Promote Calm</li>
                <li>✓ Support Sleep</li>
                <li>✓ Reduce Stress</li>
                <li>✓ Aid Relaxation</li>
              </ul>
            </div>
          </div>
          <div className="col-lg">
            <div className="position-relative">
              <img
                src="./images/woman-lying.png"
                alt="sleepstiq pic"
                className="our-mission-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
