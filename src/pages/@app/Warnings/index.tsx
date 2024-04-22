import { Container, Content, FilterButton, FilterSelect, Header, LeftHeader, NavigationButton, PageIndicator, PaginationContainer, RightHeader, SearchInput } from "./styled";
import { RouterIndicator } from "../../../components/RouterIndicator";
import ModalWarnings from "./Modal/ModalWarnings";
import { CaretLeft, CaretRight, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import PatientTable from "./TableUI";

// titulo
// tipo de aviso
// data de inicio 
// data de fim 
// mensagem 

function Warnings () {

  const patients = [
    {
      id: 1,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 2,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 3,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 4,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 5,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 6,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 7,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 8,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 9,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    },
    {
      id: 10,
      titulo: 'nova regra',
      tipo: 'importante',
      inicio: '01/05/2022',
      fim: '20/05/2022',
      mensagem: 'Tenha cuidado com a nova regra que deve ser seguida',
    }
    // Adicione mais pacientes conforme necessário
  ];


  const totalPages = 10

  const [currentPage, setCurrentPage] = useState(1);



  function onPrevClick () {
    console.log('voltar paginacao')
    setCurrentPage(currentPage - 1);
  }

  function onNextClick () {
    console.log('avancar paginacao')
    setCurrentPage(currentPage + 1);
  }

  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="Listagem de avisos agendados e do ultimo mes"
        routerText="Avisos"
        onButtonClick={ModalWarnings}
      >

        <Content>
          <Header>
            <LeftHeader>
              <SearchInput type="text" id="searchInput" placeholder="Pesquisar por nome" />
              <FilterSelect id="filterSelect">
                <option value="nome">Nome</option>
                <option value="diagnostico">Diagnóstico</option>
                <option value="medicamento">Medicamento Prescrito</option>
              </FilterSelect>
              <FilterButton id="filterButton">
                <MagnifyingGlass size={20} weight="bold" />
              </FilterButton>
            </LeftHeader>
            <RightHeader>
              <PaginationContainer>
                <NavigationButton onClick={onPrevClick}>
                  <CaretLeft />
                  {/* <span>voltar</span> */}
                </NavigationButton>
                <PageIndicator>{`${currentPage} - ${currentPage * 20} de ${totalPages * 20}`}</PageIndicator>
                <NavigationButton onClick={onNextClick}>
                  {/* <span>avancar</span> */}
                  <CaretRight />
                </NavigationButton>
              </PaginationContainer>
            </RightHeader>
          </Header>

          <PatientTable patients={patients} />
        </Content>
      </RouterIndicator>
    </Container>

  );
}

export default Warnings;
