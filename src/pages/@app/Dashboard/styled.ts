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

export const ContentGrafico = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
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


export const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  
  & > :nth-child(1) {
    background-color: #0061F2;
  }

  & > :nth-child(2) {
    background-color: #F4A100;
  }

  & > :nth-child(3) {
    background-color: #00AC69;
  }

  & > :nth-child(4) {
    background-color: #E81500;
  }
`;

export const GraficsFirstLine = styled.div`
  /* background-color: red; */
  display: flex;
  gap: 20px;
  
  & > div {
    flex: 1;

    background-color:  #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  }
`;

export const GraficsSecondLine = styled.div`
  /* background-color: blue; */
  display: flex;
  gap: 20px;
  
  & > div {
    flex: 1;

    background-color:  #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  }
`;
