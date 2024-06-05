import { Container, Content, FilterButton, FilterSelect, Header, LeftHeader, NavigationButton, PageIndicator, PaginationContainer, RightHeader, SearchInput } from "./styled";
// import { SelectContainer, StyledSelect } from "../Warnings/styled";
// import { useState } from "react";
import { RouterIndicator } from "../../../components/RouterIndicator";
import { CaretLeft, CaretRight, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import PatientTable from "./TableUI";
import ModalServices from "./ModalCalendar/ModalServices";

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


function ServicesProvided() {
  // const options: Option[] = [
  //   { value: 'option1', label: 'Atendido' },
  //   { value: 'option2', label: 'Não atendido' },
  //   { value: 'option3', label: 'Em Aberto' },
  //   { value: 'option4', label: 'Remarcado' },
  // ];

  // const handleChange = (value: string) => {
  //   console.log('Opção selecionada:', value);
  // };

  const patients = [
    {
      id: 1,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 2,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 3,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 4,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 5,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 6,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 7,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 8,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 9,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    {
      id: 10,
      nameEmployee: 'Funcionário',
      namePatient: 'Paciente',
      inicio: '10/08/2022',
      fim: '13/08/2022',
      valor: '120.20',
    },
    // Adicione mais pacientes conforme necessário
  ];


  const totalPages = 10

  const [currentPage, setCurrentPage] = useState(1);



  function onPrevClick() {
    console.log('voltar paginacao')
    setCurrentPage(currentPage - 1);
  }

  function onNextClick() {
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

export default ServicesProvided;
