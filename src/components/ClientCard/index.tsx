import { A, Container } from "./styled";

type Props = {
  img: string;
  title: string;
  description: string;
  type: string;
  link: string;
};

export default function ClientCard(props: Props) {
  return (
    <Container>
      <div>
        <img src={props.img} alt={"imagem sobre " + props.title} />
        <div>
          <a href={props.link}>
            <h3>{props.title}</h3>
          </a>
          <p>{props.description}</p>
          <p>{props.type}</p>
        </div>
      </div>
      <A href={props.link}>Veja a história</A>
    </Container>
  );
}
