import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
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
  margin: 20px auto; /* Centraliza o card na horizontal */
  max-width: 550px;
  max-height: 550px;
  width: 90%; /* Ajusta a largura para 90% da tela no modo mobile */
  height: auto; /* Define a altura automática para ajustar ao conteúdo */
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

  /* Estilize as descrições em negrito */
  strong {
    font-weight: bold;
  }

  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center top;
`;

export const EmployeeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os cards quebrem para a próxima linha quando não couberem na tela
  margin: -10px; // Compensa o espaçamento negativo nos cards internos
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
`
export const Action = styled.div`
  display: flex;
  button{
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;
  }

`
