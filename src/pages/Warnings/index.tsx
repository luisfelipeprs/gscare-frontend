import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { AgroupInput, Container, Content, DateContainer, InputContent, ContentInputDate, SelectContainer, SelectContent, StyledSelect } from "./styled";
import { useState } from "react";

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

function Warnings(){
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
      <Content>
      <AgroupInput>
         <label>
           <Text as="div" size="2" mb="1" weight="bold">
             Título
           </Text>
          <TextField.Input
            style={
              {
                width:"500px"
              }
            }
            placeholder="Digite o título do aviso."
            />
         </label>

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




       <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Mensagem
        </Text>
        <TextArea
          style={
            {
              height:"140px"
            }
          }
        // defaultValue="Fernando Franco"
          placeholder="Digite sua mensagem aqui."
        />
      </label>
    </Flex>
    <Button style={{width:"100%", marginTop:"20px"}}> Salvar</Button>
            </Content>
          </Container>

  );
}

export default Warnings;