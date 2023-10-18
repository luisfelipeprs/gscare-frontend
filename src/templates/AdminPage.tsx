import { Outlet } from "react-router-dom"
import Sidebar from "../components/SideBar"
import { Container, Content } from "./styled"
import FloatingMenu from "../components/FloatingMenu"


function AdminPage() {

  return (
    <Container>
      <Sidebar/>
      <Content>
        <FloatingMenu/>
        <Outlet />
      </Content>
     
    </Container>
   
  )
}
export default AdminPage
