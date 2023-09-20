import { Container } from "./styled";


type CardProps = {
    img: string;
    title: string;
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
            <a href={props.link}>{props.description}</a>
            <a href={props.link}>{props.title}</a>
          </div>
        </Container>
    )
}