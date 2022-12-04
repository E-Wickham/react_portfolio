import React, { useState } from 'react';
import NewPortfolio from './NewPortfolio';
import WorkItem from './WorkItem';
import { X } from 'react-feather';


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
            <div className="d-flex p-2 justify-content-center" id="folder-wrapper">
                <div onClick={toggleModal} >
                    <NewPortfolio  title="Web Development"/>
                </div>
                <div onClick={toggleModal2} >
                    <NewPortfolio title="New Media" />
                </div>
                <div onClick={toggleModal3} >
                    <NewPortfolio title="Podcast Producing" />
                </div>
                <div onClick={toggleModal4} >
                    <NewPortfolio title="Writing" />      
                </div>

            </div>
            {modal && (
            <div className="workList">

                <div className="wi-link-flex-title">
                    <h4>Items</h4>
                    <button className="close-modal" onClick={toggleModal}>
                        <X />
                    </button>
                </div>
                <div className="workList-inner">
                    <WorkItem 
                    img="#"
                    title="Eric Wickham Portfolio Website"
                    lang="React, CSS"
                    repo="#"
                    desc="This website was a project I built to better understand how to use React. I took my original portfolio coded in css and JQuery and improved it with new functionality and a modern front-end framework."
                    />
                    <WorkItem 
                    img="#"
                    title="Big Shiny Takes Buzzsprout API Episode Display"
                    lang="PHP, Javascript"
                    link="https://www.bigshinytakes.com/episodes.php"
                    repo="https://github.com/E-Wickham/podcastEpDisplay"
                    desc="The Buzzsprout episode display takes podcast episodes hosted on a podcast hosting service and places them on the show's website. 
                    It takes JSON data from the API of a podcast hosting service and uses it to dynamically generate web pages for each individual podcast episode. 
                    This brings listeners away from the podcast hosting site and into the podcaster’s own domain, allowing them to create spaces for advertisers, 
                    links to their Patreon, and establish/reinforce brand standards for their product. 
                    This code is usable by anyone with a buzzsprout API authentication 
                    token, and can be used to dynamically generate webpages for each individual piece of audio published on the podcast host's buzzsprout account. 
                    This is great for Search Engine Optimization as well as building authority for your podcast, as it takes away any negative connotations 
                    (specifically about production quality) associated with using a placeholder site created by Buzzsprout."
                    />
                    <WorkItem 
                    img="#"
                    title="Responsive Design Carousel"
                    lang="Javascript"
                    link="https://e-wickham.github.io/responsiveCarousel/"
                    repo="https://github.com/E-Wickham/responsiveCarousel"
                    desc="This basic carousel, designed entirely in Javascript is completely modular, allows for the number of slides on display,
                     and moved per click to be changed in the javascript file, and adapts to any sized screen;"
                    />
                </div>
            </div> 
            )}
            {modal2 && (
            <div className="workList">
                <div className="wi-link-flex-title">
                    <h4>New Media Items</h4>
                    <button className="close-modal" onClick={toggleModal2}>
                        <X />
                    </button>
                </div>
                <div className="workList-inner">
                    <WorkItem 
                    img="#"
                    title="Kijiji Webscraper - The Hoser:The Myth of Affordable Housing "
                    lang="Python, Javascript"
                    link="#"                    
                    desc="For this article I used my Kijiji webscraper to see how many listed Toronto rental units fit the description of affordable housing (as defined by the CMHC). Out of over 600 listings, only six on the website could technically be considered affordable."
                    />
                    <WorkItem 
                    img="#"
                    title="Culture War By The Numbers"
                    lang="Python"
                    link="#"
                    
                    desc="This is a newsletter I write that documents the content (often lacking) in the opinion pages across the country. "
                    />
                </div>
            </div> 
            )}
            {modal3 && (
            <div className="workList">
                <div className="wi-link-flex-title">
                    <h4>Podcast Items</h4>
                    <button className="close-modal" onClick={toggleModal3}>
                        <X />
                    </button>
                </div>
   
                <div className="workList-inner">
                    <WorkItem 
                    img="#"
                    title="Tech Won't Save Us"                    
                    link="#"                    
                    desc="This website was a project I built to better understand how to use React. I took my original portfolio coded in css and JQuery and improved it with new functionality and a modern front-end framework."
                    />
                    <WorkItem 
                    img="#"
                    title="PressProgress Presents: Sources"
                    link="#"
                    desc="This is a newsletter I write that documents the content (often lacking) in the opinion pages across the country. "
                    />
                </div>
            </div> 
            )}
            {modal4 && (
            <div className="workList">
                <div className="wi-link-flex-title">
                    <h4>Writing Items</h4>
                    <button className="close-modal" onClick={toggleModal4}>
                        <X />
                    </button>
                </div>
                <div className="workList-inner">
                    <WorkItem 
                    img="#"
                    title="Macleans: 3D Printing Story"
                    link="https://www.macleans.ca/education/3-d-printing-offers-canadian-schools-a-new-dimension/"
                    desc=" An article I wrote for Maclean's Magazine about the best programs in universities using 3d Printing. 
                    I interviewed Douglas Kondro, a student who managed to 3D print prosthetic talons for a chicken."
                    />
                    <WorkItem 
                    img="#"
                    title="Passage: It's Time for a Postmedia Sunshine List"
                    link="https://readpassage.com/its-time-for-a-postmedia-sunshine-list/"
                    desc="This was a media criticism piece I wrote in November 2020 about why a Sunshine List 
                    (public disclosure of the top salaries at the company, used by public sector) would be a good thing for Postmedia to adopt. 
                    Postmedia has accepted millions of dollars of bailout money from the federal government, and is the largest newspaper chain in the country. 
                    Despite all this support, they still keep shutting down local newspapers in small towns."
                    />

                </div>

            </div> 
            )}
    </div>
    )
    }