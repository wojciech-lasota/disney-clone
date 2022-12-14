import React from "react";
import styled from "styled-components";

function Viewers() {
  const vieversImg = [
    {
      name: "disney logo ",
      url: "viewers-disney.png",
    },
    {
      name: "marvel logo",
      url: "viewers-marvel.png",
    },
    {
      name: "national logo",
      url: "viewers-national.png",
    },
    {
      name: "pixar logo",
      url: "viewers-pixar.png",
    },
    {
      name: "starwars logo",
      url: "viewers-starwars.png",
    },
  ];
  return (
    <Container>
      {vieversImg.map(({ name, url }, index) => (
        <Wrap key={index}>
          <img src={"/images/" + url} alt={name} />
        </Wrap>
      ))}
    </Container>
  );
}

export default Viewers;
const Container = styled.div`
  cursor: pointer;
  margin-top: 30px;
  padding: 30px 0 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
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
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
  }
`;
