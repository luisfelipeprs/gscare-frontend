import { Avatar, Button, Checkbox, TextField } from "@radix-ui/themes";
import { UserInfo, Container, Contact, InputField, InputLabel, GeneralInformation, Adress } from "./styled";

function UserProfile () {

    return (
        <>
            <Container>
                {/* <GeneralInformation>
                    <Avatar
                        size="7"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                        radius="full"
                    />
                    <UserInfo >
                        <p>Imagem de perfil</p>
                        <p>Sua imagem deve ter no máximo 250x250px e 1MB.</p>
                        <Button variant="outline" highContrast>
                            Edit profile
                        </Button>
                    </UserInfo>
                </GeneralInformation> */}


                <Adress>
                    <h3>Endereço</h3>
                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>CEP:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>

                        <InputField>
                            <InputLabel>
                                <b>Estado:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>
                        <InputField>
                            <InputLabel>
                                <b>Cidade:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>

                    </div>
                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>Pais:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>
                        <InputField>
                            <InputLabel>
                                <b>Número:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>
                    </div>

                    <InputField>
                        <InputLabel>
                            <b>Endereço Completo:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>
                    <InputField>
                        <InputLabel>
                            <b>Complemento:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>
                </Adress>
            </Container>
        </>
    );
}

export default UserProfile;
