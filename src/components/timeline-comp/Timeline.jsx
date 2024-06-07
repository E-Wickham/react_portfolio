
import React from 'react';
import FlexItem from './FlexItem';
import Year from './Year';
import CBC from './../img/companylogos/cbc.png';
import CPAS from './../img/companylogos/cpas.jpg';
import WMS from './../img/companylogos/wms.png';
import Hab from './../img/companylogos/habitat.png';
import Moose from './../img/companylogos/moose.png';
import Tale from './../img/companylogos/ttot.jpg';


export default function Timeline(props) {
    return(
        <div className="exp-timeline">
            <Year 
                year='2024'
                comp1={  <FlexItem 
                    pic={WMS}
                    title="Director"
                    company="Wickham Media Solutions Inc."
                    time="July 2023 - Present"
                    type="jrnl"
                />  }
             />
            <Year 
                year='2023'
                comp1={  <FlexItem 
                    pic={CPAS}
                    title="Full Stack Programmer"
                    company="CPAS"
                    time="Oct 2021 - July 2023"
                    type="code"
                />  }
             />
            <Year year='2020 and before'
             comp1 = { <FlexItem 
                        pic={Hab}
                        title="Communications Specialist"
                        company="Habitat for Humanity Halton-Mississauga"
                        time="Oct 2017 - Aug 2019"
                        type="comms"
                    />}
             comp2 = { <FlexItem 
                        pic={Moose}
                        title="Radio Reporter"
                        company="CKLP 103.3 Moose FM"
                        time="Jan 2017 - Oct 2017"
                        type="jrnl"
                    />}
             comp3 = { <FlexItem 
                        pic={CBC}
                        title="Program Assistant"
                        company="CBC Radio Network Talk"
                        time="Jun 2016 - Dec 2016"
                        type="jrnl"
                    />}
             comp4 = { <FlexItem 
                        pic={Tale}
                        title="Digital Media Producer"
                        company="Fixt Point Media - The Tale of a Town"
                        time="Jun 2016 - Dec 2016"
                        type="jrnl"
                        />
                    }
            />

        </div>
    )
}