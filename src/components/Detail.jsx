import React from "react";
import { useDispatch } from "react-redux";
import { changeRoute } from "../features/viewer/viewerSlice";
import styled from "styled-components";

export default function Detail() {
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() => {
        /*dispatch(changeRoute("/"))*/
      }}
    >
      <Background>
        <img src="/disney-clone/images/d-bg.png" alt="background" />
      </Background>
      <ImageTitle>
        <span>
          <img src="/disney-clone/images/viewers-disney.png" alt="" />
          ●
          <img src="/disney-clone/images/viewers-pixar.png" alt="" />
        </span>
        <h1>VR</h1>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/disney-clone/images/play-icon-black.png" alt="play" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/disney-clone/images/play-icon-white.png" alt="play" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton>
          <img src="/disney-clone/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2021 ● 7m ● SciFi, Fantasy, Adventure, Action</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        laborum voluptatem? Praesentium labore atque iste! Repellendus dolorem
        id soluta delectus quidem quaerat cumque reprehenderit nesciunt. Labore
        laboriosam odio illo harum?
      </Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 50px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  padding: 28px 0;
  width: 35vw;
  min-height: 30vh;

  span {
    display: flex;
    align-items: center;
    justify-content: start;
    img {
      height: 40%;
      width: 40%;
      object-fit: cover;
    }
  }
  h1 {
    font-size: 5rem;
    font-style: italic;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  border: none;
  outline: none;
  color: #040714;
  padding: 0 22px;
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 15px;
  background: rgb(249, 249, 249);
  cursor: pointer;
  margin-right: 16px;
  text-transform: uppercase;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 2px solid rgb(249, 249, 249);
`;
const GroupWatchButton = styled.button`
  margin-right: 16px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;
  position: relative;
  background: rgb(0, 0, 0);
`;
const AddButton = styled(GroupWatchButton)`
  background-color: rgba(0, 0, 0, 0.5);

  &:before {
    position: absolute;
    content: "";
    height: 1.5px;
    width: 14px;
    background: white;
  }
  &:after {
    position: absolute;
    content: "";
    height: 14px;
    width: 2px;
    background: white;
  }
`;

const SubTitle = styled.p`
  padding: 20px 0 8px 0;
  font-size: 13px;
  color: rgb(249, 249, 249);
`;

const Description = styled.p`
  line-height: 1.5;
  color: rgb(249, 249, 249);
  max-width: 700px;
`;
