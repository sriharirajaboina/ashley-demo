import React from "react"
import "./website.css"
import Footer from "../../footer/Footer"
import {useNavigate} from "react-router-dom"

const Website=()=>{
    const navigate=useNavigate();
    return(
        <>
        <div className="website-service">
            <div className="website-top">
                <h4 className="website-top-title">HOMEPAGE / SERVICES / SERVICE</h4>
                <h2>Website 
                    <span className="website-head"> Design</span><br/>and
                    <span className="website-head"> Development</span>
                </h2>
                <div className="website-about-service">
                    <h4 className="website-about-service-text">ABOUT SERVICE</h4>
                    <div className="website-top-circle">
                        <span className="website-top-arrow">&#8595;</span>
                    </div>
                </div>
            </div>
            <div className="website-center">
                <div className="website-center-left">
                    <div className="website-center-title">
                        <h3 className="website-center-header">Your 
                            <span className="website-center-head"> Approach</span><br/>and 
                            <span className="website-center-head"> Work Specifics</span>
                        </h3>
                        <p>At our agency, we have a unique approach to web design and development.
                            We believe in creating websites that not only look great but also perform well in terms of user experience, 
                            functionality, and search engine optimization.
                        </p>
                        <div className="website-view-work">
                            <h3 className="website-view-work-text">VIEW WORKS</h3>
                            <div className="website-center-circle">
                                <span className="website-center-arrow">&#8594;</span>
                            </div>
                        </div>
                    </div>
                    <div className="website-center-right">
                        <div className="website-designs">
                            <div className="website-design">
                                <h2>UX ADUITS</h2>
                                <div className="website-plus">
                                    <span>&#43;</span>
                                </div>
                            </div>
                        </div>
                        <div className="website-designs">
                            <div className="website-design">
                                <h2>DESIGN THINKING</h2>
                                <div className="website-plus">
                                    <span>&#43;</span>
                                </div>
                            </div>
                        </div>
                        <div className="website-designs">
                            <div className="website-design">
                                <h2>WIREFARMING</h2>
                                <div className="website-plus">
                                    <span>&#43;</span>
                                </div>
                            </div>
                        </div>
                        <div className="website-designs">
                            <div className="website-design">
                                <h2>ASETHITICS</h2>
                                <div className="website-plus">
                                    <span>&#43;</span>
                                </div>
                            </div>    
                        </div>
                        <div className="website-designs">
                            <div className="website-design">
                                <h2>METHADOLOGIES</h2>
                                <div className="website-plus">
                                    <span>&#43;</span>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="website-centers-one" onClick={()=>navigate("/contact")}>
            <div className="website-center-one">
                <div className="website-center-one-headers">
                    <h2 className="website-center-one-header">Reasonal <span className="website-center-one-head">prices</span><br/>
                        for innovation 
                        <span className="website-center-one-head"> solutions</span>
                    </h2>
                    <p>At our agency, we have a unique approach to web design and development.
                        <br/>We believe in creating in terms of user experience, functionality.
                    </p>
                </div>
                <div className="website-center-one-price">
                    <h3>$<span className="webiste-price">19</span></h3>
                    <h2>Tailored Designs for <br/>Every Budget</h2>
                    <p>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</p>
                    <div className="website-center-one-circle">
                        <span className="website-center-one-arrow">&#8594;</span>
                    </div>
                </div>
                <div className="website-center-one-price">
                    <h3>$<span className="webiste-price">29</span></h3>
                    <h2>inspiring and Customized<br/>Design Solutions</h2>
                    <p>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</p>
                    <div className="website-center-one-circle">
                        <span className="website-center-one-arrow">&#8594;</span>
                    </div>
                </div>
                <div className="website-center-one-price">
                    <h3>$<span className="webiste-price">49</span></h3>
                    <h2>unleashing the Beauty of Space<br/>with Unique Design</h2>
                    <p>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</p>
                    <div className="website-center-one-circle">
                        <span className="website-center-one-arrow">&#8594;</span>
                    </div>
                </div>
                <div className="website-center-one-price">
                    <h3>$<span className="webiste-price">199</span></h3>
                    <h2>Exquisite Design Concepts<br/>for Discerning Clients</h2>
                    <p>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</p>
                    <div className="website-center-one-circle">
                        <span className="website-center-one-arrow">&#8594;</span>
                    </div>
                </div>
                <div className="website-center-one-solution">
                    <div className="website-center-solution">
                        <h4>INDIVIDUAL SOLUTIONS</h4>
                        <div className="website-center-one-solution-circle">
                            <span>&#8594;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="website-other-service">
            <div className="website-other-service-header">
                <h2>Others services</h2>
                <div className="website-other-service-view">
                    <h3>View all</h3>
                    <div className="website-other-service-view-circle">
                        <span>&#8594;</span>
                    </div>
                </div>
            </div>
            <div className="website-other-service-designs">
                <div className="website-other-service-designs-header">
                    <h2>Branding and Identity Design</h2>
                    <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                    <h4>UX AUDITS</h4>
                    <h4>DESIGN THINKINGS</h4>
                    <h4>METHODOLOGIES</h4>
                    <h4>WIREFRAMING</h4>
                    <div className="website-other-service-designs-readmore">
                        <span className="website-other-service-readmore-text">READ MORE</span>
                        <div className="website-other-service-circle">
                            <span >&#8594;</span>
                        </div>  
                    </div>
                </div>
                <div  className="website-other-service-designs-header">
                    <h2>Advertsing and Marketing </h2>
                    <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                    <h4>UX AUDITS</h4>
                    <h4>DESIGN THINKINGS</h4>
                    <h4>METHODOLOGIES</h4>
                    <h4>WIREFRAMING</h4>
                    <div className="website-other-service-designs-readmore">
                        <span className="website-other-service-readmore-text">READ MORE</span>
                        <div className="website-other-service-circle">
                            <span >&#8594;</span>
                        </div>  
                    </div>
                </div>
                <div  className="website-other-service-designs-header">
                    <h2>Creative Consulting </h2>
                    <p>Our creativity agency is a team of professionals focused on helping your brand grow</p>
                    <h4>UX AUDITS</h4>
                    <h4>DESIGN THINKINGS</h4>
                    <h4>METHODOLOGIES</h4>
                    <h4>WIREFRAMING</h4>
                    <div className="website-other-service-designs-readmore">
                        <span className="website-other-service-readmore-text">READ MORE</span>
                        <div className="website-other-service-circle">
                            <span >&#8594;</span>
                        </div>  
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

export default Website