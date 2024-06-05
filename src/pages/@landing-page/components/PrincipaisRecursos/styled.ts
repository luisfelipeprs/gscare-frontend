import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  /* text-align: center; */
  /* background-color: #fff; */
  padding-bottom: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  gap: 50px;

  @media screen and (max-width: 1280px) {
    margin: auto;
    width: 90%;
  }
`;

export const PrincipaisRecursosContainer = styled.div`
  /* margin-top: 150px; */

  h1 {
    font-weight: 700;
    font-size: 34px;
    color: #1e266d;
    text-align: center;
    margin-top: 20px;
    letter-spacing: 0.01em;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  h6 {
    color: #445781;
    letter-spacing: 0.01;
    font-weight: 400;
    font-size: 18px;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #1e266d;
    margin-top: 40px;
    letter-spacing: 0.01em;
    line-height: 1.3;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  }
`;


export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContainersRecursos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px;
  gap: 10px;
  margin-top: 40px;

  h5 {
    font-family: sans-serif;
    font-size: 1.2rem;
  }

  p {
    line-height: 35px;
    width: 80%;
    font-family: system-ui;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
