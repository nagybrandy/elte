import { Link } from "react-router-dom"
import type { MenuItem } from "../../../entities"

const DesktopMenu = ({currentPath, menu} : {currentPath: string, menu: MenuItem[]}) => {
  return (
    <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
        {menu.map((item : MenuItem, key : number) => 
            <li key={key}>
                <Link className={`item ${currentPath == item.path ? "bg-primary" : ""}`} to={item.path}>
                    <i className={`fas ${item.icon}`}></i> {item.name}  
                </Link>
            </li>
        )}
    </ul>
</div>
  )
}

export default DesktopMenu