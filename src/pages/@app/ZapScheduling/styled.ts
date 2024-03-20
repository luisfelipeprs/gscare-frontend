import styled from "styled-components";
import { TextField, Text, Flex, Separator, Button, TextArea } from "@radix-ui/themes";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ProfileContainerAndButtonSubmit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  /* margin: 10px; */
  gap: 30px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    /* flex-wrap: wrap; */
  }
`;

export const ButtonSubmitOptionBot = styled(Button)`
  background-color: #FFA50090;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: bold;
  font-family: monospace;

  &:hover {
    cursor: pointer;
    background-color: #FFA500;
  }
`;

export const LeftDiv = styled.div`
  flex: 1;
  /* width: 50%;  */
  display: flex;
  flex-direction: column
`;

export const TitleDivDescription = styled(Text)`
  color: #FFA500;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InfoName = styled.div`
  p {
    font-size: 1.5rem;
  }
`;

export const TextLabel = styled.div`
  font-family: revert;
  font-weight: unset;
  color: #031b61;
`;

export const CheckboxCallAttendant = styled.div`
  display: flex;
  gap: 10px;
  span {
    font-family: monospace;
  }
`;

export const LeftContainer = styled.div`
  height: 450px;
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RightDiv = styled.div`
display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

export const RightContainer = styled.div`
  height: 450px;
  /* padding: 30px 20px;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
  } */
  background-color: #ffffff;
  /* padding: 60px 20px; */
  padding: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 16px;
`;

export const HeaderContainerRight = styled.div`
  /* gap="3" */
  text-align:center;
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: revert;
    font-weight: unset;
    color: #031b61;
    text-align: center;
    justify-content: center;
    display: flex;
    margin: auto 0;
    font-weight: bold;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #FFA500;
    color: #fff;
    font-weight: 600;
  }
`;

export const Interest = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  p {
    color: #a0a0a0;
  }
`;

export const ShowInterest = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
`;

export const AgroupInterest = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  height: 100%; /* Set the height to 100% */
`;

export const ScroolAnswerChatBot = styled.div`
  overflow: auto;
  max-height: 350px;

  /* &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: red;
  } */
`;

export const ConfigChatBotAnswerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid black; */
  height: 20%;
  border-radius: 8px;
  padding: 15px;
  margin: 15px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
`;

export const DetailsConfigChatBotAnswer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const TitleOptionsChatBot = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3d4265;
`;

export const ContainerOptionsChatBot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  width: 100%; /* Ou uma largura específica */
  white-space: nowrap; /* Evita que o conteúdo quebre para a próxima linha */
  overflow-x: auto; /* Adiciona uma barra de rolagem horizontal quando necessário */
  padding: 10px;

  div {
    background-color: #dddddd50;
    border-radius: 12px;
    padding: 5px 10px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid black;
  height: 20%;
  border-radius: 20px;
  padding: 5px;
  align-items: center;
  margin-top: 20px;
  svg {
    width: 30px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
`;

export const Received = styled.div`
  display: flex;
  margin-left: 200px;
  align-items: center;
`;


export const TableContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  /* margin: 10px; */
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px 0 100px 0;
  /* margin-top: 20px; */

  th, td {
    /* border: 1px solid #ddd; */
    padding: 18px;
    text-align: center;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }

    tr:nth-child(odd) {
      background-color: #f0f0f0;
    }
  }

  th:first-child {
    border-top-left-radius: 10px;
    /* border-bottom-left-radius: 10px; */
  }

  th:last-child {
    border-top-right-radius: 10px;
    /* border-bottom-right-radius: 10px; */
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
