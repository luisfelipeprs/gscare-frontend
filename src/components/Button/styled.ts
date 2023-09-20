import styled from "styled-components";


interface IButton{
  typeButton: "withBorder"|"withBg"
}

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${props=>props.typeButton === "withBg"?"white":"#0176D3"};
  margin: auto;
  background-color: ${props=>props.typeButton === "withBg"?"#0176D3":"transparent"};
  border: solid 2px #0176D3;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`
