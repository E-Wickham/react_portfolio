import React from 'react';

export default function PortfolioTabs(props) {
        //let [over, setOver]=React.useState(false);
        //const folderBody = document.getElementById("folderBody");
       /* let webProj = document.getElementById("web-projects");
        let scripts = document.querySelector("#scripts");
        let design = document.getElementById("web-design");
        let miscProj = document.getElementById("misc");
        */


        let tabcolr={
            backgroundColor:'#E3E0AF'
        }
        /*
        if(over) {
            tabcolr.backgroundColor= props.color
            folderBody.style.backgroundColor = props.color
        } else {
            folderBody.style.backgroundColor = '#E3E0AF'
        }
*/
    return(
        <div id={props.id} style={tabcolr}
            /*onMouseEnter={()=>setOver(true)}
            onMouseLeave={()=>setOver(false)}*/>
            {props.name}
        </div>
    )
}

