import Image from "next/image";
import React from "react";

import { reasonData } from "@/data/homeData";

const brandImg = require("../../images/brand.png");
const loudSpeaker = require("../../images/loudspeaker.png");

function Reason() {
  return (
    <section className="reason">
      <div className="container">
        <div className="reason-top">
          <h2 className="section-title">
            Reason to Choose <span className="underline-end">Us</span>
          </h2>
          <p className="section-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,
          </p>
          <ul className="case-list">
            {reasonData.map((reason) => (
              <li key={reason.id} className="case-item">
                <span>{reason.case}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reason-bottom">
          <div className="row">
            <div className="col-largest-6 col-large-6 col-medium-6 col-small-12">
              <Image
                src={brandImg}
                alt="reason-brand"
                className="reason-brand"
              />
            </div>
            <div className="reason-bottom-right col-largest-6 col-large-6 col-medium-6 col-small-12">
              <div className="reason-bottom-title">
                <Image src={loudSpeaker} alt="loudspeaker-img" />
                <h3>
                  <span className="underline-end">Branding</span>
                </h3>
              </div>
              <div className="reason-bottom-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
                <button className="btn btn-secondary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reason;
