import React, { useState } from 'react';
import { DotsThreeVertical } from 'phosphor-react';
import {
  ButtonInfos,
  CalendarContainer, Container,
  DayDivInfos, DayStyled,
  DayWeekStyled,
  DivInfos,
  HeaderInfos, Main,
  Modal,
  ModalContent, ModalTable,
  ModalTd,
  ModalTh,
  Month,
  MonthsContainer
} from './styled';

const CalendarioPro: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [_, setSelectedDay] = useState<number | null>(null);
  const [months] = useState([
    "Jan", "Feb", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Agos", "Set", "Out", "Nov", "Dez"
  ]);
  // const [appointments] = useState<{ [key: string]: string | null }>({});

  const openModal = (day: number) => {
    setSelectedDay(day);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Prevent closing modal when clicking inside modal content
    e.stopPropagation();
  };

  // const renderHourSlot = (hour: number, minute: number) => {
  //   const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  //   const info = appointments[time];
  //   return (
  //     <HourSlot key={time}>
  //       <Hour>{time}</Hour>
  //       {info === null ? (
  //         <Availability>Disponível</Availability>
  //       ) : (
  //         <Appointment>
  //           <p>nome do paciente1</p>
  //           <p>profissional</p>
  //           <p>local da consulta</p>
  //           <p>inicio</p>
  //           <p>fim</p>
  //           <p>motivo da consulta</p>
  //           <p>contato</p>
  //           <p>patologia</p>
  //           <p>obs: paciente está com inchaco nas pernas</p>
  //         </Appointment>
  //       )}
  //     </HourSlot>
  //   );
  // };

  // const renderHourSlots = () => {
  //   const hourSlots: JSX.Element[] = [];
  //   for (let hour = 0; hour < 24; hour++) {
  //     for (let minute = 0; minute < 60; minute += 30) {
  //       hourSlots.push(renderHourSlot(hour, minute));
  //     }
  //   }
  //   return hourSlots;
  // };

  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const employees = ["Funcionário 1", "Funcionário 2", "Funcionário 3"]; // Lista de funcionários

  const timeSlots: any = []; // Lista de horários
  const startTime = 8; // Horário de início (8:00)
  const endTime = 18; // Horário de término (18:00)

  for (let hour = startTime; hour < endTime; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = `${hour < 10 ? '0' : ''}${hour}`;
      const formattedMinute = `${minute === 0 ? '00' : '30'}`;
      timeSlots.push(`${formattedHour}:${formattedMinute}`);
    }
  }

  const renderCalendar = (year: number, month: number) => {
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);
    const calendarDays: JSX.Element[] = [];
    let currentDay = 1;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          calendarDays.push(<DayStyled key={`empty-${i}-${j}`} />);
        } else if (currentDay <= days) {
          calendarDays.push(
            <DayStyled key={currentDay} onClick={() => openModal(currentDay)}>
              <span>{currentDay}</span>
              <DayDivInfos>
                {/* <DayDivInfosFirstSpan>4</DayDivInfosFirstSpan>
                <DayDivInfosSecondSpan>4</DayDivInfosSecondSpan> */}
              </DayDivInfos>
            </DayStyled>
          );
          currentDay++;
        }
      }
    }
    return calendarDays;
  };

  return (
    <>
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onClick={closeModal}>
          <ModalContent onClick={handleModalContentClick}>
            <ModalTable>
              <thead>
                <tr>
                  <ModalTh></ModalTh>
                  {/* Mapeia e renderiza os horários */}
                  {timeSlots.map((time: string, index: string) => (
                    <ModalTh key={index}>{time}</ModalTh>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Mapeia e renderiza os funcionários */}
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <ModalTd>{employee}</ModalTd>
                    {/* Mapeia e renderiza as células vazias para os horários */}
                    {timeSlots.map((time: string, index: string) => (
                      <ModalTd id={time} key={index}></ModalTd>
                    ))}
                  </tr>
                ))}
              </tbody>
            </ModalTable>
          </ModalContent>
        </Modal>
      )}
      <Container>
        <HeaderInfos>
          <DivInfos>
            <h2 id="current-year">{currentYear}</h2>
            <select id="client-name">
              <option value="cliente1">Cliente 1</option>
              <option value="cliente2">Cliente 2</option>
              {/* Add more options as needed */}
            </select>
          </DivInfos>
          <ButtonInfos><DotsThreeVertical size={20} /></ButtonInfos>
        </HeaderInfos>
        <Main>
          <MonthsContainer className="months">
            {months.map((month, index) => (
              <Month key={index} onClick={() => setCurrentMonth(index)}>
                {/* <div className="month-number">{index + 1}</div> */}
                <span>{month}</span>
              </Month>
            ))}
          </MonthsContainer>
          {currentMonth !== null && (
            <CalendarContainer id="calendar">
              {weekDays.map((day, index) => (
                <DayWeekStyled key={index}>{day}</DayWeekStyled>
              ))}
              {renderCalendar(currentYear, currentMonth)}
            </CalendarContainer>
          )}
        </Main>
      </Container>
    </>
  );
};

export default CalendarioPro;
