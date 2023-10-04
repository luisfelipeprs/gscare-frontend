import React from 'react'
import { ContainerButton } from './styled'
import { Link } from 'react-router-dom';


interface IProps{
  textButton: string;
  typeButton: "withBorder"|"withBg"
  link: string
}
function ButtonLink({textButton,typeButton, link}: IProps) {
  return (
    <ContainerButton typeButton={typeButton}>
      <Link to={link}>
        {textButton}
      </Link>
    </ContainerButton>

    )
}
export default ButtonLink;


