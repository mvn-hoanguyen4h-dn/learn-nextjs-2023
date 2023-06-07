import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Slider, { CustomArrowProps } from "react-slick";

import { SlideItemDef } from "@/types";

type CommonSliderProps = {
  slideData: SlideItemDef[],
  largestSlideShow?: number,
  largeSlideShow?: number,
  mediumSlideShow?: number,
}

function NextArrow({ currentSlide, slideCount, ...props }: CustomArrowProps) {
  return (
    <div {...props}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

function PrevArrow({ currentSlide, slideCount, ...props }: CustomArrowProps) {
  return (
    <div {...props}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

function CommonSlider({slideData, largestSlideShow, largeSlideShow, mediumSlideShow}: CommonSliderProps) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: largestSlideShow || 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: largeSlideShow || 1,
          slidesToScroll: largeSlideShow || 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: mediumSlideShow || 1,
          slidesToScroll: mediumSlideShow || 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slide">
      <Slider {...settings}>
        {slideData.map((slide) => (
          <div key={slide.id} className="slide-item">
            <Link href="#" className="slide-link">
              <Image
                src={slide.img}
                alt={slide.name}
                className="slide-img"
                width={slide?.width}
                height={slide?.height}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CommonSlider;
