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
  width: 90vw;
  max-width: 450px;
  max-height: 90vh;
  min-height: 90vh;
  padding: 25px;
  animation: ${ContentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
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

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;

  &.violet {
    background-color: white;
    color: var(--violet-11);
    box-shadow: 0 2px 10px var(--black-a7);

    &:hover {
      background-color: var(--mauve-3);
    }

    &:focus {
      box-shadow: 0 0 0 2px black;
    }
  }

  &.green {
    background-color: var(--green-4);
    color: var(--green-11);

    &:hover {
      background-color: var(--green-5);
    }

    &:focus {
      box-shadow: 0 0 0 2px var(--green-7);
    }
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
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: var(--violet-4);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--violet-7);
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
