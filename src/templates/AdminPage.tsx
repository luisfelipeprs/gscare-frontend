import { Outlet } from "react-router-dom"
import Sidebar from "../components/SideBar"
import { Container } from "./styled"
import FloatingMenu from "../components/FloatingMenu"


function AdminPage() {

  return (
    <Container>
      <Sidebar/>
      <FloatingMenu/>
      <Outlet />
     
    </Container>
   
  )
}
export default AdminPage
