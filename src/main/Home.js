import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import ShopNow from "../components/ShopNow";
import OurMission from "../components/OurMission";
import VisitShop from "../components/VisitShop";
import ProductReviews from "../components/ProductReviews";
import DividerLine from "../components/DividerLine";

export default function Home() {
  return (
    <>
      <Header
        banner="../images/banner-home.png"
        topText="We're here to help you"
        largeText="Relax & Rest"
        bottomText="With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep."
        buttonText="Visit Shop"
        buttonLink="shop"
        partners={true}
        isHome={true}
      />
      <Reviews />
      <DividerLine />
      <ShopNow />
      <OurMission />
      <VisitShop />
      <DividerLine />
      <ProductReviews />
      <Footer />
    </>
  );
}
