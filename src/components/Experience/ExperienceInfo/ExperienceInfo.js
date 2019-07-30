import React from 'react';

import './ExperienceInfo.css';

const ExperienceInfo = (props) => {
    return (
        <div className="col-lg-6 offset-lg-2 mt-3 job">
            <img 
                className="logo img-fluid"
                src={props.logo}
                alt="MolenGeek | Coding School training"
            />
            <p className="period">{props.date}</p>
            <h4 className="status">
                {props.jobStatus}
                <br />@ {props.company}
            </h4>
            <p className="description">
                {props.description}
            </p>
            <div className="text-center my-5">
                <a 
                    href={props.websiteUrl}
                    target="_blank"
                    className="text-uppercase text-center"
                >
                    {props.company} Website
                </a>
            </div>
        </div>
    );
}

export default ExperienceInfo;