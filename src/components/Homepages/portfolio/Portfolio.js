import React from "react"
import Footer from "../../footer/Footer"
import "./Portfolio.css"

const Portfolio=()=>{
    return (
        <>
        <div className="portfolio-page">
            <div className="portfolio-top-section">
                <div className="portfolio-details">
                    <div className="portfolio-titles">
                        <h2 className="portfolio-title">HOMEPAGE / <span className="portfolio-header">PORTFOLIO</span></h2>
                        <h4 className="portfolio-head">
                            Designing a <br/>Better<span className="portfolio-light"> World Today</span></h4>
                        <div className="portfolio-btn">
                            <span className="portfolio-text">Our Work</span>
                            <span className="portfolio-arrow" >&#8595;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-images">
                <div className="portfolio-image-details">
                    <div className="portfolio-img1">
                        <img src="images/home-view1.jpg" alt="portfolio1" className="portfolio-home1"/>
                        <h5 className="port-date-d">
                            <span className="port-tech-d">BRANDING</span>
                            <span className="port-year-d"> May 24 2023</span>
                        </h5>
                        <h4>Interior design Studio</h4>
                    </div>
                    <div className="portfolio-img2">
                        <img src="images/home-view2.jpg" alt="portfolio2" className="portfolio-home2"/>
                        <h5 className="port-date-d">
                            <span className="port-tech-d">DESIGN</span>
                            <span className="port-year-d"> May 24 2023</span>
                        </h5>
                        <h4>Home Security Camera</h4>
                    </div>
                    <div className="portfolio-img1">
                        <img src="images/home-view3.jpg" alt="portfolio3" className="portfolio-home3"/>
                        <h5 className="port-date-d">
                            <span className="port-tech-d">DESIGN</span>
                            <span className="port-year-d"> May 24 2023</span>
                        </h5>
                        <h4>Kamia Honest Skincare</h4> 
                    </div>
                    <div className="portfolio-img2">
                        <img src="images/home-view4.jpg" alt="portfolio4" className="portfolio-home4"/>
                        <h5 className="port-date-d">
                            <span className="port-tech-d">PHOTOGRAPHY</span>
                            <span className="port-year-d"> May 24 2023</span>
                        </h5>
                        <h4>Cascade of Lava</h4>
                    </div>
                    <div className="portfolio-img1">
                        <img src="images/home-view5.jpg" alt="portfolio5" className="portfolio-home5"/>
                        <h5 className="port-date-d">
                            <span className="port-tech-d">DESIGN</span>
                            <span className="port-year-d"> May 24 2023</span>
                        </h5>
                        <h4>Air pro by Molikule</h4>
                    </div>
                    <div className="portfolio-img2">
                        <img src="images/home-view6.jpg" alt="portfolio6" className="portfolio-home6"/>
                        <h5 className="port-date-d">
                            <span className="port-tech-d">DESIGN</span>
                            <span className="port-year-d"> May 24 2023</span>
                        </h5>
                        <h4>Tony's Chacolonely</h4>
                    </div>
                </div>
            </div>    
        </div>
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