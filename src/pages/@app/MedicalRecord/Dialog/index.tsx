import { Box, Button, Dialog, Tabs } from "@radix-ui/themes";
import MedicalInformation from "./tabs/MedicalInformation";
import SchedulesAndConsultations from "./tabs/SchedulesAndConsultations";
import HealthInsurance from "./tabs/HealthInsurance";
import AdditionalNotes from "./tabs/AdditionalNotes";
import PatientData from "./tabs/PatientData";
import { ButtonSubmitContainer } from "./tabs/PatientData/styled";

export default function UserDialog() {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button size={"4"}>VISUALIZAR CADASTRO</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 1200, minHeight: 1085 }}>
                    <Dialog.Title>Dados do Cadastro</Dialog.Title>

                    <Tabs.Root defaultValue="patientData" style={{ width: '100%', height: '1000px' }}>
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
                    <ButtonSubmitContainer>
                        <Dialog.Close>
                            <Button size={'3'} variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button size={'3'} >Save</Button>
                        </Dialog.Close>
                    </ButtonSubmitContainer>
                </Dialog.Content>
            </Dialog.Root>

        </>
    );
}

