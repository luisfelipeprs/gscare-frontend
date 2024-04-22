import {
  Container,
  Content,
  FormContainer,
  LeftSection,
  RightSectionGerenciadorConsulta,
  H2,
  FormGroupLabel,
  FormGroupInput,
  FormGroupSelect,
  Button,
  CalendarContainer,
  StyledContainer,
  StyledHeader,
  CalendarNavigation,
  CalendarNavButton,
  CurrentMonthYear,
  FormGroupContainer,
  FormGroup,
  HeaderGerenciadorConsulta,
  MonthYearContainerGerenciadorConsulta,
  NavButtonsContainerGerenciadorConsulta,
  CalendarNavButtonGerenciadorConsulta,
  StyledDayOfWeekGerenciadorConsulta,
  ToggleButton,
  SubmitButton,
  StyledModal,
  StyledCalendarGerenciadorConsulta,
  StyledCalendar,
  Form,
  RightSectionContent,
  StyledDayOfWeekDefineConsulta,
} from "./styled";

import React, { useState, useEffect } from "react";

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

const Day: React.FC<DayProps> = ({ day, atendimentos, onClick }) => (
  <div
    className={`styled-day-gerenciador-consulta styled-day-with-atendimentos-gerenciador-consulta`}
    onClick={onClick}
  >
    <div className="styled-day-number">{day}</div>
    <div className="styled-day-comment">
      {atendimentos > 0
        ? `${atendimentos} atendimentos pendentes`
        : "Marque um atendimento"}
    </div>
  </div>
);

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [calendarDays, setCalendarDays] = useState<Day[]>([]);
  const [leftSectionVisible, setLeftSectionVisible] = useState(true);

  const generateCalendarGerenciadorConsulta = () => {
    // Sua função geradora de calendário
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

    const days = [];

    // Preencher os últimos dias do mês anterior
    for (
      let i = lastDayOfLastMonth.getDate() - firstDayOfWeek + 1;
      i <= lastDayOfLastMonth.getDate();
      i++
    ) {
      days.push({
        day: i,
        atendimentos: 0,
      });
    }

    // Preencher os dias do mês atual
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      // Simples exemplo: 5 atendimentos aleatórios por dia
      days.push({
        day: i,
        atendimentos: Math.floor(Math.random() * 6),
      });
    }

    // Preencher os primeiros dias do próximo mês
    for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
      days.push({
        day: i,
        atendimentos: 0,
      });
    }

    return days;
  };

  const handleDayClickGerenciadorConsulta = (day: number) => {
    // Implemente a lógica de clique no dia desejado
    alert(`Clicou no dia ${day}`);
  };

  const calendarDaysGerenciadorConsulta = generateCalendarGerenciadorConsulta();

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

  function handleDayClick (dateId: string) {
    // Implement your logic for handling day click
    alert(`Clicked on ${dateId}`);
  }

  function changeMonth (offset: number) {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + offset;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        newMonth = 11;
      } else if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        newMonth = 0;
      }
      return newMonth;
    });
  }


  const toggleLeftSection = () => {
    setLeftSectionVisible(!leftSectionVisible);
  }

  function marcarAtendimento () {
    // Implement your logic for scheduling appointments here
    alert("Atendimento marcado! Implemente a lógica desejada.");
  }

  function handlehtmlFormSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Implement your logic for handling form submission
    // ...
  }

  function handleCloseModal () {
    // Implement your logic for closing the modal
    // ...
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <LeftSection className={leftSectionVisible ? 'visible' : 'hidden'}>
            <div>
              <H2>Formulário de Agendamento</H2>
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

                        <Button className="styled-button" type="submit">
                          Adicionar&
                        </Button>
                      </Form>
                    </div>
                  </StyledModal>
                </StyledContainer>
              </CalendarContainer>
              <SubmitButton onClick={() => marcarAtendimento()}>
                Marcar Atendimento
              </SubmitButton>
            </div>
          </LeftSection>

          <RightSectionGerenciadorConsulta>
            <RightSectionContent>

              <ToggleButton id="toggleButton" onClick={toggleLeftSection}>
                {leftSectionVisible ? '<' : '>'}
              </ToggleButton>

              <HeaderGerenciadorConsulta>
                <MonthYearContainerGerenciadorConsulta>
                  <h1 id="currentMonthYear-gerenciador-consulta">
                    Janeiro 2024
                  </h1>
                </MonthYearContainerGerenciadorConsulta>
                <NavButtonsContainerGerenciadorConsulta>
                  <CalendarNavButtonGerenciadorConsulta
                    onClick={() => changeMonth(-1)}
                  >
                    &lt;
                  </CalendarNavButtonGerenciadorConsulta>
                  <CalendarNavButtonGerenciadorConsulta
                    onClick={() => changeMonth(1)}
                  >
                    &gt;
                  </CalendarNavButtonGerenciadorConsulta>
                </NavButtonsContainerGerenciadorConsulta>
              </HeaderGerenciadorConsulta>

              <StyledCalendarGerenciadorConsulta id="calendarContainer-gerenciador-consulta">
                <StyledDayOfWeekGerenciadorConsulta>
                  Domingo
                </StyledDayOfWeekGerenciadorConsulta>
                <StyledDayOfWeekGerenciadorConsulta>
                  Segunda
                </StyledDayOfWeekGerenciadorConsulta>
                <StyledDayOfWeekGerenciadorConsulta>
                  Terça
                </StyledDayOfWeekGerenciadorConsulta>
                <StyledDayOfWeekGerenciadorConsulta>
                  Quarta
                </StyledDayOfWeekGerenciadorConsulta>
                <StyledDayOfWeekGerenciadorConsulta>
                  Quinta
                </StyledDayOfWeekGerenciadorConsulta>
                <StyledDayOfWeekGerenciadorConsulta>
                  Sexta
                </StyledDayOfWeekGerenciadorConsulta>
                <StyledDayOfWeekGerenciadorConsulta>
                  Sábado
                </StyledDayOfWeekGerenciadorConsulta>
                {calendarDaysGerenciadorConsulta.map((day) => (
                  <Day
                    key={day.day}
                    day={day.day}
                    atendimentos={day.atendimentos}
                    onClick={() => handleDayClickGerenciadorConsulta(day.day)}
                  />
                ))}
                {/* {calendarDays.map((day, index) => (
                <div
                  className={`styled-day ${day.inactive ? 'inactive' : ''}`}
                  key={index}
                  onClick={() => handleDayClick(`dateId-${day.day}`)}
                >
                  {day.day}
                </div>
              ))} */}
              </StyledCalendarGerenciadorConsulta>
            </RightSectionContent>
          </RightSectionGerenciadorConsulta>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Calendar;
