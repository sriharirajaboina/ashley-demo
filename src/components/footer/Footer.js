import React from "react"
import "./Footer.css"

const Footer=()=>{
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-left">
                        <h2>Ashley.</h2>
                        <p>Subscribe our newletter:</p>
                        <div className="email">
                            <input type="email" 
                            placeholder="Enter your email"/>
                            <span className="footer-circle">
                                <div className="footer-arrow">&#8594;</div>
                            </span>
                        </div>
                    </div>
                    <div className="footer-center">
                        <ul>
                            <li className="active">Home</li>
                            <li className="active-folio">Portfolio</li>
                            <li className="active-service">Service</li>
                            <li className="active-contact">Contact</li>
                            <li className="active-blog">Blog</li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li>Privacy policy</li>
                            <li>Terms and conditions</li>
                            <li>Cookie Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                     <div className="copyright">
                        <p>Copyright 2023 - Mil. All Rights Reserved.</p>
                    </div>
                    <div className="footer-address">
                        <h1>Canada</h1>
                        <p>71 South Los Carneros Road,
                            <br/>California +51 174 705 812
                        </p>
                    </div>
                    <div className="footer-address">
                        <h1>Gerrmany</h1>
                        <p>Leehove 40,2678 MC De Lier,
                            <br/>Netherlands +31 174 705 811
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer