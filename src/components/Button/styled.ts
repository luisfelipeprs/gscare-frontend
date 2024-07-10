import styled from "styled-components";

interface IButton {
  typebutton: "withBorder" | "withBg";
  color: "blue" | "orange";
}
// '#e28800' | '#e28800'

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({ typebutton }) => (typebutton === "withBg" ? "#fff" : "#e28800")};
  margin: auto;
  background-color: ${({ typebutton, color }) =>
    typebutton === "withBg"
      ? color === "blue"
        ? "#e28800"
        : "#e28800"
      : "transparent"};
  /* border: solid 2px #e28800; */
  border: ${({ typebutton, color }) =>
    typebutton === "withBorder"
      ? `solid 2px ${color === "blue" ? "#e28800" : "#e28800"}`
      : "none"};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;
