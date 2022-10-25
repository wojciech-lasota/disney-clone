import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          alt="sing along with the greatest showman"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8u45LdG025douRUFZwkFKc5pZOWGOB4Ou_IWgFlABQhQIfozr"
        />
      </Background>
      <ImageTitle>
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8u45LdG025douRUFZwkFKc5pZOWGOB4Ou_IWgFlABQhQIfozr" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img alt="play button" src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img alt="trailer button" src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButon>
          <span>+</span>
        </AddButon>
        <GroupWatchButton>
          <img alt="group img" src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 7m Family Fantasy Kids Animation</SubTitle>
      <Description>
        Ad magna magna ullamco aliquip ex sunt eiusmod consectetur ea officia
        proident ullamco commodo. Incididunt proident Lorem ipsum do nisi et
        culpa minim voluptate. Laborum in mollit officia sit.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 5px;
  font-size: 15px;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  height: 55px;
  background: rgb (249, 249, 249);
  border: none;
  margin-right: 25px;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButon = styled.button`
  margin-right: 25px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButon)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 25px;
`;
const Description = styled.div`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 15px;
  color: rgb(249, 249, 249);
  max-width: 800px;
`;
