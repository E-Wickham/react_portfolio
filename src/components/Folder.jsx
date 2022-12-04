import React from 'react';
function Folder(props){
    return(
        <div>
            <svg id={props.id} className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="-100px" width="150"
            height="100.02px" viewBox="0 0 561 406.02">
            <defs>
            </defs>
            <path id={props.id} d="M219,12v20.02H45.83V12c0-6.6,5.4-12,12-12H207C213.6,0,219,5.4,219,12z M549,32.02H219v43c0,6.6-5.4,12-12,12
            H57.83c-6.6,0-12-5.4-12-12v-43H12c-6.6,0-12,5.4-12,12v350c0,6.6,5.4,12,12,12h537c6.6,0,12-5.4,12-12v-350
            C561,37.42,555.6,32.02,549,32.02z M45.83,32.02v43c0,6.6,5.4,12,12,12H207c6.6,0,12-5.4,12-12v-43H45.83z"/>
            </svg>
        </div>
    )

}

export default Folder;