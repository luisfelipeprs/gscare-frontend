import { A, Container, SvgDivMed, Title } from "./styled";
import * as React from "react";

type Props = {
  img: React.ReactNode; // Alterando o tipo da prop img para React.ReactNode
  title: string;
  description: string;
  type: string;
  link: string;
};

export default function ClientCard (props: Props) {
  return (
    <Container>
      <div>

        <SvgDivMed>
          {props.img} {/* Renderizando a prop img */}
        </SvgDivMed>
        <div>
          <a href={props.link}>
            <Title>{props.title}</Title>
          </a>
          <p>{props.description}</p>
          <p>{props.type}</p>
        </div>
      </div>
      <A href={props.link}>Veja a história</A>
    </Container>
  );
}
