import { Outlet } from "react-router-dom"
import Sidebar from "../components/SideBar"
import { Container, Content } from "./styled"
import FloatingMenu from "../components/FloatingMenu"
import { useState } from "react"




function AdminPage() {
  const [isOpenSideBar,setIsOpenSideBar]=useState(false)

  function handleOpenSideBar(){
    const isOpen = isOpenSideBar
    setIsOpenSideBar(!isOpen)
    console.log("ta aberto:",isOpenSideBar);
    
  }
  return (
    <Container>
      <Sidebar isOpenSideBar={isOpenSideBar}/>
      <Content>
        <FloatingMenu handleIsOpen={handleOpenSideBar}/>
        <Outlet />
      </Content>
     
    </Container>
   
  )
}
export default AdminPage
