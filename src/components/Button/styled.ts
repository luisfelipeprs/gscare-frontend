import styled from "styled-components";

interface IButton {
  typeButton: "withBorder" | "withBg";
  color: "blue" | "orange";
}
// '#0176D3' | '#FFA500'

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({ typeButton }) => (typeButton === "withBg" ? "white" : "#0176D3")};
  margin: auto;
  background-color: ${({ typeButton, color }) =>
    typeButton === "withBg"
      ? color === "blue"
        ? "#0176D3"
        : "#FFA500"
      : "transparent"};
  /* border: solid 2px #0176D3; */
  border: ${({ typeButton, color }) =>
    typeButton === "withBorder"
      ? `solid 2px ${color === "blue" ? "#0176D3" : "#FFA500"}`
      : "none"};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;
