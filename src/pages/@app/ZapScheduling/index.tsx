import { TextField, Text, Separator, Button, TextArea } from "@radix-ui/themes";
import {
    ConfigChatBotAnswerContainer, Container, InfoName, LeftContainer, RightDiv, ProfileInfoContainer, RightContainer,
    Table,
    // TabsInfo,
    Content,
    TableContainer,
    LeftDiv,
    TitleDivDescription,
    CheckboxCallAttendant,
    TextLabel,
    HeaderContainerRight,
    ScroolAnswerChatBot,
    DetailsConfigChatBotAnswer,
    ProfileContainerAndButtonSubmit,
    ButtonSubmitOptionBot,
    ContainerOptionsChatBot,
    TitleOptionsChatBot
} from "./styled";
import { RouterIndicator } from "../../../components/RouterIndicator";
import { DotsThreeVertical, Eye } from "phosphor-react";


export function ZapScheduling() {
    return (
        <Container>
            <RouterIndicator
                // buttonText="Criar"
                descText="listagem de atendimentos"
                routerText="Atendimentos"
            >
                <Content>
                    <ProfileContainerAndButtonSubmit>
                        <ProfileInfoContainer>
                            <LeftDiv>
                                <TitleDivDescription>
                                    Texto de apresentação
                                </TitleDivDescription>
                                <LeftContainer>
                                    <InfoName>
                                        <TextLabel>
                                            Título do texto inicial
                                        </TextLabel>
                                        <TextField.Input
                                            size={"3"}
                                            placeholder="Digite o título do texto inicial." />
                                    </InfoName>
                                    <InfoName>
                                        <TextLabel>
                                            Texto descritivo inicial
                                        </TextLabel>
                                        <TextArea
                                            size={"3"}
                                            placeholder="Digite o texto descritivo inicial." />
                                    </InfoName>
                                    <CheckboxCallAttendant>
                                        <input type="checkbox" />
                                        <span>
                                            Ter opções de falar com atendente?
                                        </span>
                                    </CheckboxCallAttendant>
                                </LeftContainer>
                            </LeftDiv>

                            <RightDiv>
                                <TitleDivDescription>
                                    Definir opções e ações
                                </TitleDivDescription>
                                <RightContainer>
                                    <HeaderContainerRight>
                                        <h3>
                                            Opções e Respostas
                                        </h3>
                                        <button>Criar</button>
                                    </HeaderContainerRight>

                                    <Separator my="3" size="4" />

                                    <ScroolAnswerChatBot>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                        <ConfigChatBotAnswerContainer>
                                            <DetailsConfigChatBotAnswer>
                                                <DotsThreeVertical size={32} color="#1146ff" weight="bold" />
                                            </DetailsConfigChatBotAnswer>
                                            <TitleOptionsChatBot>
                                                (Titulo nome da solução escolhida)
                                            </TitleOptionsChatBot>
                                            <ContainerOptionsChatBot>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                                <Text as="div" size="4" weight="medium">
                                                    1o opcao
                                                </Text>
                                            </ContainerOptionsChatBot>
                                        </ConfigChatBotAnswerContainer>
                                    </ScroolAnswerChatBot>
                                </RightContainer>
                            </RightDiv>
                        </ProfileInfoContainer>
                        <ButtonSubmitOptionBot>
                            Iniciar Campanha
                        </ButtonSubmitOptionBot>
                    </ProfileContainerAndButtonSubmit>

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
            </RouterIndicator>
        </Container>
    );
}
