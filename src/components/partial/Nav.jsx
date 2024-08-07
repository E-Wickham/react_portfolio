import React from 'react';
import * as Icon from 'react-feather';

export default function Nav() {
    return(
        <div className="nav-flex-away">
            <a href="/react_portfolio" className="navName">
                <h2>Eric Wickham</h2>
            </a>
            <ul className="contact-buttons blog">
                <li><a href="https://twitter.com/ES_Wickham/" target="_blank" rel="noreferrer"><Icon.Twitter/></a></li>
                <li><a href="https://github.com/e-wickham/"target="_blank" rel="noreferrer"><Icon.GitHub/></a></li>
                <li><a href="https://www.linkedin.com/in/ericwickham1/"target="_blank" rel="noreferrer"><Icon.Linkedin/></a></li>
            </ul>
        
        </div>

    )
}


