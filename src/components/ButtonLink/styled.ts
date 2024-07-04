import styled from "styled-components";


interface IButton {
  typebutton: "withBorder" | "withBg"
}

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({ typebutton }) => typebutton === "withBg" ? "#fff" : "#ef9000"};
  margin: auto;
  background-color: ${({ typebutton }) => typebutton === "withBg" ? "#ef9000" : "transparent"};
  border: solid 2px #ef9000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  a {
    color: ${({ typebutton }) => typebutton === "withBg" ? "#fff" : "#ef9000"};
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
`
