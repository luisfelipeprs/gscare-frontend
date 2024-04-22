// src/components/CardAmountAndTile.tsx
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Calendar } from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';

const CardAmountAndTileWrapper = styled.div`
  width: calc(25% - 30px); 
  min-height: 150px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  color: #fff;
  /* background-color: #0061F2; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1440px) {
    width: calc(50% - 18px);
  }

  @media (max-width: 1000px) {
    width: 100%;
    /* width: calc(100% - 60px); */
  }

  &:hover {
    div {
      svg {
        transform: scale(1.1);
      }
    }
  }
`;

const CardAmountAndTileContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #0061F2; */
  background-color: #00000010;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 10px; */
  align-items: center!important;
  padding: 10px;
  background-color: #00000020;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Message = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Amount = styled.div`
  font-size: 20px;
`;

const CalendarIcon = styled(Calendar)`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  height: 50px;
  width: 50px;
  color: #dedede;
  /* color: #97979770; */
`;

const ArrowIcon = styled(ChevronRightIcon)`
  cursor: pointer;
  height: 25px;
  width: 25px;
  color: #fff;
  /* color: #97979770; */
`;

interface CardAmountAndTileProps {
  title: string;
  amount: string;
}

const CardAmountAndTile: React.FC<CardAmountAndTileProps> = ({ title, amount }) => {
  return (
    <CardAmountAndTileWrapper>
      <CardAmountAndTileContent>
        <div>
          <Message>{title}</Message>
          <Amount>{amount}</Amount>
        </div>
        <CalendarIcon />
      </CardAmountAndTileContent>
      <Footer>
        <Message>View Report</Message>
        <ArrowIcon />
      </Footer>
    </CardAmountAndTileWrapper>
  );
};

export default CardAmountAndTile;
