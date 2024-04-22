import { RouterIndicator } from "../../../components/RouterIndicator";
import PatientTable from "../../../components/TableUI";
import Modal from "./Modal/modal";
import { Container, Content } from "./styled";


export default function OrderAndPrescription () {


    return (
        <Container>
            <RouterIndicator
                //buttonText="Criar"
                children=""
                descText="listagem de prescrição médica"
                routerText="Prescrição"
                onButtonClick={Modal}
            />
            <Content>
            </Content>
        </Container>
    )
}
