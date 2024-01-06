import styled from "styled-components";

interface IButton {
  typebutton: "withBorder" | "withBg";
  color: "blue" | "orange";
}
// '#FFA500' | '#FFA500'

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({ typebutton }) => (typebutton === "withBg" ? "#fff" : "#FFA500")};
  margin: auto;
  background-color: ${({ typebutton, color }) =>
    typebutton === "withBg"
      ? color === "blue"
        ? "#FFA500"
        : "#FFA500"
      : "transparent"};
  /* border: solid 2px #FFA500; */
  border: ${({ typebutton, color }) =>
    typebutton === "withBorder"
      ? `solid 2px ${color === "blue" ? "#FFA500" : "#FFA500"}`
      : "none"};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;
