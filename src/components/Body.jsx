import React from 'react';
import FlexItem from "./FlexItem"
import PortfolioSection from './PortfolioSection';
import Language from './Language';
import * as Icon from 'react-feather';

export default function Body(){
    return (
        <>
                <header>
                    <div className="nav navbar navbar-expand-sm p-2">
                        <div className="nav-flex">
                            <Icon.User size={60} className="hero-name"/> 
                            <h1>Eric Wickham</h1>
                            <ul className="contact-buttons">
                                <li><a href="https://github.com/e-wickham/"><Icon.GitHub/></a></li>
                                <li><a href="https://www.linkedin.com/in/ericwickham1/"><Icon.Linkedin/></a></li>
                            </ul>
                        </div>
                        
                    </div>
                </header>
                <main>
                    <div id="helloMsg">
                        <div className="hello-flex">
                            <div className="hero-img">
                                <img src={"./assets/eric2022.png"} alt="Eric Wickham" />
                            </div>
                            <div className="helloMsg-grid">
                                <h2>Hello, my name is Eric.</h2>
                                <p>Welcome to my portfolio! I'm a full-stack developer with over half a decade experience in journalism, 
                                communications and content creation. I currently work full time as a Full Stack Programmer.
                                Take a look around, and if you have any questions about my work please feel free to reach out!
                                </p>
                                <div className="button-flex">
                                    <div id="contact" className="contact-btn">
                                        <a href="mailto:eric.wickham1@gmail.com"><Icon.Mail /> Contact Me</a>
                                    </div>   
                                    <div id="resume" className="contact-btn">
                                        <a className="link-no-show" href="assets/ResumeEW.pdf">
                                            <Icon.Download /> Download Resume
                                        </a>    
                                    </div>
                                    <div className="contact-btn">
                                        <a className="link-no-show" href="#">
                                            <Icon.Twitter /> Follow me on Twitter
                                        </a>    
                                    </div>
                                    <div className="contact-btn">
                                        <a className="link-no-show" href="#">
                                            <Icon.GitHub /> Check out my Repos
                                        </a>    
                                    </div>
                              
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    <div class="portfolio-section">
                        <PortfolioSection />
                    </div>
                </main>
                <aside>
                    <div id="switchBG" className="container-fluid">
                        <div className="lang-box">
                            <h2 className="lang-title">Experience</h2>
                            <div className="lang-leg">Legend</div>
                            <div className="lang-flex">
                                <FlexItem 
                                    pic="cpas.jpg"
                                    title="Full Stack Programmer"
                                    company="CPAS"
                                    time="Oct 2021 - Present"
                                    type="code"
                                />
                                <FlexItem 
                                    pic="tbot.jpg"
                                    title="Communications Specialist"
                                    company="Toronto Region Board of Trade"
                                    time="Nov 2020 - Apr 2021"
                                    type="comms"
                                />
                                <FlexItem 
                                    pic="twsu.jpg"
                                    title="Podcast Producer"
                                    company="Tech Won't Save Us"
                                    time="June 2022 - Present"
                                    type="jrnl"
                                />
                                <FlexItem 
                                    pic="pp.png"
                                    title="Podcast Producer"
                                    company="Sources by PressProgress"
                                    time="August 2022 - Present"
                                    type="jrnl"
                                />
                                <FlexItem 
                                    pic="hoser.jpg"
                                    title="Podcast Producer"
                                    company="The Hoser Presents: Short Circuit"
                                    time="Jan 2022 - Present"
                                    type="jrnl"
                                />
                                <FlexItem 
                                    pic="rasc.jpg"
                                    title="Marketing and Communications Coordinator"
                                    company="The Royal Astronomical Society of Canada"
                                    time="Aug 2019 - Oct 2020"
                                    type="comms"
                                />
                                <FlexItem 
                                    pic="habitat.png"
                                    title="Communications Specialist"
                                    company="Habitat for Humanity Halton-Mississauga"
                                    time="Oct 2017 - Aug 2019"
                                    type="comms"
                                />
                                <FlexItem 
                                    pic="moose.png"
                                    title="Radio Reporter"
                                    company="CKLP 103.3 Moose FM"
                                    time="Jan 2017 - Oct 2017"
                                    type="jrnl"
                                />
                                <FlexItem 
                                    pic="cbc.png"
                                    title="Program Assistant"
                                    company="CBC Radio Network Talk"
                                    time="Jun 2016 - Dec 2016"
                                    type="jrnl"
                                />
                                <FlexItem 
                                    pic="ttot.jpg"
                                    title="Digital Media Producer"
                                    company="Fixt Point Media - The Tale of a Town"
                                    time="Jun 2016 - Dec 2016"
                                    type="jrnl"
                                />
                            </div>
                            <h2 className="lang-title">Education</h2>
                            <div className="lang-flex">
                                <div className="lang-item">
                                    <h4>Humber College</h4>
                                    <h5>Postgraduate Web Development Program</h5>
                                    <h5>Diploma</h5>
                                    <p>Jan 2021 - Oct 2021</p>
                                </div>
                                <div className="lang-item">
                                    <h4>Centennial College</h4>
                                    <h5>Audio Engineering</h5>
                                    <h5>Continuing Education</h5>
                                    <p>Aug 2019 - Nov 2019</p>
                                </div>
                                <div className="lang-item">
                                    <h4>Humber College</h4>
                                    <h5>Postgraduate Print and Broadcast Journalism</h5>
                                    <h5>Advanced Diploma</h5>
                                    <p>Sept 2014 - Apr 2016</p>
                                </div>
                                <div className="lang-item">
                                    <h4>Wilfrid Laurier University</h4>
                                    <h5>Bachelor of Arts</h5>
                                    <p>Sept 2009 - Dec 2013</p>
                                </div>

                            </div>
                            <h2 className="lang-title">Programming Languages</h2>
                            <div className="code-grid">
                                <Language title="HTML" />
                                <Language title="CSS" />
                                <Language title="JS" />
                                <Language title="PHP" />
                                <Language title="Python" />
                                <Language title="MySQL" />
                                <Language title="React" />
                            </div>
                        </div>
                    </div>
                </aside>
            {/*<!-- Large modal web-projects -->*/}
            <div id="buzzsproutModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>Buzzsprout Podcast API</h2>
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/buzzsprout2.png" alt="buzzsprout api project screenshot" />
                        </div>
                        <h3>Case study: </h3>
                        <p>The Buzzsprout episode display takes podcast episodes hosted on a podcast hosting service and places them on the show's website. 
                            It takes JSON data from the API of a podcast hosting service and uses it to dynamically generate web pages for each individual podcast episode. 
                            This brings listeners away from the podcast hosting site and into the podcaster’s own domain, allowing them to create spaces for advertisers, 
                            links to their Patreon, and establish/reinforce brand standards for their product. </p>
                        <p> This code is usable by anyone with a buzzsprout API authentication 
                            token, and can be used to dynamically generate webpages for each individual piece of audio published on the podcast host's buzzsprout account. 
                            This is great for Search Engine Optimization as well as building authority for your podcast, as it takes away any negative connotations (specifically about production quality) associated with using a placeholder site created by Buzzsprout.
                        </p>

                        <p></p>

                        <button className="modal-link"><a href="https://www.bigshinytakes.com/episodes.php"><h4>Link</h4></a></button>
                        <button className="modal-link"><a href="https://github.com/E-Wickham/podcastEpDisplay"><h4>Github</h4></a></button>
                    </div>
                </div>
            </div>
            </div>

            <div id="moviehubModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>Shopping Cart Project</h2>
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/moviehub.png" alt="MovieHub project screenshot" />
                        </div>              
                        <p>A shopping cart built in PHP that adds the items selected by the user to a cart. Then on purchase the cart pushes the data into a database for review by accounts receivable.</p>
                        <button className="modal-link"><a href="https://github.com/E-Wickham/simple-cart"><h4>Github</h4></a></button>
                    </div>
                </div>
                </div>
            </div>

            <div id="bromonoModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                        <div className="modalContentWrapper">
                            <h2>Landing Page for Bromono Twitch Website</h2>
                            <div className="modal-thumb">
                                <img className="modal-pic" src="assets/bromono.png" alt="Twitch Streamer 8-bit website" />
                            </div>
                            <p>An 8-bit inspired website that uses open-source video game sprites to project a sense of retro futurism, for use for a twitch streamer/content creator that reviews retro video games. </p>
                            <button className="modal-link"><a href="https://e-wickham.github.io/bromono/"><h4>Link</h4></a></button>
                            <button className="modal-link"><a href="https://github.com/E-Wickham/bromono"><h4>Github</h4></a></button>
                        </div>
                </div>
                </div>
            </div>  
            <div id="breadboxModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>Bread Box Cafe</h2>
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/breadbox.png" alt="Twitch Streamer 8-bit website" />
                        </div>
                        <p>The Breadbox Cafe was a first semester group project for an imaginary restauraunt coded in JavaScript. The project provided several features for a restaurant.</p>
                        <p>I coded the booking form which only allows you to book up to five days in advance. </p>
                        <button className="modal-link"><a href="https://e-wickham.github.io/BreadBoxCafe/restaurant_project_GROUP3_MASTER/"><h4>Link</h4></a></button>
                        <button className="modal-link"><a href="https://github.com/E-Wickham/BreadBoxCafe"><h4>Github</h4></a></button>
                    </div>
                </div>
                </div>
            </div>  
            <div id="webscraperModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>Newspaper Webscraper</h2>
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/webscraper.png" alt="Instagram Stream" />
                        </div>
                        <p>This project started as a python script to scrape data from the National Post and Toronto Sun opinion pages and insert it into a database for easy storage and dissemination. The script is made to be easily expanded to other newspapers. 
                            Taking the project a step further, I have hosted the database remotely and built a site in PHP that can accept keyword/columnist search queries from a user.
                            </p>
                        <button className="modal-link"><a href="https://github.com/E-Wickham/WebScrapersPython"><h4>Github</h4></a></button>
                    </div>
                </div>
                </div>
            </div>  
            <div id="igModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>Instagram Image Maker</h2>
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/imagemaker.png" alt="Instagram Stream" />
                        </div>
                        <p>The Image Generator is a python script that pulls a random image from the Unsplash API based on a search term input by the user, places an overlay on the image, writes a caption, 
                            adds pre-set hashtags and then logs the user into a mobile version of instagram for quick posting. This script is meant to cut down the time spent making simple promotional social media posts </p>
                        <button className="modal-link"><a href="https://bigshinytakes.com/ColumnWatch"><h4>Link</h4></a></button>
                        <button className="modal-link"><a href="https://github.com/E-Wickham/IGimagemaker"><h4>Github</h4></a></button>
                    </div>
                </div>
                </div>
            </div>  

            <div id="passageModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/passage.png" alt="Read Passage article screenshot" />
                        </div>    
                        <h2>It's time for a Postmedia Sunshine List</h2>
                        <p>This was a media criticism piece I wrote in November 2020 about why a Sunshine List 
                            (public disclosure of the top salaries at the company, used by public sector) would be a good thing for Postmedia to adopt. 
                            Postmedia has accepted millions of dollars of bailout money from the federal government, and is the largest newspaper chain in the country. 
                            Despite all this support, they still keep shutting down local newspapers in small towns. </p>
                        <p>Read more:</p>
                        <a href="https://readpassage.com/its-time-for-a-postmedia-sunshine-list/">Read on Passage</a>
                    </div>
                </div>
                </div>
            </div>  

            <div id="macleansModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>3D Printing offers Canadian schools a new dimension</h2>
                        <div className="modal-thumb">
                            <img className="modal-pic" src="assets/macleans.png" alt="MovieHub project screenshot" />
                        </div>    
                        <p>An article I wrote for Maclean's Magazine about the best programs in universities using 3d Printing. 
                            I interviewed Douglas Kondro, a student who managed to 3D print prosthetic talons for a chicken. </p>
                        <a href="https://www.macleans.ca/education/3-d-printing-offers-canadian-schools-a-new-dimension/">Read more in Maclean's</a>
                    </div>
                </div>
                </div>
            </div>  

            <div id="carouselModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modalContentWrapper">
                        <h2>Responsive Carousel in Vanilla Javascript</h2>
                        <div className="modal-thumb">
                            {/*<!--<img className="modal-pic" src="assets/macleans.png" alt="MovieHub project screenshot">--></img>*/}
                        </div>    
                        <p>Code for a responsive carousel created in javascript that can handle an unlimited amount of slides, change the number of slides on display based on the width of the browser
                            and be configured to change any number of slides per click. </p>
                        <a href="https://e-wickham.github.io/responsiveCarousel/">See it for yourself here!</a>
                    </div>
                </div>
                </div>
            </div>  

            <script src="./js/folder.js"></script>

        </>
    );

}
