import {
  Container,
  Content,
  FilterButton,
  FilterSelect,
  Header,
  LeftHeader,
  RightHeader,
  SearchInput,
} from "./styled";

import { RouterIndicator } from "../../../components/RouterIndicator/index.tsx";
import { MagnifyingGlass, CaretLeft, CaretRight } from "phosphor-react";
import { PaginationContainer, NavigationButton, PageIndicator } from "../Employee/styled.ts";
import { useState } from "react";
import UserDialog from "../MedicalRecord/Model/index.tsx";
import EmployeeTable from "../../../components/TableUI/EmployeeTable.tsx";

function Employee () {

  const [currentPage] = useState(1);

  function onPrevClick () {
    console.log('voltar paginacao')
  }

  function onNextClick () {
    console.log('avancar paginacao')
  }

  const totalPages = 10


  const employees = [
    {
      id: 1,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 2,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 3,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 4,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 5,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 6,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 7,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: 'string',
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 8,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: "string",
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
    {
      id: 9,
      nome: 'João Silva',
      profissao: 'Veterinario',
      email: "joao@gmail.com",
      endereco: "string",
      idade: 45,
      celular: 'Rua ABC, 123',
      tipoEscala: 'Aberto',
      valorStatus: '1500.00',
      sexo: 'homem'
    },
  ];

  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="Listagem de employees"
        routerText="Employee"
        onButtonClick={UserDialog}
      >
        {/* <UserDialog /> */}

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
                <span>Filtrar</span>
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

          <EmployeeTable employees={employees} />
        </Content>
      </RouterIndicator>
    </Container>
  );
}


export default Employee;
