import React from "react"
import "./Ideas.css"
import { useNavigate } from "react-router-dom"

const Ideas=()=>{
    const navigate=useNavigate()
    return (
        <>
        <div className="bussiness-idea">
            <div className="buss-header">
                <span className="buss-brand">Professional Focused on helping your brand</span><br/>
                <span className="buss-head"> grow and move forward.</span>
            </div>
            <div className="ideas">
                <img src="images/cont3-img1.jpg" alt="images" className="ideas-img"/>
                <h2><span className="buss-bold">Unique</span> ideas</h2>
            </div>
            <div className="bussiness">
                <h2><span className="buss">For Your</span> Business</h2>
                <button className="btn-yellow" onClick={()=>navigate("/service")}>WHAT WE DO</button>
                <div className="ideas-circle" onClick={()=>navigate("/service")}>
                    <div className="ideas-arrow">&#8594;</div>
                </div>
            </div>
            <div className="buss-designs">
                <div className="brand-des">
                    <h2>Branding and Identity Design</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="brand-circle">
                    <div className="brand-arrow">&#8594;</div>
                </div>
                </div>
                <div className="web-design">
                    <h2>Website Design and Development</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="web-circle">
                    <div className="web-arrow">&#8594;</div>
                </div>
                </div>
                <div className="advertising">
                    <h2>Advertising and Marketing Campaigns</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="adv-circle">
                    <div className="adv-arrow">&#8594;</div>
                </div>
                </div>
                <div className="consulting">
                    <h2>Creative Consulting and Development</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                    <div className="con-circle">
                    <div className="con-arrow">&#8594;</div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Ideas;