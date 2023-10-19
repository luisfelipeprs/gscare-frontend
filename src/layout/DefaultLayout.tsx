import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <>
      <h1>sidebar</h1>
      <h1>topbar</h1>
      <Outlet />
    </>
  )
}