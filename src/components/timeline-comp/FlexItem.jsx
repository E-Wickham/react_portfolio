import React from 'react';

function FlexItem(props) {
    let flexclass = "lang-item " + props.type

    return(
        <div className={flexclass}>
            <div className="a">
                <img src={props.pic} alt={props.title} />
            </div>
            <div className="b">
                <h4>{props.title}</h4>
            </div>
            <div className="c">
                <h5>{props.company}</h5>
            </div>
            <div className="d">
                <p>{props.time}</p>
            </div>
        </div>

    )
}

export default FlexItem;