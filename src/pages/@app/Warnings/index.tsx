import { Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { AgroupInput, Container, Content, DateContainer, InputContent, ContentInputDate, SelectContainer, SelectContent, StyledSelect, TableContainer, Table, TableRow, TableCell, ButtonStyled } from "./styled";
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

// Styled components


// Componente funcional Select
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
          Selecione o tipo de aviso
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

function Warnings () {
  const options: Option[] = [
    { value: 'option1', label: 'Urgente' },
    { value: 'option2', label: 'Importante' },
    { value: 'option3', label: 'Lembrete' },
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

          <AgroupInput>
            <InputContent>
              <Text as="div" size="2" mb="1" weight="bold">
                Título
              </Text>
              <TextField.Input
                placeholder="Digite o título do aviso."
              />
            </InputContent>

            <InputContent>
              <Text as="div" size="2" mb="1" weight="bold">
                Tipo de Aviso
              </Text>
              <SelectContent>
                <Select options={options} onChange={handleChange} />
              </SelectContent>
            </InputContent>
          </AgroupInput>
          <DateContainer>
            <ContentInputDate>
              <Text as="div" size="2" mb="1" weight="bold">
                Data de Início do Aviso
              </Text>
              <input type="date" />
            </ContentInputDate>
            <ContentInputDate>
              <Text as="div" size="2" mb="1" weight="bold">
                Data de Fim do Aviso
              </Text>
              <input type="date" />
            </ContentInputDate>

          </DateContainer>
          <div>
            <Flex direction="column" gap="3">
              <InputContent>
                <Text as="div" size="2" mb="1" weight="bold">
                  Mensagem
                </Text>
                <TextArea
                  style={
                    {
                      height: "140px"
                    }
                  }
                  // defaultValue="Fernando Franco"
                  placeholder="Digite sua mensagem aqui."
                />
              </InputContent>
            </Flex>
            <ButtonStyled style={{ width: "100%", marginTop: "20px" }}> Salvar</ButtonStyled>
          </div>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Tipo de Aviso</th>
                  <th>Mensagem</th>
                  <th>Data Início</th>
                  <th>Data Fim</th>
                </tr>
              </thead>
              <tbody>
                <TableRow key='id'>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow key='id'>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow key='id'>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow key='id'>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </RouterIndicator>
    </Container>

  );
}

export default Warnings;
