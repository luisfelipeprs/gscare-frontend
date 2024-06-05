import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Action, Contact, Container, ContainerLinks, ContentWrapper, ImageIconLogo, ImageLogo, Infos, Navigationbar, Notification, RouteOptionsContent, RouteSelectorContainer } from './styled';
import { User } from 'phosphor-react';
import logo from './../../assets/logo-gs-care.png';
import iconLogo from './../../assets/iconLogo.png';

interface IProps {
  handleOpenModal?: () => void
}

const Navbar = ({ handleOpenModal }: IProps) => {
  const [showRouteSelector, setShowRouteSelector] = useState(false);

  const handleRouteSelect = (): void => {
    setShowRouteSelector(prevState => !prevState);
  };


  const handleRouteSelection = (route: string): JSX.Element => {
    // Aqui você pode fazer algo com a rota selecionada, como redirecionar para ela
    console.log('Rota selecionada:', route);
    setShowRouteSelector(false);
    return <Navigate to={route} />;
  };

  return (
    <>
      <Container>
        <Navigationbar>
          <Infos>
            <ImageLogo>
              <img src={logo} alt="logo" width='50px' />
            </ImageLogo>
            <ImageIconLogo>
              <img src={iconLogo} alt="icone Logo" height='50px' />
            </ImageIconLogo>
            <ContainerLinks>
              <Link className='buttonNavigation' to="/">
                Home
              </Link>
              <Link className='buttonNavigation' to="/sobre">
                Sobre
              </Link>
              <Link className='buttonNavigation' to="/recursos">
                Recursos
              </Link>
              <Link className='buttonNavigation' to="/planos">
                Planos
              </Link>
            </ContainerLinks>
          </Infos>
          <Action>
            <Contact>
              <Link className='' to="/contact">Entre em contato</Link>
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
  onSelect: (route: string) => void;
}

// Componente para a tela de seleção de rota
function RouteSelector ({ onClose, onSelect }: RouteSelectorProps): JSX.Element {
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
        <Link to="/">
          Home
        </Link>
        <Link to="/sobre">
          Sobre
        </Link>
        <Link to="/recursos">
          Recursos
        </Link>
        <Link to="/planos">
          Planos
        </Link>
        <Link to="/login">
          Login
        </Link>
        <Link to="/form">
          Teste Gratis
        </Link>
        <Link to="/contact">
          Entre em contato
        </Link>
      </RouteOptionsContent>
      {/* <CloseButton onClick={onClose}>Fechar</CloseButton> */}
    </RouteSelectorContainer>
  );
}
