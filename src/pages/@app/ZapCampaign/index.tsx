import {
  Avatar,
  Box,
  Button,
  Flex,
  Separator,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import {
  AvatarContainer,
  Container,
  Content,
  InfoContainer,
  InfoName,
  LeftContainer,
  LeftContent,
  MidContainer,
  ProfileInfoContainer,
  Received,
  Support,
} from "./styled";
import Modal from "./Modal/modal.tsx";

function ZapCampaign() {
  return (
    <Container>
      <Content>
        <ProfileInfoContainer>
          <LeftContainer>
            <Text as="div" size="3" mb="1" weight="bold">
              Formulário de cadastro de campanha
            </Text>
            <LeftContent>
              <InfoName>
                <Text as="div" size="4" mb="1" weight="bold">
                  Título
                </Text>
                <TextField.Input
                  size={"3"}
                  placeholder="Digite o título do aviso."
                />
              </InfoName>
              <InfoName>
                <Text as="div" size="4" mb="1" weight="bold">
                  SubTítulo
                </Text>
                <TextField.Input
                  size={"3"}
                  placeholder="Digite o título do aviso."
                />
              </InfoName>
              <InfoName>
                <Text as="div" size="4" mb="1" weight="bold">
                  Texto da Campanha
                </Text>
                <TextArea size={"3"} placeholder="Digite o texto da campanha." />
              </InfoName>
            </LeftContent>
          </LeftContainer>
          <MidContainer>
            <Text as="div" size="3" mb="1" weight="bold">
              Contatos que receberam a Campanha
            </Text>
            <AvatarContainer>
              <Avatar
                size="4"
                radius="full"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                fallback="B"
              />
              <Avatar
                size="4"
                radius="full"
                fallback="C"
              />
              <Avatar
                size="4"
                radius="full"
                fallback="D"
              />
              <Avatar
                size="4"
                radius="full"
                fallback="E"
              />
              <Avatar
                size="4"
                radius="full"
                fallback="F"
              />
              <Avatar
                size="4"
                radius="full"
                fallback="G"
              />

              <Modal />
            </AvatarContainer>
            <Text
              as="div"
              size="3"
              mb="1"
              weight="bold"
              style={{ marginTop: "20px" }}
            >
              Acompanhar Campanha
            </Text>
            <Support>
              <Flex gap="3" align="center">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="10"
                  height="10"
                  viewBox="0 0 122.88 122.88"
                >
                  <g fill="#000000">
                    <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                  </g>
                </svg>
                <Text size={"4"}>Não recebido</Text>
                <Separator orientation="vertical" />
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="10"
                  height="10"
                  viewBox="0 0 122.88 122.88"
                >
                  <g fill="#36ff04">
                    <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                  </g>
                </svg>
                <Text size={"4"} color="green">
                  Recebido
                </Text>
                <Separator orientation="vertical" />
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="10"
                  height="10"
                  viewBox="0 0 122.88 122.88"
                >
                  <g fill="blue">
                    <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                  </g>
                </svg>{" "}
                <Text size={"4"} color="blue">
                  Respondidos
                </Text>
                <Separator orientation="vertical" />
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="10"
                  height="10"
                  viewBox="0 0 122.88 122.88"
                >
                  <g fill="red">
                    <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                  </g>
                </svg>{" "}
                <Text size={"4"} color="red">
                  {" "}
                  Não Enviado
                </Text>
              </Flex>
              <Separator my="3" size="4" />

              <InfoContainer>
                <Avatar
                  size="3"
                  radius="full"
                  fallback="A"
                />

                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
                <Received>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="10"
                    height="10"
                    viewBox="0 0 122.88 122.88"
                  >
                    <g fill="#36ff04">
                      <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                    </g>
                  </svg>

                  <Text size={"4"} color="green">
                    Recebido
                  </Text>
                </Received>
              </InfoContainer>
              <InfoContainer>
                <Avatar
                  size="3"
                  radius="full"
                  fallback="B"
                />

                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
                <Received>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="10"
                    height="10"
                    viewBox="0 0 122.88 122.88"
                  >
                    <g fill="#000000">
                      <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                    </g>
                  </svg>
                  <Text size={"4"}>Não Recebido</Text>
                </Received>
              </InfoContainer>
              <InfoContainer>
                <Avatar
                  size="3"
                  radius="full"
                  fallback="C"
                />

                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
                <Received>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="10"
                    height="10"
                    viewBox="0 0 122.88 122.88"
                  >
                    <g fill="#36ff04">
                      <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                    </g>
                  </svg>

                  <Text size={"4"} color="green">
                    Recebido
                  </Text>
                </Received>
              </InfoContainer>
              <InfoContainer>
                <Avatar
                  size="3"
                  radius="full"
                  fallback="D"
                />

                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
                <Received>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="10"
                    height="10"
                    viewBox="0 0 122.88 122.88"
                  >
                    <g fill="#36ff04">
                      <path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z" />
                    </g>
                  </svg>

                  <Text size={"4"} color="green">
                    Recebido
                  </Text>
                </Received>
              </InfoContainer>
            </Support>
          </MidContainer>
        </ProfileInfoContainer>
        <Button style={{ marginTop: "20px", width: "100%", padding: "20px" }}>
          Iniciar Campanha
        </Button>
      </Content>
    </Container>
  );
}

export default ZapCampaign;