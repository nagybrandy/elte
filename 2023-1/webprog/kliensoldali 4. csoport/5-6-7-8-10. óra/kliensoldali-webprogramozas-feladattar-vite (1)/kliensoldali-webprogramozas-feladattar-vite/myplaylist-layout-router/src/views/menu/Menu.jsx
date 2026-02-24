import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Menu() {
  return (
    <nav className="ui secondary menu">
      <img src={logo} alt="" />
      <Link className="item" to="/">
        <i className="home icon"></i> Home
     </Link>
      <Link className="item" to="playlists">
        <i className="headphones icon"></i> My Playlists
     </Link>
      <Link className="item" to="tracks">
        <i className="music icon"></i> Tracks
     </Link>
      <Link className="item" to="search">
        <i className="search icon"></i> Search
     </Link>
      <div className="ui right dropdown item">
        John Doe
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item">
            <i className="user icon"></i> Profile
          </div>
          <div className="item">
            <i className="settings icon"></i> Settings
          </div>
          <div className="item">
            <i className="sign out icon"></i>Log out
          </div>
        </div>
      </div>
    </nav>
  );
}
