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
  margin: auto;
  gap: 50px;

  h1 {
    text-align: center;
    color: rgb(8, 8, 116);
    font-size: 45px;
    margin-top: 30px;
    font-family: inherit;
  }

  h2 {

    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgb(8, 8, 116);
    font-size: 33px !important;
    margin-top: 30px;

  }

  @media screen and (max-width: 1280px) {
    width: 80%;
    margin: auto;
  }
`;


export const OpcoesMedicamento = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 1120px) {
    & {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }
`;

export const DivContainerListaComfirma = styled.div`
    margin: auto;
    /* margin-top: 30px; */
    justify-content: start;
    flex: 1;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      color: #000;
    }

    h6 {

      color: var(--cool-gray);
      font-weight: 500;
      line-height: 1.8;
      font-size: 1rem;
      margin-bottom: 20px;
      color: #8d8bac;
    }
`;


export const DivContainerDivMed = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: auto;
    width: 80%;
  }
`;

export const ListaConfirma = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  li {
    display: flex;
  }
`;

export const BtnRecursos = styled.button`
border: none;
  padding: 15px;
  background-color: #564BC6;
  font-weight: 800;
  color: #fff;
  width: 60%;
  text-align: center;
  border-radius: 8px;
`;

export const ContainerDivMed = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 50px;
  gap: 30px;
`;

export const ContainerDivMed2 = styled.div`
  flex-direction: column;
  display: flex;
  gap: 30px;
`;

export const DivMed = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  min-height: 250px;
  max-height: 250px;
  width: 250px;
  /* padding: 20px; */
  box-sizing: border-box;
  box-shadow: 1px 1px 25px 10px #88888850;
  border-radius: 8px;
  text-align: start;
  padding: 20px 40px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  h4 {
    color: rgb(8, 8, 116);
    font-size: 1.1rem;
    font-family: sans-serif;
  }
  
  p {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    max-height: 10em;
    /* width: 80%; */
    margin: 0 auto;
  }
`;

export const SvgDivMed = styled.div`
  text-align: center;
  margin: auto;
  justify-content: center;
  display: flex;

  svg {
    background: #746AE1;
    padding: 10px;
    border-radius: 50%;
    height: 45px;
    width: 45px;
  }
`;
