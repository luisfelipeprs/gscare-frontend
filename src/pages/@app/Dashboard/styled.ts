import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 10px;
`;

export const Icons = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 10px;
`;

export const MainCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 15px;
  border-radius: 5px;

  &:first-child {
    background-color: #A2C4C9;
  }
  &:nth-child(2) {
    background-color: #B7CE63;
  }
  &:nth-child(3) {
    background-color: #FF9999;
  }
  &:nth-child(4) {
    background-color: #FFE599;
  }

  &:nth-child(5) {
    background-color: #F4CCCC;
  }
  &:nth-child(6) {
    background-color: #99CCFF;
  }
`;

export const CardInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;