import React from "react";
import "../App.css";
import {ContactForm} from "../components/contact-form.jsx";

export const Landing = () => {
    return (
        <div style={ { paddingTop: 100 }}>
            <h2 className="short-bio">Hi! I'm Cherish, nice to meet you. :) ♡</h2>
            <div className="top-bar"></div>
            <div className="bio">
                <div>
                    <p className="main-bio">I am a <strong>programmer</strong> and <strong>designer</strong> interested in the intersection between <strong>psychology</strong> and <strong>computer science</strong>.</p>
                    <p>I hope you enjoy exploring my website!</p>
                    <p>I would love for you to reach out as well!</p>
                </div>
                <img src="/media/portraitme.png" alt="My portrait" style={ { marginBottom: 10 }} />
            </div>

            <div style={{ paddingTop: 5 }}>
                <div className="bar-long"></div>
                <h3 id="contact">♡ Contact (cherishdfarmer@gmail.com)</h3>
                <div className="bar-long"></div>

                <div className="bio" style={{ paddingTop: 20 }}>
                    <ContactForm />

                    <img src="/media/mycat.jpg" style={{ marginTop: 0 }} alt="My Cat"/>
                </div>

            </div>
        </div>
    )
}

