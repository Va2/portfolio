import React from 'react';

// import MolenGeekLogo from '../../assets/img/molengeek-logo.png';

const ExperienceInfo = (props) => {
    return (
        <div className="col-md-8">
            <p>{props.date}</p>
            <img src={props.logo} alt="MolenGeek | Coding School training" />
            <h3>{props.company}</h3>
            <h4>{props.jobStatus}</h4>
            <p>
                {props.description}
            </p>
        </div>
    );
}

export default ExperienceInfo;