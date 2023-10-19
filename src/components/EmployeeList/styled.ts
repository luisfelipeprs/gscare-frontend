import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Modal = styled.div`
  min-width: 350px;
  max-width: 600px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  input {
    width: 100%;
    padding: 10px;
    margin-top: 16px;
    border-radius: 10px;
    transition: box-shadow 0.3s; 
  }
  input:focus {
    box-shadow: 0 0 5px #007bff; 
  }
  select:focus {
    box-shadow: 0 0 5px #007bff; 
  }
  select{
    background-color: #fff;
    color: #212529;
    font-size: 16px;
    width: 100%;
    padding: 12px;
    padding-left: 5px;
    margin-top: 16px;
    border: 1px solid black;
    border-radius: 10px;
    option{
      color: #212529;
    }
  }
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;

    @media (max-width: 768px) {
      width: 100%;
      margin: auto;
      margin-top: 10px;
    }
  }
`;

export const EmployeeTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;