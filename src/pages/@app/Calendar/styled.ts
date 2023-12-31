import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledHeader = styled.div`
  background-color: #007bff;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export const StyledCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  max-width: 600px;
  padding: 20px;
`;

export const StyledDay = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
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

interface IShow {
  show: boolean;
}

export const StyledModal = styled.div<IShow>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const StyledClose = styled.span`
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
