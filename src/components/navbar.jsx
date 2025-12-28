import React from "react";
import "../App.css";
import {NavLink} from "react-router";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="title" to="../index">Cherish Farmer ♡</NavLink>
            <div className="navbar-options">
                <NavLink className="nav-option" to="../about-me">About Me</NavLink>
                <NavLink className="nav-option" to="../art-main">Artwork</NavLink>
                <NavLink className="nav-option" to="../projects">Projects</NavLink>
                <a className="nav-option" href="/Cherish_Farmer_Resume.pdf">Resume</a>
                <NavLink className="nav-option" to="../index">Contact</NavLink>
            </div>
        </nav>
    )
}