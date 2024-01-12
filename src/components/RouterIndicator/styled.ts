import styled from "styled-components";

export const ContainerBlueBar = styled.div`
  background: linear-gradient(to right, #1146ff, #682fff);
  /* color: #682fff; */
  height: 300px;
  width: 100%;
  color: #fff;
  padding: 10px;
`;

export const ContentBlueBar = styled.div`
  display: flex;
  margin: 20px auto;
  width: 80%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Filter = styled.div`
  display: flex;
  gap:10px
`;

export const ButtonPlus = styled.button`
  display: flex;
  background-color: #FFA500;
  border: 2px solid #FFA500;
  border-radius: 8px;
  border: none;
  text-align: center;
  justify-content: center;
  padding: 10px;
  gap: 5px;
  transition: background-color 0.3s ease;
  transition: border-color 0.3s ease;
  color: #fff;
  font-weight: bolder;
  font-size: 0.9rem;

  &:hover {
    cursor: pointer;
    color: #f0f0f0;
  }
`;

export const StyledNameContainer = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center; /* Adicionado para centralizar verticalmente */
    text-align: center;

    p {
      margin-left: 8px;
      font-size: 1.8rem;
      font-weight: 500;
      font-family: monospace;
    }
  }

  p.info-text {
    font-size: 1.15rem;
    color: #ffffff80;
    font-family: sans-serif;
  }


  @media screen and (max-width: 780px) {
    div {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;


export const ContentInput = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
  svg {
    background-color: red;
  }
`;

export const StyledDateContainer = styled.div`
  max-height: 40px;
  display: flex;
  align-items: center;
  /* background-color: #fff; */
  padding: 15px;
  border-radius: 5px;
  margin: auto 0;
  max-width: 300px;

  @media screen and (max-width: 780px) {
    position: fixed;
    bottom: 30px;
    right: 10px;
    /* background-color: #4CAF50; */
    color: white;
    /* padding: 20px 20px; */
    border: none;
    border-radius: 5px;
    cursor: pointer;

    button {
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 20px;
      span {
        display: none;
      }
    }
  }
`;


export const ContainerSectionsInfos = styled.div`
  margin-top: -150px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Distância igual entre as três seções */
  flex-wrap: wrap; /* Quebra para a próxima linha em telas menores */
  
  @media screen and (max-width: 780px) {
    flex-direction: column;
    margin-top: -170px;
  }
`;

