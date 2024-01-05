import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
interface IsOpen {
  isopen: boolean;
}

export const SidebarContainer = styled.div<IsOpen>`
  width: ${(props) => (props.isopen ? '240px' : '60px')};
  min-width: ${(props) => (props.isopen ? '240px' : '60px')}; /* Adicione essa linha */
  max-width: ${(props) => (props.isopen ? '240px' : '60px')}; /* Adicione essa linha */
  /* background-color: #fff; */
  color: #000;
  transition: width 0.3s ease, min-width 0.3s ease, max-width 0.3s ease; /* Adicione essas linhas */
  overflow-x: hidden;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    display: ${(props) => (props.isopen ? 'block' : 'none')}; /* Altere de 'none' para 'block' */
    width: 100%;
    /* min-width: 100%; 
    max-width: 100%;  */
    height: 100%;
    position: fixed;
    text-align: center;
    top: 0;
  }
`;


export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 2px;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #555;
    margin: 0 25px;
  }
`;

export const Logo = styled.h1<IsOpen>`
  display: ${(props) => (props.isopen ? 'flex' : 'none')};
  color: #aaaaaa;
  font-family: monospace;
  font-size: 1.1rem;
  margin: 10px;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    display: flex;
    justify-content: start;
    align-items: start;
  }
`;

export const LinkIcon = styled.div<IsOpen>`
  font-size: 1rem;
  margin-right: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const LinkText = styled.div<IsOpen>`
  display: ${(props) => (props.isopen ? 'block' : 'none')};
  font-size: 1rem;
  margin-left: 5px;

  /* @media screen and (max-width: 1000px) {
    font-size: 1.2rem;
  } */
  @media screen and (max-width: 1000px) {
    display: block;
    margin-left: 0; /* Remova a margem à esquerda para centralizar */
  }
`;

interface INavLinkStyledProps extends IsOpen {
  isactive?: boolean;
}

export const NavLinkStyled = styled(NavLink)<INavLinkStyledProps>`
  text-decoration: none;
  /* color: ${(props) => (props.isactive ? '#5e9bf7' : '#000')};
  div{svg{color:${(props) => (props.isactive ? '#5e9bf7' : '#A7AEB8')};}} */
  color: ${(props) => (props.isactive ? '#FFA500' : '#000')};
  div{svg{color:${(props) => (props.isactive ? '#FFA500' : '#A7AEB8')};}}
  display: flex;
  align-items: center;
  padding: 10px 0;
  transition: background-color 0.2s ease-in-out, padding 0.2s ease-in-out, color 0.2s ease-in-out;
  margin: 3px 0;
  margin-left: ${(props) => (props.isopen ? '20px' : '0px')};

  @media screen and (max-width: 600px) {
    padding: 15px; /* Ajuste o valor conforme necessário */
    justify-content: start;
    align-items: center;

    div {
      margin-top: 10px;
      svg {
        height: 24px; /* Ajuste o valor conforme necessário */
        width: 24px; /* Ajuste o valor conforme necessário */
        margin-bottom: 5px; /* Adicione margem abaixo do ícone */
      }
    }
  }
  
  &:hover {
    color: #FFA500;
    div{color: #FFA500;}
    div{svg{color:#FFA500}}
  } 
  /* @media screen and (max-width: 600px) {
    padding: 30px;
    justify-content: center;
    font-size: 1.5rem;

    div {
      svg {
        height: 30px;
        width: 30px;
      }
    }
  } */

`;




export const Menu = styled.div`
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 5px;
`;

export const Icons = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 10px;
`;

export const Overlay = styled.div<IsOpen>`
  display: none;
  @media screen and (max-width: 1000px) {
    display: ${(props) => (props.isopen ? 'block' : 'none')};
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Ajuste a opacidade conforme necessário */
    z-index: 8; /* Defina um z-index menor que o da SidebarContainer */
  }
  `;
