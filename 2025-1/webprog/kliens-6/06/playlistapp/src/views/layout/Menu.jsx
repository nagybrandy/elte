import React from 'react'
import logo from './../../assets/logo.png'

const Menu = () => {
    return (
        <div className="px-5 navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="item" href="/home">
                                <i className="fas fa-home"></i> Home
                            </a>
                        </li>
                        <li>
                            <a className="item" href="/playlists">
                                <i className="fas fa-headphones"></i> My Playlists
                            </a>
                        </li>
                        <li>
                            <a className="item" href="/tracks">
                                <i className="fas fa-music"></i> Tracks
                            </a>
                        </li>
                        <li>
                            <a className="item" href="/search">
                                <i className="fas fa-search"></i> Search
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-44"><img src={logo} alt="Logo" /></div>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    <li>
                        <a className="item" href="/home">
                            <i className="fas fa-home"></i> Home
                        </a>
                    </li>
                    <li>
                        <a className="item" href="/playlists">
                            <i className="fas fa-headphones"></i> My Playlists
                        </a>
                    </li>
                    <li>
                        <a className="item" href="/tracks">
                            <i className="fas fa-music"></i> Tracks
                        </a>
                    </li>
                    <li>
                        <a className="item" href="/search">
                            <i className="fas fa-search"></i> Search
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="m-1 btn"><i className="fas fa-user"></i> Jake Peralta</div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                        <li><a>Playlists</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu
