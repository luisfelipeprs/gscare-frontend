import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';


import styled, { keyframes } from 'styled-components';

// Importando cores do radix-ui
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/green.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/violet.css';

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

// Estilos específicos para o componente ModalEditCustomers
export const EditModal = styled.div`
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
`;

export const SideBySide = styled.div`
  display: flex;
  flex-direction: row;
    justify-content: space-between;
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: ${OverlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
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

export const DialogTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  color: var(--mauve-12);
  font-size: 17px;
  margin-bottom: 20px;
`;

export const DialogDescription = styled.p`
  margin: 10px 0 20px;
  color: var(--mauve-11);
  font-size: 15px;
  line-height: 1.5;
`;

interface IButton {
  typebutton: "next" | "goback"
}

export const Button = styled.button<IButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  font-weight: bold;
  
  color: ${({ typebutton }) => typebutton === "goback" ? "#4b4b4b" : "#fff"};
  
  background-color: ${({ typebutton }) => typebutton === "goback" ? "transparent" : "#4D65EE"};

  border: none;

    
  &:hover {
    background-color: ${({ typebutton }) => typebutton === "goback" ? "#00000010" : "#4D65EE"};
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 2px #00000050;
  }
`;

export const BottonSave = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  font-weight: bold;
  
  color: #fff;
  
  background-color: #00bd26;
  border: none;

    
  &:hover {
    background-color: #008a1c50;
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 2px #00000050;
  }
`;


export const IconButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #000;
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

export const Fieldset = styled.fieldset`
  display: flex;
  gap: 20px;
  align-items: center;
  /* margin-bottom: 15px; */
  border: none;
`;


export const StepThreeContainer = styled.fieldset`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow-y: auto;
  max-height: 300px;
  border: none;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 15px;
  color: #333;
  width: 90px;
  text-align: right;
`;


export const LabelThree = styled.label`
  font-size: 15px;
  color: #333;
  width: 90px;
  text-align: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: #333;
  
  box-shadow: 0 0 0 1px var(--violet-7);
  height: 35px;

  &:focus {
    box-shadow: 0 0 0 2px var(--violet-8);
  }

  &:read-only {
    border-color: #555;
    background-color: #f0f0f0; 
    color: #555; 
    cursor: not-allowed; 
  }
`;

export const SwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: var(--black-a9);
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px var(--black-a7);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px black;
  }

  &[data-state='checked'] {
    background-color: red;
  }

  &[data-state='unchecked'] {
    background-color: green;
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--black-a7);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`;

export const ConversationLimit = styled.input`
  
`;

export const UserLimit = styled.input`
  
`;


export const StepTwoFieldset = styled.fieldset`
  /* border: 1px solid #ddd;
  border-radius: 8px; */
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const StepTwoLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const StepTwoCategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const StepTwoCategoryItem = styled.li`
  padding: 10px;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const UserList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 10px;
  margin: 0;
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column; /* Exibir informações uma abaixo da outra */
  padding: 10px; /* Adicionar um espaçamento interno */
  border: 1px solid #ccc; /* Adicionar uma borda para separar os itens */
  border-radius: 5px; /* Opcional: Adicionar bordas arredondadas para uma aparência mais suave */
  margin-bottom: 10px;

  div {
    strong {
      color: #000;
      font-size: 1.05rem;
    }
    p {
      color: #000;
      display: block;
    }
  }
`;

export const ContainerStepOne = styled.div`
  /* max-width: 600px;
  margin: 20px auto; */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */

  h2 {
    text-align: center;
  }
`;

export const InputRowStepOne = styled.div`

display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    gap: 20px;
`;

export const InputGroupStepOne = styled.div`
  flex: 1;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const ContainerStepTwo = styled.div`
  /* max-width: 800px; */
  /* margin: 20px auto; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  
  h1, h2 {
    text-align: start;
    color: #1F2C53;
  }
  table {
      width: 100%;
      border-collapse: collapse;
  }
  th, td {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      text-align: left;
  }
  th {
      background-color: #1F2C53;
      color: #fff;
  }
`;

export const AddFormStepTwo = styled.div`
  /* margin-bottom: 20px; */
  display: flex;

  input[type="text"], input[type="date"] {
        padding: 8px;
        width: calc(100% - 16px);
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
    }

  select {
    
    /* width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px; */
    padding: 8px;
    width: calc(100% - 16px);
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    
  }

  /* Estilo das opções */
  option {
    padding: 10px;
    background-color: #fff;
    color: #333;
  }

  /* Estilo das opções quando hover */
  option:hover {
    background-color: #f5f5f5;
  }

  /* Estilo das opções selecionadas */
  option.selected {
    background-color: #337ab7;
    color: #fff;
  }


  button {
    padding: 8px 15px;
    background-color: #1F2C53;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ActionButtonsStepTwo = styled.td`
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
    padding: 8px 15px;
    background-color: #1F2C53;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export const ContainerStepThree = styled.div`
  
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;

  h1, h2 {
    text-align: start;
    color: #1F2C53;
  }

  table {
      width: 100%;
      border-collapse: collapse;
  }

  th, td {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      text-align: left;
  }

  th {
      background-color: #1F2C53;
      color: #fff;
  }
`;

export const AddFormStepThree = styled.div`
  display: flex;

  input[type="text"], input[type="time"], input[type="number"], select {
    padding: 8px;
    /* width: calc(50% - 16px); */
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  input[type="text"] {
    flex: 3;
  }

  input[type="time"], input[type="number"], select {
    flex: 1;
  }

  button {
    padding: 8px 15px;
    background-color: #1F2C53;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ActionButtonsStepThree = styled.td`
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
    padding: 8px 15px;
    background-color: #1F2C53;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
`;


export const ButtonPlus = styled.button`
  display: flex;
  background-color: #e28800;
  border: 2px solid #e28800;
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
