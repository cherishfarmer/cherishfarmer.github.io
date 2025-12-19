import React from "react";
import "../App.css";

export const ContactForm = () => {
    return (
        <form action="https://formsubmit.co/cherishdfarmer@gmail.com" method="POST" style={{paddingTop: 20}}>
            <div className="contact-form">
                <label htmlFor="name">Name</label><br/>
                <input type="text" name="name" id="name" placeholder="John Doe" required /><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="email" name="email" id="email" placeholder="email@gmail.com" required /><br/>
                <label htmlFor="message">Message</label><br/>
                <textarea name="message" id="message" placeholder="Type your message here." rows="5" required></textarea><br/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}