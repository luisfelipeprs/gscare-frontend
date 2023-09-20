import React from 'react'
import { Container } from './styled';


interface IProps{
  title: String;
  description: String;
  textButton: String;
  typeButton: "withBorder"|"withBg"
}
function Title({title,description,textButton,typeButton}: IProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <button></button>
    </Container>
  )
}
export default Title