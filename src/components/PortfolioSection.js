import React, { useState } from 'react';
import NewPortfolio from './NewPortfolio';
import ProjectItem from './ProjectItem1';
import { X } from 'react-feather';
import grocerytracker from './img/scr-proj/grocerytracker.png';

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
            <div className="d-flex p-2 justify-content-center" id="folder-wrapper">

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
                    img=""
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
                    desc='The Hoser Grocery Tracker is a Data-driven Reporting Project funded by Northwestern University. It collects prices on all food items available in over 70 different grocery stores. 
                    The data is compiled, cleaned and uploaded to a remote database, 
                    and then displayed in a NodeJS application for users. This project also allowed for user submitted data to be submit to the database, and moderated through a series of data review tools.'
                    hl1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl1_desc="Interview on Metro Morning"
                    hl2_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl2_desc="Interview on This is VANCOLOUR"
                    hl3_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl3_desc="Price Changes Story"
                    ft1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    ft1_desc="Interactive Map"
                    ft2_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    ft2_desc="Data Comparison Tool"
                    ft3_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    ft3_desc="Data Visualizations"
                    />
                   {/*
                    <WorkItem 
                    img="#"
                    title="Unrigged"
                    lang="PHP, Javascript"
                    link="https://unrigged.ca"
                    desc="Unrigged is a collaboration between dozens of independent media organizations to combat the fallout from bill c-18. The base of the website is a Wordpress site, which provides site admins the ability to customize content quickly. Content is delivered from rss feeds and a proprietary webscraper, then categorized and stored by the website, which redirects users to the original published article."
                    />
                    <WorkItem 
                    img="#"
                    title="Kijiji Webscraper - The Hoser: The Myth of Affordable Housing "
                    lang="Python, Javascript"
                    link="https://www.thehoser.ca/posts/the-myth-of-affordable-housing-in-toronto"                    
                    desc="For this article I used a Kijiji webscraper to see how many listed Toronto rental units fit the description of affordable housing (as defined by the CMHC). Out of over 600 listings, only six on the website could technically be considered affordable."
            />*/}
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
                    img=""
                    tl="Aug 2022 - Present"
                    link="https://pressprogress.ca"
                    desc='PressProgress: Sources is a news podcast that highlights interviews by reporters in the PressProgress newsroom. It is a supplementary to the original reporting on PressProgress.ca but it provides further insight into the stories that have already been written.'
                    hl1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl1_desc="Elon Musk Documentary"
                    hl2_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl2_desc="Recommendation in NYT"
                    hl3_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl3_desc="Price Changes Story"
                    ft1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    ft1_desc="Podcast RSS Feed"

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
                    img=""
                    tl="Aug 2022 - Present"
                    link="https://unrigged.ca"
                    desc='PressProgress: Sources is a news podcast that highlights interviews by reporters in the PressProgress newsroom. It is a supplementary to the original reporting on PressProgress.ca but it provides further insight into the stories that have already been written.'
                    hl1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl1_desc="Elon Musk Documentary"
                    hl2_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl2_desc="Recommendation in NYT"
                    hl3_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    hl3_desc="Price Changes Story"
                    ft1_link="https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/16060426-a-month-long-boycott-loblaws-stores-begins-but-difference"
                    ft1_desc="Podcast RSS Feed"

                    />

                </div>
            </div> 
            )}
    </div>
    )
    }