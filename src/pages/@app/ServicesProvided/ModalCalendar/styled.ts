import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';


import styled, { keyframes } from 'styled-components';

// Importando cores do radix-ui
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/green.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/violet.css';
import { Button, Text, TextField } from '@radix-ui/themes';

// Reset global
export const ResetStyles = styled.div`
  button,
  fieldset,
  input {
    all: unset;
  }

`;

// Keyframes globais
export const OverlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;


// ======================

export const ButtonPlus = styled.button`
  display: flex;
  background-color: #FFA500;
  border: 2px solid #FFA500;
  border-radius: 8px;
  border: none;
  text-align: center;
  justify-content: center;
  padding: 10px;
  gap: 5px;
  transition: background-color 0.3s ease;
  transition: border-color 0.3s ease;
  color: #fff;
  font-weight: bolder;
  font-size: 0.9rem;

  &:hover {
    cursor: pointer;
    color: #f0f0f0;
  }
`;


export const DialogContent = styled(Dialog.Content)`
  overflow-x: auto;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  /* max-width: 90%; */
  max-height: 90vh;
  min-height: 90vh;
  padding: 25px;
  animation: ${ContentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  scrollbar-width: thin; /* largura da barra de rolagem */
  scrollbar-color: #888 transparent; /* cor do indicador de rolagem e fundo */

  /* Chrome, Safari */
  &::-webkit-scrollbar {
      width: 12px; /* largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
      background-color: #888; /* cor do indicador de rolagem */
      border-radius: 6px; /* borda arredondada do indicador */
  }

`;


export const DialogDescription = styled.p`
  margin: 10px 0 20px;
  color: var(--mauve-11);
  font-size: 15px;
  line-height: 1.5;
`;


export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: ${OverlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;


export const DialogTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  color: var(--mauve-12);
  font-size: 17px;
  margin-bottom: 20px;
`;

export const IconButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    /* box-shadow: 0 0 0 2px var(--violet-7); */
  }
`;


export const ButtonStyled = styled(Button)`
  background-color: #FFA500;
  color: #fff;
  padding: 20px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Modal = styled.div`
  min-width: 350px;
  max-width: 600px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    transition: box-shadow 0.3s;
  }
  input:focus {
    box-shadow: 0 0 5px #007bff;
  }
  select:focus {
    box-shadow: 0 0 5px #007bff;
  }
  textarea{
    width: 100%;
    padding: 10px;
    margin-top: 16px;
    border-radius: 10px;
    transition: box-shadow 0.3s;
  }
  select {
    background-color: #fff;
    color: #212529;
    font-size: 16px;
    width: 100%;
    padding: 12px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 10px;
    option {
      color: #212529;
    }
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;

    @media (max-width: 768px) {
      width: 100%;
      margin: auto;
      margin-top: 10px;
    }
  }
`;

export const ContainerForm = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin: 10px;
  gap: 10px;
`;

export const EmployeeCard = styled.div`
  position: relative;
  background: #f5f5f5;
  padding: 0px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 550px;
  max-height: 550px;
  width: 90%; 
  height: auto; 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    margin: 8px;
  }

  strong {
    font-weight: bold;
  }

  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center top;
`;

export const EmployeeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const EmployeeImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  img {
    height: 100px;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 10px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GenderRadius = styled.div`
  display: flex;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;
  }
`;

export const TableContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  margin: 10px;
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

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropdownItem = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 10px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  height: 35px;
`;
export const TabsInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProgressStep = styled.div<{ completed: boolean }>`
  flex: 1;
  text-align: center;
  position: relative;
  margin:20px;

  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${({ completed }) => (completed ? "#007bff" : "#ddd")};
    position: absolute;
    top: 35px;
    left: 0;
  }
`

export const AddContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 30px;
  margin: 35px;
  svg{
    cursor: pointer;
  }
`;

export const ContentInput = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
  svg {
    background-color: red;
  }
`;

export const SelectContent = styled.div`
    display: flex;
    select{
      width: 100%;
    }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AgroupInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* margin-bottom: 20px; */
  width: 100%;
  div{
    width: 100%;
  }
`;

export const TextLabelStyle = styled(Text)`
  color: #ddd;
`;

export const InputStyle = styled(TextField.Input)`
  padding: 20px 10px;
  /* padding: 10px 10px; */
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
`;

export const ContentInputDate = styled.div`
color: #fff;
  display: flex;
  flex-direction:column;
  width: 100%;
  input{
    display: flex;
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`;
