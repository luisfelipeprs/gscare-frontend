import React from 'react'
import { ContainerButton } from './styled'
import { Link } from 'react-router-dom';


interface IProps{
  textButton: string;
  typebutton: "withBorder"|"withBg"
  link: string
}
function ButtonLink({textButton,typebutton, link}: IProps) {
  return (
    <ContainerButton typebutton={typebutton}>
      <Link to={link}>
        {textButton}
      </Link>
    </ContainerButton>

    )
}
export default ButtonLink;


