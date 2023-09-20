import React from 'react'
import { ContainerButton } from './styled'


interface IProps{
  textButton: string;
  typeButton: "withBorder"|"withBg"
}
function Button({textButton,typeButton}: IProps) {
  return (
    <ContainerButton typeButton={typeButton}>
      {textButton}
    </ContainerButton>

    )
}
export default Button;
