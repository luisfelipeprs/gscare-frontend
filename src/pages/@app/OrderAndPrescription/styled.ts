import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
`



export const Content = styled.div`
    flex: 1;
    margin-top: -180px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;

    
  @media screen and (max-width: 780px) {
    flex-direction: column;
    margin-top: -170px;
  }
`;
