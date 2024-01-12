import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import {
  Button,
  ButtonPlus,
  DialogContent,
  // DialogDescription,
  DialogOverlay,
  DialogTitle, Fieldset,
  IconButton,
  Input,
  Label,
  SideBySide,
  SwitchRoot,
  SwitchThumb
} from "./styled-modal";
import { Plus } from "phosphor-react";

const Modal = () => {
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
          <DialogTitle>Avatar Modal</DialogTitle>
          {/* <DialogDescription>
              Edit customer details.
            </DialogDescription> */}

          <Fieldset>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </Fieldset>

          <Fieldset>
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="example@example.com" readOnly />
          </Fieldset>

          <Fieldset>
            <Label htmlFor="contactNumber">Número de contato</Label>
            <Input id="contactNumber" defaultValue="+1234567890" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="email">Endereço</Label>
            <Input id="location" defaultValue="Rua dos Bobos nº0" />
          </Fieldset>

          <SideBySide>
            <Fieldset>
              <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                Bloqueio/ Desbloqueio
              </Label>
              <SwitchRoot id="airplane-mode">
                <SwitchThumb />
              </SwitchRoot>
            </Fieldset>

            <Fieldset>
              <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                olisa
              </Label>
              <SwitchRoot id="airplane-mode">
                <SwitchThumb />
              </SwitchRoot>
            </Fieldset>
          </SideBySide>

          <SideBySide>
            <Fieldset>
              <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                chat interno
              </Label>
              <SwitchRoot id="airplane-mode">
                <SwitchThumb />
              </SwitchRoot>
            </Fieldset>

            <Fieldset>
              <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                categorias
              </Label>
              <SwitchRoot id="airplane-mode">
                <SwitchThumb />
              </SwitchRoot>
            </Fieldset>
          </SideBySide>

          <SideBySide>
            <Fieldset>
              <Label htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                bot
              </Label>
              <SwitchRoot id="airplane-mode">
                <SwitchThumb />
              </SwitchRoot>
            </Fieldset>
            <Fieldset></Fieldset>
          </SideBySide>

          <Fieldset>
            <Label htmlFor="conversationLimit">limite de conversas</Label>
            <Input id="conversationLimit" type="number" defaultValue="10" />
          </Fieldset>

          <Fieldset>
            <Label htmlFor="userLimit">limite de usuarios</Label>
            <Input id="userLimit" type="number" defaultValue="100" />
          </Fieldset>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button className="green">Save changes</Button>
          </div>
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

export default Modal;
