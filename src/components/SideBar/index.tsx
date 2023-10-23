import React, { useState } from 'react';
import {
  SidebarContainer,
  TopSection,
  Logo,
  LinkText,
  NavLinkStyled,
  Menu,
  Icons,
} from './styled';

import {
  List,
  House,
  Calendar,
  IdentificationCard,
  UsersThree,
  Chats,
  X,
} from 'phosphor-react';

const DropdownMenu = ({ isOpen, closeMenu }: any) => {
  if (!isOpen) return null;

  return (
    <SidebarContainer isOpen={isOpen}>
    <TopSection>
      <Logo style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Saas Care</Logo>
    </TopSection>

    <NavLinkStyled to="/admin/" className="link">
      <div className="icon">
        <House size={24} />
      </div>
      <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>House</LinkText>
    </NavLinkStyled>

    <NavLinkStyled to="/admin/calendar/" className="link">
      <div className="icon">
        <Calendar size={24} />
      </div>
      <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Calendar</LinkText>
    </NavLinkStyled>

    <NavLinkStyled to="/admin/employee/" className="link">
      <div className="icon">
        <IdentificationCard size={24} />
      </div>
      <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Employee</LinkText>
    </NavLinkStyled>

    <NavLinkStyled to="/admin/patients/" className="link">
      <div className="icon">
        <UsersThree size={24} />
      </div>
      <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Patients</LinkText>
    </NavLinkStyled>

    <NavLinkStyled to="/admin/feedback/" className="link">
      <div className="icon">
        <Chats size={24} />
      </div>
      <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Feedbacks</LinkText>
    </NavLinkStyled>
    </SidebarContainer>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Menu>
        <List
          size={32}
          onClick={() => {
            toggle();
            toggleMenu(); // Alterna o ícone do menu hambúrguer
          }}
        />
      </Menu>
      <DropdownMenu isOpen={isMenuOpen} />
    </>
  );
};

export default Sidebar;