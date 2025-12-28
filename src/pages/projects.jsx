import React from "react";
import "../App.css";

export const ProjectContainer = ( { href, title, description, src, github }) => {
    return (
        <div className="project-container">
            <a className="project-title" href={href}>♡{title}</a>
            <br/>
            <a className="github-link" href={github}>Github</a>
            <p className="project-description">{description}</p>
            <img className="project-image"
                 src={src} alt={description}/>
        </div>
    )
}

export const Projects = () => {
    return (
        <div className="page-body">
            <h2>♡ My Projects</h2>
            <div className="top-bar"></div>
            <p></p>
            <div className="project-buttons">
                <div className="projects-container">

                    <ProjectContainer
                        href="https://github.com/cherishfarmer/minesweeper-assembly"
                        title=" Minesweeper in Assembly (2025)"
                        description="Recreated classic Minesweeper in 68k
                            Assembly. (Assembly)"
                        src="/project-images/minesweeper-ss.png"
                        github="https://github.com/cherishfarmer/minesweeper-assembly"
                    />

                    <ProjectContainer
                        href="https://cherubyte.itch.io/love-me-love-me-not"
                        title=" Love Me, Love Me Not (2024-2025)"
                        description="Retro twist on a classic game. (Unity, C#, Aseprite)"
                        src="/project-images/lovemenot-ss.png"
                        github="https://github.com/cherishfarmer/love-me-love-me-not"
                    />

                    <ProjectContainer
                        href="https://cherishfarmer.github.io/visual-snow-simulator/"
                        title=" Visual Snow Simulator (2025)"
                        description="An interactive web tool to help people understand what Visual Snow Syndrome (VSS) looks like. (HTML/CSS/JavaScript)"
                        src="/project-images/vss-ss.png"
                        github="https://github.com/cherishfarmer/visual-snow-simulator"
                    />

                    <ProjectContainer
                        href="https://cherishfarmer.github.io/"
                        title=" Personal Website (2024-Present)"
                        description="Personal website showcasing artwork and projects worked on.
                            Includes information about me, my resume,
                            and a contact form that goes to my email. (React, Vite, HTML, CSS, JavaScript)"
                        src="/project-images/personalwebsite-ss.png"
                        github="https://github.com/cherishfarmer/cherishfarmer.github.io"
                    />

                    <ProjectContainer
                        href="https://cherishfarmer.github.io/multitasking-experiment/"
                        title=" Multitasking Experiment (2025)"
                        description="A prototype to run a multitasking experiment. Had over 100 participants. (HTML, CSS, JavaScript, jsPsych)"
                        src="/project-images/multitasking-ss.png"
                        github="https://github.com/cherishfarmer/multitasking-experiment"
                    />

                    <ProjectContainer
                        href="https://github.com/VPog"
                        title=" Coffeepocalypse (2024-present)"
                        description="Run a cafe by day, and survive scrounging for
                            supplies at night in a post-apocalyptic world. Game being developed
                            by Vanderbilt: Programmers of Gaming at Vanderbilt University. Led art team and contributed
                            assets made in Procreate to game including
                            logo. Helped integrate art and develop codebase in Unity. (Work in progress)"
                        src="/project-images/coffeepocalypse-ss.png"
                        github="https://github.com/VPog"
                    />

                    <ProjectContainer
                        href="https://universityconcertband.github.io/"
                        title=" Concert Band Website (2024-2025)"
                        description="Website for Vanderbilt's University Concert Band
                            that provides information about the organization. (HTML/CSS/JavaScript)"
                        src="/project-images/ucb-ss.png"
                        github="https://github.com/UniversityConcertBand/universityconcertband.github.io"
                    />

                    <ProjectContainer
                        href="https://cherishfarmer.github.io/self-bloom/"
                        title=" Self Bloom (2025)"
                        description="An interactive website designed to promote self-love, positive self image, and self-care,
                        featuring rotating quotes with a dreamy background. (HTML/CSS/JavaScript)"
                        src="/project-images/selfbloom-ss.png"
                        github="https://github.com/cherishfarmer/self-bloom"
                    />

                    <div className="project-container">
                    </div>
                </div>

            </div>
        </div>
    )
}

