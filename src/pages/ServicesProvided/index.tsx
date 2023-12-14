import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { AgroupInput, Container, Content, DateContainer, InputContent, ContentInputDate, SelectContent, ContainerForm, TableContainer, Table } from "./styled";
import { SelectContainer, StyledSelect } from "../Warnings/styled";
import { useState } from "react";

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
    <>
      <Container>
        <Content>
          <ContainerForm>
            <AgroupInput>
              <div>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nome do Funcionário
                </Text>
                <TextField.Input
                  placeholder="Digite o nome do funcionário"
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nome do Paciente
                </Text>
                <TextField.Input
                  placeholder="Digite o nome do paciente"
                />
              </div>
            </AgroupInput>

            <DateContainer>
              <ContentInputDate>
                <Text as="div" size="2" mb="1" weight="bold">
                  Data de Início do Atendimento
                </Text>
                <input type="date" />
              </ContentInputDate>
              <ContentInputDate>
                <Text as="div" size="2" mb="1" weight="bold">
                  Data de Fim do Atendimento
                </Text>
                <input type="date" />
              </ContentInputDate>
            </DateContainer>

            <AgroupInput>
            <div>
                <Text as="div" size="2" mb="1" weight="bold">
                  Endereço
                </Text>
                <TextField.Input
                  placeholder="Digite o Endereço do paciente"
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1" weight="bold">
                  Estado do Atendimento
                </Text>
                <SelectContent>
                  <Select options={options} onChange={handleChange} />
                </SelectContent>
              </div>
              <div>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Valor do Atendimento
                  </Text>
                  <TextField.Input
                    placeholder="Digite o valor do atendimento"
                  />
                </label>
              </div>

            </AgroupInput>
            
            <Button style={{ width: "100%", marginTop: "20px" }}> Salvar</Button>


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
      </Container>
    </>
  );
}

export default ServicesProvided;