import './App.css'
import Navbar from '../src/components/Navbar'
import Homepage from '../src/components/Homepage'
import Title from './components/Title'
import Card from './components/Card'
function App() {

  return (
    <>
      <Navbar/>
      <Homepage/>
      <Title 
        title={'Encontre inovações para qualquer setor de indústria.'} 
        description={"Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos." }
        textButton={"Explore agora"}
        typeButton='withBorder'
      />
      <Card 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto laborum quaerat odio sapiente consectetur magnam quia doloremque.'
        img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
        link='/'
        title='title'
      />
      
    </>
  )
}
export default App
