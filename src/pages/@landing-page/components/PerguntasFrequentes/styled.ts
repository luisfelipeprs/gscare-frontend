import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: #fff; */
  padding-bottom: 100px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: auto;
  gap: 50px;
`;

export const ContainerMensagemPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContainerMensagem = styled.div`
  /* width: 80%; */
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin: 0 auto;

`;

export const ContainerButton = styled.div`
    width: 100%;
    margin: 0 auto;
  button {
    width: 100%;
    font-weight: bold;
    color: #fff;
    border: none;
    background-color: #3652CD;
    padding: 12px 24px;
    transition: background-color 0.3s;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
      background-color: #1E22A3;
    }
  }
`;

export const ContainerMensagemPrincipalLeft = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;

  @media screen and (max-width: 1280px) {
    order: 1;
  }
`;

export const ContainerMensagemPrincipalRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1280px) {
    order: 0;
  }

  input {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    padding: 8px 15px;
    border: none;
    /* width: 50% */
  }

  h4 {
    font-size: 1.5rem;
    font-family: sans-serif;
    font-weight: bold;
    color: #171f6a;
    text-align: center;
    width: 100%;
    padding: 20px 0;
  }

  h6 {
    font-size: 16px;
    font-weight: 400;
    color: #445781;
  }

`;

export const ContainerTitulos = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h2 {
    color: #1e266d;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }

  h6 {
    font-size: 17px;
    font-weight: 400;
    color: midnightblue;
    margin-bottom: 80px;
  }
`;


export const ContainerInformacoesFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DetailsContainer = styled.details`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  cursor: pointer;

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    text-align: start;
  }

  .arrow-details::before {
    content: "▼";
    font-size: 0.8rem;
    color: #ddd;
  }

  p {
    color: #1E266D;
    font-family: monospace;
  }

  &[open] .arrow-details::before {
    content: "▲";    
  }

  &[open] ul {
    display: block;
    animation: slideDown 0.5s ease-in-out;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      height: 0;
    }
    100% {
      opacity: 1;
      height: auto;
    }
  }
`;

export const ContainerFormRight = styled.div`
  /* max-height: 550px; */ 
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  flex: 1;
  text-align: center;
  margin: auto 0;
  box-shadow: 1px 1px 10px 5px #ddd;
  justify-content: space-evenly;
  padding: 20px 25px;
  border-radius: 8px;

  input, textarea {
    resize: none;
    background-color: #F2F3fB;
    margin: 0 auto;
    border: none;
    /* width: 80%; */
    padding: 15px;
    border-radius: 8px;
    color: #8285B0;
  }
`;
