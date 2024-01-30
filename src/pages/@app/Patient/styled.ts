import styled from 'styled-components';
import { TextField } from "@radix-ui/themes";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
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

export const GenderRadius = styled.div`
  display: flex;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: transparent;
    color: #007bff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;
    cursor: pointer;
  }
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


export const ContainerSearch_Filter_Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  gap: 10px;
  svg{
    cursor: pointer;
  }

  @media screen and (max-width: 1360px) {
    flex-direction: column;
  }
`;

export const InputSearch = styled(TextField.Root)`
  width: 55%;
  padding: 5px;
  box-sizing: border-box;
  /* border-radius: 18px; */

  @media screen and (max-width: 1360px) {
    width: 100%;
  }
`

export const ContainerFilterAndPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;

  @media screen and (max-width: 1360px) {
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Filter = styled.div`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  margin: auto 0;
  cursor: pointer;
  padding: 5px;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  gap:10px;

  button {
    box-shadow: none;
  }
`;

export const PaginationContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  /* background-color: #f0f0f0; */
`;

export const NavigationButton = styled.button`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  margin: auto 0;
  cursor: pointer;  
  padding: 5px;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    padding: 0 5px;
    transform: translateY(10%);
  }
  @media screen and (max-width: 780px) {
    span {
      display: none;
    }
  }


  &:hover {
    span {
      /* text-decoration: underline; */
      color: #000000ca;
    }
    svg {
      color: #000000ca;
    }
  }
`;

export const PageIndicator = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;


export const TableContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  margin: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px 0 100px 0;
  /* margin-top: 20px; */

  th, td {
    /* border: 1px solid #ddd; */
    padding: 18px;
    text-align: center;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }

    tr:nth-child(odd) {
      background-color: #f0f0f0;
    }
  }

  th:first-child {
    border-top-left-radius: 10px;
    /* border-bottom-left-radius: 10px; */
  }

  th:last-child {
    border-top-right-radius: 10px;
    /* border-bottom-right-radius: 10px; */
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
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;