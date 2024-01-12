import styled from "styled-components";

export const Container = styled.main`
  background-image: url(assets/img/fundo.jpg);
  background-repeat: no-repeat;
  background-size: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1000px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .containerContent {
      margin-right: 0;
      text-align: center;
    }

    .formulario {
      margin-top: 20px;
    }

    .footer {
      text-align: center;
    }
  }

  /* Estilos para telas pequenas (celulares) */
  @media screen and (max-width: 480px) {
    .container {
      padding: 10px;
    }

    .formulario {
      margin-top: 10px;
    }
  }

  .containerContent {
    font-size: 18px;
    line-height: 1.5;
    margin-right: -16px;
    padding-inline: 1.25rem;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .containerContent p {
    font-weight: 400;
    flex: 1;
  }

  .check input {
    width: 18px;
    height: 18px;
    top: 1px;
    left: 1px;
    font-size: 15px;
    margin-right: 10px;
  }

  .button {
    font-weight: 500;
    color: #fff;
    border-radius: 4px;
    border: none;
    background-color: #0b5cab;
    width: 100%;
    height: 42px;
    padding: 0px 24px;
  }

  .button {
    background-color: #0073e6;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .titulo {
    padding-right: 40px;
    color: #032d60;
    font-size: 42px;
  }

  .subTitulo {
    font-size: 18px;
    font-weight: 400;
  }

  .listContent li {
    font-size: 15px;
    margin-bottom: 11px;
  }

  .formulario {
    height: 42rem;
    width: 500px;
    padding: 3rem;
    background-color: #f3f3f3;
    margin-right: 10%;
  }

  .nomeSobrenome {
    width: 100%;
    display: flex;
    gap: 51px;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .nomeSobrenome input {
    width: 100%;
    height: 25px;
    border-radius: 4px;
    border: 1px solid #747474;
    outline: none;
    border: none;
  }

  .inputs input {
    width: 100%;
    height: 25px;
    border-radius: 4px;
    outline: none;
    border: none;
  }

  .inputs {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .input a {
    color: #0b5cab;
    text-decoration: none;
  }

  .nome {
    width: 100%;
  }

  .inlineFlex {
    width: 70vw;
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .footer p {
    font-weight: 350;
    font-size: small;
  }

  .footer a {
    color: #0b5cab;
    margin-left: 5px;
  }
`;

export const Content = styled.div`
  background-color: red;
`