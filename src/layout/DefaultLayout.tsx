import { Outlet } from "react-router-dom";
import { Container, Content } from "./styled";
import FloatingMenu from "../components/FloatingMenu";
import Sidebar from "../components/SideBar";
import { useState } from "react";

export function DefaultLayout() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  function handleOpenSideBar() {
    const isopen = isOpenSideBar;
    setIsOpenSideBar(!isopen);
    console.log("ta aberto:", isOpenSideBar);
  }
  return (
    <Container>
      <FloatingMenu handleIsOpen={handleOpenSideBar} />
      <Content>
        <Sidebar isOpenSideBar={isOpenSideBar} toggleSidebar={() => handleOpenSideBar()} />
        <Outlet />
      </Content>
    </Container>
  )
}

