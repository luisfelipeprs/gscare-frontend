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
  MidContainer,
  ProfileInfoContainer,
  Received,
  Support,
} from "./styled";

function ZapCampaign() {
  return (
    <Container>
      <Content>
        <ProfileInfoContainer>
          <LeftContainer>
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
          </LeftContainer>
          <MidContainer>
            <Text as="div" size="3" mb="1" weight="bold">
              Contatos que receberam a Campanha
            </Text>
            <AvatarContainer>
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Avatar
                size="4"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#007bff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path>
                  </g>
                </g>
              </svg>
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
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
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
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
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
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
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
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
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
