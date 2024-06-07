import Language from './Language'
import React from 'react';


export default function Tech(props) {
    return(
        <div>
            <div className="tech-skills">
            <div className="code-grid">
                <Language title="Journalism" />
                <Language title="Audio Production" />
                <Language title="Front End Web Development" />
                <Language title="Database Creation and Management" />
                <Language title="Webscraping" />
                <Language title="ATIPs" />
                <Language title="Interviews" />
                <Language title="Broadcasting" />
                <Language title="Multi-platform Content Creation" />
            </div>
            </div>
            <h4>Programming Languages</h4>
            <div className="code-grid">
                <Language title="HTML" />
                <Language title="CSS" />
                <Language title="JS" />
                <Language title="PHP" />
                <Language title="Python" />
                <Language title="MySQL" />
                <Language title="React" />
                <Language title="Node" />
                <Language title="Git" />
            </div>
        </div>

    )
}