import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Indicators from "./Indicators";
import Movies from "./Movies";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Indicators />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 50px);
  //padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  background: url("/disney-clone/images/home-background.png") center / cover no-repeat fixed;
`;

export default Home;
