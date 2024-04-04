import { TextField } from "@radix-ui/themes";
import { Date, InputField, InputLabel, Container, Profissional } from "./styled";

function SchedulesAndConsultations() {
    return (
        <>
            <Container>
                <Date>
                    <h3>Horário</h3>
                    <InputField>
                        <InputLabel>
                            <b>Data da consulta:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>
                    <InputField>
                        <InputLabel>
                            <b>Horário da consulta:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>
                </Date>
                <Profissional>
                    <h3>Profissional Responsável</h3>
                    <InputField>
                        <InputLabel>
                            <b>Médico responsável:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>

                    <InputField>
                        <InputLabel>
                            <b>Especialidade médica:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>

                    <InputField>
                        <InputLabel>
                            <b>Observações sobre a consulta:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>
                </Profissional>
            </Container>
        </>
    );
}

export default SchedulesAndConsultations;