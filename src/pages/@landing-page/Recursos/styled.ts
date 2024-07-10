import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  gap: 50px;
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
`;

export const ContainerRecursos = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  
  @media screen and (max-width: 1280px) {
    width: 80%;
    margin: auto;
  }
`;


export const NavContainerRecursos = styled.nav`
  position: sticky;
  bottom: 0;
  width: 100%;
  /* background-color: #fff; */
  z-index: 2;
  /* box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); */

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow-x: auto;
    gap: 10px;
    padding: 15px 0;
    border-bottom: 2px solid #f0f0f0;
  }

  li {
    flex: 1;
    text-align: center;
  }

  .buttonNavigation {
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    font-size: 1.1rem;
    color: #1e2c50;
    font-weight: bold;
    font-family: sans-serif;
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #1e2c50;
    }
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 15px 20px;
  /* font-size: 1.1rem; */
  color: #1e2c50;
  font-weight: bold;
  font-family: sans-serif;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #1e2c50;
  }
`;

export const ContentDemostrationSistem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin: 50px 0px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 30px auto;
    width: 80%;
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
  gap: 20px;
  text-align: start;

  .lista-recursos-atendimento {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 15px;
  }

  @media screen and (max-width: 900px) {
    order: 2;
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

export const ListFuncionalidadesContentDemostrationSistem = styled.div``;

export const TextParagrafoContentDemostrationSistem = styled.div`
  h3 {
    font-size: 35px;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #242938;
  }

  p {
    font-size: 18px;
    color: #071a25a8;
    font-weight: 400;
  }
`;

export const ContentDemostrationSistemRight = styled.div`
  flex: 1;
  margin: auto;

  @media screen and (max-width: 900px) {
    order: 1;
    margin: auto;
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

  h1 {
    font-family: inherit;
    font-size: 2.8rem;
    color: #e28800;
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
    background-color: #071a25a8;
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
