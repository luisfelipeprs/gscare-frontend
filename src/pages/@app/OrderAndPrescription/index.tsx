import { RouterIndicator } from "../../../components/RouterIndicator";
import Modal from "./Modal/modal";
import { Container } from "./styled";


export default function OrderAndPrescription() {
    
    return (
        <Container>
            <RouterIndicator
                //buttonText="Criar"
                children=""
                descText="listagem de prescrição médica"
                routerText="Prescrição"
                onButtonClick={Modal}
            />
        </Container>
    )
}

