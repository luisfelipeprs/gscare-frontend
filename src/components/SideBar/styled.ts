import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IisOpen{
  isOpen: boolean

}

export const SidebarContainer = styled.div<IisOpen>`
  width: ${(props) => (props.isOpen ? '200px' : '50px')};
  height: 100vh;
  background-color: #333; 
  color: #fff;
  transition: width 0.3s ease-in-out;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.h1<IisOpen>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 1.5rem;
  margin: 0;
`;

export const LinkIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 10px;
`;

export const LinkText = styled.div<IisOpen>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;
