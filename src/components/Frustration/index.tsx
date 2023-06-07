import { frustrationData } from "@/data/homeData";
import Image from "next/image";
import React from "react";

const questionMark = require("../../images/frustration/question-mark.png");
const yellowCircle = require("../../images/frustration/yellow-circle.png");
const lightYellow = require("../../images/light-yellow.png");
const bigGray = require("../../images/big-gray.png");
const smallGray = require("../../images/frustration/small-gray.png");
const frustrationChart = require("../../images/frustration/frustration-chart.png");

function Frustration() {
  return (
    <section className="frustration">
      <div className="container">
        <div className="row">
          <div className="frustration-left col-largest-6 col-large-6 col-medium-6 col-small-12">
            <div className="frustration-left-wrapper">
              <h2 className="section-title">
                Frustration of <span className="underline-end">Clients</span>
              </h2>
              <p className="frustration-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s,
              </p>
              <ul className="frustration-list">
                {frustrationData.map((data) => (
                  <li key={data.id} className="frustration-item">
                    <Image src={questionMark} alt="question-mark" />
                    <span>{data.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="frustration-right col-largest-6 col-large-6 col-medium-6 col-small-12">
            <Image src={frustrationChart} className="frustration-chart" alt="frustration-chart" />
            <Image
              src={yellowCircle}
              className="frustration-circle yellow-circle"
              alt="yellow-circle"
            />
            <Image
              src={lightYellow}
              className="frustration-circle light-yellow"
              alt="light-yellow"
            />
            <Image
              src={bigGray}
              className="frustration-circle big-gray-1"
              alt="big-gray"
            />
            <Image
              src={bigGray}
              className="frustration-circle big-gray-2"
              alt="big-gray"
            />
            <Image
              src={smallGray}
              className="frustration-circle small-gray"
              alt="small-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frustration;
