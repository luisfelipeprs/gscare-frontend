import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { Button, DialogContent, DialogOverlay, DialogTitle, EditModal, Fieldset, IconButton, Input, Label } from './styledcss';

interface StepProps {
  // number: number;
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
    {/* Conteúdo do primeiro passo */}
    <Fieldset>
      <Label htmlFor="name">Nome</Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </Fieldset>

    <Fieldset>
      <Label htmlFor="email">Email</Label>
      <Input id="email" defaultValue="example@example.com" readOnly />
    </Fieldset>

    {/* Adicione outros campos do primeiro passo aqui */}
    
    {/* Botão para avançar para o próximo passo */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button className="green" onClick={onNext}>Próximo</Button>
    </div>
  </>
);

interface StepTwoProps {
  onPrev: () => void;
  onNext: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onPrev, onNext }) => (
  <>
    {/* Conteúdo do segundo passo */}
    <Fieldset>
      {/* Adicione campos do segundo passo aqui */}
    </Fieldset>

    {/* Botões para navegar entre os passos */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <Button onClick={onPrev}>Anterior</Button>
      <Button className="green" onClick={onNext}>Próximo</Button>
    </div>
  </>
);

interface StepThreeProps {
  onPrev: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onPrev }) => (
  <>
    {/* Conteúdo do terceiro passo */}
    <Fieldset>
      {/* Adicione campos do terceiro passo aqui */}
    </Fieldset>

    {/* Botões para navegar entre os passos */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <Button onClick={onPrev}>Anterior</Button>
      <Button className="green">Salvar mudanças</Button>
    </div>
  </>
);

const ModalStep: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <EditModal>
          <Pencil1Icon />
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
                // number={step}
                active={step <= currentStep}
                onClick={() => setCurrentStep(step)}
              />
            ))}
          </div>

          {/* Renderiza o conteúdo com base no passo atual */}
          {currentStep === 1 && <StepOne onNext={handleNextStep} />}
          {currentStep === 2 && <StepTwo onPrev={handlePrevStep} onNext={handleNextStep} />}
          {currentStep === 3 && <StepThree onPrev={handlePrevStep} />}

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