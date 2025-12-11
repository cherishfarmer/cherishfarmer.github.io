import React from "react";
import "../App.css";
import {NavLink} from "react-router";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="title" to="../index">Cherish Farmer ♡</NavLink>
            <NavLink to="../about-me">About Me</NavLink>
            <NavLink to="../art-main">Artwork</NavLink>
            <NavLink to="../projects">Projects</NavLink>
            <a href="/Cherish_Farmer_Resume.pdf">Resume</a>
            <NavLink to="../index">Contact</NavLink>
        </nav>
    )
}