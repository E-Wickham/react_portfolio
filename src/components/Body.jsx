import React from 'react';
import FlexItem from "./FlexItem"
import PortfolioSection from './PortfolioSection';
import Language from './Language';
import LegendLb from './LegendLb';
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
                                            <Icon.Download /> Resume
                                        </a>    
                                    </div>
                                    <div className="contact-btn">
                                        <a className="link-no-show" href="https://twitter.com/ES_Wickham">
                                            <Icon.Twitter /> Twitter
                                        </a>    
                                    </div>
                                    <div className="contact-btn">
                                        <a className="link-no-show" href="https://github.com/e-wickham">
                                            <Icon.GitHub /> GitHub
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
                            <div className="lang-leg">
                                <LegendLb color="yellow" title="Communications" />
                                <LegendLb color="green" title="Coding" />
                                <LegendLb color="red" title="Media" /></div>
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
                                <div className="lang-item-school">
                                    <h4>Humber College</h4>
                                    <h5>Postgraduate Web Development Program</h5>
                                    <h5>Diploma</h5>
                                    <p>Jan 2021 - Oct 2021</p>
                                </div>
                                <div className="lang-item-school">
                                    <h4>Centennial College</h4>
                                    <h5>Audio Engineering</h5>
                                    <h5>Continuing Education</h5>
                                    <p>Aug 2019 - Nov 2019</p>
                                </div>
                                <div className="lang-item-school">
                                    <h4>Humber College</h4>
                                    <h5>Postgraduate Print and Broadcast Journalism</h5>
                                    <h5>Advanced Diploma</h5>
                                    <p>Sept 2014 - Apr 2016</p>
                                </div>
                                <div className="lang-item-school">
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

        </>
    );

}
