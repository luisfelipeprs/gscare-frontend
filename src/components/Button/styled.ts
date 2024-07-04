import styled from "styled-components";

interface IButton {
  typebutton: "withBorder" | "withBg";
  color: "blue" | "orange";
}
// '#ef9000' | '#ef9000'

export const ContainerButton = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  height: 50px;
  color: ${({ typebutton }) => (typebutton === "withBg" ? "#fff" : "#ef9000")};
  margin: auto;
  background-color: ${({ typebutton, color }) =>
    typebutton === "withBg"
      ? color === "blue"
        ? "#ef9000"
        : "#ef9000"
      : "transparent"};
  /* border: solid 2px #ef9000; */
  border: ${({ typebutton, color }) =>
    typebutton === "withBorder"
      ? `solid 2px ${color === "blue" ? "#ef9000" : "#ef9000"}`
      : "none"};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;
