import React from 'react';

function LegendLb(props) {

    return(
        <div className="leg-item">
            <div className="leg-color" style={{backgroundColor: props.color}}></div>
            <h5> - {props.title}</h5>
        </div>
    )
}

export default LegendLb;