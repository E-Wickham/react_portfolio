import React from 'react';
import { GitHub } from 'react-feather';
import { ExternalLink } from 'react-feather';

export default function WorkItem(props) {
    return(
        <div className="work-item">
            <div className="wi-link-flex">
                <h4>{props.title}</h4>
                {props.lang && (<h5>Languages: {props.lang}</h5>)}
                {props.img && (<img src={props.img} alt=""/>)}
            </div>
            
            <h5>Project Description</h5>
            <div>
                {props.desc}
            </div>
            <div className="wi-link-flex">
                {props.link && (<a href={props.link} target="_blank" rel="noreferrer"><h5 className="work-item-link"><ExternalLink /> Link</h5></a>)}
                {props.repo && (<a href={props.repo} target="_blank" rel="noreferrer"><h5 className="work-item-link"><GitHub /> Github</h5></a>)}
            </div>

        </div>
    )
}