import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import tippy from 'tippy.js';
import {
  House,
  Calendar,
  IdentificationCard,
  BellRinging,
  CalendarCheck,
  ChartPieSlice,
  UsersThree,
  User
} from 'phosphor-react';
import { Icons, LinkText, Logo, Menu, NavLinkStyled, Overlay, SidebarContainer } from './styled';

const HomeIcon = <House size={24} />;
const CalendarIcon = <Calendar size={24} />;
const EmployeeIcon = <IdentificationCard size={24} />;
const PatientsIcon = <UsersThree size={24} />;
const BellRingingIcon = <BellRinging size={24} />;
const CalendarCheckIcon = <CalendarCheck size={24} />;
const ChartPieSliceIcon = <ChartPieSlice size={24} />;
const UserIcon = <User size={24} />;

interface IProps {
  isOpenSideBar: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpenSideBar, toggleSidebar }: IProps) => {
  const [lastClickedLink, setLastClickedLink] = useState('/admin/');

  const handleNavLinkClick = (to: string) => {
    setLastClickedLink(to);
    // Add any other logic you want to execute on NavLink click here
  };

  return (
    <>
      <SidebarContainer isopen={isOpenSideBar}>
        <Menu>
          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Administrativo
            </Logo>
            <div>
              <NavLinkStyled
                to="/admin/"
                className="link"
                isopen={isOpenSideBar}
                isactive={lastClickedLink === '/admin/'}
                onClick={() => handleNavLinkClick('/admin/')}
                ref={(el) => el && tippy(el, { content: 'Início', placement: 'right' })}
              >
                <Icons>{HomeIcon}</Icons>
                <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                  Início
                </LinkText>
              </NavLinkStyled>
            </div>
            <NavLinkStyled
              to="/admin/calendar/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/calendar/'}
              onClick={() => handleNavLinkClick('/admin/calendar/')}
              ref={(el) => el && tippy(el, { content: 'Calendário', placement: 'right' })}
            >
              <Icons>{CalendarIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Calendário
              </LinkText>
            </NavLinkStyled>
            <NavLinkStyled
              to="/admin/employee/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/employee/'}
              onClick={() => handleNavLinkClick('/admin/employee/')}
              ref={(el) => el && tippy(el, { content: 'Funcionários', placement: 'right' })}
            >
              <Icons>{EmployeeIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Funcionários
              </LinkText>
            </NavLinkStyled>
            <NavLinkStyled
              to="/admin/patients/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/patients/'}
              onClick={() => handleNavLinkClick('/admin/patients/')}
              ref={(el) => el && tippy(el, { content: 'Pacientes', placement: 'right' })}
            >
              <Icons>{PatientsIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Pacientes
              </LinkText>
            </NavLinkStyled>
            <NavLinkStyled
              to="/admin/servicesprovided/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/servicesprovided/'}
              onClick={() => handleNavLinkClick('/admin/servicesprovided/')}
              ref={(el) => el && tippy(el, { content: 'Atendimentos', placement: 'right' })}
            >
              <Icons>{CalendarCheckIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Atendimentos
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Interação
            </Logo>
            <NavLinkStyled
              to="/admin/Warnings/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/Warnings/'}
              onClick={() => handleNavLinkClick('/admin/Warnings/')}
              ref={(el) => el && tippy(el, { content: 'Avisos', placement: 'right' })}
            >
              <Icons>{BellRingingIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Avisos
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Relatórios
            </Logo>
            <NavLinkStyled
              to="/admin/dashboard/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/dashboard/'}
              onClick={() => handleNavLinkClick('/admin/dashboard/')}
              ref={(el) => el && tippy(el, { content: 'Relatórios', placement: 'right' })}
            >
              <Icons>{ChartPieSliceIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Relatórios
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Configuração
            </Logo>
            <NavLinkStyled
              to="/admin/profile/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/profile/'}
              onClick={() => handleNavLinkClick('/admin/profile/')}
              ref={(el) => el && tippy(el, { content: 'Perfil', placement: 'right' })}
            >
              <Icons>{UserIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Perfil
              </LinkText>
            </NavLinkStyled>
          </div>
        </Menu>
      </SidebarContainer>
      {isOpenSideBar && <Overlay onClick={toggleSidebar} isopen={isOpenSideBar} />}
    </>
  );
};

export default Sidebar;
