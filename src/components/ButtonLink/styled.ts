import styled from "styled-components";


interface IButton {
  typebutton: "withBorder" | "withBg"
}

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({ typebutton }) => typebutton === "withBg" ? "#fff" : "#e28800"};
  margin: auto;
  background-color: ${({ typebutton }) => typebutton === "withBg" ? "#e28800" : "transparent"};
  border: solid 2px #e28800;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  a {
    color: ${({ typebutton }) => typebutton === "withBg" ? "#fff" : "#e28800"};
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
`
