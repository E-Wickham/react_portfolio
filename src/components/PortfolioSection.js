import React, { useState } from 'react';
import NewPortfolio from './NewPortfolio';
import ProjectItem from './ProjectItem1';
import { X } from 'react-feather';
import grocerytracker from './img/scr-proj/grocerytracker.png';
import twsu from './img/scr-proj/twsu.jpg';
import unrigged from './img/scr-proj/cropped-unrigged_logo_nautical.png';
import sources from './img/scr-proj/sources.png';

export default function PortfolioSection(){
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
      setModal2(false);
      setModal3(false);
      setModal4(false);
    };
    const [modal2, setModal2] = useState(false);
    const toggleModal2 = () => {
      setModal2(!modal2);
      setModal(false);
      setModal3(false);
      setModal4(false);
    };
    const [modal3, setModal3] = useState(false);
    const toggleModal3 = () => {
      setModal3(!modal3);
      setModal(false);
      setModal2(false);
      setModal4(false);
    };
    const [modal4, setModal4] = useState(false);
    const toggleModal4 = () => {
      setModal4(!modal4);
      setModal(false);
      setModal2(false);
      setModal3(false);
    };

    return (
        <div>
            <h3>Current Projects</h3>
            <div className='portfolio-container'>
                <div className="portfolioflex" id="folder-wrapper">

                    <div onClick={toggleModal2} >
                        <NewPortfolio title="Hoser Grocery Tracker" />
                    </div>
                    <div onClick={toggleModal3} >
                        <NewPortfolio title="Tech Won't Save Us" />
                    </div>
                    <div onClick={toggleModal4} >
                        <NewPortfolio title="Unrigged" />      
                    </div>
                    <div onClick={toggleModal} >
                        <NewPortfolio  title="PressProgress: Sources"/>
                    </div>

                </div>
            </div>
            <div id="work-link-anchor"></div>

            {modal && (
            <div className="workList">

                <div className="wi-link-flex-title">
                    <div></div>
                    <button className="close-modal" onClick={toggleModal}>
                        <X />
                    </button>
                </div>
                <div className="workList-inner">
                <ProjectItem 
                    title="PressProgress: Sources"
                    img={sources}
                    tl="Aug 2022 - Present"
                    link="https://pressprogress.ca"
                    desc='PressProgress: Sources is a news podcast that highlights interviews by reporters in the PressProgress newsroom. It is a supplementary to the original reporting on PressProgress.ca but it provides further insight into the stories that have already been written.'
                    hl1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl1_desc="Interview on Metro Morning"
                    hl2_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl2_desc="Interview on This is VANCOLOUR"
                    hl3_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl3_desc="Price Changes Story"
                    ft1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    ft1_desc="Podcast RSS Feed"

                    />
                </div>
            </div> 
            )}
            {modal2 && (
            <div className="workList">
                <div className="wi-link-flex-title">
                    <div></div>
                    <button className="close-modal" onClick={toggleModal2}>
                        <X />
                    </button>
                </div>
                <div className="workList-inner">
                    <ProjectItem 
                    title="The Hoser Grocery Tracker Project"
                    img={grocerytracker}
                    tl="Aug 2023 - Present"
                    lang="Node JS, Python, MySQL, Javascript"
                    link="https://hosergrocerytracker.ca"
                    desc='The Hoser Grocery Tracker is a Data-driven Reporting Project funded by Northwestern University. It collects prices on all food items available in over 90 different grocery stores. 
                    The data is compiled, cleaned and uploaded to a remote database, 
                    and then displayed in a NodeJS application for users. This project also allowed for user submitted data to be submit to the database, and moderated through a series of data review tools. Several participants have been sending data in, including Raise the Root, a grocery store on the East End'
                    hl1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl1_desc="Interview on Metro Morning"
                    hl2_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl2_desc="Interview on This is VANCOLOUR"
                    hl3_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl3_desc="Price Changes Story"
                    ft1_link="https://hosergrocerytracker.ca/map"
                    ft1_desc="Interactive Map"
                    ft3_link="hosergrocerytracker.ca/trends"
                    ft3_desc="Data Visualizations"
                    ft4_link="https://hosergrocerytracker.ca/price-check"
                    ft4_desc="Price Check Tool"
                    />
                </div>
            </div> 
            )}
            {modal3 && (
            <div className="workList">
                <div className="wi-link-flex-title">
                    <div></div>

                    <button className="close-modal" onClick={toggleModal3}>
                        <X />
                    </button>
                </div>
   
                <div className="workList-inner">
                    <ProjectItem 
                    title="Tech Won't Save Us"
                    img={twsu}
                    tl="Aug 2022 - Present"
                    link="https://techwontsave.us"
                    desc="Tech Won't Save Us is a tech podcast that applies a critical lens to Silicon Valley, the businesses and prominent figures that make up the tech industry, and their impact on the world we live in. 
                    Hosted by Paris Marx, Tech Won't Save Us is a podcast that is listened to all over the world, has been recommended by The New York Times. In October 2023, 
                    Tech Won't Save Us released a critical audio documentary series focused on the life and career of Elon Musk, whcih received international attention."
                    hl1_link="https://techwontsave.us/elon-musk-unmasked"
                    hl1_desc="Elon Musk Unmasked"
                    hl2_link="https://www.nytimes.com/2023/06/03/arts/artificial-intelligence-podcasts.html"
                    hl2_desc="Recommendation in NYT: 6 Podcasts to Make Sense of AI"
                    ft1_link="https://techwontsave.us/episodes"
                    ft1_desc="Podcast Episodes"

                    />
                </div>
            </div> 
            )}
            {modal4 && (
            <div className="workList">
                <div className="wi-link-flex-title">
                    <div></div>
                    <button className="close-modal" onClick={toggleModal4}>
                        <X />
                    </button>
                </div>
                <div className="workList-inner">
                    
                <ProjectItem 
                    title="Unrigged"
                    img={unrigged}
                    tl="Aug 2023 - Present" 
                    link="https://unrigged.ca"
                    desc="Unrigged is an independent news aggregator built in the fallout of Bill C-18, where Facebook banned all Canadian news content from its platforms.
                            The website is meant as a way of helping news organizations lessen their dependency on social media platforms for website traffic. 
                            The original Unrigged website was launched with 20 likeminded independent Canadian news organizationa and constinues to grow with subsequent expansions."
                    hl1_link="https://www.cbc.ca/listen/live-radio/1-103-the-afternoon-edition-sask/clip/16023701-unrigged-briarpatch-uniting-independent-news-outlets"
                    hl1_desc="CBC Saskatoon - Unrigged: Briarpatch uniting with other independent news outlets"
                    hl2_link="https://www.cbc.ca/listen/live-radio/1-25-information-morning-fredericton/clip/16023765-c-18-group"
                    hl2_desc="CBC Fredericton - Information Morning - Unrigged Interview"
                    ft1_link="https://www.unrigged.ca"
                    ft1_desc="Unrigged Home Page"

                    />

                </div>
            </div> 
            )}
    </div>
    )
    }