import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core/index.js';

// Define o elemento principal para fins de acessibilidade
Modal.setAppElement('#root');


const CalendarWrapper = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* max-height: 100vh; */
  overflow-y: auto;

  .fc-view-harness {
    height: 500px;
  }

  .fc-header-toolbar {
    display: flex;    
  
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 5px;

      .fc-toolbar-chunk {
        width: 100%;
        gap: 20px;    
        
        .fc-button-group {
          width: 100%;
        }

        &:nth-child(1) {
          order: 1;
          width: 100%;
        }

        &:nth-child(2) {
          order: 0;
          width: 100%;
        }

        &:nth-child(3) {
          order: 2;
          width: 100%;
        }

        /* width: 100%; */
        justify-content: space-between;
      }
    }
  }

  .fc .fc-daygrid-day {
    padding: 0;
    height: 80px; /* Ajuste a altura conforme necessário */
    border: 1px solid #ebebeb;
  }

  .fc-toolbar-title {
    margin: auto;
  }

  .fc .fc-daygrid-event {
    background-color: #1d2b4c;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2px 4px;
    margin-bottom: 2px;
    font-size: 0.9em;
  }

  .fc .fc-daygrid-event-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .fc .fc-daygrid-day-number {
    color: #1d2b4c;
  }

  .fc-toolbar-chunk {
    display: flex;
    gap: 10px;
  }

  .fc .fc-button {
    background-color: #1d2b4c;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0;
    cursor: pointer;
    font-size: 0.9em;

    &:hover {
      background-color: #162a40;
    }
  }

  .fc .fc-button-primary {
    background-color: #162a40;
  }

  .fc .fc-list-item {
    border-color: #e0e0e0;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 8px;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em 0;

  label {
    font-weight: bold;
    color: #1d2b4c;
  }

  input,
  select {
    padding: 0.5em;
    border: 1px solid #1d2b4c;
    border-radius: 4px;
    width: 100%;
  }

  button {
    background-color: #1d2b4c;
    color: white;
    padding: 0.5em;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #162a40;
    }
  }
`;

interface ExtendedEventInput extends EventInput {
  employee: string;
  patient: string;
  start: Date;
  end: Date;
}

const CalendarFull: React.FC = () => {
  const [events, setEvents] = useState<ExtendedEventInput[]>([
    { id: '1', title: 'Consulta A', start: new Date('2024-07-01T10:00:00'), end: new Date('2024-07-01T11:00:00'), employee: 'Dr. João', patient: 'Maria' },
    { id: '2', title: 'Consulta B', start: new Date('2024-07-10T14:00:00'), end: new Date('2024-07-10T15:00:00'), employee: 'Dr. Ana', patient: 'Pedro' }
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
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
    <>
      <CalendarWrapper>
        <FormWrapper>
          <div>
            <label>Filtrar por:</label>
            <select name="filterOption" value={filterOption} onChange={(e) => setFilterOption(e.target.value as 'all' | 'patient' | 'employee' | 'title')}>
              <option value="all">Todos</option>
              <option value="patient">Paciente</option>
              <option value="employee">Funcionário</option>
              <option value="title">Título</option>
            </select>
          </div>
          {filterOption !== 'all' && (
            <div>
              <label>{filterOption === 'patient' ? 'Nome do Paciente:' : filterOption === 'employee' ? 'Nome do Funcionário:' : 'Título:'}</label>
              <input type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
            </div>
          )}
        </FormWrapper>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          buttonText={{
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista'
          }}
          events={filteredEvents}
          // selectable={true}
          // select={handleDateClick}
          // eventClick={handleEventClick}
          editable={true} // Permite arrastar e redimensionar eventos
          selectable={true} // Permite selecionar dias/timeslots no calendário
          select={handleDateClick} // Manipula a seleção de datas
          eventClick={handleEventClick} // Manipula o clique em eventos
          eventResize={(resizeInfo) => console.log('Evento redimensionado:', resizeInfo)}
          eventDrop={(dropInfo) => console.log('Evento movido:', dropInfo)}
          eventTextColor="#ffffff" // Cor do texto do evento
          slotLabelFormat={{ hour: 'numeric', minute: '2-digit', omitZeroMinute: false, meridiem: 'short' }} // Formato do rótulo do timeslot
          height="auto" // Altura do calendário
        />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Formulário de Consulta"
        >
          <h2>{newEvent.id ? 'Editar Consulta' : 'Adicionar Consulta'}</h2>
          <FormWrapper>
            <div>
              <label>Título</label>
              <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} />
            </div>
            <div>
              <label>Data Início</label>
              <DatePicker
                selected={newEvent.start}
                onChange={(date) => handleDateChange(date, 'start')}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div>
              <label>Data Fim</label>
              <DatePicker
                selected={newEvent.end}
                onChange={(date) => handleDateChange(date, 'end')}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div>
              <label>Funcionário</label>
              <select name="employee" value={newEvent.employee} onChange={handleInputChange}>
                <option value="">Selecione</option>
                <option value="Dr. João">Dr. João</option>
                <option value="Dr. Ana">Dr. Ana</option>
              </select>
            </div>
            <div>
              <label>Paciente</label>
              <select name="patient" value={newEvent.patient} onChange={handleInputChange}>
                <option value="">Selecione</option>
                <option value="Maria">Maria</option>
                <option value="Pedro">Pedro</option>
              </select>
            </div>
            <button type="button" onClick={handleAddEvent}>{newEvent.id ? 'Editar' : 'Adicionar'}</button>
          </FormWrapper>
        </Modal>
      </CalendarWrapper>
    </>
  );
};

export default CalendarFull;
