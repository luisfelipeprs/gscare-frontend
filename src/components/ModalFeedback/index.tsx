import { Button, Dialog, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import { ChatText } from 'phosphor-react';
import React from 'react';
import FeedbackViewModal from '../FeedbackViewModal';

function ModalFeedback(){
  return (
    <>
    <Dialog.Root>
  <Dialog.Trigger>
  <ChatText size={32} color="#d60000" weight="light" />
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Responder Mensagem</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      <FeedbackViewModal/>
    </Dialog.Description>

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

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancelar
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Enviar</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
    
    </>
  );
};

export default ModalFeedback;