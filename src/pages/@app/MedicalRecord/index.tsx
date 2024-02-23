import {
    Container,
    Content,
    ResumeContainer
} from './styled';
import { RouterIndicator } from '../../../components/RouterIndicator';
import Resume from './steps/Resume';


function MedicalRecord() {
    return (
        <Container>
            <RouterIndicator
                routerText="Prontuário Médico"
                descText="Listagem de Prontuários Médicos"
                children={undefined}
            ></RouterIndicator>
            <ResumeContainer>
                <Resume />
            </ResumeContainer>
            <Content>
            
            </Content>
        </Container>
    );
}

export default MedicalRecord;


/*

                <div >
                    <Button variant="outline">
                        SALVAR E ADICIONAR OUTRO
                    </Button>
                    <Button variant="outline">
                        SALVAR E CONTINUAR EDITANDO
                    </Button>
                    <Button >
                        SALVAR
                    </Button>
                </div>

*/