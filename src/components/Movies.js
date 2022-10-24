import React from "react";
import styled from "styled-components";

function Movies() {
  const moviesImg = [
    {
      name: "The Princess",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOE55KuBzYjngijqlkZw2xgFidoceUDzimFxQPtSXJOiZne05",
    },
    {
      name: "The Avengers",
      url: "http://www.movienewsletters.net/photos/067625R1.jpg",
    },
    {
      name: "Doctor Strange in the Multiverse of Madness",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV",
    },
    {
      name: "The Sorcerer's Apprentice",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgX7gyL6PHFGQo5ON2GbjtpKFDmVSN1_TQyJuzppIOoA9NQ13N",
    },
    {
      name: "Togo",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FxMmaCxgZd10uVbnlS-OigCEXk2jUpMxJyr5vGKLk2Wgwtj7",
    },
    {
      name: "The Empty Man",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjlHcoSyuLPHjutxJDctHOCuuPYWwaKt8A91BqBFUeAv_A4N-0",
    },
    {
      name: "The Call of the Wild",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ3r7VJf7pl5dACgu7SCIH-BnsZ431WR16fHFJyGvLH923IHNgL",
    },
    {
      name: "Dead Poets Society",
      url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJ6D9lWABPov7-jd2NxZDG_MBz2rBend6dIv54iNQIYAeTHwuQ",
    },
    {
      name: "Devil's Due",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqYq-2tz-9QGXtHIUumRr1l2zi05lv1sCKkJ7pjOexLtwrKmXN",
    },
    {
      name: "Free Solo",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT516jIlt4AlGK0G0jCcgJ6qpUD_Cj4FUzdZFTn1yul&usqp=CAE&s",
    },
    {
      name: "Pirates of the Caribbean: On Stranger Tides",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hukbs571MwrsRvhFHpXwOf8xeGaehz_9K0VgeosBZeqg4rHg",
    },
    {
      name: "A Good Year",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHVyAAHsQRccCFi6tKO51idc7beSfJPstUSEgTi7FFs2GLmsy",
    },
    {
      name: "The Valet",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSs-eMFX0n1QCLYabeTKTnpx1MjIsDQKQXDUqkRmqY1MT5zhHgE",
    },
    {
      name: "Crush",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDcGpDxCGf_pJH8keTvac2JNwbGZwvIJeTvO0NK55QgBB3giJ",
    },
    {
      name: "Maleficent",
      url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTolLCWLqizY74NCro0f8TfqczpmWs07MqIrtvGeOP8HmQWd_E7",
    },
    {
      name: "Spy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP50Y_KyZHiEP3qzzDns_vGSOx-hH7-dStFL8R8teESaka0xZd",
    },
    {
      name: "Night at the Museum: Secret of the Tomb",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4ewDTcj94EmERgyCF2BKNS1gx8QysL3-e5unCz6ZnXYNeaYkk",
    },
    {
      name: "The Maze Runner",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRChDQITIVlqysDK2HpjYdrc_ip-4hujzLAv_Yuggv8z1SJ_6qD",
    },
    {
      name: "Tuck Everlasting",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlw7iCQxYi5JpzQWDX8LG86WUDr8f_OlG8qG5oVZct0RLsSv0r",
    },
    {
      name: "Lightyear",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMwbbJ132lV40V2Pto7bY08jytnXwFq-Mx-k0PtZcCH43k8ioV",
    },
  ];
  return (
    <Container>
      <h4>Recomended for You</h4>
      <Content>
        {moviesImg.map(({ name, url }, index) => (
          <Wrap key={index}>
            <img src={url} alt={name} />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div`
  padding: ;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
