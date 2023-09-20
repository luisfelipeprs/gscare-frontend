import './App.css'
import Navbar from '../src/components/Navbar'
import Homepage from '../src/components/Homepage'
import Title from './components/Title'
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
    </>
  )
}
export default App
