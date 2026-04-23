import { useLocation } from "react-router-dom"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import type { MenuItem } from "../../../entities"

const Header = () => {
   const location = useLocation()
   const currentPath = location.pathname

   const menu : MenuItem[] = [
        {
            path : "/home",
            name: "Home",
            icon: "fa-home"
        },
        {
            path : "/playlists",
            name: "My Playlists",
            icon: "fa-headphones"
        },
        {
            path : "/tracks",
            name: "Tracks",
            icon: "fa-music"
        },
        {
            path : "/search",
            name: "Search",
            icon: "fa-search"
        }
   ]
  return (
    <nav className="px-5 navbar bg-base-100">
    <MobileMenu menu={menu} currentPath={currentPath} />
    <DesktopMenu menu={menu} currentPath={currentPath} />
    <div className="navbar-end">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="m-1 btn"><i className="fas fa-user"></i> Jake Peralta</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                <li><a>Playlists</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header