
import React from 'react';


export default function Year(props) {
    return(

    <div className="exp-year-flex">
        <div className="timeline-y">{props.year}</div>
        <div className="timeline-events">
            {props.comp1}
            {props.comp2}
            {props.comp3}
            {props.comp4}       
        </div>
    </div>
    )
}