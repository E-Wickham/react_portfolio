import React from 'react';
import HlLink from './partial/HL_link'
export default function ProjectItem(props) {
    return(
        <div className="pi-ctn">
            
            <div className="pi-grid">
                <div className="pi-img">
                    <img src={props.img} alt="" />
                </div>
                    <div className="pi-elev">
                        {props.title && (<h4>{props.title}</h4>)}
                        {props.tl && (<h5>{props.tl}</h5>)}
                        <h5>Project Description</h5>
                        <div>
                            {props.desc}
                        </div>
                    </div>

                    <div className="pi-link-ft">
                        <h5>Project Features</h5>
                        <div className="hi-links">
                                {props.ft1_link && (<HlLink link={props.ft1_link} desc={props.ft1_desc} />)}
                                {props.ft2_link && (<HlLink link={props.ft2_link} desc={props.ft2_desc} />)}
                                {props.ft3_link && (<HlLink link={props.ft3_link} desc={props.ft3_desc} />)}
                                {props.ft4_link && (<HlLink link={props.ft4_link} desc={props.ft4_desc} />)}
                        </div>
                    </div>
                    <div className="pi-link-hl">
                        <h5>Project Highlights</h5>
                        <div className="hi-links">
                                {props.hl1_link && (<HlLink link={props.hl1_link} desc={props.hl1_desc} />)}
                                {props.hl2_link && (<HlLink link={props.hl2_link} desc={props.hl2_desc} />)}
                                {props.hl3_link && (<HlLink link={props.hl3_link} desc={props.hl3_desc} />)}
                                {props.hl4_link && (<HlLink link={props.hl4_link} desc={props.hl4_desc} />)}
                        </div>
                    </div>
                    <div className="pi-lang">
                        {props.lang && (<h6>Languages: {props.lang}</h6>)}
                    </div>


            </div>


        </div>
        
    )
}