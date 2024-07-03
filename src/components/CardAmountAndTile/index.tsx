// src/components/CardAmountAndTile.tsx
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Calendar, CalendarCheck, IdentificationCard, UsersThree } from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';

const CardAmountAndTileWrapper = styled.div`
  width: calc(25% - 30px); 
  min-height: 150px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  color: #fff;
  /* background-color: #324a83; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 4px rgb(109 109 109 / 49%);

  @media (max-width: 1440px) {
    width: calc(50% - 18px);
  }

  @media (max-width: 1000px) {
    width: 100%;
    /* width: calc(100% - 60px); */
  }

  &:hover {
    box-shadow: 2px 4px 4px rgb(109 109 109 / 49%);
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
  /* background-color: #324a83; */
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

const MessageGoDetails = styled.div`
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
  type: "base-patient" | "base-employee" | "base-consultas-feitas-mes" | "base-consultas-abertas-mes";
  title: string;
  amount: string;
}

const CardAmountAndTile: React.FC<CardAmountAndTileProps> = ({ type, title, amount }) => {
  return (
    <CardAmountAndTileWrapper>
      <CardAmountAndTileContent>
        <div>
          <Message>{title}</Message>
          <Amount>{amount}</Amount>
        </div>
        {type === "base-consultas-feitas-mes" && <CalendarCheck size={44} />}
        {type === "base-consultas-abertas-mes" && <Calendar size={44} />}
        {type === "base-employee" && <IdentificationCard size={44} />}
        {type === "base-patient" && <UsersThree size={44} />}
      </CardAmountAndTileContent>
      <Footer>
        <MessageGoDetails>Ir para detalhes</MessageGoDetails>
        <ArrowIcon />
      </Footer>
    </CardAmountAndTileWrapper>
  );
};

export default CardAmountAndTile;
