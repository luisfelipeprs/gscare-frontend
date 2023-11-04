import { Container,Content } from './styled';
import Button from '../Button';


interface IProps{
  title: string;
  description?: string;
  textButton?: string;
  color?: 'blue' | 'orange'
  // color: '#0176D3' | '#FFA500'
  typeButton?: "withBorder"|"withBg"
}
function Title({title,description,textButton,typeButton='withBg', color='blue'}: IProps) {
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {textButton && <Button textButton={textButton} color={color} typeButton={typeButton}/>}
      </Content>
    </Container>
  )
}
export default Title