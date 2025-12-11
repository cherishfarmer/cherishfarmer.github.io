import React from "react";
import "../App.css";

export const Projects = () => {
    return (
        <div style={{paddingTop: 100}}>
            <h2>♡ My Projects</h2>
            <div className="top-bar"></div>
            <p></p>
            <div className="project-buttons">
                <div className="projects-container">

                    <div className="project-container">
                        <a className="project-title" href="https://github.com/cherishfarmer/cherishfarmer.github.io">♡
                            Personal Website (2024-2025)</a>
                        <p className="project-description">Personal website showcasing artwork and projects worked on.
                            Includes information about me, my resume,
                            and a contact form that goes to my email. Made in HTML/CSS.</p>
                        <img className="project-image"
                             src="/project-images/personalwebsite-ss.png"/>
                    </div>

                    <div className="project-container">
                        <a className="project-title" href="https://github.com/cherishfarmer/minesweeper-assembly">♡
                            Minesweeper in Assembly (2025)</a>
                        <p className="project-description project-right">Recreated classic Minesweeper in 68k
                            Assembly.</p>
                        <img className="project-image"
                             src="/project-images/minesweeper-ss.png"/>
                    </div>

                    <div className="project-container">
                        <a className="project-title" href="https://universityconcertband.github.io/">♡ University
                            Concert Band Website (2024-2025)</a>
                        <p className="project-description project-left">Website for Vanderbilt's University Concert Band
                            that provides information about the organization. Made in HTML/CSS/JavaScript.</p>
                        <img className="project-image" src="/project-images/ucb-ss.png"/>
                    </div>

                    <div className="project-container">
                        <a className="project-title" href="https://github.com/VPog">♡ Coffeepocalypse (2024-present)</a>
                        <p className="project-description project-right">Run a cafe by day, and survive scrounging for
                            supplies at night in a post-apocalyptic world. Game being developed
                            by Vanderbilt: Programmers of Gaming at Vanderbilt University. Led art team and contributed
                            assets made in Procreate to game including
                            logo. Helped integrate art and develop codebase in Unity. (Work in progress)</p>
                        <img className="project-image"
                             src="/project-images/coffeepocalypse-ss.png"/>
                    </div>

                    <div className="project-container">
                        <a className="project-title">♡ Love Me, Love Me Not (2024-present)</a>
                        <p className="project-description project-left">Unity game that emulates the game "He Loves Me,
                            He Loves Me Not." Used Aseprite to make pixel assets. (Work in progress)</p>
                        <img className="project-image"
                             src="/project-images/lovemenot-ss.png"/>
                    </div>

                    <div className="project-container">
                    </div>
                </div>

            </div>
        </div>
    )
}

