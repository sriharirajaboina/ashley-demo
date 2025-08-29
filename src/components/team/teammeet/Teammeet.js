import React from "react"
import Footer from "../../footer/Footer"
import "./Teammeet.css"

const Teammeet=()=>{
    return (
        <>
        <div>
            <div>
                <h4>HOMEPAGE / TEAM</h4>
                <h1>Meet
                    <span>Our</span><br/>Creative
                    <span>Team</span>
                </h1>
                <div>
                    <h4>OUR TEAM</h4>
                    <div>
                        <span>&#8595;</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="images/cont4-img1.jpg" alt="img1"/>
                    <h3>Anna Oldman</h3>
                    <h6>ART DIRECTOR</h6>
                </div>
                <div>
                    <img src="images/cont4-img2.jpg" alt="img2"/>
                    <h3>Oscar Freeman</h3>
                    <h6>FRONTEND DEV</h6>
                </div>
                <div>
                    <img src="images/cont4-img3.jpg" alt="img3"/>
                    <h3>Emma Newman</h3>
                    <h6>FOUNDER</h6>
                </div>
                 <div>
                    <img src="images/cont4-img4.jpg" alt="img4"/>
                    <h3>Lisa Trueman</h3>
                    <h6>UI/UX DESIGN</h6>
                </div>
                 <div>
                    <img src="images/customer1.jpg" alt="img5"/>
                    <h3>Tom Oldman</h3>
                    <h6>ART DIRECTOR</h6>
                </div>
                 <div>
                    <img src="images/customer2.jpg" alt="img6"/>
                    <h3>Corey Trueman</h3>
                    <h6>ART DIRECTOR</h6>
                </div>
                 <div>
                    <img src="images/customer3.jpg" alt="img7"/>
                    <h3>Justin Newman</h3>
                    <h6>ART DIRECTOR</h6>
                </div>
                 <div>
                    <img src="images/customer4.jpg" alt="img8"/>
                    <h3>spunki</h3>
                    <h6>PAW GIVER</h6>
                </div>
            </div>
        </div>
        <div >
            <div >
                <p >Looking to make your mark? We'll help you turn<br/> 
                <span >your project into a success today</span></p>
                <h2 >Ready to bring your
                    <span > ideas to </span> life ? we're 
                    <span > here to help </span></h2>
                <div >
                    <div>
                        <span>
                        CONTACT US
                    </span>
                    <div >
                        <div >&#8594;</div>
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