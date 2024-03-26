import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: #fff; */
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* cor de fundo da navbar */
  z-index: 1000;
  /* background-color: #4047d0; */
`

export const Navigationbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;

  &:hover{
    /* cursor: pointer; */
  }
  
  @media screen and (max-width: 1280px) {
    padding: 0 15px;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  gap: 5px;

  a {
    font-size: 0.9rem;
    color: #2f368c;
  }

  p {
    font-size: 1rem;
    color: #2f368c;
  }

  @media screen and (max-width: 920px) {
    display: none;
  }
`

export const Action = styled.div`
  display: flex;
  position: relative;
  gap: 20px;

  .linkButtonMobileNavs {
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    height: 50px;
    color: #fff;
    background-color: #137d00;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 5px 15px;
    text-decoration: none;
    margin: auto;
    
    &:hover {
      cursor: pointer;
      background-color: #238615;
      color: #e5e5e5;
    }
    
    @media screen and (max-width: 920px) {
      display: flex;
    }
  }

  .linkButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    height: 50px;
    color: #fff;
    background-color: #137d00;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 5px 15px;
    text-decoration: none;
    margin: auto;
    
    &:hover {
      cursor: pointer;
      background-color: #238615;
      color: #e5e5e5;
    }

    @media screen and (max-width: 920px) {
      display: none;
    }
  }

  .gotoLoginButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    height: 50px;
    color: #0000a0;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 5px 15px;
    text-decoration: none;
    margin: auto;

    svg {
      color:"#0000a0";
      font-weight: 700;
    }
    
    &:hover {
      cursor: pointer;
      background-color: #6fd0ff30;
      color: #130c69;
    }

    @media screen and (max-width: 920px) {
      display: none;
    }
  }

`
export const ImageLogo = styled.div`
  display: block;
  @media screen and (max-width: 920px) {
      display: none;
  }
`

export const ImageIconLogo = styled.div`
  display: none;
  @media screen and (max-width: 920px) {
      display: block;
  }
`

export const ContainerLinks = styled.ul`

  .buttonNavigation {
    text-decoration: none;
    color: #130C69;
    font-weight: bold;
    font-size: 1rem;
    padding: 0px 10px;
    font-family: system-ui;
    transition: color .3s;

    &:hover {
      color: #130C6950;
    }
  }
`

export const Infos = styled.div`
  display: flex;

  ul{
    padding-left: 30px;
    margin: auto;
    display: flex;
    position: relative;
    list-style: none;

    li{
      color: #130C69;
      font-weight: bold;
      font-size: 1.1rem;
      padding: 0px 10px;
      justify-content: space-between;

      &:hover {
        cursor: pointer;
      }
    }
  }
  
  @media screen and (max-width: 920px) {
    ul {
      display: none;
    }
  }
`

export const Notification = styled.div`
  background-color: #3652cd;
  text-align: center;
  font-size: 0.8rem;
  h2 {
    padding: 10px 0;
    color: #fff;
  }
  @media screen and (max-width: 1280px) {
    /* background-color: red; */
    margin: auto;
    /* max-width: 100%; */
    padding: 0 20px;
  }
  @media screen and (max-width: 920px) {
    display: none;
  }
`

export const RouteSelectorContainer = styled.div`
  position: fixed;
  top: 60px; /* ajuste conforme necessário para ficar abaixo da navbar */
  left: 0;
  width: 100%;
  height: calc(100% - 60px); /* ajuste conforme necessário */
  background-color: #fff; /* fundo semi-transparente */
  z-index: 999; /* coloque um valor alto para garantir que fique acima de outros elementos */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RouteOptionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-family: sans-serif;
    color: #454545;
  }

  button {
    padding: 10px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  a {
    text-align: center;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 8px;
    text-decoration: none;
    color: #ddd;
    width: 100%;
    font-weight: bold;
    font-family: sans-serif;
    background: #1E22A3;
    transition: background-color 0.3s;

    &:hover {
      background-color: #262be0; /* cor de fundo ao passar o mouse */
    }
  }
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  margin-top: 80px; /* altura da navbar */
`;
