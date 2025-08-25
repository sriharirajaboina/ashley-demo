import React from "react"
import Footer from "../footer/Footer"
import "./Service.css"

const Service=()=>{
    return (
        <>
        <div className="service-page">
            <div className="top-section">
                <div className="service-details">
                    <div className="service-titles">
                        <h2 className="service-title">HOMEPAGE / <span className="service-header">SERVICE</span></h2>
                        <h4 className="service-head"><span className="service-bold">This is</span> what <span className="service-bold"> we do</span>  best</h4>
                        <div className="service-btn">
                            <span className="service-text">OUR SERVICES</span>
                            <span className="service-arrow" >&#8595;</span>
                        </div>
                    </div>
                </div>
                <div className="service-designs">
                    <div className="design-animi">
                            space
                    </div>
                    <div className="service-design">
                        <div className="service-brand-design">
                            <div className="service-develop-design">
                                <h2>Branding and Identity Design</h2>
                                <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                                <h4>UX AUDITS</h4>
                                <h4>DESIGN THINKINGS</h4>
                                <h4>METHODOLOGIES</h4>
                                <h4>WIREFRAMING</h4>
                                <div className="service-btn-service">
                                    <span className="design-text">READ MORE</span>
                                    <span className="design-arrow">&#8594;</span>
                                </div>
                            </div>
                            <div className="service-develop-design">
                                <h2>Website Design and Development</h2>
                                <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                                <h4>UX AUDITS</h4>
                                <h4>DESIGN THINKINGS</h4>
                                <h4>METHODOLOGIES</h4>
                                <h4>WIREFRAMING</h4>
                                <div className="service-btn-service">
                                    <span className="design-text">READ MORE</span>
                                    <span className="design-arrow">&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-web-design">
                                <div className="service-market-design">
                                    <div className="service-develop-design">
                                        <h2>Advertsing and Marketing Campaigns</h2>
                                        <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                                        <h4>UX AUDITS</h4>
                                        <h4>DESIGN THINKINGS</h4>
                                        <h4>METHODOLOGIES</h4>
                                        <h4>WIREFRAMING</h4>
                                        <div className="service-btn-service">
                                            <span className="design-text">READ MORE</span>
                                            <span className="design-arrow">&#8594;</span>
                                        </div>
                                    </div>
                                    <div className="service-develop-design">
                                         <h2>Creative Consulting Concept Development</h2>
                                        <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                                        <h4>UX AUDITS</h4>
                                        <h4>DESIGN THINKINGS</h4>
                                        <h4>METHODOLOGIES</h4>
                                        <h4>WIREFRAMING</h4>
                                        <div className="service-btn-service">
                                            <span className="design-text">READ MORE</span>
                                            <span className="design-arrow">&#8594;</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div>
                </div>
            </div >
            <div className="center-section">
                <div className="service-contact">
                    <p className="service-contact-p">Looking to make your mark? We'll help you turn<br/> 
                    <span className="service-contact-p1">your project into a success today</span></p>
                    <p className="service-contact-head"><span className="service-contact-head-bold">Let's make an</span> impact<span className="service-contact-head-bold"> together.Ready</span> when <br/>you are</p>
                    <div className="contact-btn-service">
                        <div className="center-btn-service">
                            CONTACT US
                        </div>
                        <div className="contact-circle">
                            <div className="center-service-arrow">&#8594;</div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="bottom-section">
                    <Footer/>
            </div>
        </div>
        </>
    )
}
export default Service