import React from "react"
import "./Publications.css"

const Publications=()=>{
    return (
        <>
        <div className="publications">
            <div className="pub-nav">
                <h3 className="pub-head">Popular Publications:</h3>
                <span className="pub-view">VIEW ALL</span>
            </div>
            <div className="pub-img">
                <div className="pub-about">
                    <img src="images/cont6-img1.jpg" alt="image1" className="pub-design-img"/>
                    <h5 className="pub-date-d"><span className="pub-tech-d">Technology</span><span className="pub-year-d"> May 24 2023</span></h5>
                    <h4 className="pub-header-d">How to Become a Graphic Designer in 10<br/> Simple Steps</h4>
                    <p className="pub-description-d">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupi.....</p>
                    <span className="pub-readmore-d">READ MORE</span>
                </div>
                <div className="pub-courses">
                   <img src="images/cont6-img2.jpg" alt="img" className="pub-course-img"/>
                    <h5 className="pub-date-c"><span className="pub-tech-c">Technology</span><span className="pub-year-c"> May 24 2023</span></h5>
                    <h4 className="pub-header-c">16 Bset Graphical Design Online and Offline<br/> Courses</h4>
                    <p className="pub-description-c">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupi......</p>
                    <span className="pub-readmore-c">READ MORE</span>
                </div>
            </div>
        </div></>
    )
}
export default Publications