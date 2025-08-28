import React from "react"
import "./Studio.css"

const Studio=()=>{
    return (
        <>
        <div className="studio">
            <div className="left-section">
                <div className="left-studio">
                    <div className="about-studio">
                        <h3 className="stu-header">
                            <span className="stu-head1">Discover<br/> Our </span>
                            <span className="stu-head">Studio</span>
                        </h3>
                        <p className="stu-description">At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.</p>
                        <p className="stu-description-1">Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.</p>    
                    </div>
                    <div className="about-image">
                        <div className="stu-image">
                            <img src="images/cont2-img1.jpg" alt="image" className="profile-img"/>
                            <div className="pause-circle">
                                <div className="pause">&#9208;</div>
                            </div>
                        </div>
                        <div className="img-det">
                            <span className="bold">Passionately Creating</span>
                            <span className="light"> Dersign Wonders:</span><br/>
                            <span className="bold">Unleashing </span>
                            <span className="light"> Boundless Creativity</span>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="right-section">
                <img src="images/cont2-img2.jpg" alt="image" className="stu-img"/>
            </div>
        </div>
        </>
    )
}
export default Studio