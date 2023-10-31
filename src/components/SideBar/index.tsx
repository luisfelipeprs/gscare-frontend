import  { useState } from 'react';
import {
  SidebarContainer,
  TopSection,
  Logo,
  LinkText,
  NavLinkStyled,
  Icons,
} from './styled'; // Importe os estilos do arquivo styled.ts

import {
  House,
  Calendar,
  IdentificationCard,
  UsersThree,
  Chats,
} from 'phosphor-react';

const Sidebar = ({isOpenSideBar}:any) => {
  const isMenuOpen = isOpenSideBar;

  return (
    <SidebarContainer isOpen={isOpenSideBar}>
      <TopSection>
        <Logo style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Saas Care</Logo>
      </TopSection>

      <NavLinkStyled to="/admin/" className="link">
        <Icons>
          <House size={24} />
        </Icons>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>House</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/calendar/" className="link">
        <Icons>
          <Calendar size={24} />
        </Icons>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Calendar</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/employee/" className="link">
        <Icons>
          <IdentificationCard size={24} />
        </Icons>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Employee</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/patients/" className="link">
        <Icons>
          <UsersThree size={24} />
        </Icons>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Patients</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/feedback/" className="link">
        <Icons>
          <Chats size={24} />
        </Icons>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Feedbacks</LinkText>
      </NavLinkStyled>
    </SidebarContainer>
  );
};

export default Sidebar;