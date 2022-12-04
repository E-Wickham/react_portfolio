import React from 'react';
import { GitHub } from 'react-feather';
import { ExternalLink } from 'react-feather';

export default function WorkItem(props) {
    return(
        <div className="work-item">
            <div className="wi-link-flex">
                <h4>{props.title}</h4>
                {props.lang && (<h5>Languages: {props.lang}</h5>)}
            </div>
            
            <h5>Project Description</h5>
            <div>
                {props.desc}
            </div>
            <div className="wi-link-flex">
                {props.link && (<h5 className="work-item-link"><a href={props.link}><ExternalLink /> Link</a></h5>)}
                {props.repo && (<h5 className="work-item-link"><a href={props.repo}><GitHub /> Github</a></h5>)}
            </div>

        </div>
    )
}