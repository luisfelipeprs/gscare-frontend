import {
    Container,
    Content,
    PatientInfo,
    Info,
    ResumeContainer,
    UserContainer,
    UserInfoContainer
} from './styled';
import { RouterIndicator } from '../../../components/RouterIndicator';
import UserDialog from './steps/Dialog';
import { Avatar } from '@radix-ui/themes';

function MedicalRecord() {
    return (
        <Container>
            <RouterIndicator
                routerText="Prontuário Médico"
                descText="Listagem de Prontuários Médicos"
                children={undefined}
            ></RouterIndicator>
            <ResumeContainer>
                <UserContainer>
                    <Avatar
                        size="9"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                        radius="full"
                    />
                    <UserInfoContainer>
                        <h1>Carlos</h1>
                        <Info>
                            <div>
                                <p>Idade: <b>23 anos</b></p>
                                <p>Faltas: <b>0</b></p>
                            </div>
                            <div>
                                <p>Atendimento: <b>23 anos</b></p>
                                <p>Convênio: <b>UNIMED</b></p>
                            </div>
                        </Info>
                    </UserInfoContainer>
                    <UserDialog />
                </UserContainer>                
            </ResumeContainer>
            <Content>
                <PatientInfo>
                    <p>Este paciente não possui nenhum registro anterior.</p>
                    <p>Para iniciar um atendimento, clique no botão <b>Iniciar Atendimento</b> no menu esquerdo.</p>
                </PatientInfo>
            </Content>
        </Container>
    );
}

export default MedicalRecord;
