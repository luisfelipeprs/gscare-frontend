import { Container,Content } from './styled';
import Button from '../Button';


interface IProps{
  title: string;
  description?: string;
  textButton?: string;
  color?: 'blue' | 'orange'
  // color: '#FFA500' | '#FFA500'
  typebutton?: "withBorder"|"withBg"
}
function Title({title,description,textButton,typebutton='withBg', color='blue'}: IProps) {
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {textButton && <Button textButton={textButton} color={color} typebutton={typebutton}/>}
      </Content>
    </Container>
  )
}
export default Title