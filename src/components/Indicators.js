import React from "react";
import styled from "styled-components";

export default function Indicators() {
  return (
    <Wrapper>
      <Indicator className="i1" />
      <Indicator className="i2" />
      <Indicator className="i3" />
      <Indicator className="i4" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 6px;

  .i1 {
    animation: i1 5s ease-in-out 2s infinite;
  }
  .i2 {
    animation: i2 5s ease-in-out 2s infinite;
  }
  .i3 {
    animation: i3 5s ease-in-out 2s infinite;
  }
  .i4 {
    animation: i4 5s ease-in-out 2s infinite;
  }
`;

const Indicator = styled.div`
  width: 8px;
  background: #090b13;
  height: 8px;
  margin: 6px;
  border-radius: 50%;
`;
