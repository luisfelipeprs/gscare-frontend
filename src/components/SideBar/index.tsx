import React, { useState } from 'react';
import { House, Calendar, IdentificationCard, BellRinging, UserGear, CalendarCheck, ChartPieSlice, ChatCenteredText, Money, WhatsappLogo, UsersThree } from 'phosphor-react';
import { Icons, LinkText, Logo, Menu, NavLinkStyled, Overlay, SidebarContainer } from './styled';

const HomeIcon = <House size={24} />;
const CalendarIcon = <Calendar size={24} />;
const EmployeeIcon = <IdentificationCard size={24} />;
const PatientsIcon = <UsersThree size={24} />;
const FeedbackIcon = <ChatCenteredText size={24} />;
const BellRingingIcon = <BellRinging size={24} />
const UserGearIcon = <UserGear size={24} />
const CalendarCheckIcon = <CalendarCheck size={24} />
const ChartPieSliceIcon = <ChartPieSlice size={24} />
const FinanceIcon = <Money size={24} />
const WhatsappLogoIcon = <WhatsappLogo size={24} />

interface IProps {
  isOpenSideBar: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpenSideBar, toggleSidebar  }: IProps) => {
  const [lastClickedLink, setLastClickedLink] = useState('/admin/');

  const handleNavLinkClick = (to: string) => {
    setLastClickedLink(to);
    // Add any other logic you want to execute on NavLink click here
  };

  return (
    <>
      <SidebarContainer isOpen={isOpenSideBar}>
        <Menu>
          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
              Administrativo
            </Logo>

            <NavLinkStyled
              to="/admin/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/'}
              onClick={() => handleNavLinkClick('/admin/')}
            >
              <Icons>{HomeIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Início
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/calendar/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/calendar/'}
              onClick={() => handleNavLinkClick('/admin/calendar/')}
            >
              <Icons>{CalendarIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Calendário
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/employee/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/employee/'}
              onClick={() => handleNavLinkClick('/admin/employee/')}
            >
              <Icons>{EmployeeIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Funcionários
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/patients/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/patients/'}
              onClick={() => handleNavLinkClick('/admin/patients/')}
            >
              <Icons>{PatientsIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Pacientes
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/servicesprovided/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/servicesprovided/'}
              onClick={() => handleNavLinkClick('/admin/servicesprovided/')}
            >
              <Icons>{CalendarCheckIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                atendimentos
              </LinkText>
            </NavLinkStyled>
          </div>
          
          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
              Relatórios
            </Logo>

            <NavLinkStyled
              to="/admin/reports/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/reports/'}
              onClick={() => handleNavLinkClick('/admin/reports/')}
            >
              <Icons>{ChartPieSliceIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                relatorios
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/financialmanagement/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/financialmanagement/'}
              onClick={() => handleNavLinkClick('/admin/financialmanagement/')}
            >
              <Icons>{FinanceIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                financeiro
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/zapscheduling/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/zapscheduling/'}
              onClick={() => handleNavLinkClick('/admin/zapscheduling/')}
            >
              <Icons>{CalendarIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Agendamento Zap
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/zapcampaign/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/zapcampaign/'}
              onClick={() => handleNavLinkClick('/admin/zapcampaign/')}
            >
              <Icons>{WhatsappLogoIcon}</Icons>
              <LinkText  style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Campanha Zap
              </LinkText>
            </NavLinkStyled>
          </div>
          
          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
              Interação
            </Logo>

            <NavLinkStyled
              to="/admin/feedback/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/feedback/'}
              onClick={() => handleNavLinkClick('/admin/feedback/')}
            >
              <Icons>{FeedbackIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                Feedbacks
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/Warnings/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/Warnings/'}
              onClick={() => handleNavLinkClick('/admin/Warnings/')}
            >
              <Icons>{BellRingingIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                avisos
              </LinkText>
            </NavLinkStyled>
          </div>
          
          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
              Configuração
            </Logo>

            <NavLinkStyled
              to="/admin/profile/"
              className="link"
              isOpen={isOpenSideBar}
              isActive={lastClickedLink === '/admin/profile/'}
              onClick={() => handleNavLinkClick('/admin/profile/')}
            >
              <Icons>{UserGearIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isOpen={isOpenSideBar}>
                profiles
              </LinkText>
            </NavLinkStyled>
          </div>
        </Menu>
      </SidebarContainer>
      {isOpenSideBar && <Overlay onClick={toggleSidebar} isOpen={isOpenSideBar} />}
    </>
  );
};

export default Sidebar;
