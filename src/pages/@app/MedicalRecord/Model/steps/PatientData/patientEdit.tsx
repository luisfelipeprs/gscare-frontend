import { RadioGroup, TextArea, TextField } from "@radix-ui/themes";
import { InputField, InputLabel, Container } from "./styled";
import UserProfile from "./UserProfile";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

interface IEmployee {
    id: number;
    nome: string;
    profissao: string;
    email: string;
    endereco: string;
    idade: number;
    celular: string;
    tipoEscala: string;
    valorStatus: string;
    sexo: string; // Corrigido para aceitar apenas 'homem' ou 'mulher'
}

interface Props {
    employee?: IEmployee;
}

export const PatientEdit: React.FC<Props> = ({ employee }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [gender, setGender] = useState('');

    useEffect(() => {
        if (employee) {
            if (employee.sexo === 'homem') {
                setGender('1');
            } else if (employee.sexo === 'mulher') {
                setGender('2');
            } else {
                setGender('3');
            }
        }
    }, [employee]);

    console.log('Employee:', employee);

    if (!employee) {
        return <p>Funcionário indisponível.</p>;
    }

    return (
        <>
            <Container>
                <div>
                    <h3>Geral</h3>
                    <InputField>
                        <InputLabel>
                            <b>Nome completo:</b>
                        </InputLabel>
                        <TextField.Input
                            value={employee.nome}
                            size={"3"} />
                    </InputField>

                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>Celular:</b>
                            </InputLabel>
                            <TextField.Input
                                value={employee.celular}
                                size={"3"} />
                        </InputField>

                        <InputField>
                            <InputLabel>
                                <b>Email:</b>
                            </InputLabel>
                            <TextField.Input
                                value={employee.email}
                                size={"3"} />
                        </InputField>
                    </div>

                    <div style={{ display: "flex" }}>
                        <InputField>
                            <InputLabel>
                                <b>CPF:</b>
                            </InputLabel>
                            <TextField.Input
                                value={'000.000.000-00'}
                                size={"3"} />
                        </InputField>
                        <InputField>
                            <InputLabel>
                                <b>RG:</b>
                            </InputLabel>
                            <TextField.Input
                                value={'000.000.000-00'}
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
                            <RadioGroup.Root size="1" value={gender}>
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

export default PatientEdit;
