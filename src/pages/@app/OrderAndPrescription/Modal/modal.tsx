import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import {
  Button,
  ButtonPlus,
  ContentInputDate,
  DateContainer,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle, Fieldset,
  IconButton,
  Input,
  Label,
  ScrollArea,
  TextLabelStyle
} from "./styled-modal";
import { Plus } from "phosphor-react";


const Modal = () => (

  <Dialog.Root>
    <Dialog.Trigger asChild>
      <ButtonPlus>
        <span>Adicionar Prescrição</span>
        <Plus size={24} weight="bold" />
      </ButtonPlus>
    </Dialog.Trigger>

    <Dialog.Portal>
      <DialogOverlay />


      <DialogContent>
        <ScrollArea>
          <div className="scroll-content">
            <DialogTitle>Dados do paciente</DialogTitle>
            <DialogDescription>
              Abaixo preenchar os dados do paciente.
            </DialogDescription>
            <Fieldset>
              <Label htmlFor="nomePaciente">Nome</Label>
              <Input id="nomePaciente" placeholder="Nome completo do paciente" />
            </Fieldset>
            <div>
              <DateContainer>
                <ContentInputDate style={{ paddingRight: 30 }}>
                  <Fieldset>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="Ex. 0985431262" />
                  </Fieldset>
                </ContentInputDate>

                <ContentInputDate>
                  <TextLabelStyle>
                    Data de nascimento
                  </TextLabelStyle>
                  <input type="date" />
                </ContentInputDate>
              </DateContainer>
            </div>

            <Fieldset>
              <Label htmlFor="nomeResponsavel">Responsável</Label>
              <Input id="nomeResponsavel" placeholder="Nome do responsável (se aplicável)" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="telefonePaciente">Telefone</Label>
              <Input id="telefonePaciente" placeholder="+1234567890" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="ex. example@example.com(opcional)" />
            </Fieldset>

            <DialogTitle>Pedidos de Exames</DialogTitle>
            <DialogDescription>
              Informe abaixo dados do Exame.
            </DialogDescription>

            <div>
              <DateContainer>
                <ContentInputDate style={{ paddingRight: 30 }}>
                  <Fieldset>
                    <Label htmlFor="examePaciente">Tipo de exame</Label>
                    <Input id="examePaciente" placeholder="Exame" />
                  </Fieldset>
                </ContentInputDate>

                <ContentInputDate>
                  <TextLabelStyle>
                    Data de nascimento
                  </TextLabelStyle>
                  <input type="date" />
                </ContentInputDate>
              </DateContainer>
            </div>

            <Fieldset>
              <Label htmlFor="observacaoPaciente">Observações adicionais</Label>
              <Input id="observacaoPaciente" placeholder="Observações" />
            </Fieldset>

            <DialogTitle>Prescrição de Medicamentos</DialogTitle>
            <DialogDescription>
              Informe abaixo a prescrição do medicamento.
            </DialogDescription>
            <Fieldset>
              <Label htmlFor="nomeMedicacao">Nome do medicamento</Label>
              <Input id="nomeMedicamento" placeholder="Medicamento" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="dosagem">Dosagem</Label>
              <Input id="dosagem" placeholder="Ex. 5" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="usoMedicacao">Frequência de uso</Label>
              <Input id="usoFrequencia" placeholder="Ex. 2 vezes ao dia" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="duracaoMedicacao">Duração do tratamento</Label>
              <Input id="durancaoMedica" placeholder="Ex.  7 Dias" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="observacaoMedicacao">Observações adicionais</Label>
              <Input id="observacaoMedicacao" placeholder="Observações" />
            </Fieldset>

            <DialogTitle>Assinatura e Identificação do Médico</DialogTitle>
            <DialogDescription>
              Dados do Médico.
            </DialogDescription>

            <Fieldset>
              <Label htmlFor="nomeMedico">Nome</Label>
              <Input id="nomeMedico" placeholder="Nome completo do médico" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="crmMedico">CRM do médico</Label>
              <Input id="crmMedico" placeholder="CRM" />
            </Fieldset>

            <Fieldset>
              <Label htmlFor="assinaturaMedico">Assinatura digital</Label>
              <Input id="assinaturaMedico" placeholder="Assinatura digital do médico (opcional)" />
            </Fieldset>


            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button className="green">Adicionar exames</Button>
            </div>

            <Dialog.Close asChild>
              <IconButton aria-label="Close">
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </div>
        </ScrollArea>

      </DialogContent>

    </Dialog.Portal>


  </Dialog.Root>
);

export default Modal;
