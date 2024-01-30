import { AgroupInput, Container, Content, DateContainer, ContentInputDate, SelectContent, ContainerForm, TableContainer, Table, InputStyle, TextLabelStyle, ButtonStyled } from "./styled";
import { SelectContainer, StyledSelect } from "../Warnings/styled";
import { useState } from "react";
import { RouterIndicator } from "../../../components/RouterIndicator";

type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}


const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    onChange(selectedOption);
  };

  return (
    <SelectContainer>
      <StyledSelect value={selectedValue} onChange={handleSelectChange}>
        <option value="" disabled hidden>
          Selecione o estado do atendimento
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};


function ServicesProvided() {
  const options: Option[] = [
    { value: 'option1', label: 'Atendido' },
    { value: 'option2', label: 'Não atendido' },
    { value: 'option3', label: 'Em Aberto' },
    { value: 'option4', label: 'Remarcado' },
  ];

  const handleChange = (value: string) => {
    console.log('Opção selecionada:', value);
  };
  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="listagem de atendimentos"
        routerText="Atendimentos"
      >
        <Content>
          <ContainerForm>
            <AgroupInput>
              <div>
                <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                  Nome do Funcionário
                </TextLabelStyle>
                <InputStyle
                  placeholder="Digite o nome do funcionário"
                />
              </div>
              <div>
                <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                  Nome do Paciente
                </TextLabelStyle>
                <InputStyle
                  placeholder="Digite o nome do paciente"
                />
              </div>
            </AgroupInput>

            <AgroupInput>
              {/* * o endereço ou sera da empresa por padrao, ou da sede que cadastrar o endereço */}
              {/* <div>
                <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                  Endereço
                </TextLabelStyle>
                <InputStyle
                  placeholder="Digite o Endereço do paciente"
                />
              </div> */}
              {/* o estado do atendimento vai ser sempre em aberto, ninguem marca um atendimento cancelado.
              se passou do prazo o sistema marca como nao atendido ou algo do tipo, se o paciente remarcar vai remarcar outro dia e entao sera outro atendimento */}
              {/* <div>
                <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                  Estado do Atendimento
                </TextLabelStyle>
                <SelectContent>
                  <Select options={options} onChange={handleChange} />
                </SelectContent>
              </div> */}
              <div>
                <DateContainer>
                  <ContentInputDate>
                    <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                      Data de Início
                    </TextLabelStyle>
                    <input type="date" />
                  </ContentInputDate>
                  <ContentInputDate>
                    <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                      Data de Fim
                    </TextLabelStyle>
                    <input type="date" />
                  </ContentInputDate>
                </DateContainer>
              </div>
              <div>
                <label>
                  <TextLabelStyle as="div" size="2" mb="1" weight="bold">
                    Valor do Atendimento
                  </TextLabelStyle>
                  <InputStyle
                    placeholder="Digite o valor do atendimento"
                  />
                </label>
              </div>

            </AgroupInput>

            <ButtonStyled style={{ width: "100%", marginTop: "20px" }}> Salvar</ButtonStyled>


          </ContainerForm>


          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Funcionário</th>
                  <th>Paciente</th>
                  <th>Local</th>
                  <th>Data Início</th>
                  <th>Data Fim</th>
                  <th>Valor</th>
                  <th>Estado do atendimento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </RouterIndicator>
    </Container>
  );
}

export default ServicesProvided;