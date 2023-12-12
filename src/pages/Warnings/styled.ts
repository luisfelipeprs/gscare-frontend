import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const Content = styled.div`
  margin: 50px 0px 20px 0px;
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
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AgroupInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
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
  input{
    width: 100%;
  }
`;

