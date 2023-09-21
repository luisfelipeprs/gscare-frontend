import { Container } from "./styled";

type CardProps = {
  img: string;
  title: string;
  description: string;
  link: string;
};

export default function Card({
  img,
  description,
  link,
  title,
}: CardProps) {
  return (
    <Container>
      <a href={link}>
        <img src={img} alt={`Card: ${title}`} />
      </a>
      <div>
        <a href={link}>{description}</a>
        <a href={link}>{title}</a>
      </div>
    </Container>
  );
}
