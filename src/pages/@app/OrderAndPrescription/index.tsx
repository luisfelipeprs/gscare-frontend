import { RouterIndicator } from "../../../components/RouterIndicator";
import Modal from "./Modal/modal";
import { Container, Content } from "./styled";


export default function OrderAndPrescription () {


    return (
        <Container>
            <RouterIndicator
                //buttonText="Criar"
                children=""
                descText="Listagem de prescrição médica"
                routerText="Prescrição"
                onButtonClick={Modal}
            />
            <Content>
            </Content>
        </Container>
    )
}
