import { Link } from "react-router-dom"
import type { MenuItem } from "../../../entities"

const MobileMenu = ({currentPath, menu} : {currentPath: string, menu: MenuItem[]}) => {
  return (
    <div className="navbar-start ">
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>

        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menu.map((item : MenuItem, key : number) => 
                <li key={key}>
                    <Link className={`item ${currentPath == item.path ? "bg-primary" : ""}`} to={item.path}>

                        <i className={`fas ${item.icon}`}></i> {item.name}     

                    </Link>
                </li>
            )}
        </ul>
    </div>
    <div className="w-44"><img src="/logo.png" alt="Logo" /></div>
</div>
  )
}

export default MobileMenu