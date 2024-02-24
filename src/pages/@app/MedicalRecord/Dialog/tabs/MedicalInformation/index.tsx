import { TextArea } from "@radix-ui/themes";
import { InputField, InputLabel, Container } from "./styled";

function MedicalInformation() {
    return (
        <>
            <Container>
                <InputField>
                    <InputLabel>
                        <b>Histórico de doenças:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
                <InputField>
                    <InputLabel>
                        <b>Alergias:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
                <InputField>
                    <InputLabel>
                        <b>Histórico de doenças:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
                <InputField>
                    <InputLabel>
                        <b>Cirurgias prévias:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
                <InputField>
                    <InputLabel>
                        <b>Exames realizados:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
                <InputField>
                    <InputLabel>
                        <b>Diagnóstico atual:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
                <InputField>
                    <InputLabel>
                        <b>Prescrições médicas:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
            </Container>
        </>
    );
}

export default MedicalInformation;