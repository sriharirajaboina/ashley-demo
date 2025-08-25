import React from "react"
import "./Publications.css"

const Publications=()=>{
    return (
        <>
        <div className="publications">
            <div className="pub-nav">
                <h3 className="pub-head">Popular Publications:</h3>
                <div className="publication-btn">
                    <span className="pub-view">VIEW ALL</span>
                    <div className="publication-circle">
                       <span className="publication-arrow">&#8594;</span>
                    </div>
                </div>
                
            </div>
            <div className="pub-img">
                <div className="pub-about">
                    <img src="images/cont6-img1.jpg" alt="image1" className="pub-design-img"/>
                    <div className="pub-img-details">
                        <h5 className="pub-date-d"><span className="pub-tech-d">Technology</span><span className="pub-year-d"> May 24 2023</span></h5>
                        <h4 className="pub-header-d">How to Become a Graphic Designer in 10 Simple Steps</h4>
                        <p className="pub-description-d">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupi.....</p>
                        <div className="readmore-btn">
                            <span className="pub-readmore-d">READ MORE</span>
                            <div className="readmore-circle">
                            <span className="readmore-arrow">&#8594;</span>
                            </div>
                        </div>  
                    </div>      
                </div>
                <div className="pub-about">
                   <img src="images/cont6-img2.jpg" alt="img" className="pub-design-img"/>
                    <div className="pub-img-details">
                        <h5 className="pub-date-d"><span className="pub-tech-d">Technology</span><span className="pub-year-d"> May 24 2023</span></h5>
                        <h4 className="pub-header-d">16 Bset Graphical Design Online and Offline Courses</h4>
                        <p className="pub-description-d">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupi......</p>
                        <div className="readmore-btn">
                            <span className="pub-readmore-d">READ MORE</span>
                            <div className="readmore-circle">
                            <span className="readmore-arrow">&#8594;</span>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div></>
    )
}
export default Publications