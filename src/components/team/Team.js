import React from "react"
import "./Team.css"
import {useNavigate} from "react-router-dom"

const Team=()=>{
    const navigate=useNavigate();
    return (
        <>
        <div className="team">
            <div className="team-voice">
                <div  className="team-description">
                    <h2><span>Meet</span><br/>Our Team</h2>
                    <p className="team-p">We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
                    <p className="team-p1">Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
                    <div className="team-btn">
                        <span className="btn-read-more" onClick={()=>navigate("/teammeet")}>READ MORE</span>
                        <div className="team-circle" onClick={()=>navigate("/teammeet")}>
                            <div className="team-arrow">&#8594;</div>
                        </div>
                    </div>
                    <p className="team-result">We <span className="team-bold">delivering</span><br/> exceptional <span className="team-bold">results.</span></p>
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
                        <div className="founder-text"> 
                            The Founder of agenct
                        </div>
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
            </div>
        </div></>
    )
}
export default Team