import { Avatar, Box, Button, Dialog, Tabs } from "@radix-ui/themes";
import { Container, ContainerLegal, Content, DivManeira, DivManeira2, DivManeira3, InfoInteressante } from "./styled";
import MedicalInformation from "../MedicalInformation";
import SchedulesAndConsultations from "../SchedulesAndConsultations";
import HealthInsurance from "../HealthInsurance";
import AdditionalNotes from "../AdditionalNotes";
import PatientData from "../PatientData";

function Resume() {
    return (
        <>
            <Container>
                <Content >
                    <Avatar
                        size="9"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                        radius="full"
                    />
                    <DivManeira2>
                        <h1>Carlos</h1>
                        <DivManeira>
                            <div>
                                <p>Idade: <b>23 anos</b></p>
                                <p>Faltas: <b>0</b></p>
                            </div>
                            <div>
                                <p>Atendimento: <b>23 anos</b></p>
                                <p>Convênio: <b>UNIMED</b></p>
                            </div>
                        </DivManeira>
                    </DivManeira2>
                    <DivManeira3>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button size={"4"}>VISUALIZAR CADASTRO</Button>
                        </Dialog.Trigger>

                        <Dialog.Content style={{ maxWidth: 1200 }}>
                            <Dialog.Title>Dados do Cadastro</Dialog.Title>

                            <Tabs.Root defaultValue="patientData" style={{ width: '100%' }}>
                                <Tabs.List size="1">
                                    <Tabs.Trigger value="patientData" style={{ fontSize: '1.1rem' }}>Dados do Paciente</Tabs.Trigger>
                                    <Tabs.Trigger value="medicalInformation" style={{ fontSize: '1.1rem' }}>Informações Médicas</Tabs.Trigger>
                                    <Tabs.Trigger value="schedulesAndConsultations" style={{ fontSize: '1.1rem' }}>Agendamentos e Consultas</Tabs.Trigger>
                                    <Tabs.Trigger value="healthInsurance" style={{ fontSize: '1.1rem' }}>Convênio</Tabs.Trigger>
                                    <Tabs.Trigger value="additionalNotes" style={{ fontSize: '1.1rem' }}>Anotações Adicionais</Tabs.Trigger>
                                </Tabs.List>

                                <Box px="2" pt="2" pb="2">
                                    <Tabs.Content value="patientData">
                                        <PatientData />
                                    </Tabs.Content>

                                    <Tabs.Content value="medicalInformation">
                                        <MedicalInformation />
                                    </Tabs.Content>

                                    <Tabs.Content value="schedulesAndConsultations">
                                        <SchedulesAndConsultations />
                                    </Tabs.Content>

                                    <Tabs.Content value="healthInsurance">
                                        <HealthInsurance />
                                    </Tabs.Content>

                                    <Tabs.Content value="additionalNotes">
                                        <AdditionalNotes />
                                    </Tabs.Content>
                                </Box>
                            </Tabs.Root>

                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button>Save</Button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Root>
                    </DivManeira3>
                </Content>
                <ContainerLegal>
                    <InfoInteressante>
                        <p>Este paciente não possui nenhum registro anterior.</p>
                        <p>Para iniciar um atendimento, clique no botão <b>Iniciar Atendimento</b> no menu esquerdo.</p>
                    </InfoInteressante>
                </ContainerLegal>
            </Container>
        </>
    );
}

export default Resume;