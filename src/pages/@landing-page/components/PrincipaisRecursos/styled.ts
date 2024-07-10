import styled from "styled-components";
import ImageScreenOne from "./../../../../assets/screensistem1.webp";
import ImageScreenTwo from "./../../../../assets/screensistem2.webp";
import ImageScreenThree from "./../../../../assets/screensistem3.webp";
import ImageScreenFor from "./../../../../assets/screensistem4.webp";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  gap: 50px;
  height: 100%;

  @media screen and (max-width: 1280px) {
    margin: auto;
    width: 90%;
  }
`;

export const HelpSection = styled.section`
  text-align: center;
  margin: auto 0;

  @media (max-width: 1000px) {
    padding: 75px 0px 100px 0px;
  }

  h2 {
    color: #071a25a8;
    font-size: 2rem;
    font-family: inherit;
  }
`;

export const HeaderContainer = styled.div`
  height: 80px;
  flex-shrink: 0;
`;

export const SectionContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const SectionDivider = styled.hr`
  width: 50%;
  margin: 10px auto;
  border: none;
  border-bottom: 3px solid #868686;
`;

export const CardDivider = styled.hr`
  width: 100%;
  margin: 00px auto;
  border: none;
  border-bottom: 3px solid #ffffff;
`;

export const PrevButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: #141e4b;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  height: 100%;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const NextButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: #141e4b;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  height: 100%;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const HelpOptionsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  overflow-x: auto;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeedbackCardFeedbackCard = styled.div`
  position: relative;
  border-radius: 8px;
  justify-content: space-around;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:nth-child(1) {
    background-image: url(${ImageScreenOne});
  }

  &:nth-child(2) {
    background-image: url(${ImageScreenTwo});
  }

  &:nth-child(3) {
    background-image: url(${ImageScreenThree});
  }

  &:nth-child(4) {
    background-image: url(${ImageScreenFor});
  }

  @media (min-width: 1000px) {
    min-width: 0;
    height: auto;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #123f5a9e; */
  /* background-color: #0a26379e; */
  background-color: #3c516cbd;
  z-index: 0;
  backdrop-filter: blur(5px);
`;

export const CardContentServices = styled.div`
  z-index: 2;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  
  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const FeedbackCardQuote = styled.div`
  /* width: 90%; */
  font-family: sans-serif;
  /* margin: 0 auto; */
  text-align: start;
  margin-bottom: 5px;
  font-size: 1.5rem;
  color: #eee;

  h3 {
    
    font-size: 2rem;
    font-family: system-ui;
    font-weight: 500;

  }

  img {
    width: 50px;
  }
`;

export const LimitedParagraph = styled.p`
  /* border-top: 3px solid #ffffff; */
  
  font-size: 1.15rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;

  text-align: start;
  color: #ffffff;
  font-family: inherit;
  font-weight: 500;
`;

export const ContainerButtonCard = styled.div`
  button {
    
    color: #e28800;
    text-decoration: underline;
    /* font-weight: bold; */
    font-family: system-ui;
  }
`;
