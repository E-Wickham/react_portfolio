import React, { useState } from 'react';

import * as Icon from 'react-feather';

function Hero() {
    const [abt, setModal] = useState(false);

    const showAbt = () => {
        setModal(!abt);
    };

    return(

        <div className="hero-new">
            <ul className="contact-buttons">
                <li><a href="https://twitter.com/ES_Wickham/" target="_blank" rel="noreferrer"><Icon.Twitter/></a></li>
                <li><a href="https://github.com/e-wickham/"target="_blank" rel="noreferrer"><Icon.GitHub/></a></li>
                <li><a href="https://www.linkedin.com/in/ericwickham1/"target="_blank" rel="noreferrer"><Icon.Linkedin/></a></li>
            </ul>
        <div>
            <div className="hero-cover">
                <div className="eric-details">
                    <div className="details-flex">
                        <h1>Eric Wickham</h1>
                        <h3>Journalist, Podcast Producer &</h3>
                        <h3>Full Stack Developer</h3>
                        <div className="button-flex">
                                    <a href="mailto:eric.wickham1@gmail.com" target="_blank" rel="noreferrer"> 
                                        <div id="contact" className="contact-btn">
                                            <Icon.Mail /> Contact Me
                                        </div>  
                                    </a> 
                                    <a className="link-no-show" href="assets/ResumeEW.pdf" target="_blank" rel="noreferrer">
                                        <div id="resume" className="contact-btn">
                                            <Icon.Download /> Resume
                                        </div>
                                    </a>    
                                    <a className="link-no-show" href onClick={showAbt}>
                                        <div id="about" className="about-btn">
                                            <Icon.User /> About
                                        </div>
                                    </a>    
                                    <a className="link-no-show" href="#blog">
                                        <div id="about" className="about-btn">
                                            <Icon.BookOpen /> Blog
                                        </div>
                                    </a>    
                        </div>
                    </div>
                </div>
                <div className={`about-ctn ${abt ? 'active' : ''}`}>
                    <div className={`about-section1  ${abt ? 'active' : ''}`}>
                        {abt && (                            
                            <p>Hello, My name is Eric Wickham.</p>   
                        )}
                    </div>
                    <div className={`about-section2  ${abt ? 'active' : ''}`}>
                        {abt && (                            
                                <p> I'm a full stack developer, journalist, and news product specialist</p>
                      )}
                    </div>
                    <div className={`about-section3  ${abt ? 'active' : ''}`}>
                        {abt && (                            
                                <p>  with nearly a decade of experience in media. This website  </p>  
                      )}
                    </div>
                    <div className={`about-section4  ${abt ? 'active' : ''}`}>
                        {abt && (                            
                                <p> includes samples of my work in several mediums.</p>  
                      )}
                    </div>
                    <div className={`about-section5  ${abt ? 'active' : ''}`}>
                        {abt && (                            
                                <p> If you would like to work together, please reach out! </p>  
                      )}
                    </div>
                </div>

                </div>
               

            </div>

        </div>


    )
}

export default Hero;