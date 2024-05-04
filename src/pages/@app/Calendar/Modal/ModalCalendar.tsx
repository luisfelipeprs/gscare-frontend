import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import {
  ButtonPlus,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  Button,
  IconButton,
} from './styled';
import { CaretLeft, CaretRight, Plus } from 'phosphor-react';

import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-radius: 8px;
`;

const Header = styled.header`
  background-color: #007bff;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MonthsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px 0;
`;

const Month = styled.div`
  width: 100px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const CalendarContainer = styled.div`
  flex: 1;
  /* display: grid;
  grid-template-columns: repeat(7, 1fr); */
`;

const DayStyled = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  text-align: center;
`;

const Modal = styled.div<ModalProps>`
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

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: relative;
`;

const CloseButton = styled.span`
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

const ModalContentDays = styled.div`
`;

const HourSlot = styled.div`
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

const HourSlotContainer = styled.div`
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

const Hour = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  border-bottom: 1px solid #DDD;
  padding: 5px 10px;
`;

const Availability = styled.div`
  color: green;
`;

const ContainerFormAndCalendar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonSubmitForm = styled.button`
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

const H2 = styled.h2`
  color: #007bff;
  /* margin-bottom: 20px; */
`;

const Appointment = styled.div`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1rem;
  background-color: lightgreen;
  padding: 5px;
  border-radius: 5px;
`;


/* Estilo para os rótulos de formulário */
const FormGroupLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

/* Estilo para as caixas de seleção e inputs */
const FormGroupInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 40px;
`;

const FormGroupSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 40px;
`;

/* Estilo para os botões do formulário */
// const Button = styled.button`
//   background-color: #007bff;
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


const FormGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const FormGroup = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const StyledDayOfWeekDefineConsulta = styled.div`
  text-align: center;
  font-weight: bold;
  color: #007bff;
`



const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;



const StyledCalendar = styled.div`
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
const StyledModal = styled.div`
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
const CalendarNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CalendarNavButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CurrentMonthYear = styled.div`
  color: #000;
  font-size: 18px;
`;

const StyledHeader = styled.div`
  color: #fff;
  text-align: center;
  padding: 10px;
`;


const SubmitButton = styled(Button)`
  width: 100%;
`;


const Form = styled.form`
  flex: 1;
`

interface Day {
  day: number;
  atendimentos: number;
  inactive?: boolean;
}

interface DayProps {
  day: number;
  atendimentos: number;
  onClick: () => void;
}

