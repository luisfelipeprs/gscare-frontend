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
import PatientTable from "../../../components/TableUI/index.tsx";
import UserDialog from "../MedicalRecord/Model/index.tsx";

function Patient () {

  const [currentPage] = useState(1);

  function onPrevClick () {
    console.log('voltar paginacao')
  }

  function onNextClick () {
    console.log('avancar paginacao')
  }

  const totalPages = 10


  const patients = [
    {
      id: 1,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 2,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 3,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 4,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 5,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 6,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 7,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 8,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 9,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    {
      id: 10,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      email: 'teste@gmail.com',
      // responsavel: 'Maria Silva',
      // formaPagamento: 'Cartão de Crédito',
      // parentesco: 'Esposa',
      // identidade: '1234567',
      // cpf: '123.456.789-00',
      // email: 'joao@example.com',
      celular: '(11) 99999-9999',
      tipoEscala: 'Período Integral',
      valorMensal: '1500.00',
      valorPlantao: '200.00',
      sexo: 'mulher'
    },
    // Adicione mais pacientes conforme necessário
  ];

  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="Listagem de pacientes"
        routerText="Paciente"
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

          <PatientTable patients={patients} />
        </Content>
      </RouterIndicator>
    </Container>
  );
}


export default Patient;
