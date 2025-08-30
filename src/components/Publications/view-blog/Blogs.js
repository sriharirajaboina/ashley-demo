import React from "react"
import Publications from "../Publication/Publications"
import Footer from "../../footer/Footer"
import "./Blogs.css"

const Blogs=()=>{
    return(
        <>
           <div className="view-blog">
                <h5>HOMEPAGE / BLOG</h5>
                <h1 className="view-blog-header">Exploring
                    <span className="view-blog-header-light">the world</span>Through Our
                    <span className="view-blog-header-light">Blog</span>
                </h1>
                <div className="view-blog-pub">
                    <h6>PUBLICATION</h6>
                    <div className="view-blog-circle">
                        <span>&#8595;</span>
                    </div>
                </div>
            </div>
            <div className="view-blog">
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
                            <li>ALL CATEGORIES</li>
                        </ul>
                    </div>
                </div>
                <div className="view-blog-history">
                    <div className="view-blog-content">
                        <div  className="view-blog-images">
                            <img src="images/viewblog1.jpg" alt="viewblog"  className="view-blog-img"/>
                        </div>
                        <div>
                            <div>
                                <div>TECHNOLOGY</div>
                                <div>MAY 2023</div>
                            </div>
                            <h4>How to Create a Brand Guide for Your Client</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div>
                                <span>READ MORE</span>
                                <div>
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="images/viewblog2.jpg" alt="viewblog"/>
                        </div>
                        <div>
                            <div>
                                <div>TECHNOLOGY</div>
                                <div>MAY 2023</div>
                            </div>
                            <h4>Color Pysgology in Art and Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div>
                                <span>READ MORE</span>
                                <div>
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="images/viewblog3.jpg" alt="viewblog"/>
                        </div>
                        <div>
                            <div>
                                <div>TECHNOLOGY</div>
                                <div>MAY 2023</div>
                            </div>
                            <h4>How to Design a Repeating Pattern</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div>
                                <span>READ MORE</span>
                                <div>
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="images/viewblog4.jpg" alt="viewblog"/>
                        </div>
                        <div>
                            <div>
                                <div>TECHNOLOGY</div>
                                <div>MAY 2023</div>
                            </div>
                            <h4>How to Never Reach Creative Burnout </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
                                Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta.
                                Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                            </p>
                            <div>
                                <span>READ MORE</span>
                                <div>
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span>Looking to make your mark? We'll help you turn <br/>
                           your project into a success story.
                    </span>
                </div>
                <div>
                    <h2> Stay up-to-date 
                        <span>with the</span><br/> latest news by 
                        <span>subscribing</span><br/> to our 
                        <span>newsletter!</span>
                    </h2>
                    <div>
                        <div>
                            <input type="email" placeholder="ENTER OUR EMAIL"/>
                            <button>&#8594;</button>
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