import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  AgroupInput,
  ButtonPlus,
  ButtonStyled,
  Content,
  ContentInputDate,
  DateContainer,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  IconButton,
  InputContent,
  SelectContainer,
  SelectContent,
  StyledSelect,
} from './styled';
import { DotsThreeVertical, Plus } from 'phosphor-react';
import { Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { ButtonViewTd } from '../../../../components/TableUI/EmployeeTable';

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
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

interface IWarning {
  id: number;
  titulo: string,
  tipo: string,
  inicio: string,
  fim: string,
  mensagem: string,
}

interface ModalWarningsTableProps {
  warning: IWarning[];
}
const ModalWarningsTable: React.FC<ModalWarningsTableProps> = ({ warning }) => {
  const options: Option[] = [
    { value: 'option1', label: 'Urgente' },
    { value: 'option2', label: 'Importante' },
    { value: 'option3', label: 'Lembrete' },
  ];

  const handleChange = (value: string) => {
    console.log('Opção selecionada:', value);
  };

  const warningData = warning[0];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonViewTd>
          <DotsThreeVertical size={20} color="#272727" weight="bold" />
        </ButtonViewTd>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Veja seu atendimento:</DialogTitle>
          <Content>
            <AgroupInput>
              <InputContent>
                <Text as="div" size="2" mb="1" weight="bold">
                  Título
                </Text>
                <TextField.Input
                  placeholder="Digite o título do aviso."
                  value={warningData.titulo}
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
                <input type="date" value={warningData.inicio} />
              </ContentInputDate>
              <ContentInputDate>
                <Text as="div" size="2" mb="1" weight="bold">
                  Data de Fim do Aviso
                </Text>
                <input type="date" value={warningData.fim} />
              </ContentInputDate>
            </DateContainer>
            <div>
              <Flex direction="column" gap="3">
                <InputContent>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Mensagem
                  </Text>
                  <TextArea
                    style={{ height: "140px" }}
                    placeholder="Digite sua mensagem aqui."
                    value={warningData.mensagem}
                  />
                </InputContent>
              </Flex>
            </div>
          </Content>
          <ButtonStyled style={{ width: "100%", marginTop: "20px" }}> Salvar</ButtonStyled>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalWarningsTable;
