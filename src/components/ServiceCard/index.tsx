import { Container, ContainerText, TextSolucion } from "./styled";

type Props = {
    img: string;
    title: string;
    description: string;
    link: string;
}

function ServiceCard(props: Props) {
  return (
    <Container>
        <div>
            <a href={props.link}>
                <img src={props.img} alt={props.title + "imagem"} />
            </a>
        </div>
        <ContainerText>
            <div>
                <a href={props.link}>
                    <h3>{props.title}</h3>
                </a>
                <p>{props.description}</p>
            </div>
        </ContainerText>
        <TextSolucion>
            <a href={props.link}>Veja todas as soluções</a>
        </TextSolucion>
    </Container>
  )
}

export default ServiceCard;