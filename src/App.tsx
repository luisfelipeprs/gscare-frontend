import './App.css'
// import Home from './pages/Home'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Home /> */}
      <h1>sidebar</h1>
      <h1>topbar</h1>
      <Outlet />
      <h1>footer</h1>
    </>
  )
}
export default App
