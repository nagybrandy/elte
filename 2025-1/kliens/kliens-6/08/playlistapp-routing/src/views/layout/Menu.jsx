import React from 'react'
import { FaHome as HomeIcon } from "react-icons/fa";
import { FaHeadphones as HeadphonesIcon } from "react-icons/fa";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { FaMusic as MusicIcon } from "react-icons/fa";
import { FaUser as UserIcon } from "react-icons/fa";
import logo from "./logo.png"
import { NavLink } from 'react-router';


export const Menu = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink className="item" to="/home">
                                <HomeIcon /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="item" to="/playlists">
                                <HeadphonesIcon /> My Playlists
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="item" to="/tracks">
                                <MusicIcon /> Tracks
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="item" to="/search">
                                <SearchIcon /> Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-64"><img src={logo} alt="" /></div>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    <li>
                        <NavLink className="item" to="/home">
                            <HomeIcon /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item" to="/playlists">
                            <HeadphonesIcon /> My Playlists
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item" to="/tracks">
                            <MusicIcon /> Tracks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item" to="/search">
                            <SearchIcon /> Search
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="m-1 btn"><UserIcon />Jake Peralta</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                        <li><NavLink>Playlists</NavLink></li>
                        <li><NavLink>Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

