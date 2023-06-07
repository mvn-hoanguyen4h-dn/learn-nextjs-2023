import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const brandImg = require("../../images/the-firm.png");

  const headerMenu = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Solutions",
      url: "/solutions",
    },
    {
      title: "Cases",
      url: "/cases",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <div className="page-header">
      <div className="container">
        <div className="header-wrapper row row-no-gutters">
          <div className="header-left col-largest-4 col-large-4 col-medium-3">
            <Link href="/" className="brand-img">
              <Image src={brandImg} alt="brand-img" />
              <span className="brand-circle brand-circle-top"></span>
              <span className="brand-circle brand-circle-bottom"></span>
            </Link>
          </div>
          <div className="header-right col-largest-8 col-large-8 col-medium-9">
            <ul className="header-list">
              {headerMenu.map((item) => (
                <li className="header-item" key={item.title}>
                  <Link className="" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="btn btn-sm">Get in Touch</button>
          </div>
          {/* <button className="btn-bars"> */}
            {/* <FontAwesomeIcon icon={faBars} /> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
