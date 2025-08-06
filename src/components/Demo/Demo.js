import React from "react";
import "./Demo.css"
const  Demo=()=>{
    return (
        <>
        <div className="home">
           <div className="home-one">
            <h6 className="header" >
                <span className="highlight">Designing</span> a Better <span className="highlight">World</span> Today</h6>
            <p className="description" >Welcome to our world of endless imagination and boundless creativity.
                Together,let's embark on a remarkable journey where dreams become tangible
                realities
            </p>
            <div className="buttons"> 
                <div className="btn-primary">
                    <button className="whatwedo">WHAT WE DO </button>
                    <span className="viewwork">VIEW WORKS</span>
                </div>
                <div className="btn-scroll">
                    SCROLL BAR
                </div>
            </div>
            </div>
        </div>
        <div className="studio">
        <div className="left-section">
            <div className="about-studio">
                <h3 className="stu-header"><span className="stu-head1">Discover Our </span><span classsName="stu-head">Studio</span></h3>
                <p className="stu-description">At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.</p>
                <p className="stu-description">Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.</p>    
            </div>
            <div className="about-image">
                <div className="stu-image">
                <img src="images/cont2-img1.jpg" alt="image" className="profile-img"/>
                </div>
                <div className="img-det">
                <span className="bold">Passionately Creating</span><span className="light">Dersign Wonders:</span>
                <span className="bold">Unleashing</span><span className="light">Boundless Creativity</span>
                </div>
            </div>
        </div>
        <div className="right-section">
            <img src="images/cont2-img2.jpg" alt="image" className="stu-img"/>
        </div>
        </div>
        <div className="bussiness-idea">
            <span className="buss-brand">Professional Focused on helping your brand___________________________________
                </span><br/>
            <span className="buss-head"> grow and move forward.</span>
            <div className="ideas">
                <img src="images/cont3-img1.jpg" alt="images" className="ideas-img"/>
                <h2><span className="buss-bold">Unique</span> ideas</h2>
            </div>
            <div className="bussiness">
                <h2><span className="buss">For Your</span> Business</h2>
                <button className="btn-yellow">WHAT WE DO</button>
            </div>
            <div className="buss-designs">
                <div className="brand-des">
                    <h2>Branding and Identity Design</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                </div>
                <div className="web-design">
                    <h2>Website Design and Development</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                </div>
                <div className="advertising">
                    <h2>Advertising and Marketing Campaigns</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                </div>
                <div className="consulting">
                    <h2>Creative Consulting and Development</h2>
                    <p>Our creativity agency is ateam of professionals focused on helping your brand grow</p>
                </div>
            </div>
        </div>
        <div className="team">
            <div  className="team-description">
                <h2><span>Meet</span><br/>Our Team</h2>
                <p>We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
                <p>Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
                <button className="read-more">READ MORE</button>
                <p>We <span>delivering</span> exceptional <span>results.</span></p>
            </div>
            <div className="team-img">
                <div className="team-founder">
                    <img src="images/cont4-img1.jpg" alt="img1" className="anna"/>
                    <img src="images/cont4-img2.jpg" alt="img2" className="oscar"/>
                </div>
                <div className="team-founder">
                    <img src="images/cont4-img3.jpg" alt="img3" className="emma"/>
                    <img src="images/cont4-img4.jpg" alt="img4" className="lisa"/>
                </div>
            </div>
        </div>
        <div className="container5">
            <span>Customer reviews are a valuable source <br/>of information for both businesses and consumers.</span>
            <h2>Customer <span>Voices:</span> <br/>Hear What <span >They Say!</span></h2>
            <div>
                <img src="images/cont5-img1.jpg" alt="img1"/>
                <img src="img" alt="img2"/>
                <img src="img" alt="img3"/>
                <img src="img" alt="img4"/>
                <img src="img" alt="img5"/>
                <img src="img" alt="img5"/>
                <img src="img" alt="img7"/>
            </div>
        </div>
        <div className="container6">
            <h3>Popular Publications:</h3>
            <button>VIEW ALL</button>
            <div>
                <div>
                    <img src="images/cont6-img1.jpg" alt="image1"/>
                    <h5>Technology May 24 2023</h5>
                    <h4>How to Become a Graphic Designer in 10 Simple Steps</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                    <button>READ MORE</button>
                </div>
                <div>
                   <img src="images/cont6-img2.jpg"/>
                    <h5>Technology May 24 2023</h5>
                    <h4>16 Bset Graphical Design Online and Offline Courses</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                    <button>READ MORE</button>
                </div>
                 <div>  
                </div>
            </div>
        </div>
        <div className="container7">
            <div>
                <h3>Ashley</h3>
                <p>Subscribe Our newsletter</p>
                <input type="email" placeholder="ENTER OUR EMAIL"/>
            </div>
            <div>
                <h3>Home</h3>
                <h3>Portfolio</h3>
                <h3>Services</h3>
                <h3>Contact</h3>
                <h3>Blog</h3>
            </div>
             <div>
                <h5>Privacy Policy</h5>
                <h5>Terms and conditions</h5>
                <h5>Cookie Policy</h5>
                <h5>Careers</h5>
            </div>
            <h3>Canada</h3>
            <p>71South Los Carneros Road,California +51174 705 812</p>
            <h3>Germany</h3>
            <p>Leehove 40,2678 MC De Lier,NetherLands +31174705811</p>

        </div>
        </>
    )
}
export default Demo;
