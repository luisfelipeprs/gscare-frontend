import { Checkbox, Select, TextArea, TextField } from "@radix-ui/themes";
import { InputGroupLabel, InputField, InputLabel, Container } from "./styled";

function HealthInsurance() {
    return (
        <>
        <Container>
            <InputField>
                <InputLabel>
                    <b>Convênio:</b>
                </InputLabel>
                <Select.Root defaultValue="unimed">
                    <Select.Trigger />
                    <Select.Content position="popper">
                        <Select.Item value="unimed">UNIMED</Select.Item>
                        <Select.Item value="healthcare">HEALTH CARE</Select.Item>
                        <Select.Item value="life">LIFE</Select.Item>
                    </Select.Content>
                </Select.Root>
            </InputField>

            <InputField>
                <InputLabel>
                <b>Nº Carterinha:</b>
                </InputLabel>
                <TextField.Input
                    size={"3"}
                    placeholder=" " />
            </InputField>
            <InputField>
                <InputLabel>
                <b>Acomodação:</b>
                </InputLabel>
                <TextField.Input
                    size={"3"}
                    placeholder=" " />
            </InputField>
            <InputField>
                <InputLabel>
                <b>Plano:</b>
                </InputLabel>
                <Select.Root defaultValue="basico">
                    <Select.Trigger />
                    <Select.Content position="popper">
                        <Select.Item value="basico">BASICO</Select.Item>
                        <Select.Item value="padrao">PADRAO</Select.Item>
                        <Select.Item value="premium">PREMIUM</Select.Item>
                    </Select.Content>
                </Select.Root>
            </InputField>
            <InputField>
                <InputLabel>
                <b>Validade:</b>
                </InputLabel>
                <TextField.Input
                    size={"3"}
                    placeholder=" " />
            </InputField>
            <InputField>
                <Checkbox defaultChecked /> Indeterminado
            </InputField>
            </Container>
        </>
    );
}

export default HealthInsurance;