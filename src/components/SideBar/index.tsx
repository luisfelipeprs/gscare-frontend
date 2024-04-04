import { useState } from 'react';
import { House, Calendar, IdentificationCard, BellRinging, UserGear, CalendarCheck, ChartPieSlice, ChatCenteredText, WhatsappLogo, UsersThree, Gauge } from 'phosphor-react';
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
const WhatsappLogoIcon = <WhatsappLogo size={24} />
const GaugeIcon = <Gauge size={24} />



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

            <NavLinkStyled
              to="/admin/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/'}
              onClick={() => handleNavLinkClick('/admin/')}
            >
              <Icons>{HomeIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Início
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/calendar/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/calendar/'}
              onClick={() => handleNavLinkClick('/admin/calendar/')}
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
            >
              <Icons>{CalendarCheckIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                atendimentos
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Relatórios
            </Logo>

            <NavLinkStyled
              to="/admin/reports/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/reports/'}
              onClick={() => handleNavLinkClick('/admin/reports/')}
            >
              <Icons>{ChartPieSliceIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                relatorios
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/zapscheduling/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/zapscheduling/'}
              onClick={() => handleNavLinkClick('/admin/zapscheduling/')}
            >
              <Icons>{CalendarIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Agendamento Zap
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/zapcampaign/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/zapcampaign/'}
              onClick={() => handleNavLinkClick('/admin/zapcampaign/')}
            >
              <Icons>{WhatsappLogoIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Campanha Zap
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Interação
            </Logo>

            <NavLinkStyled
              to="/admin/feedback/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/feedback/'}
              onClick={() => handleNavLinkClick('/admin/feedback/')}
            >
              <Icons>{FeedbackIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Feedbacks
              </LinkText>
            </NavLinkStyled>

            <NavLinkStyled
              to="/admin/Warnings/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/Warnings/'}
              onClick={() => handleNavLinkClick('/admin/Warnings/')}
            >
              <Icons>{BellRingingIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                avisos
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Prontuário
            </Logo>

            <NavLinkStyled
              to="/admin/medicalrecord/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/medicalrecord/'}
              onClick={() => handleNavLinkClick('/admin/medicalrecord/')}
            >
              <Icons>{UserGearIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Prontuário Eletrônico
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Configuração
            </Logo>

            <NavLinkStyled
              to="/admin/financial/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/financial/'}
              onClick={() => handleNavLinkClick('/admin/financial/')}
            >
              <Icons>{UserGearIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                financials
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <NavLinkStyled
              to="/admin/dashboard/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/dashboard/'}
              onClick={() => handleNavLinkClick('/admin/dashboard/')}
            >
              <Icons>{GaugeIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                painel paciente
              </LinkText>
            </NavLinkStyled>
          </div>

          <div>
            <Logo style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
              Nova funcionalidade
            </Logo>

            <NavLinkStyled
              to="/admin/financial/"
              className="link"
              isopen={isOpenSideBar}
              isactive={lastClickedLink === '/admin/financial/'}
              onClick={() => handleNavLinkClick('/admin/financial/')}
            >
              <Icons>{UserGearIcon}</Icons>
              <LinkText style={{ display: isOpenSideBar ? 'flex' : 'none' }} isopen={isOpenSideBar}>
                Financial
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
