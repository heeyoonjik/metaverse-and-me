import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BackToTopBtn } from "./BackToTopBtn";

const Guest = () => {
  const [contents, setContents] = useState([]);

  const getData = async () => {
    const json = await (
      await fetch("https://metav-server.herokuapp.com/reply")
    ).json();

    const reversejson = json.reverse();
    setContents(reversejson);
  };
  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://metav-server.herokuapp.com/reply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: nameRef.current.value,
        content: contentRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    });
  };

  const nameRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <Inner>
      <IntroductionHeading>GUEST</IntroductionHeading>
      <Main>
        <form onSubmit={onSubmit}>
          <InputBoxContainer>
            <InputBox>
              <InputNameBox
                type="text"
                placeholder="닉네임"
                ref={nameRef}
                maxLength="13"
              />
              <InputContentBox
                type="text"
                placeholder="내용을 입력하세요"
                ref={contentRef}
                maxLength="136"
              />
            </InputBox>
          </InputBoxContainer>
          <FormBtn>
            <FormBtnImg src="/img/formbtn.png" />
          </FormBtn>
        </form>
        <CommentBoxContainerFather>
          <CommentBoxContainer>
            {contents.map((e) => (
              <CommentBoxCom
                name={e.user}
                contents={e.content}
                date={e.date}
                key={e.id}
              />
            ))}
          </CommentBoxContainer>
        </CommentBoxContainerFather>
        <BackToTopBtn />
      </Main>
    </Inner>
  );
};

export default Guest;

const Inner = styled.header`
  width: 100vw;
  background-color: white;
`;

const IntroductionHeading = styled.h1`
  font-family: "BaunkSans";
  font-size: 4.427vw;
  padding-top: 7.2vw;
  margin-left: 4vw;
  padding-bottom: 2vw;
  color: #5100f9;
  @media screen and (max-width: 770px) {
    font-size: 6.5vw;
    padding-top: 25vw;
    padding-bottom: 9vw;
    margin-left: 9vw;
  }
`;

const Main = styled.div`
  background-image: url(/img/guestbg.png);
  width: 100vw;
  padding-bottom: 10vw;
  background-size: contain;
  @media screen and (max-width: 770px) {
    background-image: url(/img/mobileguest.png);
  }
`;

const InputBoxContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 770px) {
    justify-content: center;
  }
`;
const InputBox = styled.div`
  width: 38.75vw;
  height: 13.905vw;
  display: flex;
  background-color: white;
  margin-top: 5.521vw;
  margin-right: 8.438vw;
  @media screen and (max-width: 770px) {
    margin-right: 0;
    margin-top: 8.521vw;
    width: 83.79vw;
    height: 34vw;
    margin-left: 0.3vw;
  }
`;

const InputNameBox = styled.textarea`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;

  width: 10.094vw;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding-left: 1.406vw;
  padding-right: 1.406vw;
  padding-top: 0.8vw;
  font-size: 1.25vw;
  resize: none;
  @media screen and (max-width: 770px) {
    width: 25.385vw;
    font-size: 3.846vw;
    padding-left: 2.406vw;
    padding-right: 2.406vw;
    padding-top: 1.8vw;
  }
`;

const InputContentBox = styled.textarea`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  width: 27.708vw;
  border: 1px solid black;
  color: black;
  font-size: 1.25vw;
  padding-top: 0.8vw;
  padding-left: 1.406vw;
  padding-right: 1.406vw;
  resize: none;
  @media screen and (max-width: 770px) {
    width: 58.718vw;
    font-size: 3.846vw;
    padding-top: 1.8vw;
    padding-left: 2.406vw;
    padding-right: 2.406vw;
  }
`;

const FormBtn = styled.button`
  border: none;
  background: none;

  position: absolute;
  left: 88vw;
  top: 30vw;
  cursor: pointer;
  @media screen and (max-width: 770px) {
    left: 83vw;
    top: 75vw;
  }
`;
const FormBtnImg = styled.img`
  @media screen and (max-width: 770px) {
    height: 6.084vw;
  }
`;

const CommentBoxContainerFather = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 2.713vw;
`;

const CommentBoxContainer = styled.div`
  width: 77.8vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.633vw;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    width: 83.59vw;
    align-items: center;
    margin-left: 0.3vw;
  }
`;

const CommentBox = styled.div`
  width: 24.948vw;
  height: 13.906vw;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    width: 83.2vw;
    height: 41.906vw;
    margin-top: 5.7vw;
  }
`;

const CommentBoxNameDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentBoxName = styled.p`
  font-size: 0.938vw;
  font-family: "SDGothicBold";
  color: black;
  margin-top: 2.04vw;
  padding-left: 1.25vw;
  @media screen and (max-width: 770px) {
    font-size: 3.846vw;
    margin-left: 5.385vw;
  }
`;

const ConmmentBoxDate = styled.div`
  font-size: 0.938vw;
  color: black;
  margin-top: 2.04vw;
  padding-right: 1.25vw;
  @media screen and (max-width: 770px) {
    font-size: 3.333vw;
    margin-right: 5.385vw;
  }
`;
const CommentBoxContent = styled.p`
  font-size: 0.938vw;
  line-height: 1.406vw;
  color: black;
  padding-left: 1.25vw;
  padding-right: 1.25vw;
  margin-top: 1.25vw;
  @media screen and (max-width: 770px) {
    font-size: 3.333vw;
    line-height: 6.41vw;
    margin-left: 5.385vw;
    margin-right: 5.385vw;
  }
`;

const CommentBoxCom = ({ name, contents, date }) => {
  const dateData = date.substring(0, 10);

  return (
    <CommentBox>
      <CommentBoxNameDateContainer>
        <CommentBoxName>{name}</CommentBoxName>
        <ConmmentBoxDate>{dateData}</ConmmentBoxDate>
      </CommentBoxNameDateContainer>
      <CommentBoxContent>{contents}</CommentBoxContent>
    </CommentBox>
  );
};
