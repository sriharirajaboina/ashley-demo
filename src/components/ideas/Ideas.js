import React from "react"
import "./Ideas.css"
import { useNavigate } from "react-router-dom"

const Ideas=()=>{
    const navigate=useNavigate()
    return (
        <>
        <div className="bussiness-idea" >
        <div className="bussiness-idea_1">
            <div className="buss-top">
                <div className="buss-header">
                    <span className="buss-brand">Professional Focused on helping your brand<br/>
                            grow and move forward.</span>
                </div>
                <div className="ideas">
                    <img src="images/cont3-img1.jpg" alt="images" className="ideas-img"/>
                    <h2 className="idea-head">Unique<span className="buss-bold"> ideas</span></h2>
                </div>
                <div className="bussiness">
                    <h2 className="bus-head"> 
                        For Your Bussines
                    </h2>
                    <div className="buss-btn">
                        <button className="btn-yellow" onClick={()=>navigate("/service")}>WHAT WE DO</button>
                        <div className="ideas-circle" onClick={()=>navigate("/service")}>
                            <div className="ideas-arrow">&#8594;</div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="buss-designs">
                <div className="brand-des">
                    <h2>Branding and Identity Design</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="buss-circle">
                    <div className="buss-arrow">&#8594;</div>
                </div>
                </div>
                <div className="web-design">
                    <h2>Website Design and Development</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="buss-circle">
                    <div className="buss-arrow">&#8594;</div>
                </div>
                </div>
                <div className="advertising">
                    <h2>Advertising and Marketing Campaigns</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="buss-circle">
                    <div className="buss-arrow">&#8594;</div>
                </div>
                </div>
                <div className="consulting">
                    <h2>Creative Consulting and Development</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="buss-circle">
                    <div className="buss-arrow">&#8594;</div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Ideas;