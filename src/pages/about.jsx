import React, {useEffect, useState} from "react";
import "../App.css";
import {ContactForm} from "../components/contact-form.jsx";

export const About = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="page-body">
            <h2 className="short-bio-about-me">Hi! I'm Cherish Farmer, nice to meet you. :) ♡</h2>
            <div className="top-bar"></div>
            <h3 id="about">♡ About Me</h3>

            <div className="bar"></div>
            <div className="bio">
                <p className="about-me-bio">I am currently a senior student at Vanderbilt University majoring in
                    computer science and psychology
                    with a minor in art. I am interested in how art and computer science can be integrated,
                    such as through video game design.<br/><br/>

                    In my free time, I enjoy drawing, playing flute and saxophone, weight-lifting, and thrifting.
                    I am also a boba addict that helps manage a boba shop in Nashville.</p>
                <img src="/media/me!.jpg" height="400" width="400"/>
            </div>

            {isMobile ?
                <div className={"about-bottom-section"}>

                    <div className={"inventory-stats-section"}>
                        <div className="bar-long"></div>
                        <h3 id="inventory-header">♡ Inventory</h3>
                        <div className="bar-long"></div>

                        <div className="inventory-spacer"></div>
                        <div className="inventory-container">
                            <img className="inventory-icon" src="/inventory-icons/git.png"/>
                            <img className="inventory-icon" src="/inventory-icons/github.png"/>
                            <img className="inventory-icon" src="/inventory-icons/c.png"/>
                            <img className="inventory-icon" src="/inventory-icons/c++.png"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/181_Java_logo_logos-512.webp"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/python_logo_icon_168886.png"/>
                            <img className="inventory-icon" src="/inventory-icons/html-logo.png"/>
                            <img className="inventory-icon" src="/inventory-icons/css-logo.png"/>
                            <img className="inventory-icon" src="/inventory-icons/JavaScript-logo.png"/>
                            <img className="inventory-icon" src="/inventory-icons/easy68k.png"/>
                            <img className="inventory-icon" src="/inventory-icons/jira.png"/>
                            <img className="inventory-icon" src="/inventory-icons/confluence.jpg"/>
                        </div>

                        <div className="inventory-container">
                            <img className="inventory-icon"
                                 src="/inventory-icons/Visual_Studio_Icon_2022.svg.png"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/jetbrains_icon_146158.png"/>
                            <img className="inventory-icon" src="/inventory-icons/microsoftoffice.png"/>
                            <img className="inventory-icon" src="/inventory-icons/p4v.png"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/unreal-engine-icon-md.png"/>
                            <img className="inventory-icon" src="/inventory-icons/unity.png"/>
                        </div>
                        <div className="inventory-spacer"></div>

                        <div className="bar-long"></div>
                        <h3 id="stats-header">♡ Stats</h3>
                        <div className="bar-long"></div>

                        <p className="stats-item">- Communication:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                        </p>

                        <p className="stats-item">- Leadership:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Teamwork:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Time Management:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                        </p>

                        <p className="stats-item">- Conflict Resolution:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Customer Service:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Instruction:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>
                    </div>

                    <div className={"contact-section"}>
                        <div className="bar-long"></div>
                        <h3 id="contact">♡ Contact (cherishdfarmer@gmail.com)</h3>
                        <div className="bar-long"></div>
                        <ContactForm/>
                    </div>

                </div>
                : <div className={"about-bottom-section"}>

                    <div className={"contact-section"}>
                        <div className="bar-long"></div>
                        <h3 id="contact">♡ Contact (cherishdfarmer@gmail.com)</h3>
                        <div className="bar-long"></div>
                        <ContactForm/>
                    </div>

                    <div className={"inventory-stats-section"}>
                        <div className="bar-long"></div>
                        <h3 id="inventory-header">♡ Inventory</h3>
                        <div className="bar-long"></div>

                        <div className="inventory-spacer"></div>
                        <div className="inventory-container">
                            <img className="inventory-icon" src="/inventory-icons/git.png"/>
                            <img className="inventory-icon" src="/inventory-icons/github.png"/>
                            <img className="inventory-icon" src="/inventory-icons/c.png"/>
                            <img className="inventory-icon" src="/inventory-icons/c++.png"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/181_Java_logo_logos-512.webp"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/python_logo_icon_168886.png"/>
                            <img className="inventory-icon" src="/inventory-icons/html-logo.png"/>
                            <img className="inventory-icon" src="/inventory-icons/css-logo.png"/>
                            <img className="inventory-icon" src="/inventory-icons/JavaScript-logo.png"/>
                            <img className="inventory-icon" src="/inventory-icons/easy68k.png"/>
                            <img className="inventory-icon" src="/inventory-icons/jira.png"/>
                            <img className="inventory-icon" src="/inventory-icons/confluence.jpg"/>
                        </div>

                        <div className="inventory-container">
                            <img className="inventory-icon"
                                 src="/inventory-icons/Visual_Studio_Icon_2022.svg.png"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/jetbrains_icon_146158.png"/>
                            <img className="inventory-icon" src="/inventory-icons/microsoftoffice.png"/>
                            <img className="inventory-icon" src="/inventory-icons/p4v.png"/>
                            <img className="inventory-icon"
                                 src="/inventory-icons/unreal-engine-icon-md.png"/>
                            <img className="inventory-icon" src="/inventory-icons/unity.png"/>
                        </div>
                        <div className="inventory-spacer"></div>

                        <div className="bar-long"></div>
                        <h3 id="stats-header">♡ Stats</h3>
                        <div className="bar-long"></div>

                        <p className="stats-item">- Communication:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                        </p>

                        <p className="stats-item">- Leadership:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Teamwork:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Time Management:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                        </p>

                        <p className="stats-item">- Conflict Resolution:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Customer Service:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>

                        <p className="stats-item">- Instruction:
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/fullheart.png"/>
                            <img className="stats-heart" src="/heart-icons/emptyheart.png"/>
                        </p>
                    </div>

                </div>
            }

        </div>
    )
}

