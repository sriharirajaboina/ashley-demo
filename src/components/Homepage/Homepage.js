import React from "react"
import "./Homepage.css"
import { useNavigate } from "react-router-dom"
const Homepage=()=>{
    const navigate=useNavigate()
    
    return(
        <>
        <div className="home">
           <div className="home-one">
            <span className="header" >
                <span className="highlight">Designing</span> a Better<br/><span className="highlight"> World</span> Today</span>
            <p className="description" >Welcome to our world of endless imagination and boundless creativity.
                Together,let's embark on a remarkable journey where dreams become tangible
                realities
            </p>
            <div className="buttons"> 
                <div className= "btn">
                    <div className= "btn-primary"  onClick={()=>navigate("/service")}>
                            <span className="btn-text" >WHAT WE DO </span>
                            <span className="home-arrow">&#8594;</span>
                    </div>  
                    <div className="btn-viewwork" onClick={()=>navigate("/portfolio")}>
                        <span className="btn-secondary-text">VIEW WORKS</span>
                        <span className="view-arrow">&#8594;</span>
                    </div>   
                </div>
                <div className="btn-scroll">
                    {/* <div class="circle-text">
                        <span>SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •</span>
                    </div> */}
                    <div className="inner-circle">
                        <div className="scroll-arrow">&#8595;</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Homepage