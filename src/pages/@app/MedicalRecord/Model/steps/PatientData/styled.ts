import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  gap: 30px;
  width: 100%;
  margin-top: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  /* padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */

  div {
    flex: 1;
  }
`;

export const InputLabel = styled.label`
  width: 100%;
`;

export const InputField = styled.div`
  width: 100%;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
`;

export const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  /* padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;

export const AdditionalInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-top: 1rem;
  gap: 1.5rem;
`;

export const Adress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  /* padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;

export const ButtonSubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;
