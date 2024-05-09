import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  ActionButtonsStepThree,
  ActionButtonsStepTwo,
  AddFormStepThree,
  AddFormStepTwo,
  BottonSave,
  Button,
  ButtonPlus,
  ContainerStepOne,
  ContainerStepThree,
  ContainerStepTwo,
  DialogContent,
  DialogOverlay,
  DialogTitle, IconButton, InputGroupStepOne,
  InputRowStepOne
} from './styledcss';
import { CaretLeft, CaretRight, Plus } from 'phosphor-react';

interface StepProps {
  number: number;
  active: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ active, onClick }) => (
  <div
    style={{
      flex: 1,
      height: '4px',
      backgroundColor: active ? '#4caf50' : '#ccc',
      cursor: 'pointer',
    }}
    onClick={onClick}
  />
);

interface StepOneProps {
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => (
  <>
    <ContainerStepOne>
      <h2>Formulário de Cadastro de Pacientes</h2>
      <form action="#" method="post">
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="nome">Nome Completo do Paciente:</label>
            <input type="text" id="nome" name="nome" required />
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="idade">Idade:</label>
            <input type="number" id="idade" name="idade" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="patologia">Patologia:</label>
            <input type="text" id="patologia" name="patologia" required />
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="endereco">Endereço de Atendimento com CEP:</label>
            <input type="text" id="endereco" name="endereco" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="responsavel">Responsavel financeiro:</label>
            <input type="text" id="responsavel" name="responsavel" required />
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="data">Data de Pagamento:</label>
            <input type="date" id="data" name="data" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="forma_pagamento">Forma de Pagamento:</label>
            <select id="forma_pagamento" name="forma_pagamento" required>
              <option value="">Selecione</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao">Cartão</option>
              <option value="cheque">Cheque</option>
            </select>
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="grau_parentesco">Grau de Parentesco:</label>
            <input type="text" id="grau_parentesco" name="grau_parentesco" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="identidade">Identidade:</label>
            <input type="text" id="identidade" name="identidade" required />
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="celular">Celular:</label>
            <input type="tel" id="celular" name="celular" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <h3>Informações da Profissional</h3>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="tipo_escala">Tipo de Escala:</label>
            <input type="text" id="tipo_escala" name="tipo_escala" required />
          </InputGroupStepOne>
          <InputGroupStepOne>
            <label htmlFor="valor_mensal">Valor Pago Mensal:</label>
            <input type="text" id="valor_mensal" name="valor_mensal" required />
          </InputGroupStepOne>
        </InputRowStepOne>
        <InputRowStepOne>
          <InputGroupStepOne>
            <label htmlFor="valor_plantao">Valor do Plantão da Profissional:</label>
            <input type="text" id="valor_plantao" name="valor_plantao" required />
          </InputGroupStepOne>
        </InputRowStepOne>
      </form>
    </ContainerStepOne>
    {/* Botões para navegar entre os passos */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <div></div>

      <Button typebutton="next" onClick={onNext}>
        Próximo
        <CaretRight size={22} />
      </Button>
    </div>
  </>
);

interface StepTwoProps {
  onPrev: () => void;
  onNext: () => void;
  categories: Array<{ _id: string; name: string; color: string }>;
}

const StepTwo: React.FC<StepTwoProps> = ({ onPrev, onNext, categories }) => {

  console.log(categories)

  return (
    <>
      {/* Conteúdo do segundo passo */}

      <ContainerStepTwo>
        <h1>Medicamentos Alérgicos Registrados</h1>
        <AddFormStepTwo>
          <input type="text" id="medication-name" placeholder="Nome do Medicamento" />
          <select name="tipo_alergia" id="tipo_alergia">
            <option value="alimentar">Alimentar</option>
            <option value="medicamento">Medicamento</option>
            <option value="ambiental">Ambiental</option>
            <option value="picadas">Picadas de Insetos</option>
          </select>
          <button id="add-medication">Adicionar</button>
        </AddFormStepTwo>
        <table>
          <thead>
            <tr>
              <th>Nome do Medicamento</th>
              <th>Data de Início da Alergia</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aspirina</td>
              <td>2023-01-15</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Penicilina</td>
              <td>2022-05-10</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Dipirona</td>
              <td>2023-07-22</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Ibuprofeno</td>
              <td>2023-09-05</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Paracetamol</td>
              <td>2023-11-18</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Amoxicilina</td>
              <td>2023-04-30</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Ranitidina</td>
              <td>2022-08-12</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Diclofenaco</td>
              <td>2022-06-25</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Omeprazol</td>
              <td>2023-03-08</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
            <tr>
              <td>Cetirizina</td>
              <td>2023-12-20</td>
              <ActionButtonsStepTwo>
                <button>Editar</button>
                <button>Excluir</button>
              </ActionButtonsStepTwo>
            </tr>
          </tbody>
        </table>
      </ContainerStepTwo>

      {/* Botões para navegar entre os passos */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button typebutton='goback' onClick={onPrev}>
          <CaretLeft size={22} />
          Anterior
        </Button>
        <Button typebutton="next" onClick={onNext}>
          Próximo
          <CaretRight size={22} />
        </Button>
      </div>
    </>
  );
};

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  DarkModeThemeIsActive: boolean;
  categoryFavoriteMessages?: { name: string }[]; // Tornar opcional
}

// ...

interface StepThreeProps {
  onPrev: () => void;
  onSave: () => void;
  users: User[]; // Corrija a tipagem para usar a interface User
}

// ...

const StepThree: React.FC<StepThreeProps> = ({ onPrev, onSave, users }) => (
  <>
    {users}
    {/* Conteúdo do terceiro passo */}
    <ContainerStepThree>
      <h1>Medicamentos Registrados</h1>
      <AddFormStepThree>
        <input type="text" id="medication-name" placeholder="Nome do Medicamento" />
        <input type="number" id="medication-dose" placeholder="Dose" />
        <select id="dose-type">
          <option value="ml">ml</option>
          <option value="gota">Gota</option>
        </select>
        <input type="time" id="medication-time" />
        <button id="AddMedicationStepThree">Adicionar</button>
      </AddFormStepThree>
      <table>
        <thead>
          <tr>
            <th>Nome do Medicamento</th>
            <th>Hora do Medicamento</th>
            <th>Dose</th>
            <th>Tipo de Dose</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paracetamol</td>
            <td>08:00</td>
            <td>500</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Ibuprofeno</td>
            <td>12:00</td>
            <td>200</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Dipirona</td>
            <td>16:00</td>
            <td>1000</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Aspirina</td>
            <td>20:00</td>
            <td>300</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Ranitidina</td>
            <td>10:00</td>
            <td>150</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Amoxicilina</td>
            <td>14:00</td>
            <td>250</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Paracetamol</td>
            <td>08:00</td>
            <td>500</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Ibuprofeno</td>
            <td>12:00</td>
            <td>200</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Dipirona</td>
            <td>16:00</td>
            <td>1000</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
          <tr>
            <td>Aspirina</td>
            <td>20:00</td>
            <td>300</td>
            <td>ml</td>
            <ActionButtonsStepThree>
              <button>Editar</button>
              <button>Excluir</button>
            </ActionButtonsStepThree>
          </tr>
        </tbody>
      </table>
    </ContainerStepThree>

    {/* Botão para navegar de volta */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <Button typebutton='goback' onClick={onPrev}>
        <CaretLeft size={22} />
        Anterior
      </Button>
      <BottonSave onClick={onSave}>
        Próximo
        <CaretRight size={22} />
      </BottonSave>
    </div>

  </>
);

// ...



const ModalStep: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };


  const handleSave = () => {
    console.log('salvar dados')
  };

  const suaListaDeCategorias = [
    {
      _id: "64bfed1ee252092818948504",
      name: "bot",
      color: "#000000",
      catDisabled: false,
      order: "0",
      permDeletar: false,
    },
    {
      _id: "64bfed1ee252092818948505",
      name: "Todas",
      color: "#000000",
      catDisabled: false,
      order: "0",
      permDeletar: false,
    },
    {
      _id: "64e4d97eaa859e25982b10ca",
      name: "teste 1",
      color: "",
      catDisabled: false,
      order: "1",
    },
    {
      _id: "64e4d985aa859e25982b10d0",
      name: "teste 2",
      color: "",
      catDisabled: false,
      order: "2",
    },
    {
      _id: "64e4d991aa859e25982b10d6",
      name: "teste 3",
      color: "",
      catDisabled: false,
      order: "3",
    },
    {
      _id: "64e4d9faaa859e25982b10dc",
      name: "teste 4",
      color: "",
      catDisabled: false,
      order: "4",
    },
    {
      _id: "64e4da02aa859e25982b10e2",
      name: "teste 5",
      color: "",
      catDisabled: false,
      order: "5",
    },
    {
      _id: "658ed9d8e4c94828d026028b",
      name: "cat 33",
      color: "",
      catDisabled: false,
      order: "11",
    },
  ];

  const [users,] = useState<User[]>([
    { name: 'Usuário 1', email: 'usuario1@email.com', isAdmin: true, DarkModeThemeIsActive: false, _id: '1' },
    { name: 'Usuário 2', email: 'usuario2@email.com', isAdmin: false, DarkModeThemeIsActive: true, _id: '2' },
    { name: 'Usuário 2', email: 'usuario2@email.com', isAdmin: false, DarkModeThemeIsActive: true, _id: '3' },
    { name: 'Usuário 2', email: 'usuario2@email.com', isAdmin: false, DarkModeThemeIsActive: true, _id: '4' },
    { name: 'Usuário 2', email: 'usuario2@email.com', isAdmin: false, DarkModeThemeIsActive: true, _id: '5' },
    { name: 'Usuário 2', email: 'usuario2@email.com', isAdmin: false, DarkModeThemeIsActive: true, _id: '6' },
    { name: 'Usuário 2', email: 'usuario2@email.com', isAdmin: false, DarkModeThemeIsActive: true, _id: '7' },
  ]);


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
          <DialogTitle>Editar dados do Cliente - Passo {currentStep}</DialogTitle>

          {/* Renderiza a barra de progresso */}
          <div style={{ display: 'flex', height: '4px', marginBottom: '20px' }}>
            {[1, 2, 3].map((step) => (
              <Step
                key={step}
                number={step}
                active={step <= currentStep}
                onClick={() => setCurrentStep(step)}
              />
            ))}
          </div>

          {/* Renderiza o conteúdo com base no passo atual */}
          {currentStep === 1 && <StepOne onNext={handleNextStep} />}
          {currentStep === 2 && <StepTwo onPrev={handlePrevStep} onNext={handleNextStep} categories={suaListaDeCategorias} />}
          {currentStep === 3 && <StepThree onPrev={handlePrevStep} onSave={handleSave} users={users} />}

          {/* Botão para fechar o modal */}
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

export default ModalStep;
