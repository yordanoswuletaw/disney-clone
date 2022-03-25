import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/disney-clone/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          tempore nulla obcaecati dolores qui a expedita iste quam commodi amet!
        </Description>
        <CTALogoTwo src="/disney-clone/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: top;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  background: url("/disney-clone/images/login-background.jpg") center / cover no-repeat fixed;
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 60px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const CTALogoOne = styled.img`
  object-fit: cover;
`;

const SignUp = styled.a`
  width: 100%;
  padding: 13.5px 0;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 17.5px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.3px;
  margin: 8px 0 12px 0;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  text-align: center;
  letter-spacing: 1.3px;
  line-height: 1.5;
`;

const CTALogoTwo = styled(CTALogoOne)`
  padding: 16px 24px;
`;
