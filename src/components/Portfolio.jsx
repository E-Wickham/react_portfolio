import React, { Component } from 'react';
import PortfolioTabs from './PortfolioTabs';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { bg : "#E3E0AF" };
        this.changeFold = this.changeFold.bind(this);
    }
    changeFold() {
        //on hover change to tab color, reset other tab colors
        this.setState({ bg : "pink" });
        console.log(this.state.bg);
    }
    changeFold2() {
        //on hover change to tab color, reset other tab colors
        this.setState({ bg : "green" });
        console.log(this.state.bg);
    }
    changeFold3() {
        //on hover change to tab color, reset other tab colors
        this.setState({ bg : "#A2E4B8" });
        console.log(this.state.bg);
    }
    changeFold4() {
        //on hover change to tab color, reset other tab colors
        this.setState({ bg : "red" });
        console.log(this.state.bg);
    }

    /*React.useEffect(() => {
        const folderColour = "#E3E0AF";
        const folderBody = document.getElementById("folderBody");
        let webProj = document.getElementById("web-projects");
        let scripts = document.querySelector("#scripts");
        let design = document.getElementById("web-design");
        let miscProj = document.getElementById("misc");
        let webProjCon = document.getElementById("web-projects-folder-content");
        let scriptsCon = document.getElementById("script-folder-content");
        let designCon = document.getElementById("web-design-folder-content");
        let miscProjCon = document.getElementById("misc-folder-content");
        
        function hoverFolder(tab, folderTab, colr) {
            
            folderBody.style.backgroundColor = colr;
            scripts.style.backgroundColor = folderColour;
            miscProj.style.backgroundColor = folderColour;
            design.style.backgroundColor = folderColour;
            webProj.style.backgroundColor = folderColour;
            tab.style.backgroundColor = colr;

        };

        webProj.addEventListener('mouseenter', hoverFolder(webProj, webProjCon, "pink"));
        scripts.addEventListener('mouseenter', hoverFolder(scripts, scriptsCon, "#A2E4B8"));
        miscProj.addEventListener('mouseenter', hoverFolder(scripts, scriptsCon, "blue"));
        design.addEventListener('mouseenter', hoverFolder(scripts, scriptsCon, "red"));
    });*/
    render() {
    return(
        <div id="folder">
            <div id="folderTabs">
                    <PortfolioTabs 
                        id="web-projects"
                        color="pink"
                        var="webProj"
                        name="Projects"
                        onMouseEnter={this.changeFold()}
                        />
                    <PortfolioTabs 
                        id="web-design"
                        color="green"
                        var="design"
                        name="Web Design"
                        onMouseEnter={this.changeFold2()}
                        />
                    <PortfolioTabs 
                        id="scripts"
                        color="#A2E4B8"
                        var="scripts"
                        name="Scripts"
                        onMouseEnter={this.changeFold3()}
                        />
                    <PortfolioTabs 
                        id="misc"
                        color="red"
                        var="misProj"
                        name="Media"
                        onMouseEnter={this.changeFold4()}
                        />
            </div>
            <div id="folderBody"  style={{backgroundColor: this.state.bg}}>
                <div id="web-projects-folder-content">
                    <div className="portfolio-content-wrapper">
                        <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fas fa-podcast fa-7x"></i>
                            <h5>Podcast Episode Handler</h5>
                            </li>
                            <li className="portfolio-content-desc">Languages used: JS, PHP </li>
                            <li className="portfolio-content-link"><a href="https://www.bigshinytakes.com/episodes.php" target="_blank" rel="noreferrer"><h4>Link</h4></a></li>
                            <li className="portfolio-content-source"><a href="https://github.com/E-Wickham/podcastEpDisplay"target="_blank" rel="noreferrer"><h4>Github</h4></a></li>
                            <li><button id="buzzsprout" className="portfolio-content-about">About</button></li>
                        </ul>
                        <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fal fa-sliders-v-square fa-7x"></i>
                                <h5>Responsive Carousel</h5>
                            </li>
                            <li className="portfolio-content-desc">Languages used: HTML, CSS, Javascript </li>
                            <li className="portfolio-content-link"><a href="https://e-wickham.github.io/responsiveCarousel/" target="_blank" rel="noreferrer"><h4>Link</h4></a></li>
                            <li className="portfolio-content-source"><a href="https://github.com/E-Wickham/responsiveCarousel" target="_blank" rel="noreferrer"><h4>Github</h4></a></li>
                            <li><button id="responsiveCarousel" className="portfolio-content-about">About</button></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div id="web-design-folder-content">
                <div className="portfolio-content-wrapper">                                    
                    <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fas fa-shopping-cart fa-7x"></i>
                                <h5>Shopping Cart</h5>
                            </li>
                            <li className="portfolio-content-desc">Languages used: PHP </li>
                            <li className="portfolio-content-link"><h4>Link</h4></li>
                            <li className="portfolio-content-source"><a href="https://github.com/E-Wickham/simple-cart" target="_blank"><h4>Github</h4></a></li>
                            <li><button id="moviehub" className="portfolio-content-about">About</button></li>
                    </ul>
                    <ul className="portfolio-content">                                    
                        <li className="portfolio-content-image">
                            <i className="iconpic fas fa-bread-slice fa-7x"></i> 
                        <h5>Breadbox Cafe </h5>
                        </li>
                            <li className="portfolio-content-desc">Languages used: HTML, CSS, SASS </li>
                            <li className="portfolio-content-link"><a href="https://e-wickham.github.io/BreadBoxCafe/restaurant_project_GROUP3_MASTER/" target="_blank"><h4>Link</h4></a></li>
                            <li className="portfolio-content-source"><a href="https://github.com/E-Wickham/BreadBoxCafe" target="_blank"><h4>Github</h4></a></li>
                            <li><button id="breadbox" className="portfolio-content-about">About</button></li>
                    </ul>                            
                </div>
            </div>
                <div id="script-folder-content">
                    <div className="portfolio-content-wrapper">

                        <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fas fa-laptop-code fa-7x"></i>
                            <h5>Newspaper Webscraper </h5>
                            </li>
                            <li className="portfolio-content-desc">Languages used: Python, MySQL, PHP </li>
                            <li className="portfolio-content-link"><a href="https://bigshinytakes.com/ColumnWatch" target="_blank"><h4>Link</h4></a></li>
                            <li className="portfolio-content-source"><a href="https://github.com/E-Wickham/WebScrapersPython" target="_blank"><h4>Github</h4></a></li>
                            <li><button id="webscraper" className="portfolio-content-about">About</button></li>

                        </ul>
                        <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fab fa-instagram fa-7x"></i> 
                            <h5>Instagram Image Generator </h5>
                            </li>
                            <li className="portfolio-content-desc">Languages used: Python </li>
                            <li className="portfolio-content-source"><a href="https://github.com/E-Wickham/IGimagemaker" target="_blank"><h4>Github</h4></a></li>
                            <li><button id="imagemaker" className="portfolio-content-about">About</button></li>
                        </ul>
                    </div>
                </div>
                <div id="misc-folder-content">
                    <div className="portfolio-content-wrapper">
                        <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fas fa-sun fa-7x"></i>
                            <h5>It's time for a Postmedia Sunshine List</h5>
                            </li>
                            <li className="portfolio-content-desc">Published in: Passage</li>
                            <li className="portfolio-content-link"><a href="https://readpassage.com/its-time-for-a-postmedia-sunshine-list/" target="_blank"><h4>Link</h4></a></li>
                            <li><button id="passage" className="portfolio-content-about">About</button></li>
                        </ul>
                        <ul className="portfolio-content">
                            <li className="portfolio-content-image">
                                <i className="iconpic fas fa-cube fa-7x"></i>
                                    <h5>3D Printing offers a new dimension</h5>
                            </li>
                            <li className="portfolio-content-desc">Published in Macleans </li>
                            <li className="portfolio-content-link">                                       
                                <a href="https://www.macleans.ca/education/3-d-printing-offers-canadian-schools-a-new-dimension/" target="_blank">
                                    <h4>Link</h4>
                                </a>
                            </li>
                            <li><button id="macleans" className="portfolio-content-about">About</button></li>
                        </ul>
                    </div>
                </div>
            </div>                  
    );
    }
}

export default Portfolio;