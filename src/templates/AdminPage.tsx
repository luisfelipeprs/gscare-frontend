import { Outlet } from "react-router-dom"
import Sidebar from "../components/SideBar"
import { Container } from "./styled"


function AdminPage() {

  return (
    <Container>
      <Sidebar/>
      <h1>topbar</h1>
      <Outlet />
     
    </Container>
   
  )
}
export default AdminPage
