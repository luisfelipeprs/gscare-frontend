import { Button } from "@radix-ui/themes";
import styled from "styled-components";

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

export const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 0.9;
`;

export const SelectContent = styled.div`
    display: flex;
    select{
      width: 100%;
    }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #ddd;
  }
  input {
    padding: 20px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  select {
    padding: 12px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
`;

export const AgroupInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  div{
    width: 100%;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
`;

export const ContentInputDate = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  div {
    color: #ddd;
  }
  input{
    display: flex;
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  div {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    max-height: 1.5em;
  }
`;
export const ButtonStyled = styled(Button)`
  background-color: #FFA500;
  color: #fff;
  padding: 20px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
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