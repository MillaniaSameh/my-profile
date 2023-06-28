import styled from "@emotion/styled";

const SliderWrapper = styled("div")`
  /* ----------------------------- Arrows ----------------------------- */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 30px;
    height: 30px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    outline: none;
    background: transparent;

    border-top: 6px solid white;
    border-right: 6px solid white;
    border-radius: 3px;
    opacity: 0.25;
    transition: width 0.3s ease-in-out;
  }

  .slick-prev {
    transform: rotate(-135deg);
    margin-left: -40px;
  }

  .slick-next {
    transform: rotate(45deg);
    margin-right: -40px;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    opacity: 0.75;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;

    opacity: 0.75;
    color: white;
    display: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ----------------------------- Dots ----------------------------- */

  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 0.75;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots li button:before {
    margin-top: -30px;

    font-family: "slick";
    font-size: 12px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 30px;
    height: 2px;

    content: "";
    text-align: center;

    opacity: 0.25;
    color: white;

    border: 2px solid white;
    background-color: white;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }
`;

export default SliderWrapper;
