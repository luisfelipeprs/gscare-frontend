import { TextArea } from "@radix-ui/themes";
import { InputField, InputLabel, Container } from "./styled";

function AdditionalNotes() {
    return (
        <>
            <Container>
                <InputField>
                    <InputLabel>
                        <b>Campo livre para anotações do médico:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>

                <InputField>
                    <InputLabel>
                        <b>Médico responsável:</b>
                    </InputLabel>
                    <TextArea
                        size={"3"} />
                </InputField>
            </Container>
        </>
    );
}

export default AdditionalNotes;