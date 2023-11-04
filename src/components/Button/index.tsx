import React from 'react'
import { ContainerButton } from './styled'


interface IProps{
  textButton: string;
  typeButton: "withBorder"|"withBg"
  color: 'blue' | 'orange'
}
function Button({textButton,typeButton,color}: IProps) {
  return (
    <ContainerButton typeButton={typeButton} color={color}>
      {textButton}
    </ContainerButton>

    )
}
export default Button;
