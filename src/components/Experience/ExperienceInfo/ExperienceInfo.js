import React from 'react';

import './ExperienceInfo.css';

const ExperienceInfo = (props) => {
    return (
        <div className="col-md-8 job">
            <img 
                className="logo img-fluid"
                src={props.logo}
                alt="MolenGeek | Coding School training"
            />
            <p className="period">{props.date}</p>
            {/* <h3 className="company">{props.company}</h3> */}
            <h4 className="status">{props.jobStatus}</h4>
            <p className="description">
                {props.description}
            </p>
            <a href={props.websiteUrl} target="_blank">Website</a>
        </div>
    );
}

export default ExperienceInfo;