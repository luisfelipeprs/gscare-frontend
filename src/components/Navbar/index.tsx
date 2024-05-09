import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Action, Contact, Container, ContainerLinks, ContentWrapper, ImageIconLogo, ImageLogo, Infos, Navigationbar, Notification, RouteOptionsContent, RouteSelectorContainer } from './styled';
import { User } from 'phosphor-react';
import logo from './../../assets/logo.svg';
import iconLogo from './../../assets/iconLogo.png';

const handleScrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 70, // Subtrai 150px da posição do elemento
      behavior: 'smooth'
    });
  }
};

interface IProps {
  handleOpenModal?: () => void
}

const Navbar = ({ handleOpenModal }: IProps) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll até a seção correspondente quando a rota mudar
    const sectionId = location.hash.substr(1);
    if (sectionId) {
      handleScrollToSection(sectionId);
    }
  }, [location]);

  const [showRouteSelector, setShowRouteSelector] = useState(false);

  const handleRouteSelect = (): void => {
    setShowRouteSelector(prevState => !prevState);
  };


  const handleRouteSelection = () => {
    // Aqui você pode fazer algo com a rota selecionada, como redirecionar para ela
    setShowRouteSelector(false);
  };

  return (
    <>
      <Container>
        <Navigationbar>
          <Infos>
            <ImageLogo>
              <img src={logo} alt="logo" width='200px' />
            </ImageLogo>
            <ImageIconLogo>
              <img src={iconLogo} alt="icone Logo" height='50px' />
            </ImageIconLogo>
            <ContainerLinks>
              <Link className='buttonNavigation' to="#home">
                Home
              </Link>
              {/* <Link className='buttonNavigation' to="#overview-recursos">
                Recursos
              </Link> */}
              <Link className='buttonNavigation' to="#principais-recursos">
                Recursos
              </Link>
              <Link className='buttonNavigation' to="#box-cards-tools">
                Ferramentas
              </Link>
              <Link className='buttonNavigation' to="#feedbacks-clients">
                Feedbacks
              </Link>
              <Link className='buttonNavigation' to="#planos">
                Planos
              </Link>
              {/* <Link className='buttonNavigation' to="#question-card">
                Perguntas
              </Link> */}
              {/* <Link className='buttonNavigation' to="#perguntas-frequentes">
                Perguntas Frequentes
              </Link> */}

            </ContainerLinks>
          </Infos>
          <Action>
            <Contact>
              <Link className='buttonNavigation' to="#perguntas-frequentes">
                Entre em contato</Link>
              <p>40 2809 9022</p>
            </Contact>
            <Link className='gotoLoginButton' to="/login">
              <User size={24} />
              Login
            </Link>
            <button className='linkButton' onClick={handleOpenModal}>
              Teste Gratis
            </button>
            {/* <Link className='linkButton' to="/form">
              Teste Gratis
            </Link> */}
            {/* Botão para selecionar rota */}
            <button className={`linkButtonMobileNavs ${showRouteSelector ? 'hide' : ''}`} onClick={handleRouteSelect}>
              {/* {showRouteSelector ? '&#9776;' : '&times;'} */}
              {showRouteSelector ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          </Action>
        </Navigationbar>
      </Container>
      <ContentWrapper>
        {/* Tela para seleção de rota */}
        {showRouteSelector && (
          <RouteSelector onClose={() => setShowRouteSelector(false)} onSelect={handleRouteSelection} />
        )}
        <Notification>
          <h2>
            Conheça a empresa que vai revolucionar a sua empresa de homecare.
          </h2>
        </Notification>
      </ContentWrapper>
    </>
  );
}

export default Navbar;

// Componente para a tela de seleção de rota
interface RouteSelectorProps {
  onClose: () => void;
  onSelect: () => void;
}

// Componente para a tela de seleção de rota
function RouteSelector({ onClose, onSelect }: RouteSelectorProps): JSX.Element {
  console.log(onClose, onSelect)
  // const handleRouteSelection = (route: string) => {
  //   onSelect(route);
  //   onClose();
  // };

  return (
    <RouteSelectorContainer>
      <RouteOptionsContent>
        <h1>Escolha a página: </h1>
        {/* <button onClick={() => handleRouteSelection('/')}>Home</button>
        <button onClick={() => handleRouteSelection('/sobre')}>Sobre</button>
        <button onClick={() => handleRouteSelection('/recursos')}>Recursos</button>
        <button onClick={() => handleRouteSelection('/planos')}>Planos</button> */}
        <Link className='buttonNavigation' to="#home" onClick={onSelect}>
          Home
        </Link>
        {/* <Link className='buttonNavigation' to="#overview-recursos" onClick={onSelect}>
          Recursos
        </Link> */}
        <Link className='buttonNavigation' to="#principais-recursos" onClick={onSelect}>
          Principais Recursos
        </Link>
        <Link className='buttonNavigation' to="#box-cards-tools" onClick={onSelect}>
          Ferramentas
        </Link>
        {/* <Link className='buttonNavigation' to="#feedbacks-clients" onClick={onSelect}>
          Feedbacks
        </Link> */}
        <Link className='buttonNavigation' to="#planos" onClick={onSelect}>
          Planos
        </Link>
        {/* <Link className='buttonNavigation' to="#question-card" onClick={onSelect}>
          Perguntas
        </Link> */}
        <Link className='buttonNavigation' to="#perguntas-frequentes" onClick={onSelect}>
          Perguntas Frequentes
        </Link>
        <Link className='gotoLoginButton' to="/login">
          Login
        </Link>
      </RouteOptionsContent>
      {/* <CloseButton onClick={onClose}>Fechar</CloseButton> */}
    </RouteSelectorContainer>
  );
}
