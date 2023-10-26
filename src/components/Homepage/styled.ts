import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0px;
  width: 100%;
  text-align: center;
  background-color: #ffff;
  height: 100%;
  padding-bottom: 50px;
  
  @media screen and (max-width: 320px) {
    padding: 100px 0px;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  &:hover{
    /* cursor: pointer; */
  }

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
`

export const Functionalities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: none;
  span {
    color: #00000090;
    svg {
      
    transform: translateY(20%);
    margin-right: 2px;
    }
  }
`

export const Leftdiv = styled.div`
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
    color: #FFA500;
    font-size: 2.7rem;
  }
  p{
    text-align: start;
    font-size: 1.3rem;
    color: #2d2d2d;
  }  
  
  @media screen and (max-width: 1280px) {
    /* background-color: red; */
    margin: auto;
    height: 100%;
    /* max-width: 100%; */
    /* padding: 0 20px; */
  }
  
  @media screen and (max-width: 320px) {
    /* background-color: red; */
    margin: auto;
    height: 350px;
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
  color: white;
  margin: auto;
  background-color: #0176D3;
  border: solid 2px #0176D3;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`

export const ButtonSaibaMais = styled.button`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: white;
  margin: auto;
  color: #0176D3;
  background-color: #ffffff;
  border: solid 2px #0176D3;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`

export const Rightdiv = styled.div`
  margin: auto;
  align-items: end;
  position: relative;
  max-width: 640px;
  img{
    width: 100%;
  }
  
  @media screen and (max-width: 1280px) {
    /* background-color: red; */
    margin: auto;
    /* height: 350px; */
    /* max-width: 100%; */
    /* padding: 0 20px; */
  }
`