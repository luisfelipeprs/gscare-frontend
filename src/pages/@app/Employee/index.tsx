import {
  Container, Content, PaginationContainer,
  NavigationButton,
  PageIndicator, Header,
  LeftHeader,
  SearchInput,
  FilterSelect,
  FilterButton,
  RightHeader
} from './styled';
import { RouterIndicator } from "../../../components/RouterIndicator";
import { CaretLeft, CaretRight, MagnifyingGlass } from "phosphor-react";

import ModalStep from './ModalSteps/ModalStep.tsx';
import React from 'react';
import PatientTable from '../../../components/TableUI/index.tsx';

export function Employee() {

  // function handleEdit(string: string) {
  //   console.log(string)
  // }

  // function radixFunc() {
  //   console.log('clicou pra abrir um modal radix')
  // }




  const patients = [
    {
      id: 1,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      dataPagamento: '01/04/2024',
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
      sexo: 'homem'
    },
    {
      id: 2,
      nome: 'João Silva',
      idade: 45,
      patologia: 'Hipertensão',
      endereco: 'Rua ABC, 123',
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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
      dataPagamento: '01/04/2024',
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

  const totalPages = 10

  const [currentPage, setCurrentPage] = React.useState(1);

  function onPrevClick() {
    console.log('voltar paginacao')
    setCurrentPage(currentPage - 1);
  }

  function onNextClick() {
    console.log('avancar paginacao')
    setCurrentPage(currentPage + 1);
  }

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const handlePrevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };


  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="Listagem de funcionários"
        routerText="Funcionarios"
        onButtonClick={ModalStep}
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
