import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  selectImages,
  selectVideos,
  selectTitle,
  selectHover,
  setHover,
} from "../features/viewer/viewerSlice";

export default function Viewers() {
  const hover = useSelector(selectHover);
  const images = useSelector(selectImages);
  const videos = useSelector(selectVideos);
  const title = useSelector(selectTitle);
  const dispatch = useDispatch();

  return (
    <Container>
      {images &&
        videos &&
        images.map((image, i) => {
          return (
            <Wrap
              key={i}
              onMouseEnter={() => dispatch(setHover(title[i]))}
              onMouseLeave={() => dispatch(setHover(""))}
            >
              {hover === title[i] ? (
                <video autoPlay loop>
                  <source src={videos[i]} type="video/mp4" />
                </video>
              ) : (
                <img src={image} alt="disney" />
              )}
            </Wrap>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  padding: 28px calc(3.5vw + 5px);
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
