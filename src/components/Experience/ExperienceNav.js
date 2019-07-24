import React, { Fragment } from 'react';

const ExperienceNav = (props) => {
    return (
      <Fragment>
        <button
          disabled={props.currentIndex <= 0}
          onClick={() => props.prevXp()}
        >
          prevExperience
        </button>
        <button
          disabled={props.currentIndex == props.maxIndex-1}
          onClick={() => props.nextXp()}
        >
          nextExperience
        </button>
      </Fragment>
    );
}

export default ExperienceNav;