import Image from "next/image";

import { researchData } from "@/data/homeData";
import CommonSlider from "../CommonSlider";

const lightYellow = require("../../images/light-yellow.png");

function Research() {
  return (
    <section className="research">
      <div className="container">
        <div className="research-top">
          <h2 className="section-title">
            Our Research & Cases <span className="underline-end">Studies</span>
          </h2>
          <p className="section-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,
          </p>
        </div>
        <div className="research-bottom row">
          <div className="research-bottom-left col-largest-6 col-large-6 col-medium-12 col-small-12">
            <h3>Lorem Ipsum is simply</h3>
            <p className="research-bottom-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown printer
              took.
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="research-bottom-right col-largest-6 col-large-6 col-medium-12 col-small-12">
            <CommonSlider slideData={researchData} />
            <Image
              src={lightYellow}
              className="light-yellow"
              alt="light-yellow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
