import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  ButtonPlus,
  DialogContent,
  DialogOverlay,
  DialogTitle, IconButton,
  ButtonSubmitForm, ContainerFormAndCalendar, Form,
  FormGroup,
  FormGroupContainer,
  FormGroupInput,
  FormGroupLabel,
  FormGroupSelect,
  DataPickerStyled
} from './styled';
import { Plus } from 'phosphor-react';
import DatePicker from 'react-datepicker';
import { DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core/index.js';


interface Day {
  day: number;
  atendimentos: number;
  inactive?: boolean;
}

// interface DayProps {
//   day: number;
//   atendimentos: number;
//   onClick: () => void;
// }
interface ExtendedEventInput extends EventInput {
  employee: string;
  patient: string;
  start: Date;
  end: Date;
}
const ModalCalendar: React.FC = () => {
  const [events, setEvents] = useState<ExtendedEventInput[]>([
    { id: '1', title: 'Consulta A', start: new Date('2024-07-01T10:00:00'), end: new Date('2024-07-01T11:00:00'), employee: 'Dr. João', patient: 'Maria' },
    { id: '2', title: 'Consulta B', start: new Date('2024-07-10T14:00:00'), end: new Date('2024-07-10T15:00:00'), employee: 'Dr. Ana', patient: 'Pedro' }
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [calendarDays, setCalendarDays] = useState<Day[]>([]);
  const [, setYearCurrent] = useState<number>(
    new Date().getFullYear()
  );
  const [, setMonthCurrent] = useState<number>(
    new Date().getMonth()
  );

  const [currentYear] = useState(new Date().getFullYear());
  // const [currentMonth, setCurrentMonth] = useState<number | null>(null);
  const [currentMonth,] = useState<number>(0);

  // const daysInMonth = (month: number, year: number) => {
  //   return new Date(year, month + 1, 0).getDate();
  // };
  // const firstDayOfMonth = (month: number, year: number) => {
  //   return new Date(year, month, 1).getDay();
  // };

  function handlehtmlFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Implement your logic for handling form submission
    // ...
  }

  function marcarAtendimento() {
    // Implement your logic for scheduling appointments here
    alert("Atendimento marcado! Implemente a lógica desejada.");
  }

  function handleCloseModal() {
    // Implement your logic for closing the modal
    // ...
  }

  function handleDayClick(dateId: string) {
    // Implement your logic for handling day click
    alert(`Clicked on ${dateId}`);
  }

  function changeMonth(offset: number) {
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
    function generateCalendar(): Day[] {
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
  const [newEvent, setNewEvent] = useState<ExtendedEventInput>({
    id: '',
    title: '',
    start: new Date(),
    end: new Date(),
    employee: '',
    patient: ''
  });

  const [filterOption, setFilterOption] = useState<'all' | 'patient' | 'employee' | 'title'>('all');
  const [filterValue, setFilterValue] = useState<string>('');

  const handleDateClick = (selectInfo: DateSelectArg) => {
    setNewEvent({
      id: '',
      title: '',
      start: selectInfo.start,
      end: selectInfo.end,
      employee: '',
      patient: ''
    });
    setModalIsOpen(true);
    selectInfo.view.calendar.unselect();
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const eventData = clickInfo.event.extendedProps as ExtendedEventInput;
    setNewEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      start: clickInfo.event.start as Date,
      end: clickInfo.event.end as Date,
      employee: eventData.employee,
      patient: eventData.patient
    });
    setModalIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };

  const handleDateChange = (date: Date | null, field: 'start' | 'end') => {
    if (date) {
      setNewEvent({
        ...newEvent,
        [field]: date
      });
    }
  };

  const handleAddEvent = () => {
    if (!isEventOverlap(newEvent)) {
      const id = newEvent.id || String(events.length + 1);
      const updatedEvents = newEvent.id
        ? events.map(event => (event.id === newEvent.id ? newEvent : event))
        : [...events, { ...newEvent, id }];
      setEvents(updatedEvents);
      setModalIsOpen(false);
      setNewEvent({
        id: '',
        title: '',
        start: new Date(),
        end: new Date(),
        employee: '',
        patient: ''
      });
      console.log('Lista de Eventos Atualizada:', updatedEvents);
    } else {
      alert('Já existe uma consulta marcada para o mesmo funcionário ou paciente no mesmo horário.');
    }
  };

  const isEventOverlap = (newEvent: ExtendedEventInput) => {
    const eventStart = (newEvent.start as Date).getTime();
    const eventEnd = (newEvent.end as Date).getTime();
    const existingEvents = events.filter(event =>
      event.id !== newEvent.id &&
      (event.start as Date).getTime() < eventEnd && (event.end as Date).getTime() > eventStart &&
      (event.employee === newEvent.employee || event.patient === newEvent.patient)
    );
    return existingEvents.length > 0;
  };

  const filteredEvents = events.filter(event => {
    if (filterOption === 'patient') {
      return event.patient.toLowerCase().includes(filterValue.toLowerCase());
    } else if (filterOption === 'employee') {
      return event.employee.toLowerCase().includes(filterValue.toLowerCase());
    } else if (filterOption === 'title') {
      return event.title?.toLowerCase().includes(filterValue.toLowerCase()) ?? false;
    }
    return true;
  });

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
          <DialogTitle>Adicionar Consult1:</DialogTitle>


          <div>
            {/* <H2>Formulário de Agendamento2</H2> */}
            <ContainerFormAndCalendar>
              <Form id="appointmentForm">
                <FormGroup>
                  <FormGroupLabel htmlFor="titulo">Título:</FormGroupLabel>
                  <FormGroupInput
                    type="titulo"
                    id="titulo"
                    name="titulo"
                    required={true}
                  />
                </FormGroup>
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
                    <FormGroupLabel htmlFor="selectFuncionario">
                      Data Início:
                    </FormGroupLabel>
                    <DataPickerStyled>
                      <DatePicker
                        selected={newEvent.start}
                        onChange={(date) => handleDateChange(date, 'start')}
                        showTimeSelect
                        dateFormat="Pp"

                      />
                    </DataPickerStyled>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel htmlFor="selectPaciente">
                      Data Fim:
                    </FormGroupLabel>
                    <DataPickerStyled>
                      <DatePicker
                        selected={newEvent.start}
                        onChange={(date) => handleDateChange(date, 'start')}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </DataPickerStyled>
                  </FormGroup>
                </FormGroupContainer>
              </Form>
              {/* <CalendarContainer>
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
              </CalendarContainer>*/}
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
    </Dialog.Root >
  );
};

export default ModalCalendar;
