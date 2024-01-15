import styled from 'styled-components';

/* Container principal */
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* max-width: 100%; Ajustado para não ultrapassar 100% da largura da tela */
  margin: 0 auto; /* Centraliza o conteúdo */
  /* height: 100vh; */
  overflow-x: hidden; /* Adicionado para esconder a barra de rolagem horizontal */
`;



/* Conteúdo principal */

export const Content = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 100%;
`;


/* Formulário de Agendamento */
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    div {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const LeftSection = styled.div`
  /* margin: auto 0; */
  flex: 1;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: flex 0.3s ease;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 40%; /* Ajuste o valor conforme necessário */
  max-width: 400px; /* Ou utilize um valor máximo */

  div {
    margin: auto 0;
  }

  &.visible {
    display: flex;
  }

  &.hidden {
    display: none;
  }
`;


export const RightSectionGerenciadorConsulta = styled.div`
  position: relative;
  flex: 2; /* Ajuste o valor conforme necessário */
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;



export const RightSectionContent = styled.div`
  padding: 20px; /* Adicione o padding diretamente aos elementos filhos */
  box-sizing: border-box; /* Mantenha a caixa de borda para incluir o padding */
  width: 100%;
  height: 100%;
  overflow: auto;
`;


/* Título do Formulário */
export const H2 = styled.h2`
  color: #007bff;
  /* margin-bottom: 20px; */
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
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 15px 20px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

/* Calendário Container */
export const CalendarContainer = styled.div`
  /* Adicione qualquer estilo necessário */
`;

/* Styled Container */
export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

/* Styled Day */
export const StyledDay = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }

  &.inactive {
    color: #ccc;
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

/* Styled Modal Content */
export const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

/* Styled Close */
export const StyledClose = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

/* Styled Button */
export const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;

/* Styled Form */
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Styled Label */
export const StyledLabel = styled.div`
  margin-top: 10px;
`;

/* Styled Input */
export const StyledInput = styled.div`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

/* Styled Calendar */
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
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

/* Adicionando estilos para os dias da semana no topo do calendário */
export const StyledDayOfWeek = styled.div`
  text-align: center;
  font-weight: bold;
  color: #007bff;
  
`;

/* Styled Header */
export const StyledHeader = styled.div`
  color: #fff;
  text-align: center;
  padding: 10px;
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

export const FormGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const FormGroup = styled.div`
  flex: 1;
  margin-right: 10px;
`;

/* Adapte conforme necessário para o estilo desejado */

export const HeaderGerenciadorConsulta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MonthYearContainerGerenciadorConsulta = styled.div`
  flex: 1;
`;

export const NavButtonsContainerGerenciadorConsulta = styled.div`
  display: flex;
`;

export const CalendarNavButtonGerenciadorConsulta = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

export const StyledDayOfWeekDefineConsulta = styled.div`
  text-align: center;
  font-weight: bold;
  color: #007bff;
`

export const StyledDayOfWeekGerenciadorConsulta = styled.div`
  text-align: center;
  font-weight: bold;
  color: #007bff;
  height: 0;
`;

export const ToggleButton = styled.button`
  z-index: 1;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const Form = styled.form``

export const StyledCalendarGerenciadorConsulta = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%; /* Adicionado para ocupar 100% da altura */
  /* padding: 20px 10px; */
  padding: 10px;
  overflow-x: auto;
  box-sizing: border-box;

  .styled-day-gerenciador-consulta {
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: end;
    /* margin-bottom: 10px; */
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-radius: 8px;

    .styled-day-number {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 5px;
      /* justify-content: center; */
      display: flex;
      align-items: center;
    }
    
    .styled-day-comment {
      font-size: 14px;
      color: #555;
      /* justify-content: center; */
      display: flex;
      align-items: center;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 6px;
    border: 3px solid #fff;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 6px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
`