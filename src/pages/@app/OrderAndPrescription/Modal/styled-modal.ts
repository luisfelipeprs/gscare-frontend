import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';

import styled, { keyframes } from 'styled-components';

// Importando cores do radix-ui
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/green.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/violet.css';
import { Text } from '@radix-ui/themes';

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

// Data
export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const TextLabelStyle = styled(Text)`
  color: #000000;
`;
export const ContentInputDate = styled.div`
color: #fff;
  display: flex;
  flex-direction:column;
  width: 50%;
  input{
    display: flex;
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
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
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 95%;
  max-height: 90vh; /* Defina a altura máxima conforme necessário */
  overflow-y: auto; /* Habilita a rolagem vertical conforme necessário */
  padding: 25px;
  animation: ${ContentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ScrollArea = styled.div`
  /* Defina a altura máxima conforme necessário */
  overflow-y: auto; /* Habilita a rolagem vertical conforme necessário */
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
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 15px;
  color: #333;
  width: 90px;
  text-align: right;
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
