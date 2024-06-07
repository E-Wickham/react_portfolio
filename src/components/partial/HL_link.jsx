import React from 'react';

export default function HL_link(props) {
    return(
        <div>
            <a href={props.link}>
                <div className="hl-link">{props.desc}</div>
            </a>
        </div>
        
    )
}