import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: #fff; */
  /* padding-bottom: 100px; */
  display: flex;
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
    color: #000;
    font-size: 45px;
    margin-top: 30px;
    font-family: inherit;
  }

  h2 {

    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #000;
    /* font-size: 33px !important; */
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
  justify-content: start;
  flex: 2;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 20px;

    h2 {
      color: #071a25a8;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      color: #000;
      font-size: 2.8rem;
      margin-top: 30px;
    }

    h6 {

      font-weight: 500;
      line-height: 1.8;
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #676767;

      @media screen and (max-width: 1120px) {
        max-width: 65%;
        margin: auto;
      }
    }

     @media screen and (max-width: 1120px) {
      & {
        text-align: center;
      }
    }
`;

export const Functionalities = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  gap: 0;
  span {
    color: #1c1c1c;
    text-align: start;
    font-size: 1.3rem;

    svg {  
      transform: translateY(20%);
      margin-right: 2px;
    }
  }

  @media screen and (max-width: 1120px) {
    span {
        text-align: center;
      }
    }

  @media screen and (max-width: 320px) {
    & {
      gap: 10px;
    }
  }
  
`

export const DivContainerDivMed = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  flex: 3;
  gap: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: auto;
    /* width: 80%; */
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
  background-color: #FFA500;
  font-weight: 800;
  color: #fff;
  width: 60%;
  text-align: center;
  border-radius: 8px;

  @media screen and (max-width: 1120px) {
    margin: auto;
}
`;

export const ContainerDivMed = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 50px;
  gap: 30px;
  flex: 1;
`;

export const ContainerDivMed2 = styled.div`
  flex-direction: column;
  display: flex;
  margin-bottom: 50px;
  gap: 30px;
  flex: 1;
`;

export const DivMed = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  min-height: 300px;
  max-height: 350px;
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
    color: #000;
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
    background: #3fb8ff9e;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    box-shadow: 0px 0px 10px #a6a6a6;
  }
`;
