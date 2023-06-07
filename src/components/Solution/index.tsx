import { solutionData } from "@/data/homeData";
import Image from "next/image";

const ifImg = require("../../images/solution/if.png");
const bigGray = require("../../images/big-gray.png");
const lightYellow = require("../../images/light-yellow.png");

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="row">
          <div className="solution-left col-largest-7 col-large-7 col-medium-12 col-small-12">
            <div className="solution-left-wrapper">
            <ul className="solution-list">
              {solutionData.map((item) => (
                <li key={item.id} className="solution-item">
                  <Image src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
            <Image src={ifImg} alt="if-img" className="if-img" />
            <Image
              src={bigGray}
              alt="big-gray"
              className="big-gray big-gray-1"
            />
            <Image
              src={bigGray}
              alt="big-gray"
              className="big-gray big-gray-2"
            />
            <Image
              src={bigGray}
              alt="big-gray"
              className="big-gray big-gray-3"
            />
            <Image
              src={lightYellow}
              alt="light-yellow"
              className="light-yellow light-yellow-1"
            />
            <Image
              src={lightYellow}
              alt="light-yellow"
              className="light-yellow light-yellow-2"
            />
            </div>
          </div>
          <div className="solution-right col-largest-5 col-large-5 col-medium-12 col-small-12">
            <div className="solution-right-wrapper">
            <h2 className="section-title">
              Perfect Solution for Your{" "}
              <span className="underline-end">Business</span>
            </h2>
            <p className="solution-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
