import React from "react"
import Footer from "../../footer/Footer"
import "./Portfolio.css"

const Portfolio=()=>{
    return (
        <>
            <div className="portfolio-center-section">
                <div className="portfolio-contact">
                    <p className="portfolio-contact-p">Looking to make your mark? We'll help you turn<br/> 
                    <span className="portfolio-contact-p1">your project into a success today</span></p>
                    <h2 className="portfolio-contact-head">Ready to bring your
                        <span className="portfolio-contact-head-light"> ideas to </span> life ? we're 
                        <span className="portfolio-contact-head-light"> here to help </span></h2>
                    <div className="contact-btn-portfolio">
                        <div className="contact-btns-portfolio">
                            <span className="center-btn-portfolio">
                            CONTACT US
                        </span>
                        <div className="contact-circle-portfolio">
                            <div className="center-portfolio-arrow">&#8594;</div>
                        </div>
                        </div>  
                    </div>
                </div>    
            </div>
            <div className="bottom-section">
                    <Footer/>
            </div>
        </>
    )
}

export default Portfolio;