import styled from "styled-components";

export const ContainerBlueBar = styled.div`
  /* background: linear-gradient(to right, #1146ff, #682fff); */
  background: linear-gradient(to right, #202d58, #1d2b4b);
  /* color: #682fff; */
  height: 300px;
  width: 100%;
  color: #fff;
  padding: 10px;
`;

export const ContentBlueBar = styled.div`
  display: flex;
  margin: 20px auto;
  width: 90%;
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
  background-color: #e28800;
  border: 2px solid #e28800;
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
    gap: 8px;

    p {
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


  @media screen and (max-width: 600px) {
    div {
      p {
        font-size: 1.2rem;
      }

      svg {
        display: none;
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
  z-index: 2;
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
  flex: 1;
  margin-top: -180px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Distância igual entre as três seções */
  flex-wrap: wrap; /* Quebra para a próxima linha em telas menores */
  margin-bottom: 50px;
  
  @media screen and (max-width: 780px) {
    flex-direction: column;
    margin-top: -170px;
  }
`;
