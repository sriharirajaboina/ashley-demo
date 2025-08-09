import React from "react"
import "./Team.css"

const Team=()=>{
    return (
        <>
        <div className="team">
            <div  className="team-description">
                <h2><span>Meet</span><br/>Our Team</h2>
                <p className="team-p">We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
                <p className="team-p">Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
                <button className="btn-read-more">READ MORE</button>
                <div className="circle">
                    <div className="arrow">&#8594;</div>
                </div>
                <p className="team-result">We <span className="team-bold">delivering</span> exceptional <span className="team-bold">results.</span></p>
            </div>
            <div className="team-img">
                <div className="team-founder">
                    <div className="art-director">
                        <img src="images/cont4-img1.jpg" alt="img1" className="anna"/>
                        <div className="content">
                             <h2>Anna Oldman</h2>
                            <p>ART DIRECTOR</p>
                        </div>
                    </div>
                    <div className="frontend">
                        <img src="images/cont4-img2.jpg" alt="img2" className="oscar"/>
                        <div className="content">
                            <h2>Oscar Freeman</h2>
                            <p>FRONTEND DEV</p>
                        </div>
                    </div>
                    
                </div>
                <div className="team-founder">
                    <div className="founder">
                        <img src="images/cont4-img3.jpg" alt="img3" className="emma"/>
                        <div className="content">
                            <h2>Emma Newman</h2>
                            <p>FOUNDER</p>
                        </div>
                    </div>
                    <div className="Ui-design">
                        <img src="images/cont4-img4.jpg" alt="img4" className="lisa"/>
                        <div className="content">
                            <h2>Lisa Trueman</h2>
                            <p>UI/UX DESIGNER</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div></>
    )
}
export default Team