const ModalCalendar: React.FC = () => {

  const [calendarDays, setCalendarDays] = useState<Day[]>([]);
  const [yearCurrent, setYearCurrent] = useState<number>(
    new Date().getFullYear()
  );
  const [monthCurrent, setMonthCurrent] = useState<number>(
    new Date().getMonth()
  );

  const [currentYear] = useState(new Date().getFullYear());
  // const [currentMonth, setCurrentMonth] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(0);

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  function handlehtmlFormSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Implement your logic for handling form submission
    // ...
  }

  function marcarAtendimento () {
    // Implement your logic for scheduling appointments here
    alert("Atendimento marcado! Implemente a lógica desejada.");
  }

  function handleCloseModal () {
    // Implement your logic for closing the modal
    // ...
  }

  function handleDayClick (dateId: string) {
    // Implement your logic for handling day click
    alert(`Clicked on ${dateId}`);
  }

  function changeMonth (offset: number) {
    setMonthCurrent((prevMonth) => {
      let newMonth = prevMonth + offset;
      if (newMonth < 0) {
        setYearCurrent((prevYear) => prevYear - 1);
        newMonth = 11;
      } else if (newMonth > 11) {
        setYearCurrent((prevYear) => prevYear + 1);
        newMonth = 0;
      }
      return newMonth;
    });
  }



  useEffect(() => {
    function generateCalendar (): Day[] {
      const currentDate = new Date();
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const lastDayOfLastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );

      const firstDayOfWeek = firstDayOfMonth.getDay();
      const lastDayOfWeek = lastDayOfMonth.getDay();

      const days: Day[] = [];

      // Fill the last days of the previous month
      for (
        let i = lastDayOfLastMonth.getDate() - firstDayOfWeek + 1;
        i <= lastDayOfLastMonth.getDate();
        i++
      ) {
        days.push({
          day: i,
          inactive: true,
          atendimentos: 0, // Added atendimentos property
        });
      }

      // Fill the days of the current month
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        days.push({
          day: i,
          inactive: false,
          atendimentos: 0, // Added atendimentos property
        });
      }

      // Fill the first days of the next month
      for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
        days.push({
          day: i,
          inactive: true,
          atendimentos: 0, // Added atendimentos property
        });
      }

      return days;
    }

    setCalendarDays(generateCalendar());
  }, [currentMonth, currentYear]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonPlus>
          <span>criar</span>
          <Plus size={19} weight="bold" />
        </ButtonPlus>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Defina seu atendimento1:</DialogTitle>


          <div>
            {/* <H2>Formulário de Agendamento2</H2> */}
            <ContainerFormAndCalendar>
              <Form id="appointmentForm">
                <FormGroupContainer>
                  <FormGroup>
                    <FormGroupLabel htmlFor="selectFuncionario">
                      Funcionário:
                    </FormGroupLabel>
                    <FormGroupSelect id="selectFuncionario" name="funcionario">
                      <option value="funcionario1">Funcionário 1</option>
                      <option value="funcionario2">Funcionário 2</option>
                    </FormGroupSelect>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel htmlFor="selectPaciente">
                      Paciente:
                    </FormGroupLabel>
                    <FormGroupSelect id="selectPaciente" name="paciente">
                      <option value="paciente1">Paciente 1</option>
                      <option value="paciente2">Paciente 2</option>
                    </FormGroupSelect>
                  </FormGroup>
                </FormGroupContainer>

                <FormGroupContainer>
                  <FormGroup>
                    <FormGroupLabel htmlFor="phone">Telefone:</FormGroupLabel>
                    <FormGroupInput
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                      placeholder="(11) 11111-1111"
                      required={true}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel htmlFor="email">E-mail:</FormGroupLabel>
                    <FormGroupInput
                      type="email"
                      id="email"
                      name="email"
                      required={true}
                    />
                  </FormGroup>
                </FormGroupContainer>

                <FormGroupContainer>
                  <FormGroup>
                    <FormGroupLabel htmlFor="selectClinica">
                      Endereço da Clínica:
                    </FormGroupLabel>
                    <FormGroupSelect id="selectClinica" name="clinica">
                      <option value="clinica1">Clínica 1</option>
                      <option value="clinica2">Clínica 2</option>
                    </FormGroupSelect>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel htmlFor="horario">Horário:</FormGroupLabel>
                    <FormGroupInput
                      type="time"
                      id="horario"
                      name="horario"
                      required={true}
                    />
                  </FormGroup>
                </FormGroupContainer>
              </Form>
              <CalendarContainer>
                <StyledContainer>
                  <StyledHeader>
                    <CalendarNavigation>
                      <div className="month-year-container">
                        <CurrentMonthYear>Janeiro 2024</CurrentMonthYear>
                      </div>
                      <div className="nav-buttons-container">
                        <CalendarNavButton onClick={() => changeMonth(-1)}>
                          &lt;
                        </CalendarNavButton>
                        <CalendarNavButton onClick={() => changeMonth(1)}>
                          &gt;
                        </CalendarNavButton>
                      </div>
                    </CalendarNavigation>
                  </StyledHeader>
                  <StyledCalendar id="calendarContainer">
                    <StyledDayOfWeekDefineConsulta>
                      Dom
                    </StyledDayOfWeekDefineConsulta>
                    <StyledDayOfWeekDefineConsulta>
                      Seg
                    </StyledDayOfWeekDefineConsulta>
                    <StyledDayOfWeekDefineConsulta>
                      Ter
                    </StyledDayOfWeekDefineConsulta>
                    <StyledDayOfWeekDefineConsulta>
                      Qua
                    </StyledDayOfWeekDefineConsulta>
                    <StyledDayOfWeekDefineConsulta>
                      Qui
                    </StyledDayOfWeekDefineConsulta>
                    <StyledDayOfWeekDefineConsulta>
                      Sex
                    </StyledDayOfWeekDefineConsulta>
                    <StyledDayOfWeekDefineConsulta>
                      Sáb
                    </StyledDayOfWeekDefineConsulta>
                    {calendarDays.map((day, index) => (
                      <div
                        className={`styled-day ${day.inactive ? "inactive" : ""
                          }`}
                        key={index}
                        onClick={() => handleDayClick(`dateId-${day.day}`)}
                      >
                        {day.day}
                      </div>
                    ))}
                  </StyledCalendar>
                  <StyledModal className="styled-modal" id="modalId">
                    <div className="styled-modal-content">
                      <span
                        className="styled-close"
                        onClick={() => handleCloseModal()}
                      >
                        ×
                      </span>
                      <h2>Agendar Consulta</h2>
                      <Form
                        className="styled-htmlForm"
                        onSubmit={handlehtmlFormSubmit}
                      >
                        <FormGroupLabel
                          className="styled-label"
                          htmlFor="attendant"
                        >
                          Nome do Atendente:
                        </FormGroupLabel>
                        <FormGroupInput
                          className="styled-input"
                          type="text"
                          id="attendant"
                          name="attendant"
                          placeholder="Defina um Atendente"
                          required={true}
                        />

                        <FormGroupLabel
                          className="styled-label"
                          htmlFor="patient"
                        >
                          Nome do Paciente:
                        </FormGroupLabel>
                        <FormGroupInput
                          className="styled-input"
                          type="text"
                          id="patient"
                          name="patient"
                          placeholder="Defina um Paciente"
                          required={true}
                        />

                        <button className="styled-button" type="submit">
                          Adicionar&
                        </button>
                      </Form>
                    </div>
                  </StyledModal>
                </StyledContainer>
              </CalendarContainer>
            </ContainerFormAndCalendar>
            <ButtonSubmitForm onClick={() => marcarAtendimento()}>
              Marcar Atendimento
            </ButtonSubmitForm>
          </div>

          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalCalendar;
