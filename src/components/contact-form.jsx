import React from "react";
import "../App.css";

export const ContactForm = () => {
    return (
        <form action="https://formsubmit.co/cherishdfarmer@gmail.com" method="POST" style={{paddingTop: 20}}>
            <div className="contact-form">
                <label htmlFor="name">Name</label><br/>
                <input type="text" name="name" id="name" defaultValue="John Doe"/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="email" name="email" id="email" defaultValue="email@gmail.com"/><br/>
                <label htmlFor="message">Message</label><br/>
                <input type="text" name="message" id="message" defaultValue="Type your message here."/><br/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}