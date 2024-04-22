import React, { useState } from 'react';
import {
  Appointment,
  Availability,
  ButtonInfos,
  CalendarContainer,
  CloseButton,
  Container,
  DayDivInfos,
  DayDivInfosFirstSpan,
  DayDivInfosSecondSpan,
  DayStyled,
  DayWeekStyled,
  DivInfos,
  HeaderInfos,
  Hour,
  HourSlot,
  HourSlotContainer,
  Main,
  Modal,
  ModalContent,
  ModalContentDays,
  Month,
  MonthsContainer,
} from './styled';
import { DotsThreeVertical } from 'phosphor-react';

const CalendarioPro: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [months] = useState([
    "Jan", "Feb", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Agos", "Set", "Out", "Nov", "Dez"
  ]);
  const [appointments, setAppointments] = useState<{ [key: string]: string | null }>({});

  const openModal = (day: number) => {
    setSelectedDay(day);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const renderHourSlot = (hour: number, minute: number) => {
    const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    const info = appointments[time];
    return (
      <HourSlot key={time}>
        <Hour>{time}</Hour>
        {info === null ? (
          <Availability>Disponível</Availability>
        ) : (
          <Appointment>
            <p>nome do paciente</p>
            <p>profissional</p>
            <p>local da consulta</p>
            <p>inicio</p>
            <p>fim</p>
            <p>motivo da consulta</p>
            <p>contato</p>
            <p>patologia</p>
            <p>obs: paciente está com inchaco nas pernas</p>
          </Appointment>
        )}
      </HourSlot>
    );
  };

  const renderHourSlots = () => {
    const hourSlots: JSX.Element[] = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        hourSlots.push(renderHourSlot(hour, minute));
      }
    }
    return hourSlots;
  };

  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

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
      <Modal isOpen={modalIsOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <ModalContentDays>
            {selectedDay !== null && (
              <>
                <h3>{selectedDay} de {months[currentMonth!]}</h3>
                <HourSlotContainer>
                  {renderHourSlots()}
                </HourSlotContainer>
              </>
            )}
          </ModalContentDays>
        </ModalContent>
      </Modal>
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
