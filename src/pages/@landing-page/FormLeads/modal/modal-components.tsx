import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import {
  Button,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  EditModal,
  Fieldset,
  IconButton,
  Input,
  Label,
  LabelThree,
  SideBySide,
  StepThreeContainer,
  StepTwoCategoryItem,
  StepTwoCategoryList,
  StepTwoFieldset,
  StepTwoLabel,
  SwitchRoot,
  SwitchThumb,
  UserItem,
  UserList
} from './styledcss';

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

    <Fieldset>
      <Label htmlFor="name">
        Nome
      </Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </Fieldset>

    <Fieldset>
      <Label htmlFor="email">
        Email
      </Label>
      <Input id="email" defaultValue="example@example.com" readOnly />
    </Fieldset>

    <Fieldset>
      <Label htmlFor="contactNumber">
        Númmero de contato
      </Label>
      <Input id="contactNumber" defaultValue="+1234567890" />
    </Fieldset>

    <SideBySide>
      <Fieldset>
        <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          Bloqueio/ Desbloqueio
        </Label>
        <SwitchRoot id="airplane-mode" checked={false} onCheckedChange={() => console.log('switch click')}>
          <SwitchThumb />
        </SwitchRoot>
      </Fieldset>

      <Fieldset>
        <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          olisa
        </Label>
        <SwitchRoot id="airplane-mode" checked={true} onCheckedChange={() => console.log('switch click')}>
          <SwitchThumb />
        </SwitchRoot>
      </Fieldset>
    </SideBySide>


    <SideBySide>
      <Fieldset>
        <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          chat interno
        </Label>
        <SwitchRoot id="airplane-mode" checked={true} onCheckedChange={() => console.log('switch click')}>
          <SwitchThumb />
        </SwitchRoot>
      </Fieldset>

      <Fieldset>
        <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          categorias
        </Label>
        <SwitchRoot id="airplane-mode" checked={true} onCheckedChange={() => console.log('switch click')}>
          <SwitchThumb />
        </SwitchRoot>
      </Fieldset>
    </SideBySide>

    <SideBySide>
      <Fieldset>
        <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          bot
        </Label>
        <SwitchRoot id="airplane-mode" checked={true} onCheckedChange={() => console.log('switch click')}>
          <SwitchThumb />
        </SwitchRoot>
      </Fieldset>
      <Fieldset>
      </Fieldset>
    </SideBySide>

    <Fieldset>
      <Label htmlFor="conversationLimit">
        limite de conversas
      </Label>
      <Input id="conversationLimit" type="number" defaultValue="10" />
    </Fieldset>

    <Fieldset>
      <Label htmlFor="userLimit">
        limite de usuarios
      </Label>
      <Input id="userLimit" type="number" defaultValue="100" />
    </Fieldset>

    {/* Botão para avançar para o próximo passo */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button className="green" onClick={onNext}>Próximo</Button>
    </div>
  </>
);

interface StepTwoProps {
  onPrev: () => void;
  onNext: () => void;
  categories: Array<{ _id: string; name: string; color: string }>;
}

const StepTwo: React.FC<StepTwoProps> = ({ onPrev, onNext, categories }) => {
  return (
    <>
      {/* Conteúdo do segundo passo */}
      <StepTwoFieldset>
        <StepTwoLabel htmlFor="list">Listagem de Categorias:</StepTwoLabel>
        <StepTwoCategoryList>
          {categories.map((category) => (
            <StepTwoCategoryItem key={category._id}>
              <span style={{ color: category.color }}>{category.name}</span>
            </StepTwoCategoryItem>
          ))}
        </StepTwoCategoryList>
      </StepTwoFieldset>

      {/* Botões para navegar entre os passos */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={onPrev}>Anterior</button>
        <Button className="green" onClick={onNext}>
          Próximo
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
  users: User[]; // Corrija a tipagem para usar a interface User
}

// ...

const StepThree: React.FC<StepThreeProps> = ({ onPrev, users }) => (
  <>
    {/* Conteúdo do terceiro passo */}
    <StepThreeContainer>
      <LabelThree htmlFor="list">Listagem de Usuários:</LabelThree>
      <UserList>
        {users.map((user) => (
          <UserItem key={user._id}>
            <div>
              <strong>{user.name}</strong>
              <p>Email: {user.email}</p>
              <p>Admin: {user.isAdmin ? 'Sim' : 'Não'}</p>
              <p>Modo Escuro Ativo: {user.DarkModeThemeIsActive ? 'Sim' : 'Não'}</p>
              <p>Categoria Favorita: {user.categoryFavoriteMessages ? user.categoryFavoriteMessages[0]?.name : 'Nenhuma'}</p>
            </div>
          </UserItem>
        ))}
      </UserList>
    </StepThreeContainer>

    {/* Botão para navegar de volta */}
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', alignItems: 'flex-end' }}>
      <button onClick={onPrev} style={{ marginBottom: '10px' }}>Anterior</button>
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
        <EditModal>
          <EyeOpenIcon />
        </EditModal>
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
          {currentStep === 3 && <StepThree onPrev={handlePrevStep} users={users} />}

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
