import { Checkbox, RadioGroup, TextArea, TextField } from "@radix-ui/themes";
import { InputField, InputLabel, Container, AdditionalInfoContainer, Contact, Adress } from "./styled";
import UserProfile from "./UserProfile";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function PatientData () {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <Container>
                <div>
                    <h3>
                        Geral
                    </h3>
                    <InputField>
                        <InputLabel>
                            <b>Nome completo:</b>
                        </InputLabel>
                        <TextField.Input
                            size={"3"} />
                    </InputField>

                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>Celular:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>

                        <InputField>
                            <InputLabel>
                                <b>Email:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>
                    </div>

                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>CPF:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>
                        <InputField>
                            <InputLabel>
                                <b>RG:</b>
                            </InputLabel>
                            <TextField.Input
                                size={"3"} />
                        </InputField>
                    </div>


                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>Data de nascimento:</b>
                            </InputLabel>
                            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                        </InputField>
                        <InputField>
                            <InputLabel>
                                <b>Gênero:</b>
                            </InputLabel>
                            <RadioGroup.Root size="1" defaultValue="1">
                                <InputLabel>
                                    <RadioGroup.Item value="1" /> Masculino
                                </InputLabel>

                                <InputLabel>
                                    <RadioGroup.Item value="2" /> Feminino
                                </InputLabel>

                                <InputLabel>
                                    <RadioGroup.Item value="3" /> Outros
                                </InputLabel>
                            </RadioGroup.Root>
                        </InputField>
                    </div>

                    <InputField>
                        <InputLabel>
                            <b>Observações:</b>
                        </InputLabel>
                        <TextArea size="3" />
                        <p> <span style={{ color: "red" }}>*</span> Esta informação será visível somente para você.</p>
                    </InputField>
                </div>
                <UserProfile />
            </Container>
        </>
    );
}

export default PatientData;
