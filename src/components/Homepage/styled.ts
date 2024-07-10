import styled, { keyframes } from "styled-components";
import Image from "./../../assets/background-home.webp";
import Image1 from "./../../assets/background-home1.png";
import Image2 from "./../../assets/background-home2.png";
import Image3 from "./../../assets/background-home3.png";
import Image4 from "./../../assets/background-home4.png";
import Image5 from "./../../assets/background-home5.png";
import Image6 from "./../../assets/background-home6.png";

export const Container = styled.div`  
  display: flex;
  min-height: 100vh;
  /* background-color: var(--secondary-color); */
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  width: 100%;
  text-align: center;
  height: 100%;
  padding-bottom: 100px;
  position: relative;

  /* Adicionando uma imagem de fundo */
  background-image: url(${Image3}); /* Use a expressão JavaScript para interpolar a URL da imagem */
  background-size: cover; /* Faz a imagem cobrir todo o contêiner */
  background-position: center; /* Centraliza a imagem no contêiner */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  
  @media screen and (max-width: 400px) {
    /* padding: 150px 0px; */
  }
`

export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgb(3 10 30 / 85%);
z-index: 0; /* Garante que fique sobre a imagem */
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  position: relative;
  &:hover{
    /* cursor: pointer; */
  }
  padding: 20px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    /* gap: 30px; */
    gap: 50px;
    position: relative;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 425px) {
    /* flex-direction: column; */
    /* gap: 30px; */
    gap: 70px;
    /* position: relative; */
  }
  @media screen and (max-width: 425px) {
    gap: 100px;
  }
  @media screen and (max-width: 320px) {
    gap: 150px;
  }
`

export const Functionalities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0;

  span {
    color: #dddddd;
    text-align: start;

    svg {  
      transform: translateY(20%);
      margin-right: 2px;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 320px) {
    & {
      gap: 10px;
    }
  }
  
`

export const Leftdiv = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  max-width: 768px;
  align-items: start;
  justify-content: space-around;
  gap: 20px;
  margin: 40px 0;
  /* padding-left: 15px; */
  h1{
    text-align: start;  
    color: #f0f0f0;
    font-size: 2.7rem;
  }
  p{
    text-align: start;
    font-size: 1.3rem;
    color: #ddd;
  }  
  
  @media screen and (max-width: 1280px) {
    /* background-color: red; */
    margin: auto;
    height: 100%;
    /* max-width: 100%; */
    /* padding: 0 20px; */
  }
  
  @media screen and (max-width: 400px) {
    /* background-color: red; */
    margin: auto;
    height: 350px;
    h1 {
      font-size: 1.5rem;
    }
    /* max-width: 100%; */
    /* padding: 0 20px; */
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  position: relative;
  gap: 50px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    width: 100%;

    button {
      width: 100%;
    }
  }
`

export const ButtonTesteGratis = styled.button`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: #fff;
  margin: auto;
  background-color: #e28800;
  border: solid 2px #e28800;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`

export const ButtonSaibaMais = styled.button`
  display: flex;
  border: none;
  border-radius: 5px;
  height: 50px;
  color: #fff;
  margin: auto;
  background-color: transparent;
  border: solid 2px #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;

  div, span {
    margin: auto;
    display: flex;
  }
  
  svg {  
    width: 18px;
    height: 18px;
    margin-right: 9px;
    transform: translateY(15%);
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CircleBackImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    background-color: #071a25a8;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.2);
`;

export const Rightdiv = styled.div`
  flex: 2;
  margin: auto;
  align-items: end;
  position: relative;
  max-width: 400px;

  img {
    width: 100%;
    animation: ${float} 3s ease-in-out infinite;
  }
  
  @media screen and (max-width: 1280px) {
    margin: auto;
  }
`


export const Curve = styled.div`
  position: absolute;
  height: 225px;
  width: 100%;
  bottom: 0;

  &::before{
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: #fff;
    transform: translate(100%, 60%);
  }

  &::after{
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: #fff;
    transform: translate(-4%, 40%);
    z-index: -1;
  }
`
