import React from "react"
import "./Homepage.css"
import Navbar from "../../Navbar/Navbar"
import { useNavigate } from "react-router-dom"

const Homepage=({scrollToTeam})=>{
    const navigate=useNavigate()
    return(
        <>
        <section className="home">
           <div className="home-one">
                  {/* <Navbar/> */}

                    <h1 className="header" >Designing
                    <span className="highlight"> a Better </span> 
                    <br/> 
                    World
                    <span className="highlight"> Today</span> 
                    </h1>
                    <p className="description" >Welcome to our world of endless imagination and boundless creativity.
                        Together,let's embark on a remarkable journey where dreams become tangible
                        realities
                    </p>    
                <div className="buttons"> 
                    <div className= "btn">
                        <div className= "btn-primary" onClick={()=>navigate("/services-home")}>
                            <span className="btn-text" >WHAT WE DO </span>
                            <div className="home-innercircle">
                                <span className="home-arrow">&#8594;</span>
                            </div> 
                        </div>  
                        <div className="btn-viewwork" onClick={()=>navigate("/portfolio")}>
                            <span className="btn-secondary-text">VIEW WORKS</span>
                            <div className="view-circle">
                                <span className="view-arrow">&#8594;</span>
                            </div>
                            
                        </div>   
                    </div>
                    <div className="btn-scroll" onClick={scrollToTeam}>
                        <div className="inner-circle">
                            <div className="scroll-arrow">&#8595;</div>
                        </div>
                    </div> 
                </div> 
                <div className="home-rotate-text">
                        <h4>HOMEPAGE</h4>
                    </div>
            </div>                     
        </section>
        </>
    )
}
export default Homepage