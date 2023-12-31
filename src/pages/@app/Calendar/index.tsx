import React, { useState } from 'react';
import { StyledButton, StyledCalendar, StyledClose, StyledContainer, StyledDay, StyledForm, StyledHeader, StyledInput, StyledLabel, StyledModal, StyledModalContent } from './styled';

function Calendar(){
  const [showModal, setShowModal] = useState(false);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const lastDayOfLastMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() - 1);

    const firstDayOfWeek = firstDayOfMonth.getDay();

    const days = [];

    // Preenche os dias do mês anterior
    for (let i = lastDayOfLastMonth - firstDayOfWeek + 1; i <= lastDayOfLastMonth; i++) {
      days.push({ day: i, inactive: true });
    }

    // Preenche os dias do mês atual
    for (let i = 1; i <= lastDayOfMonth; i++) {
      days.push({ day: i, inactive: false });
    }

    // Preenche os dias do mês seguinte
    const remainingDays = 42 - days.length; // 6 linhas * 7 dias por linha = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, inactive: true });
    }

    return days;
  };

  const handleDayClick = (dateId: string) => {
    setShowModal(true);
    console.log(dateId);
    // Do something with the clicked dateId
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const calendarDays = generateCalendar();

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Calendário de Consulta</h1>
      </StyledHeader>
      <StyledCalendar>
        {calendarDays.map((day, index) => (
          <StyledDay
            key={index}
            onClick={() => handleDayClick(`dateId-${day.day}`)}
            className={day.inactive ? 'day inactive' : 'day'}
          >
            {day.day}
          </StyledDay>
        ))}
      </StyledCalendar>
      <StyledModal show={showModal}>
        <StyledModalContent>
          <StyledClose onClick={handleCloseModal}>&times;</StyledClose>
          <h2>Agendar Consulta</h2>
          <StyledForm onSubmit={handleFormSubmit}>
            <StyledLabel htmlFor="attendant">Nome do Atendente:</StyledLabel>
            <StyledInput type="text" id="attendant" name="attendant" placeholder="Defina um Atendente" required />

            <StyledLabel htmlFor="patient">Nome do Paciente:</StyledLabel>
            <StyledInput type="text" id="patient" name="patient" placeholder="Defina um Paciente" required />

            <StyledButton type="submit">Adicionar</StyledButton>
          </StyledForm>
        </StyledModalContent>
      </StyledModal>
    </StyledContainer>
  );
}


export default Calendar;