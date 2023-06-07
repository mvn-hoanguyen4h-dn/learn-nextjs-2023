import { partnerData } from "@/data/homeData";
import CommonSlider from "../CommonSlider";

function Partner() {
  return (
    <section className="partner">
      <div className="container">
        <h2 className="section-title">
          Our <span className="underline-end">Partner</span>
        </h2>
        <CommonSlider
          slideData={partnerData}
          largestSlideShow={4}
          largeSlideShow={3}
          mediumSlideShow={2}
        />
      </div>
    </section>
  );
}

export default Partner;
