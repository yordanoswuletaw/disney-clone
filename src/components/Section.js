import React from "react";
import styled from "styled-components";

function Section({ carProps }) {
  const { title, description, backgroundImg, leftBtnText, rightBtnText } = {
    ...carProps,
  };

  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/disney-clone/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: orange ${(props) => `url("/disney-clone/images/${props.bgImage}")`} no-repeat
    center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  transition: transform 2s linear;
  transform: translate(-30px);
`;

const Button = styled.div``;

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.87;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  color: black;
  background-color: white;
  opacity: 0.67;
  font-weight: 550;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
