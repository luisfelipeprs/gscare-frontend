import styled from "styled-components";

export const ContentHeader = styled.div`
display: flex;
justify-content: space-between;
div{
  display: flex;
  gap: 10px;
  div{
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
}
`;

export const MessageResponse = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  //background-color: #0000000f;
  border-top: 1px solid black;
`;

export const Feedback = styled.div`
  
`;

