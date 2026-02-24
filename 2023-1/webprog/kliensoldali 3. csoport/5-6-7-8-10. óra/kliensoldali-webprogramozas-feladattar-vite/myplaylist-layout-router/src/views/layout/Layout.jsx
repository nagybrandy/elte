import { Outlet } from "react-router-dom"
import { Menu } from "../menu/Menu"
/* eslint-disable react/prop-types */
const Layout = () => {
  return (
      <div className="ui container">
        <Menu />
        {<Outlet />}
      </div>
  )
}
/* eslint-enable react/prop-types */
export default Layout