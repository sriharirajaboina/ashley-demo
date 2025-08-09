import React from "react"
import "./Homepage.css"

const Homepage=()=>{
    return(
        <>
        <div className="home">
           <div className="home-one">
            <h6 className="header" >
                <span className="highlight">Designing</span> a Better<br/><span className="highlight"> World</span> Today</h6>
            <p className="description" >Welcome to our world of endless imagination and boundless creativity.
                Together,let's embark on a remarkable journey where dreams become tangible
                realities
            </p>
            <div className="buttons"> 
                <div className= "btn">
                    <div className= "btn-primary">
                            <span className="btn-text">WHAT WE DO </span>
                            <span className="home-arrow">&#8594;</span>
                    </div>  
                    <div className="btn-viewwork">
                        <span className="btn-secondary-text">VIEW WORKS</span>
                        <span className="view-arrow">&#8594;</span>
                    </div>   
                </div>
                <div className="btn-scroll">
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