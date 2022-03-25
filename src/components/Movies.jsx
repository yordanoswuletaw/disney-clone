import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeRoute } from "../features/viewer/viewerSlice";

export default function Movies() {
  const dispatch = useDispatch();

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap onClick={() => dispatch(changeRoute("/detail"))}>
          <img src="/disney-clone/images/after3.png" alt="" />
        </Wrap>
        <Wrap onClick={() => dispatch(changeRoute("/detail"))}>
          <img src="/disney-clone/images/after3.png" alt="" />
        </Wrap>
        <Wrap onClick={() => dispatch(changeRoute("/detail"))}>
          <img src="/disney-clone/images/after3.png" alt="" />
        </Wrap>
        <Wrap onClick={() => dispatch(changeRoute("/detail"))}>
          <img src="/disney-clone/images/after3.png" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
`;

const Content = styled.div`
  padding: 26px 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
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
