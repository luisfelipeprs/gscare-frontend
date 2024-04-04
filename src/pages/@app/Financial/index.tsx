import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import TableComponent from "./steps/Table";
import { Container, Content } from "./styled";
import { useState } from "react";

import { Financial } from "./steps/Table/domain/Financial";
import { mockFinancial } from "./steps/Table/mockData/MockFinancial";

function Financial() {
  const DEFAULT_USER_IMAGE = "https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg";
  
  const [financialData, setFinancialData] = useState<Financial[]>(mockFinancial);
  
  const [type, setTipo] = useState("");
  const [status, setStatus] = useState("");
  const [document, setDocumento] = useState("");
  const [emission, setEmissao] = useState("");
  const [deadline, setVencimento] = useState("");
  const [favoredPayerName, setFavoredPayerName] = useState("");
  const [favoredPayerImgProfile, setFavoredPayerImgProfile] = useState(DEFAULT_USER_IMAGE);
  const [charge, setCobranca] = useState("");
  const [value, setValor] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const novoFinancial: Financial = {
      type,
      status,
      document,
      emission,
      deadline,
      favoredPayer: {
        name: favoredPayerName,
        imgProfile: favoredPayerImgProfile
      },
      charge,
      value,
    };
    setFinancialData([...financialData, novoFinancial]);
    console.log("Dados adicionados com sucesso:", novoFinancial);
  };

  return (
    <Container>
      <Content>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button size={"4"}>Adicionar Registro</Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 1450 }}>
            <Dialog.Title>Adicionar Registro</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Preencha os dados do registro.
            </Dialog.Description>
            <form onSubmit={handleSubmit}>
              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Tipo
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setTipo(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Status
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setStatus(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Documento
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setDocumento(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Emissão
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setEmissao(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Vencimento
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setVencimento(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Pagador / Favorecido
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setFavoredPayerName(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Cobrança
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setCobranca(event.target.value)}/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Valor
                  </Text>
                  <TextField.Input defaultValue="" placeholder=" " onChange={(event) => setValor(event.target.value)}/>
                </label>
              </Flex>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button type="submit">Save</Button>
              </Dialog.Close>
            </Flex>            
            </form>
          </Dialog.Content>
        </Dialog.Root>
        <TableComponent financialData={financialData} />
      </Content>
    </Container>
  );
}

export default Financial;
