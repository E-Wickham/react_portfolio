import React from 'react';
import Hero from "./Hero"
import Tech from './timeline-comp/Tech';
import PortfolioSection from './PortfolioSection';
import Timeline from './timeline-comp/Timeline';
import SchoolTimeline from './SchoolTimeline';
import Accordion from'./partial/Accordion';
import Blog from './blog/Blog';

export default function Body(){
    return (
        <>

                <main>
                    <Hero />
                    <div class="portfolio-section">
                        <PortfolioSection />
                    </div>
                </main>
                <aside>
                    <div id="switchBG" className="container-fluid">
                        <div className="lang-box">
                            <Accordion title ="Notable Work Experience" comp= {<Timeline />}/>
                            <Accordion title ="Education" comp= {<SchoolTimeline />}/>
                            <Accordion title="Technical Skills" comp = {<Tech/>}/>
                        </div>
                        
                    </div>
                    <Blog />
                </aside>

        </>
    );

}
