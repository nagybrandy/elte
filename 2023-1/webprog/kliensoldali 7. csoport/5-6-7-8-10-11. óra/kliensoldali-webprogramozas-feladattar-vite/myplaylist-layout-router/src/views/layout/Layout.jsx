/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";

const Layout = (props) => {
  return (
    <div className="ui container">
      <Menu obj={props}/>
      {<Outlet />}
    </div>
  )
}

export default Layout
/* eslint-enable react/prop-types */