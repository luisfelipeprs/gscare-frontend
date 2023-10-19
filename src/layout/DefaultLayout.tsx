import { Outlet } from "react-router-dom";
import { Container, Content } from "./styled";
import FloatingMenu from "../components/FloatingMenu";
import Sidebar from "../components/SideBar";

export function DefaultLayout() {
  return (
    <>
    <Container>
      <Sidebar/>
      <Content>
        <FloatingMenu/>
        <Outlet />
      </Content>
    </Container>
    </>
  )
}