import styled from "styled-components";


interface IButton{
  typeButton: "withBorder"|"withBg"
}

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({typeButton})=>typeButton === "withBg"?"#fff":"#FFA500"};
  margin: auto;
  background-color: ${({typeButton})=>typeButton === "withBg"?"#FFA500":"transparent"};
  border: solid 2px #FFA500;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  a {
    color: ${({typeButton})=>typeButton === "withBg"?"#fff":"#FFA500"};
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
`
