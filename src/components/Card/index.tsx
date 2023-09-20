import { Container } from "./styled";


type CardProps = {
    img: string;
    title: string;
    descriptionLink: string;
    description: string;
    link: string;
}

export default function Card(props: CardProps){
    return (
        <Container>
          <a href={props.link}>
            <img src={props.img} alt={`Card: ${props.title}`} />  
          </a>
          <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link}>{props.title}</a>
          </div>
        </Container>
    )
}