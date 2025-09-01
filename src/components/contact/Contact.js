import React from "react"
import "./Contact.css"
import Footer from "../footer/Footer"

const Contact=()=>{
    return(
        <>
            <div className="contact-page">
                <h3>HOMEPAGE / CONTACT</h3>
                <div className="contact-header">
                    Get in Touch
                </div>
                <div className="contact-send-msg">
                    <span className="contact-send-msg-text">SEND MESSAGE</span>
                    <div className="contact-page-circle">
                        <span className="contact-circle-arrow">&#8595;</span>
                    </div>
                </div>
            </div>
            <div className="contact-space"></div>
            <div className="contact-map">
                Maps
            </div>
            <div className="contact-person-details">
                <h3>Let's <span className="contact-person-details-light">Talk</span></h3>
                <div className="contact-details">
                    <h4>WHAT"S YOUR NAME</h4>
                    <h4>YOUR EMAIL</h4>
                </div>
                <textarea className="contact-project">
                    TELL US ABOUT OUR PROJECT
                </textarea>
                <div className="contact-security">
                    <p>We promise not to disclose your personal information to third parties</p>
                    <div className="contact-send">
                        <div className="contact-send-text">SEND MESSAGE</div>
                        <div className="contact-send-circle">
                            <span className="contact-send-circle-arrow">&#8594;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Contact