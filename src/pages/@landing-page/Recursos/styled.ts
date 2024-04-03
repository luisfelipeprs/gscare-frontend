import styled from "styled-components";

export const ContainerRecursos = styled.section`
  max-width: 1280px;
  margin: 0 auto;

`;

export const NavContainerRecursos = styled.div`
  position: sticky;
  bottom: 0;
  right: 0;
  margin-bottom: 70px;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 850px) {
    &{
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex: 1;

    a {
      text-decoration: none;
      padding: 20px;
      font-size: 1.1rem;
      color: #564BC6;
      font-weight: bold;
      font-family: sans-serif;
    }
  }
`;

export const ContentDemostrationSistem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 50px 25px;

  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;      
      display: flex;
      gap: 20px;
      margin: 30px auto;
      width: 80%;
    }
  }
`;

export const ContainerImageContentDemostrationSistem = styled.div`
  width: 100%;
  position: relative;
  text-align: center;


  img {
    width: 100%;

  }
`;

export const ContentDemostrationSistemLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .lista-recursos-atendimento {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 15px;
  }

  @media screen and (max-width: 900px) {
    & {
      order: 0;
    }
  }
`;

export const ListaContentDemostrationSistem = styled.ul`
    list-style: none;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 15px;
`;

export const ListFuncionalidadesContentDemostrationSistem = styled.div`

`;

export const TextParagrafoContentDemostrationSistem = styled.div`

  h3 {

    font-size: 35px;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #1e266d;

  }

  p {
    font-size: 18px;
    color: #445781;
    font-weight: 400;
  }

  
`;


export const ContainerProntuarioLeft = styled.div`
  margin-right: 200px;
  width: 50%;
`;

export const ContentDemostrationSistemRight = styled.div`
  flex: 1;

  @media screen and (max-width: 900px) {
    & {
      order: 1;
      margin: auto;
    }
  }
`;

export const TextFaleConosco = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;

  h1{
    font-family: inherit;
    font-size: 2.8rem;
    color: #FFA500;
    max-width: 80%;
    margin: auto;
  }

  p {
    font-size: 1.2rem;
    color: #181818;
    max-width: 728px;
    margin: auto;
    padding: 20px 30px;
  }

  button {
    margin: auto;
    border: none;
    padding: 15px;
    background-color: #564BC6;
    font-weight: 800;
    color: #fff;
    width: 60%;
    text-align: center;
    border-radius: 8px;
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;
