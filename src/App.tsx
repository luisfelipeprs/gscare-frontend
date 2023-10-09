import './App.css'
// import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar'

function App() {

  return (
    <>
      {/* <Home /> */}
      <Sidebar/>
      <h1>topbar</h1>
      <Outlet />
      <h1>footer</h1>
    </>
  )
}
export default App
