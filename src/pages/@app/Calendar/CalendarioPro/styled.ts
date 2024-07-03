import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fbfbfb;
  border-radius: 8px;
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #F8F8F9;
  border-bottom: 1px solid #dddddd7a;
  padding: 15px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const DivInfos = styled.div`
  color: #324a83;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  gap: 20px;

  h2 {

  }

  select {
    border: none;
    background-color: transparent;
    font-size: 0.9rem;
  }
`;

export const ButtonInfos = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  /* gap: 25px; */
`;

export const MonthsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  
  /* &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4538FF;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } */
`;

export const Month = styled.div`
  
  justify-content: center;
  margin: auto;
  padding: 10px 20px;
  max-width: 130px;
  min-width: 130px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.1rem;
    font-weight: 500;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #fff;
    background-color: #1246FF;
  }
`;

export const CalendarContainer = styled.div`
  display: grid;  
  grid-template-columns: repeat(7, 1fr);
  padding: 15px 0;
`;

export const DayStyled = styled.div`
  padding: 15px;
  /* border: 1px solid #ccc; */
  cursor: pointer;
  text-align: center;
  border-radius: 8px;

  & > span {
    color: #404040;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: inherit;
  }

  &:hover {
    background-color: #00000005;
  }
`;

export const DayDivInfos = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: auto;
  justify-content: center;
  gap: 10px;
  

  
`;

export const DayDivInfosFirstSpan = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #002f51bb;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #002f51bb;
    border-radius: 50%;
    margin-right: 2px;
    /* transform: translate(0px, -100%); */
  }
`

export const DayDivInfosSecondSpan = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #074a00bb;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #074a00bb;
    border-radius: 50%;
    margin-right: 2px;
    /* transform: translate(0px, -100%); */
  }
`

export const DayWeekStyled = styled.div`
  text-align: center;
  font-weight: bold;
  color: #1F2C53;
  padding: 15px 0;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #1F2C53;
  }
`;

// export const Modal = styled.div<ModalProps>`
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   position: fixed;
//   z-index: 10;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// export const ModalContent = styled.div`
//   background-color: #fefefe;
//   margin: 15% auto;
//   padding: 20px;
//   border-radius: 8px;
//   width: 90%;
//   max-width: 600px;
//   position: relative;
// `;
export const Modal = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: auto; /* Adiciona scroll horizontal se necessário */
`;

// const Modal = styled.div`
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   position: fixed;
//   z-index: 10;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const ModalContent = styled.div`
//   background-color: #fefefe;
//   padding: 20px;
//   border-radius: 8px;
//   width: 90%;
//   max-width: 600px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// Define os estilos da tabela
export const ModalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Define os estilos dos cabeçalhos da tabela
export const ModalTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
`;

// Define os estilos das células da tabela
export const ModalTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
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
  background-color: #f0f8ff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const HourSlotContainer = styled.div`
  overflow: auto;
  gap: 25px;
  padding: 5px;
`;

export const Hour = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding: 5px 10px;
`;

export const Availability = styled.div`
  color: green;
`;

export const Appointment = styled.div`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1rem;
  background-color: #d3e0ff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
