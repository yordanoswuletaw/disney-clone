import React /*{ useState, useEffect, useMemo }*/ from "react";
import styled from "styled-components";

export default function ImgSlider() {
  const handleClick = (e) => {};

  return (
    <Carousel>
      <ChevronLeft
        className="chevron"
        src="/disney-clone/images/chevron_left.png"
        alt="left"
        onClick={handleClick}
      />

      <img src="/disney-clone/images/slider-badag.jpg" alt="" className="images" />
      <img src="/disney-clone/images/slider-badging.jpg" alt="" className="images" />
      <img src="/disney-clone/images/slider-scale.jpg" alt="" className="images" />
      <img src="/disney-clone/images/slider-scales.jpg" alt="" className="images" />

      <ChevronRight
        className="chevron"
        src="/disney-clone/images/chevron_right.png"
        alt="right"
        onClick={handleClick}
      />
    </Carousel>
  );
}

const Carousel = styled.div`
  padding: 0 calc(3.5vw + 5px);
  padding-top: 20px;
  position: relative;
  display: flex;
  background: transparent;
  align-items: center;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:after {
    position: absolute;
    margin: 0 calc(3.5vw + 2.5px);
    margin-top: 20px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    border: 4px solid transparent;
    border-radius: 4px;
    transition: all 300ms ease-out;
  }

  .images {
    width: 100%;
    animation: animatLeft 5s ease-in-out 2s infinite;
    margin: 0 1px;
    border-radius: 4px;
  }

  &:hover {
    .chevron {
      display: flex;
    }
    &:after {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

const ChevronLeft = styled.img`
  position: absolute;
  top: 50%;
  left: 0%;
  background: whitesmoke;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  padding: 2px;
  margin: 0 6px;
  cursor: pointer;
  display: none;
  z-index: 1;
  animation: none;
  &:hover {
    display: flex;
  }
`;

const ChevronRight = styled(ChevronLeft)`
  position: absolute;
  top: 50%;
  left: 96.5%;
  right: 0.5%;
`;
