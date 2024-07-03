import * as Dialog from '@radix-ui/react-dialog';


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


export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: ${OverlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;


export const DialogTitle = styled.h2`
  color: #373737;
  margin: 0;
  font-weight: 500;
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

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-radius: 8px;
`;

export const Header = styled.header`
  background-color: #1F2C53;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const MonthsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px 0;
`;

export const Month = styled.div`
  width: 100px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const CalendarContainer = styled.div`
  flex: 1;
  /* display: grid;
  grid-template-columns: repeat(7, 1fr); */
`;

export const DayStyled = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  text-align: center;
`;

export const Modal = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: relative;
`;

export const CloseButton = styled.span`
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }
`;

export const ModalContentDays = styled.div`
`;

export const HourSlot = styled.div`
  background-color: blue;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 10px;
  justify-content: space-between;
  padding: 5px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;

export const HourSlotContainer = styled.div`
  overflow: auto;
  gap: 25px;
  background-color: blue;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  padding: 5px;

  
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Hour = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  border-bottom: 1px solid #DDD;
  padding: 5px 10px;
`;

export const Availability = styled.div`
  color: green;
`;

export const ContainerFormAndCalendar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ButtonSubmitForm = styled.button`
  width: 100%;
  margin-top: 20px;
  background-color: #FFA500;
  color: #fff;
  padding: 15px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  color: #1F2C53;
  /* margin-bottom: 20px; */
`;

export const Appointment = styled.div`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1rem;
  background-color: lightgreen;
  padding: 5px;
  border-radius: 5px;
`;


/* Estilo para os rótulos de formulário */
export const FormGroupLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

/* Estilo para as caixas de seleção e inputs */
export const FormGroupInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 40px;
`;

export const FormGroupSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 40px;
`;

/* Estilo para os botões do formulário */
// const Button = styled.button`
//   background-color: #1F2C53;
//   color: #fff;
//   padding: 15px 20px;
//   border-radius: 16px;
//   border: none;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;


export const FormGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const FormGroup = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const StyledDayOfWeekDefineConsulta = styled.div`
  text-align: center;
  font-weight: bold;
  color: #1F2C53;
`



export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;



export const StyledCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  width: 100%;
  padding: 20px;

  .styled-day {
    
    padding: 10px;
    /* border: 1px solid #ddd; */
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

/* Styled Modal */
export const StyledModal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;


/* Estilos para a navegação do calendário */
export const CalendarNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarNavButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CurrentMonthYear = styled.div`
  color: #000;
  font-size: 18px;
`;

export const StyledHeader = styled.div`
  color: #fff;
  text-align: center;
  padding: 10px;
`;


export const SubmitButton = styled(Button)`
  width: 100%;
`;


export const Form = styled.form`
  flex: 1;
`
