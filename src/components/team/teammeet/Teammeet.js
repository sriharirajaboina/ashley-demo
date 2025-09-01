import React from "react"
import Footer from "../../footer/Footer"
import "./Teammeet.css"
import {useNavigate} from "react-router-dom"

const Teammeet=()=>{
    const navigate=useNavigate();
    return (
        <>
        <div className="teammeet">
            <div className="team-meets">
                <div className="teammeet-blog">
                    <h4 className="teammeet-blog-title">HOMEPAGE / TEAM</h4>
                    <h1 className="teammeet-header">Meet
                        <span className="teammeet-head"> Our</span><br/>Creative
                        <span className="teammeet-head"> Team</span>
                    </h1>
                    <div className="teammeet-team">
                        <h4 className="teammeet-team-text">OUR TEAM</h4>
                        <div className="teammeet-circle">
                            <span>&#8595;</span>
                        </div>
                    </div>
                </div>
                <div className="teammeet-images">
                    <div className="teammeet-image">
                        <img src="images/cont4-img1.jpg" alt="img1" className="teammeet-img"/>
                        <h3>Anna Oldman</h3>
                        <h6>ART DIRECTOR</h6>
                    </div>
                    <div className="teammeet-image">
                        <img src="images/cont4-img2.jpg" alt="img2" className="teammeet-img"/>
                        <h3>Oscar Freeman</h3>
                        <h6>FRONTEND DEV</h6>
                    </div>
                    <div className="teammeet-image">
                        <img src="images/cont4-img3.jpg" alt="img3" className="teammeet-img"/>
                        <h3>Emma Newman</h3>
                        <h6>FOUNDER</h6>
                    </div>
                    <div className="teammeet-image">
                        <img src="images/cont4-img4.jpg" alt="img4" className="teammeet-img"/>
                        <h3>Lisa Trueman</h3>
                        <h6>UI/UX DESIGN</h6>
                    </div>
                    <div className="teammeet-image">
                        <img src="images/customer1.jpg" alt="img5" className="teammeet-img"/>
                        <h3>Tom Oldman</h3>
                        <h6>ART DIRECTOR</h6>
                    </div>
                    <div  className="teammeet-image">
                        <img src="images/customer2.jpg" alt="img6" className="teammeet-img"/>
                        <h3>Corey Trueman</h3>
                        <h6>ART DIRECTOR</h6>
                    </div>
                    <div  className="teammeet-image">
                        <img src="images/customer3.jpg" alt="img7" className="teammeet-img"/>
                        <h3>Justin Newman</h3>
                        <h6>ART DIRECTOR</h6>
                    </div>
                    <div  className="teammeet-image">
                        <img src="images/cont4-img1.jpg" alt="img8" className="teammeet-img"/>
                        <h3>spunki</h3>
                        <h6>PAW GIVER</h6>
                    </div>
                </div>
            </div>    
        </div>
        <div className="teammet-contacts-page">
            <div className="teammeet-contact">
                <div className="teammeet-contact-header">
                    <p >Looking to make your mark? We'll help you turn<br/> 
                    <span >your project into a success today</span></p>
                    <h2 >Ready to bring your
                        <span className="teammeet-contact-light"> ideas to </span> life ? we're 
                        <span className="teammeet-contact-light"> here to help </span></h2>
                    <div className="teammeet-contacts-us" onClick={()=>navigate("/contact")}>
                        <div className="teammeet-contact-us">
                            <span className="teammeet-contact-text">
                            CONTACT US
                        </span>
                        <div className="teammeet-contact-circle">
                            <span >&#8594;</span>
                        </div>
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

export default Teammeet