import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import {
  AgroupInput,
  ButtonPlus,
  ButtonStyled,
  ContainerForm,
  ContentInputDate,
  DateContainer,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  IconButton,
  InputStyle,
  TextLabelStyle,
} from './styled';
import { Plus } from 'phosphor-react';

const ModalCalendar: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonPlus>
          <span>criar</span>
          <Plus size={19} weight="bold" />
        </ButtonPlus>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Defina seu atendimento2:</DialogTitle>


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

export default ModalCalendar;
