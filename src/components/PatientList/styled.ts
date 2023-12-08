import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 100%;
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
  textarea{
    width: 100%;
    padding: 10px;
    margin-top: 16px;
    border-radius: 10px;
    transition: box-shadow 0.3s;
  }
  select {
    background-color: #fff;
    color: #212529;
    font-size: 16px;
    width: 100%;
    padding: 12px;
    padding-left: 5px;
    margin-top: 16px;
    border: 1px solid black;
    border-radius: 10px;
    option {
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

export const EmployeeCard = styled.div`
  position: relative;
  background: #f5f5f5;
  padding: 0px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 550px;
  max-height: 550px;
  width: 90%; 
  height: auto; 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    margin: 8px;
  }

  strong {
    font-weight: bold;
  }

  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center top;
`;

export const EmployeeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const EmployeeImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  img {
    height: 100px;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 10px;
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
export const GenderRadius = styled.div`
  display: flex;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropdownItem = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 10px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  height: 35px;
`;
export const TabsInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  h2{
    display: flex;
    justify-content: center;
    margin: 30px;
  }
  p{
    margin: 10px;
  }
`;

export const TableContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  margin: 10px;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProgressStep = styled.div<{ completed: boolean }>`
  flex: 1;
  text-align: center;
  position: relative;
  margin:20px;

  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${({ completed }) => (completed ? "#007bff" : "#ddd")};
    position: absolute;
    top: 35px;
    left: 0;
  }

  &:after {
    content: "";
    width: 15px;
    height: 15px;
    background-color: ${({ completed }) => (completed ? "#007bff" : "#fff")};
    border: 2px solid #007bff;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;