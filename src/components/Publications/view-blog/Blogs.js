import React from "react"
import Publications from "../Publication/Publications"
import Footer from "../../footer/Footer"
import "./Blogs.css"

const Blogs=()=>{
    return(
        <>
           <div className="view-blog">
                <h5 className="view-blog-title">HOMEPAGE / BLOG</h5>
                <h1 className="view-blog-header">Exploring
                    <span className="view-blog-header-light"> the world</span><br/> Through Our
                    <span className="view-blog-header-light"> Blog</span>
                </h1>
                <div className="view-blog-pub">
                    <h5>PUBLICATION</h5>
                    <div className="view-blog-circle">
                        <span className="view-blog-circle-arrow">&#8595;</span>
                    </div>
                </div>
            </div>
            <div className="view-blog-space">

            </div>
            <div className="view-blog-publication">
                <Publications />
            </div> 
            <div className="view-blog-categories">
                <div className="view-blog-categories-nav">
                    <div className="view-blog-categories-head">
                        <h2>Categories:</h2>
                    </div>
                    <div className="view-blog-categories-part">
                        <ul>
                            <li>DESIGN</li>
                            <li>ART</li>
                            <li>CODE</li>
                            <li>TECHNOLOGY</li>
                            <li className="view-blog-categories-active">ALL CATEGORIES</li>
                        </ul>
                    </div>
                </div>
                <div className="view-blog-history">
                    <div className="view-blog-content">
                        <div  className="view-blog-images">
                            <img src="images/viewblog1.jpg" alt="viewblog"  className="view-blog-img"/>
                        </div>
                        <div className="view-blog-images-content">
                            <div className="view-blog-images-details">
                                <div className="view-blog-images-details-tech">TECHNOLOGY</div>
                                <div className="view-blog-images-details-date">MAY 24 2023</div>
                            </div>
                            <h4>How to Create a Brand Guide for Your Client</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div className="view-blog-images-readmore">
                                <span className="view-blog-images-readmore-text">READ MORE</span>
                                <div className="view-blog-images-circle">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="view-blog-history">  
                    <div className="view-blog-content">
                        <div className="view-blog-images">
                            <img src="images/viewblog2.jpg" alt="viewblog" className="view-blog-img"/>
                        </div>
                        <div className="view-blog-images-content">
                            <div className="view-blog-images-details">
                                <div className="view-blog-images-details-tech">TECHNOLOGY</div>
                                <div className="view-blog-images-details-date">MAY 24 2023</div>
                            </div>
                            <h4>Color Pysgology in Art and Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div className="view-blog-images-readmore">
                                <span  className="view-blog-images-readmore-text">READ MORE</span>
                                <div className="view-blog-images-circle">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-blog-history">
                    <div className="view-blog-content">
                        <div className="view-blog-images">
                            <img src="images/viewblog3.jpg" alt="viewblog" className="view-blog-img"/>
                        </div>
                        <div className="view-blog-images-content">
                            <div className="view-blog-images-details">
                                <div className="view-blog-images-details-tech">TECHNOLOGY</div>
                                <div className="view-blog-images-details-date">MAY 24 2023</div>
                            </div>
                            <h4>How to Design a Repeating Pattern</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div className="view-blog-images-readmore">
                                <span  className="view-blog-images-readmore-text">READ MORE</span>
                                <div className="view-blog-images-circle">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-blog-history">
                    <div  className="view-blog-content">
                         <div className="view-blog-images">
                            <img src="images/viewblog4.jpg" alt="viewblog" className="view-blog-img"/>
                        </div>
                        <div className="view-blog-images-content">
                            <div className="view-blog-images-details">
                                <div className="view-blog-images-details-tech">TECHNOLOGY</div>
                                <div className="view-blog-images-details-date">MAY 24 2023</div>
                            </div>
                            <h4>How to Never Reach Creative Burnout </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div className="view-blog-images-readmore">
                                <span className="view-blog-images-readmore-text">READ MORE</span>
                                <div className="view-blog-images-circle">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="view-blog-category-page">
                    <div className="view-blog-category">
                        <span className="view-blog-category1">1</span>
                        <span className="view-blog-category2">2</span>
                        <span className="view-blog-category3">3</span>
                        <span className="view-blog-category4">4</span>
                        <span className="view-blog-category5">5</span>
                    </div>
                </div>
            </div>
            <div className="view-blog-center">
                <div className="view-blog-center-top"> 
                    <div className="view-blog-center-head">
                        <span>Looking to make your mark? We'll help you turn <br/>
                            your project into a success story.
                        </span>
                    </div>
                    <div className="view-blog-center-header">
                        <h2> Stay up-to-date 
                            <span className="view-blog-center-light"> with the</span><br/> latest news by 
                            <span className="view-blog-center-light"> subscribing</span><br/> to our 
                            <span className="view-blog-center-light"> newsletter!</span>
                        </h2>
                        <div className="view-blog-center-email">
                            <div className="view-blog-center-input">
                                <input type="email" placeholder="ENTER OUR EMAIL"/>
                                <button className="view-blog-center-btn">&#8594;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Blogs;