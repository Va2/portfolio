import React from 'react';

const ExperienceNav = (props) => {
    return (
        <button onClick={() => props.nextXp()}>nextExperience</button>
    );
}

export default ExperienceNav;