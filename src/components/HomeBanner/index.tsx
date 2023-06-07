import React from "react";

function HomeBanner() {
  return (
    <section className="banner">
      <div className="banner-wrapper row row-no-gutters">
        <div className="banner-left col-5">
          <div className="curve curve-top-left">
            <div className="concave"></div>
          </div>
          <div className="curve curve-bottom-left">
            <div className="concave"></div>
          </div>
        </div>
        <div className="col-7"></div>
        <div className="curve curve-top-right">
          <div className="concave"></div>
        </div>
        <div className="curve curve-bottom-right">
          <div className="concave"></div>
        </div>
        <div className="banner-circle"></div>
      </div>
      <div className="banner-info">
        <div className="container">
          <h2 className="banner-title">
            Get Business <br />
            Solutions with TheFirm.
          </h2>
          <p className="banner-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
          <button className="btn">Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
