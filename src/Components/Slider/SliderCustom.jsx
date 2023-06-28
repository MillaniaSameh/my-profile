import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./SliderWrapper";
import "./SliderCustom.css";

const SliderCustom = (props) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 60000,
    responsive: [
      {
        breakpoint: 1024, // screen width below 1024px
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <SliderWrapper>
        <Slider {...settings} className="custom-slider">
          {props.items}
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default SliderCustom;

// responsive: [
//   {
//     breakpoint: 768, // screen width below 768px
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//     },
//   },
//   {
//     breakpoint: 1024, // screen width below 1024px
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       arrows: false,
//     },
//   },
// ],
