import { Calendar } from 'phosphor-react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBlueBar = styled.div`
  background: linear-gradient(to right, #1146ff, #682fff);
  /* color: #682fff; */
  height: 250px;
  width: 100%;
  color: #fff;
  padding: 10px;
`;

export const ContentBlueBar = styled.div`
  display: flex;
  margin: 20px auto;
  width: 80%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerSection = styled.div`
  margin-top: -100px;
  width: 80%;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: none;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  height: 400px;
  border-radius: 10px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContent = styled.div`
  position: relative;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export const Footer = styled.div`
  margin-top: 10px;

  button {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const StyledNameContainer = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center; /* Adicionado para centralizar verticalmente */
    text-align: center;

    p {
      margin-left: 8px;
      font-size: 1.8rem;
      font-weight: 500;
      font-family: monospace;
    }
  }

  p.info-text {
    font-size: 1.15rem;
    color: #ffffff80;
    font-family: sans-serif;
  }
`;


export const StyledDateContainer = styled.div`
  max-height: 40px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: auto 0;
  max-width: 300px;
`;

export const DateText = styled.p`
  font-size: 0.8rem;
  color: #6a6a6a;
  font-family: monospace;
  font-weight: 500;
  margin-left: 5px;
  span {
    font-weight: 500;
    color: #1141ff;
    margin-right: 5px;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CalendarIcon = styled(Calendar)`
  font-size: 20px;
  color: #1141ff;
`;

export const ContainerSectionsInfos = styled.div`
  margin-top: -100px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Distância igual entre as três seções */
  flex-wrap: wrap; /* Quebra para a próxima linha em telas menores */
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -50px;
  }
`;

export const SectionInfos = styled.div`
  width: calc(33.33% - 20px); /* Cada seção ocupa 33.33% do espaço, com margem à direita */
  margin-bottom: 20px; /* Distância entre as seções */
  background-color: #fff;
  /* padding: 20px; */
  box-sizing: border-box;
  height: 480px;
  max-height: 500px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 1440px) {
    &:nth-child(1) {
      width: 100%;
    }
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #F8F8F9;
  border-bottom: 1px solid #dddddd7a;
  padding: 15px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TitleInfos = styled.h2`
  color: #0061f2;
  font-size: 1.05rem;
  font-weight: 500;
`;

export const ButtonInfos = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

export const Information = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;


export const WelcomeContaint = styled.div`
  height: 100%;
  padding: 40px 20px;
  justify-content: space-evenly;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    margin: auto;
    width: 90%;
    height: 200px;
  }
`;

export const WelcomeTitle = styled.h3`
  color: #0061F2;
  font-size: 1.7rem;
  font-weight: 500;
  font-family: sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 1.35rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const WelcomeParagraph = styled.div`
  width: 80%;
  font-size: 1.05rem;
  margin: auto;
  color: #4A515B;
  font-weight: 500px;
  font-family: sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const GridWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  
  & > :nth-child(1) {
    background-color: #0061F2;
  }

  & > :nth-child(2) {
    background-color: #F4A100;
  }

  & > :nth-child(3) {
    background-color: #00AC69;
  }

  & > :nth-child(4) {
    background-color: #E81500;
  }
`;