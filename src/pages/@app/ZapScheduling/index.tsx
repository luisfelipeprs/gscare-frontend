import { TextField, Text, Flex, Separator, Button, TextArea } from "@radix-ui/themes";
import {
  AvatarContainer, Container, InfoName, LeftContainer, MidContainer, ProfileInfoContainer, Support,
  Table,
  // TabsInfo,
  Content,
  TableContainer
} from "./styled";



function ZapScheduling(){
  return (
    <Container>
      <Content>
        <ProfileInfoContainer>
          <div style={{width:"50%", display:"flex",flexDirection:"column"}}>
            <Text
              as="div"
              size="3"
              mb="1"
              weight="bold"
              style={{ marginTop: "20px" }}
            >
              Texto de apresentação
            </Text>
            <LeftContainer>
              <InfoName>
                <Text as="div" size="4" mb="1" weight="bold">
                  Título do texto inicial
                </Text>
                <TextField.Input
                  size={"3"}
                  placeholder="Digite o título do texto inicial."
                />
              </InfoName>
              <InfoName>
                <Text as="div" size="4" mb="1" weight="bold">
                  Texto descritivo inicial
                </Text>
                <TextArea
                  size={"3"}
                  placeholder="Digite o texto descritivo inicial."
                />
              </InfoName>
              <input type="checkbox" />
              Ter opções de falar com atendente?
            </LeftContainer>
          </div>

          <MidContainer>
            <Text
              as="div"
              size="3"
              mb="1"
              weight="bold"
              style={{ marginTop: "20px" }}
            >
              Definir opções e ações
            </Text>
            <Support>
              <Flex
                gap="3"
                align="center"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Text as="div" size="4" color="gray">
                  Opções e Respostas
                </Text>
                <Button>Criar</Button>
              </Flex>
              <Separator my="3" size="4" />

              <AvatarContainer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <Text as="div" size="4" weight="medium">
                    1 - Nome da solução escolhida opções da solução: 1 lorem ; 2
                    lorem; 3 lorem ; 4 lorem
                  </Text>

                  <Text as="div" size="4" weight="medium">
                    Texto de finalização
                  </Text>
                </div>
              </AvatarContainer>
              <AvatarContainer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <Text as="div" size="4" weight="medium">
                    1 - Nome da solução escolhida opções da solução: 1 lorem ; 2
                    lorem; 3 lorem ; 4 lorem
                  </Text>

                  <Text as="div" size="4" weight="medium">
                    Texto de finalização
                  </Text>
                </div>
              </AvatarContainer>
              <AvatarContainer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <Text as="div" size="4" weight="medium">
                    1 - Nome da solução escolhida opções da solução: 1 lorem ; 2
                    lorem; 3 lorem ; 4 lorem
                  </Text>

                  <Text as="div" size="4" weight="medium">
                    Texto de finalização
                  </Text>
                </div>
              </AvatarContainer>
            </Support>
          </MidContainer>
        </ProfileInfoContainer>
        <Button style={{ marginTop: "20px", width: "100%", padding: "20px" }}>
          Iniciar Campanha
        </Button>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Data Início</th>
                <th>Data Fim</th>
                <th>Valor</th>
                <th>Serviço custado</th>
                <th>Hora Início</th>
                <th>Hora Fim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Content>
    </Container>
  );
}

export default ZapScheduling;