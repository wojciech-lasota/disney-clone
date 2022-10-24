import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Fugiat est consectetur magna sunt dolore nostrud proident excepteur
          duis anim quis. Aute ut elit irure reprehenderit exercitation veniam
          id laborum dolore. Cupidatat nisi labore pariatur aliqua est tempor ut
          dolor sunt nostrud minim aute officia nisi. Fugiat sunt exercitation
          dolore dolore fugiat reprehenderit reprehenderit elit enim laborum
          pariatur. Ad in consequat commodo est reprehenderit nostrud nostrud ad
          non. Consequat culpa ullamco dolor id laborum occaecat magna Lorem
          laboris elit adipisicing veniam.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    opacity: 0.6;
  }
`;
const CTA = styled.div`
  margin-top: 100px;
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0062e5;
  font-weight: 800;
  padding: 20px 0;
  color: #f9f9f9;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 10px 0 20px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
