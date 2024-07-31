import { Container, Content, FilterButton, FilterSelect, Header, LeftHeader, NavigationButton, PageIndicator, PaginationContainer, RightHeader, SearchInput } from "./styled";
// import { SelectContainer, StyledSelect } from "../Warnings/styled";
// import { useState } from "react";
import { RouterIndicator } from "../../../components/RouterIndicator";
import { CaretLeft, CaretRight, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import PatientTable from "./TableUI";
import ModalServices from "./ModalCalendar/ModalServices";
import ServicesTable from "./TableUI/ServicesTable";

// type Option = {
//   value: string;
//   label: string;
// };

// interface SelectProps {
//   options: Option[];
//   onChange: (value: string) => void;
// }


// const Select: React.FC<SelectProps> = ({ options, onChange }) => {
//   const [selectedValue, setSelectedValue] = useState<string>('');

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedOption = event.target.value;
//     setSelectedValue(selectedOption);
//     onChange(selectedOption);
//   };

//   return (
//     <SelectContainer>
//       <StyledSelect value={selectedValue} onChange={handleSelectChange}>
//         <option value="" disabled hidden>
//           Selecione o estado do atendimento
//         </option>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </StyledSelect>
//     </SelectContainer>
//   );
// };


function ServicesProvided () {
  // const options: Option[] = [
  //   { value: 'option1', label: 'Atendido' },
  //   { value: 'option2', label: 'Não atendido' },
  //   { value: 'option3', label: 'Em Aberto' },
  //   { value: 'option4', label: 'Remarcado' },
  // ];

  // const handleChange = (value: string) => {
  //   console.log('Opção selecionada:', value);
  // };

  const services = [
    {
      id: 1,
      paciente: 'Ana Silva',
      funcionario: 'Dr. João Pereira',
      inicio: '01/08/2023',
      fim: '01/08/2023',
      local: 'Av. Paulista, 1000, São Paulo, SP',
      duracao: '2H'
    },
    {
      id: 2,
      paciente: 'Carlos Souza',
      funcionario: 'Dra. Maria Oliveira',
      inicio: '02/08/2023',
      fim: '02/08/2023',
      local: 'Rua das Flores, 200, Rio de Janeiro, RJ',
      duracao: '3H'
    },
    {
      id: 3,
      paciente: 'Fernanda Lima',
      funcionario: 'Dr. Pedro Costa',
      inicio: '03/08/2023',
      fim: '03/08/2023',
      local: 'Rua das Acácias, 300, Belo Horizonte, MG',
      duracao: '1H30M'
    },
    {
      id: 4,
      paciente: 'Gabriel Santos',
      funcionario: 'Dra. Laura Mendes',
      inicio: '04/08/2023',
      fim: '04/08/2023',
      local: 'Av. Independência, 400, Porto Alegre, RS',
      duracao: '4H'
    },
    {
      id: 5,
      paciente: 'Isabela Ferreira',
      funcionario: 'Dr. Rafael Lima',
      inicio: '05/08/2023',
      fim: '05/08/2023',
      local: 'Rua dos Ipês, 500, Curitiba, PR',
      duracao: '3H30M'
    },
    {
      id: 6,
      paciente: 'João Almeida',
      funcionario: 'Dra. Sofia Braga',
      inicio: '06/08/2023',
      fim: '06/08/2023',
      local: 'Rua das Palmeiras, 600, Salvador, BA',
      duracao: '2H45M'
    },
    {
      id: 7,
      paciente: 'Lucas Pinto',
      funcionario: 'Dr. Daniel Martins',
      inicio: '07/08/2023',
      fim: '07/08/2023',
      local: 'Av. Brasil, 700, Recife, PE',
      duracao: '3H15M'
    },
    {
      id: 8,
      paciente: 'Mariana Rodrigues',
      funcionario: 'Dra. Camila Costa',
      inicio: '08/08/2023',
      fim: '08/08/2023',
      local: 'Rua das Laranjeiras, 800, Fortaleza, CE',
      duracao: '1H'
    },
    {
      id: 9,
      paciente: 'Nicolas Dias',
      funcionario: 'Dr. Henrique Alves',
      inicio: '09/08/2023',
      fim: '09/08/2023',
      local: 'Av. Getúlio Vargas, 900, Manaus, AM',
      duracao: '2H30M'
    },
    {
      id: 10,
      paciente: 'Olivia Carvalho',
      funcionario: 'Dra. Ana Paula Silva',
      inicio: '10/08/2023',
      fim: '10/08/2023',
      local: 'Rua das Mangueiras, 1000, Brasília, DF',
      duracao: '4H'
    }
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
        routerText="Serviços agendados"
        descText="Listagem de todas as consultas"
        onButtonClick={ModalServices}
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

          <ServicesTable services={services}/>
        </Content>
      </RouterIndicator>
    </Container>
  );
}

export default ServicesProvided;
