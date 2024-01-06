import React from 'react'
import { ContainerButton } from './styled'


interface IProps{
  textButton: string;
  typebutton: "withBorder"|"withBg"
  color: 'blue' | 'orange'
}
function Button({textButton,typebutton,color}: IProps) {
  return (
    <ContainerButton typebutton={typebutton} color={color}>
      {textButton}
    </ContainerButton>

    )
}
export default Button;
