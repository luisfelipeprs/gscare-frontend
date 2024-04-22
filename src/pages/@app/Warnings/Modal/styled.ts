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
  min-height: 65vh;
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

  &:hover {
    background-color: var(--violet-4);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--violet-7);
  }
`;


export const Content = styled.div`
  width: 100%;
`;


export const AgroupInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  div{
    width: 100%;
  }
`;


export const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #ddd;
  }
  input {
    padding: 20px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  select {
    padding: 12px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
`;



export const SelectContent = styled.div`
    display: flex;
    select{
      width: 100%;
    }
`;


export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
`;



export const ContentInputDate = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  div {
    color: #ddd;
  }
  input{
    display: flex;
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  div {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    max-height: 1.5em;
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

export const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 0.9;
`;
